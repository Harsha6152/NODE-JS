const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.get('/api', (req, res) => {
    res.json({
        message: "hey there ! welcome to this API service",
    });
});
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: "posts created.....",
                authData,
            })
        }
    })
})


app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        name: "harsha",
        email: "harsha6152@gmail.com",
    }
    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token,
        })
    })
})
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()

    } else {
        res.sendStatus(403)
    }

}

app.listen(8000, (req, res) => {
    console.log("server started on port:8000");

});