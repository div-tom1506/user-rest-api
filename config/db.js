require('dotenv').config();
const mysql = require('mysql2');

let db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME
});

db.connect(error => {
    if (error) {
        console.log("Database connection failed - " + error);
    } else {
        console.log("Connected to MYSQL server");

        db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`, (err) => {
            if (err) {
                console.error("Database creation failed");
            }

            console.info(`Database ${process.env.DATABASE_NAME} checked/created successfully`);

            db.changeUser({ database: process.env.DATABASE_NAME }, (err) => {
                if (err) {
                    console.error("Database switch failed");
                }
                console.info(`Switched to database ${process.env.DATABASE_NAME}`);
            });
        });
    }
});

module.exports = db;