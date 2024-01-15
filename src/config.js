const dotenv = require('dotenv').config()
const path = require('path')
const BASEPATH = path.resolve(__dirname)
const CONTROLLER_PATH = BASEPATH + '/Controllers/'

const MYSQL_CONFIG = {
    connectionLimit : 25,
    multipleStatements : true,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB,
}

const omitTokenPath = [
    '/v1/login',
    '/v1/testAPI',
]

const PORT = process.env.PORT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

module.exports = {
    CONTROLLER_PATH : CONTROLLER_PATH,
    MYSQL_CONFIG : MYSQL_CONFIG,
    omitTokenPath : omitTokenPath,
    PORT : PORT,
    JWT_SECRET_KEY : JWT_SECRET_KEY
}