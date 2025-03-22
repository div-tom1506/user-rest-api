require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', // process.env.HOST
    user: 'root', // process.env.USER
    password: process.env.PASSWORD,
    database: 'user_db_express' // process.env.database
});

db.connect(error => {
    if (error) {
        console.log("Database connection failed - " + error);
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = db;