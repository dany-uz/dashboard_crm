export const signupSchema = {
    body: {
        type: 'object',
        required: ['email', 'password', 'name', 'account_name'],
        properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 6 },
            name: { type: 'string', minLength: 2 },
            account_name: { type: 'string', minLength: 2 }
        },
        additionalProperties: false
    }
}; 