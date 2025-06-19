import { SIGN_SECRET } from '#config/config.js';

export const generateToken = async (payload, reply) => {
    return await reply.jwtSign(payload);
};

export const verifyToken = async (token, reply) => {
    return await reply.jwtVerify(token);
}; 