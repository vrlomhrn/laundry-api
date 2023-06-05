require("dotenv").config()

const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DIALECT = process.env.DIALECT
const SECRET = process.env.SECRET

module.exports = {
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: DIALECT,
    secret: SECRET
}