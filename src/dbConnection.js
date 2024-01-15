const mysql = require('mysql2')
const config = require('./config')

const MYSQL_CONFIG = config.MYSQL_CONFIG

const pool = mysql.createPool(MYSQL_CONFIG)

const readPool = pool.promise()
const writePool = pool.promise()

module.exports = {
    readPool : readPool,
    writePool : writePool
}