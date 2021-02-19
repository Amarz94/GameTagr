const express = require("express");
const router = express.Router();

// Bring in database
const db = require("../config/connection");

// Bring in model
const Game = require("../models/Game");

// Bring in sequelize to use like operation
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get game list (The "/" here is actually "/games")
router.get("/", (req, res) =>
  Game.findAll()
    .then((games) => {
      res.render("games", {
        games,
      });
    })
    .catch((err) => console.log(err))
);

// Display add game form
router.get("/add", (req, res) => res.render("add"));

// Add a game
router.post("/add", (req, res) => {
  // Destructering to pull info from data object
  let { postTitle, gameTitle, review, author, rating } = req.body;
  let errors = [];

  if (!postTitle) {
    errors.push({ text: "Please add a post title" });
  }
  if (!gameTitle) {
    errors.push({ text: "Please add a game title" });
  }
  if (!review) {
    errors.push({ text: "Please add a review" });
  }
  if (!author) {
    errors.push({ text: "Please add your name" });
  }
  if (!rating) {
    errors.push({ text: "Please rate this game" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      postTitle,
      gameTitle,
      review,
      author,
      rating,
    });
  } else {
    // Insert into table
    Game.create({
      postTitle,
      gameTitle,
      review,
      author,
      rating,
    })
      // Redirects us back to /games
      .then((game) => res.redirect("/games"))
      .catch((err) => console.log(err));
  }
});

// Search for games
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make Lowercase
  term = term.toLowerCase();

  Game.findAll({ where: { gameTitle: { [Op.like]: '%' + term + '%' } } })
  .then(games => res.render('games', { games }))
  .catch(err => console.log(err));
});

module.exports = router;
