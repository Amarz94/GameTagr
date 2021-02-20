// Sequelize instance to connect to the database
const Sequelize = require("sequelize");
const connection = {
  username: "root",
  password: process.env.MY_PASSWORD,
  database: "game_db",
  host: "127.0.0.1",
  dialect: "mysql",
};
module.exports = new Sequelize(process.env.JAWSDB_URL || connection) 