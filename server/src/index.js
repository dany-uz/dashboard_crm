import fastify from "fastify";
import Routes, { RootRoute } from "#routes/index.js";
import { PORT } from "#config/config.js";

const app = fastify();

// Ruta raíz
app.route(RootRoute);

// Marcamos la ruta en su fase V1
app.register(
    async (fastify) => {
        Routes.forEach((route) => fastify.route(route));
    },
    { prefix: '/v1' }
);

const start = async () => {
    for (let retries = 3; retries > 0; retries--) {
        try {
            await app.listen({ port: PORT });
            console.log(`El servidor está corriendo en el puerto ${PORT}`);

            break;
        } catch (error) {
            console.error(error);
            if (retries === 1) {
                process.exit(1);
            }

            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

process.on('SIGINT', async () => {
    await app.close();
    console.log('El servidor se ha cerrado');
    process.exit(0);
});

start();