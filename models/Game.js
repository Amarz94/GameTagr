const Sequelize = require("sequelize");
const db = require("../config/connection");

const Game = db.define("game", {
    postTitle: {
        type: Sequelize.STRING
    },
    gameTitle: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER
    }
});

// Syncs with Database
Game.sync();

// Makes the Game Model available for other files (will also create a table)
module.exports = Game;