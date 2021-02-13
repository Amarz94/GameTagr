require('dotenv').config()

import express, { static, urlencoded, json } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(static('public'));

// Parse request body as JSON
app.use(urlencoded({ extended: true }));
app.use(json());

// Set Handlebars.
import exphbs from 'express-handlebars';

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
import routes from './controllers/game_controller.js';

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
//test
