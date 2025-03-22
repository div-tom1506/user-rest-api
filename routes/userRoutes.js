require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controller/userController');

// fn for handling authentication token


const router = express.Router();

