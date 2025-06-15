import fastify from "fastify";

const start = async () => {

    const app = fastify();

    app.get('/', (request, reply) => {
        reply.send({ hello: 'world' })
    })

    try {
        await app.listen({ port: 3000 });
        console.log("Server is running on port 3000");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();