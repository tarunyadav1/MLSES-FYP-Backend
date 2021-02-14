const { port, env } = require("./config/vars");
const app = require("./config/express");
const mongoose = require("./config/mongoose");

// open mongoose connection
mongoose.connect();

//Models
require("./models/Users");

// listen to requests
app.listen(port, () => console.log(`Server start at ${port} port`));

/**
 * Exports express
 * @public
 */
module.exports = app;
