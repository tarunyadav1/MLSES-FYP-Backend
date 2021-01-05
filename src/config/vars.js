const path = require('path');
require('dotenv-safe').config();

// import .env variables
// dotenvSafe.load({
//     path: path.join(__dirname, '../../.env'),
//     sample: path.join(__dirname, '../../.env.example'),
// });

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
    mongo: {
        uri: process.env.NODE_ENV === 'dev' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI,
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
