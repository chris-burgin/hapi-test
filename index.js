// requires
const Hapi = require("hapi")
const server = new Hapi.Server({ port: 3000, host: "localhost" })
const routes = require("./config/routes")

// wrapper to provide async
const start = async () => {
  // include routes
  server.route(routes)

  // start the server
  try {
    await server.start()
  } catch (err) {
    console.log(err)
  }
}

start()
