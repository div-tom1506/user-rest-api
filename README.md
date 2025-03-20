# Node.js Express API with MySQL
A simple User Management API built using Node.js, Express, MySQL, and JWT Authentication with a structured MVC architecture.

## Project Structure

    /nodejs-express-api
    │── /config
    │   ├── db.js                # Database configuration
    │── /controllers
    │   ├── userController.js     # User API logic
    │── /models
    │   ├── userModel.js         # User model (database schema)
    │── /routes
    │   ├── userRoutes.js        # API routes for users
    │── .env                     # Environment variables (not committed to Git)
    │── .gitignore               # Ignore sensitive files
    │── package.json             # Dependencies
    │── server.js                # Main entry point
    │── README.md                # Documentation

## Setup & Installation
### Clone the Repository

    git clone https://github.com/your-username/nodejs-express-api.git
    cd nodejs-express-api

### Install Dependencies
    npm install

### Create .env File
Create a .env file in the root directory and add the following:

    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=user_db
    SECRET_KEY=your_secret_key

### Start the Server

    npm start

or (for development with auto-restart)

    nodemon server.js

## API Endpoints
### Authentication

// to add endpoints of login and registartion APIs

### User Management

// to add endpoints of user mansgement APIs

#### Protected routes require the Authorization token in headers:

    Authorization: Bearer <your-token>

## Tech Stack

**Backend:** Node.js, Express.js

**Database:** MySQL

**Authentication:** JWT (JSON Web Token)

**Security:** bcrypt (Password Hashing)

**Logging:** Morgan

## License
This project is MIT Licensed.

