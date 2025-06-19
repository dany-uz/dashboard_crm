import fastify from "fastify";
import jwt from "@fastify/jwt";
import Routes, { RootRoute } from "#routes/index.js";
import { PORT, SIGN_SECRET } from "#config/config.js";
import { connectionSQL } from "#database/connection.js";

const app = fastify();

// Registramos el plugin de JWT
app.register(jwt, {
    secret: SIGN_SECRET
});

// Registramos la ruta raíz
app.route(RootRoute);

// Registramos las rutas
app.register(
    async (fastify) => {
        Routes.forEach((route) => fastify.route(route));
    },
    { prefix: '/v1' } // Fijamos la Versión 1 de las rutas
);

const start = async () => {
    for (let retries = 3; retries > 0; retries--) {
        try {
            // Conectamos a la base de datos
            await connectionSQL.authenticate();

            // Iniciamos el servidor
            await app.listen({ port: PORT });
            console.log(`El servidor está corriendo en el puerto ${PORT}`);

            break;
        } catch (error) {
            // Si no se puede conectar a la base de datos, esperamos 5 segundos y intentamos nuevamente
            console.error(`Error al conectar a la base de datos: ${error.message}`);

            if (retries === 1) {
                console.error('No se pudo conectar a la base de datos');
                process.exit(1);
            }

            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

process.on('SIGINT', async () => {
    await app.close();
    console.log('El servidor se ha cerrado');
    await connectionSQL.close();
    console.log('La conexión a la base de datos se ha cerrado');
    process.exit(0);
});

start();