import { signinSchema, signupSchema, signoutSchema } from './schemas/index.js';
import { signupController } from '#controllers/auth/signup.controller.js';
import { signinController } from '#controllers/auth/signin.controller.js';

const AccessRoute = [
    {
        method: 'POST',
        url: '/signin',
        schema: signinSchema,
        handler: signinController
    },
    {
        method: 'POST',
        url: '/signup',
        schema: signupSchema,
        handler: signupController
    },
    {
        method: 'POST',
        url: '/signout',
        schema: signoutSchema,
        handler: async (request, reply) => {
            try {
                const token = request.headers.authorization?.split(' ')[1];
                
                // TODO: Implementar lógica de cierre de sesión
                // - Invalidar token
                // - Limpiar sesión
                
                return reply.code(200).send({
                    success: true,
                    message: 'Sesión cerrada exitosamente'
                });
            } catch (error) {
                return reply.code(400).send({
                    success: false,
                    message: 'Error al cerrar sesión',
                    error: error.message
                });
            }
        }
    }
];

export default AccessRoute;