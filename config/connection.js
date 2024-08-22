// Import Mongoose to handle MongoDB interactions
const mongoose = require('mongoose');

// Connect to MongoDB using either the environment variable or a local database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkdb', {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the new topology engine to avoid deprecation warnings
});

// Export the connection to use it in server.js
module.exports = mongoose.connection;
