require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../model/userModel');

const secretKey = process.env.SECRET_KEY;

// user fields be like: username, email, password (to be encrypted before storing), created_at, updated_at
// api like: login, register, update, delete, get all users, get user by id, get user by username, get user by email

exports.registerUser = async (req, res) => {

    const {username, email, password} = req.body;
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;

    if (!username || !email || !password) {
        console.error("feilds were null");
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.query(query, [username, email, hashedPassword], (err, res) => {
            if (err) {
                return res.status(500).json({ message: 'Database error ' + err });
            } else {
                return res.status(201).json({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error ' + error });
    }
}

exports.loginUser = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
}