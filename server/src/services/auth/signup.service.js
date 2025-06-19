import { UserModel, AccountModel } from '#database/models/index.js';
import { hashPassword } from '#lib/bcrypt.js';
import { generateToken } from '#lib/jwt.js';

export const signupService = async ({ email, password, name, account_name }, reply) => {
    try {
        // Verificamos que el usuario no exista
        const existingUser = await UserModel.findOne({ where: { email } });
        if (existingUser) {
            return {
                status: 409,
                body: {
                    success: false,
                    message: 'El usuario ya existe con ese email.'
                }
            };
        }

        // Creamos la cuenta primero
        const accountData = {
            name: account_name,
            uri: account_name.toLowerCase().replace(/\s+/g, '-')
        };

        const newAccount = await AccountModel.create(accountData);

        // Hasheamos la contraseña
        const hashedPassword = await hashPassword(password);

        // Creamos el usuario asociado a la cuenta
        const userData = {
            email,
            password: hashedPassword,
            name,
            account_id: newAccount.id
        };

        const newUser = await UserModel.create(userData);

        // Generamos el JWT
        const token = await generateToken({
            id: newUser.id,
            email: newUser.email,
            account_id: newUser.account_id
        }, reply);

        // Responde con el usuario, la cuenta y el token
        return {
            status: 201,
            body: {
                success: true,
                message: 'Usuario registrado exitosamente',
                data: {
                    token,
                    user: {
                        id: newUser.id,
                        email: newUser.email,
                        name: newUser.name,
                        role: newUser.role
                    },
                    account: {
                        id: newAccount.id,
                        name: newAccount.name,
                        uri: newAccount.uri
                    }
                }
            }
        };
    } catch (error) {
        console.error('Error en signupService:', error);
        throw error;
    }
}; 