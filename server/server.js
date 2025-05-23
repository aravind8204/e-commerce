// Description: This is the main entry point for the server application. It sets up the server, connects to the database, and defines middleware and routes.

// Importing required modules
const express = require('express');
const cors = require('cors');
const {connectDB} = require("./config/Db")
const dotenv = require('dotenv');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware for CORS
// Allow all origins and methods
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }
));

//Function to connect to the database
connectDB();


const PORT = process.env.PORT || 5600;

//test route
app.get('/', (req, res) => {
    res.send("Server is running...");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})
