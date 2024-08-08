require('./models/db')


const express = require("express")
const path = require("path")
const handlebars = require("handlebars")
const { engine } = require('express-handlebars');
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access")
const bodyparser = require("body-parser")
const studentController = require('./controllers/studentController')

var app = express()


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


app.engine('hbs', engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: 'MainLayout',
    layoutsDir: __dirname + '/views/layouts'
}))


app.set("view engine", 'hbs')
app.set('views', path.join(__dirname, '/views/'))
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Students Database!!</h2>
        <h3>Click here to get access to the <b><a href="/student/list">Database</b></h3>`)
});



app.listen(5239, () => {
    console.log("server started running on port 5239");
});

app.use('/student', studentController)