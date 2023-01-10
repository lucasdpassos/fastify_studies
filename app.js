const Fastify = require('fastify')

function buildFastify() {
  const fastify = Fastify()

  // Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

buildFastify()

module.exports = buildFastify