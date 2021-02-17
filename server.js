require("dotenv").config();

// Dependecies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Database
const db = require("./config/connection");

// Testing the database connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Initialize app
const app = express();

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("INDEX"));

// Game routes
app.use("/games", require("./routes/games"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// require('dotenv').config()

// import express, { static, urlencoded, json } from 'express';

// const PORT = process.env.PORT || 3000;

// const app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(static('public'));

// Parse request body as JSON
// app.use(urlencoded({ extended: true }));
// app.use(json());

// Set Handlebars.
// import exphbs from 'express-handlebars';

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
// import routes from './controllers/game_controller.js';

// app.use(routes);

// app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
//test
