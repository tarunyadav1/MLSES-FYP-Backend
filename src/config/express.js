const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const { logs } = require("./vars");
const signUpRoute = require('../routes/auth.routes')
const sensorRoute = require('../routes/sensor.routes')
const timedataRoutes = require("../routes/timedata.routes")
const fieldRoutes = require("../routes/field.routes")
const userRoutes = require("../routes/user.routes")

/**
 * Express instance
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/api',signUpRoute.routes)
app.use('/api',userRoutes.routes)
app.use('/api',timedataRoutes.routes)
app.use('/api/user/fields',sensorRoute.routes)
app.use('/api/user/',fieldRoutes.routes)

module.exports = app;
