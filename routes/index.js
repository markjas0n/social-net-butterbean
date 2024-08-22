// Import the Express router
const router = require('express').Router();
// Import user and thought routes
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Mount the user routes at /api/users
router.use('/users', userRoutes);
// Mount the thought routes at /api/thoughts
router.use('/thoughts', thoughtRoutes);

// Export the router to use in server.js
module.exports = router;
