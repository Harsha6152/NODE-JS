const express = require("express")
const app = express()
const port = 6152
//parse json using express
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

let movies = [
    {
        id: '1',
        title: 'harsha',
        director: "harsha",
        release: "11-07-2002"
    },
    {
        id: '1',
        title: 'harsha',
        director: "harsha",
        release: "11-07-2002"
    },
    {
        id: '2',
        title: 'divya',
        director: "divya",
        release: "16-02-2003"
    },
    {
        id: '3',
        title: 'yamuna',
        director: "yamuna",
        release: "02-04-2002"
    },
    {
        id: '4',
        title: 'navya',
        director: "navya",
        release: "27-01-2003"
    },
];
////get the movie list
app.get('/movie', (req, res) => {
    res.json(movies)
})
///add a movie
app.post('/movie', (req, res) => {
    const movie = req.body;


    console.log(movie);
    movies.push(movie);
    res.send("movie is added to the list");


})
// serch for a movie by id
app.get('/movie/:id', (req, res) => {
    const id = req.params.id;
    for (let movie of movies) {
        if (movie.id === id) {
            res.json(movie)
            return
        }
    }
    res.status(400).send("movie not found")
})
//remove a movie
app.delete('/movie/:id', (req, res) => {
    const id = req.params.id;
    movies = movies.filter(movie => {
        if (movie.id !== id) {
            return true
        }
        return false
    })
    res.send("movie is deleted");
})
///set the server to listen by id
app.listen(port, () => (console.log('Server running at port: 6152')))
