// Import required modules
const express = require('express'); // Express for handling HTTP requests
const db = require('./config/connection'); // Database connection
const routes = require('./routes'); // API routes

// Set up the port for the server
const PORT = process.env.PORT || 3001;
// Initialize the Express application
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use the routes defined in the routes folder
app.use('/api', routes);

// Start the server once the database is connected
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
