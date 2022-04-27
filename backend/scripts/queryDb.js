import mysql from 'promise-mysql'
import config from '../config.js'

const dbConnection = await mysql.createConnection({
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.database
})

const queryDb = async (SqlQuery) => {
    const data = await dbConnection.query(SqlQuery)
    return data
}

export default queryDb