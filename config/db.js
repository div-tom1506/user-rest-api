require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect(error => {
    if (error) {
        console.log("Database connection failed - " + error);
    } else {
        console.log("Connected to MYSQL server");

        db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`, (err) => {
            if (err) {
                console.error("Database creation failed");
            }

            console.info(`Database ${process.env.DATABASE} checked/created successfully`);

            db.changeUser({ database: process.env.DATABASE }, (err) => {
                if (err) {
                    console.error("Database switch failed");
                }
                console.info(`Switched to database ${process.env.DATABASE}`);
            });
        });
    }
});

module.exports = db;