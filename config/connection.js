// Sequelize instance to connect to the database
const Sequelize = require("sequelize");
module.exports = new Sequelize("game_db", "root", process.env.MY_PASSWORD, {
<<<<<<< HEAD
    host: "localhost",
    dialect: "mysql"
});
=======
  host: "localhost",
  dialect: "mysql",
});
>>>>>>> 64a2b54e9d0a30f8d0000b5e9f62b463c335edff
