require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controller/userController');

// fn for verifying authentication token
const secretKey = process.env.SECRET_KEY;
const authenticateToken = (req, res, next) => {
    const token = req.headers('Authorization');
    if (!token) {
        return res.status(401).json({message: 'Access denied'});
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Invalid token'});
        }
        req.user = user;
        next();
    });
}

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', authenticateToken, userController.getAllUsers);
router.get('/users/:id', authenticateToken, userController.getUserById);
router.get('/users/username/:username', authenticateToken, userController.getUserById);
router.get('/users/email/:email', authenticateToken, userController.getUserByEmail);
router.put('users/update/:id', authenticateToken, userController.updateUser);
router.delete('users/delete/:id', authenticateToken, userController.deleteUser);

module.exports = router;