import { UserModel } from '#database/models/index.js';
import { verifyPassword } from '#lib/bcrypt.js';
import { generateToken } from '#lib/jwt.js';

export const signinService = async ({ email, password }, reply) => {
    // Buscamos al usuario por email
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
        return {
            status: 401,
            body: { success: false, message: 'Credenciales inválidas' }
        };
    }

    // Verificamos la contraseña
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
        return {
            status: 401,
            body: { success: false, message: 'Credenciales inválidas' }
        };
    }

    // Generamos el JWT
    const token = await generateToken({
        id: user.id,
        email: user.email,
        account_id: user.account_id
    }, reply);

    // Responde con el usuario y el token
    return {
        status: 200,
        body: {
            success: true,
            message: 'Inicio de sesión exitoso',
            data: {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            }
        }
    };
}; 