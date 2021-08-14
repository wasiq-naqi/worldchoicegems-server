const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env'});

module.exports = () => {

    let environment = process.env.NODE_ENV || 'development';

    let configuration = {
        development: {
            APP:{
                PORT: process.env.DEV_APP_PORT
            },
            DB:{
                DIALECT: process.env.DEV_DB_DIALECT,
                HOST: process.env.DEV_DB_HOST,
                PORT: process.env.DEV_DB_PORT,
                USER: process.env.DEV_DB_USER,
                PASSWORD: process.env.DEV_DB_PASS,
                DATABASE: process.env.DEV_DB_DATABASE,
            },
            TOKEN:{
                KEY: process.env.DEV_TOKEN_KEY,
                ISSUER: process.env.DEV_TOKEN_ISSUER,
                EXPIRY: process.env.DEV_TOKEN_EXPIRY,
            }
        },
        production: {
            APP:{
                PORT: process.env.PROD_APP_PORT
            },
            DB:{
                DIALECT: process.env.PROD_DB_DIALECT,
                HOST: process.env.PROD_DB_HOST,
                PORT: process.env.PROD_DB_PORT,
                USER: process.env.PROD_DB_USER,
                PASSWORD: process.env.PROD_DB_PASS,
                DATABASE: process.env.PROD_DB_DATABASE,
            },
            TOKEN:{
                KEY: process.env.PROD_TOKEN_KEY,
                ISSUER: process.env.PROD_TOKEN_ISSUER,
                EXPIRY: process.env.PROD_TOKEN_EXPIRY,
            }
        },
    }

    return configuration[environment];

}