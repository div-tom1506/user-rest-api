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
    DB_PASSWORD=your_password
    DATABASE_NAME=user_db
    SECRET_KEY=your_secret_key

### Start the Server

    npm start

or (for development with auto-restart)

    nodemon server.js

## API Endpoints
### Authentication
| Method | Endpoint | Description |
|--------|---------|------------|
| **POST** | `/api/register` | Register a new user |
| **POST** | `/api/login` | Authenticate a user and get a JWT token |

### User Management (Requires Authentication)
| Method | Endpoint | Description |
|--------|---------|------------|
| **GET** | `/api/users` | Get all users |
| **GET** | `/api/users/:id` | Get user by ID |
| **GET** | `/api/users/username/:username` | Get user by username |
| **GET** | `/api/users/email/:email` | Get user by email |
| **PUT** | `/api/users/update/:id` | Update user |
| **DELETE** | `/api/users/delete/:id` | Delete user |

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

