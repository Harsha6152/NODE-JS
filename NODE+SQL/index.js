const express = require("express")
const mysql = require('mysql')

//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'nodemysql'
})
//connectto mysql
db.connect(err => {
    if (err) {
        throw err
    }
    console.log("MySQL connected");

})
const app = express()
//create database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql"
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Database created");
    })
})
//create a table
app.get('/cemp', (req, res) => {
    let sql = 'CREATE TABLE emp(id int AUTO_INCREMENT,name VARCHAR(255),designiation VARCHAR(255),PRIMARY KEY(id))'
    db.query(sql, (err) => {
        if (err) {
            throw err
        }
        res.send("emp table created")
    })
})
//insert emp
app.get('/e1', (req, res) => {
    let post = { name: "harsha", designiation: "CEO" }
    let sql = 'INSERT INTO emp SET ?'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err
        }
        res.send("Employee added")
    })
})
//select emoplyee
app.get("/ge", (req, res) => {
    let sql = "SELECT * FROM emp"
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(results)
        res.send("Employee details fetched")
    })
})
//update employee
app.get("/upe/:id", (req, res) => {
    let newName = 'Updated name'
    let sql = `UPDATE emp SET name = '${newName}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if (err) {
            throw err
        }

        res.send("Employee details updated")
    })
})
//delete emp
app.get("/dele/:id", (req, res) => {
    let sql = `DELETE FROM emp WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if (err) {
            throw err
        }

        res.send("Employee details deleted")
    })
})

app.listen('6100', () => {
    console.log("server started on 6100");
})
