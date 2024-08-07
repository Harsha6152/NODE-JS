const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require("./routes/api/users"))
app.get('/', (req, res) => {
    res.send("Hello World !")
})

app.listen(8080, () => {
    console.log("Server Started on Port:8080")
})