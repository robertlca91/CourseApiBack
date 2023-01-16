const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'courses',
  username: 'robert', // el que tiene usuario pone su usuario
  host: 'localhost', //127.0.0.1
  port: '5432', // este no se de dondes sale
  password: 'viole147', // pones tu contraseña
  dialect: 'postgres', // la base de datos que estamos usando
  // logging: false,
})
module.exports = db
