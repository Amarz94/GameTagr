const express = require("express");
const router = express.Router();

// Bring in database
const db = require("../config/connection");

// Bring in model
const Game = require("../models/Game");

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
  const data = {
    postTitle: "Do not buy Cyberpunk 2077 on console",
    gameTitle: "Cyberpunk 2077",
    body: "This game is full of bugs...",
    author: "Bob",
    rating: "2",
  };

  // Destructering to pull info from data object
  let { postTitle, gameTitle, body, author, rating } = data;

  // Insert into table
  Game.create({
    postTitle,
    gameTitle,
    body,
    author,
    rating,
  })
    // Redirects us back to /games
    .then((game) => res.redirect("/games"))
    .catch((err) => console.log(err));
});

module.exports = router;
