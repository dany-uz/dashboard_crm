// Schema para cerrar sesión
export const signoutSchema = {
    headers: {
        type: 'object',
        required: ['authorization'],
        properties: {
            authorization: { type: 'string' }
        }
    }
}; 