const RootRoute = {
    method: 'GET',
    url: '/',
    handler: (request, reply) => {
        reply
            .code(404)
            .type("text/html; charset=utf-8")
            .send("<h1>404 - Ruta no encontrada</h1>");
    }
}

export default RootRoute;