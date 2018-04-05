const path = require("path")

// A helper function to construct and require the routes. This allows
// us to easily change the location of routes in the future with minimal work.
const buildRoute = file => require(path.join("..", "routes", file))

// routes
module.exports = [
  // generic
  { method: "GET", path: "/", handler: buildRoute("index") },
]
