require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../model/userModel');

const secretKey = process.env.SECRET_KEY;
let query = null;

// user fields be like: username, email, password (to be encrypted before storing), created_at, updated_at
// api like: login, register, update, delete, get all users, get user by id, get user by username, get user by email

exports.registerUser = async (req, res) => {

    const { username, email, password } = req.body;
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;

    if (!username || !email || !password) {
        console.error("fields were null");
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.query(query, [username, email, hashedPassword], (err, result) => {
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

    if (!email || !password) {
        res.status(400).json({ message: 'All fields are required' });
    }

    query = `SELECT * FROM users WHERE email=?`
    db.query(query, [email], async (err, result) => {
        if (err || result.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = result[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: `Invalid email or password` });
        }

        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
        res.json({ message: 'Login successfull', Token: token })
    })
}

exports.getAllUsers = (req, res) => {
    query = 'SELECT id, username, email, created_at, updated_at FROM users';
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error ' + err });
        }
        res.json(result);
    });
}

exports.getUserById = (req, res) => {
    query = `SELECT id, username, email, created_at, updated_at FROM users WHERE id=?`;
    db.query(query,[req.params.id], (err, result) => {
        if (err || result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result[0]);
    })
}

exports.getUserByUsername = (req, res) =>{
    query = `SELECT id, username, email, created_at, updated_at FROM users WHERE username=?`;
    db.query(query, [req.params.username], (err, result) => {
        if(err || result.length === 0) {
            res.status(404).json({message: 'User not found'});
        }
        res.json(result[0]);
    });
}

exports.getUserByEmail = (req, res) =>{
    query = `SELECT id, username, email, created_at, updated_at FROM users WHERE email=?`;
    db.query(query, [req.params.email], (err, result) => {
        if(err || result.length === 0) {
            res.status(404).json({message: 'User not found'});
        }
        res.json(result[0]);
    });
}





