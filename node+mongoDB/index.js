require('./models/db');

const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const { engine } = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const studentController = require('./controllers/studentController');

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up handlebars as the templating engine
app.engine('hbs', engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: 'MainLayout',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register the student controller routes
app.use('/student', studentController);

// Root route
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Students Database!!</h2>
        <h3>Click here to get access to the <b><a href="/student/list">Database</b></h3>`);
});

// Start the server
app.listen(5239, () => {
    console.log("Server started running on port 5239");
});
