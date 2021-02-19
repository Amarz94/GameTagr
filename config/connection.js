// Sequelize instance to connect to the database
const Sequelize = require("sequelize");
module.exports = new Sequelize("game_db", "root", process.env.MY_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});
