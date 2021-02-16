// Sequelize instance to connect to the database
const Sequelize = require("sequelize");
module.exports = new Sequelize("game_db", "root", "15Feb19!123", {
    host: "localhost",
    dialect: "mysql"
});