<<<<<<< HEAD
require('dotenv').config()

const express = require('express');
=======
const express = require("express");
>>>>>>> f0409d1d99c10561ac0b3bb88646846c43a3e1af

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
<<<<<<< HEAD
const routes = require('./controllers/game_controller.js');
=======
const routes = require("./controllers/burgers_controller.js");
>>>>>>> f0409d1d99c10561ac0b3bb88646846c43a3e1af

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
<<<<<<< HEAD
<<<<<<< HEAD

=======
//test
>>>>>>> 49ff2608369a9cb98b9895046cb2b1681533fa21
=======
//test
>>>>>>> f0409d1d99c10561ac0b3bb88646846c43a3e1af
