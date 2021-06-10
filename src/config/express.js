const express = require("express");
const morgan = require("morgan");

const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const { logs } = require("./vars");

const sensorRoute = require('../routes/sensor.routes')
const timedataRoutes = require("../routes/timedata.routes")
const fieldRoutes = require("../routes/field.routes")
const userRoutes = require("../routes/user.routes")
const authRoutes = require('../routes/auth.routes')
const secretRoutes = require('../routes/secret.routes');
const passport = require("passport");



/**
 * Express instance
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use('/',authRoutes.routes);

app.use('/user',passport.authenticate('jwt',{session: false}), secretRoutes);

app.use('/api',passport.authenticate('jwt',{session : false} ) ,userRoutes.routes)
app.use('/api',passport.authenticate('jwt',{session : false} ) ,timedataRoutes.routes)
app.use('/api/user/fields', passport.authenticate('jwt',{session:false}),sensorRoute.routes)
app.use('/api/user/',passport.authenticate('jwt',{session : false} ) ,fieldRoutes.routes)

module.exports = app;
