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
        uri: process.env.NODE_ENV === 'developement' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
        authuri: process.env.NODE_ENV =='development' ? process.env.AUTH_DB_URI_TESTS : process.env.AUTH_DB_URI,
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
