import { signinService } from '#services/auth/signin.service.js';

export const signinController = async (request, reply) => {
  try {
    const result = await signinService(request.body, reply);
    reply.code(result.status).send(result.body);
  } catch (error) {
    reply.code(500).send({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
}; 