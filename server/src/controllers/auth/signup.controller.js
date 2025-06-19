import { signupService } from '#services/auth/signup.service.js';

// Controlador para registro de usuario
export const signupController = async (request, reply) => {
    try {
        const result = await signupService(request.body, reply);
        reply.code(result.status).send(result.body);
    } catch (error) {
        reply.code(400).send({
            success: false,
            message: 'Error al registrar usuario',
            error: error.message
        });
    }
}; 