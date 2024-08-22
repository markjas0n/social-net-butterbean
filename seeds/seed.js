const mongoose = require('mongoose');
const { User, Thought } = require('../models'); // Import the User and Thought models
const db = require('../config/connection');

// Array of sample users
const userData = [
  {
    username: 'john_doe',
    email: 'john_doe@example.com',
  },
  {
    username: 'jane_doe',
    email: 'jane_doe@example.com',
  },
  {
    username: 'larry_smith',
    email: 'larry_smith@example.com',
  },
];

// Array of sample thoughts
const thoughtData = [
  {
    thoughtText: 'This is a thought by John.',
    username: 'john_doe',
  },
  {
    thoughtText: 'This is another thought by Jane.',
    username: 'jane_doe',
  },
  {
    thoughtText: 'This is a thought by Larry.',
    username: 'larry_smith',
  },
];

// Seed function to populate the database
const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost/socialnetworkdb', {
      useNewUrlParser: true, // This option is deprecated and can be removed
      useUnifiedTopology: true, // This option is deprecated and can be removed
    });

    // Clear existing users and thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert sample users
    const users = await User.insertMany(userData);

    // Insert sample thoughts and associate them with users
    const thoughts = await Thought.insertMany(
      thoughtData.map((thought, index) => ({
        ...thought,
        userId: users[index]._id, // Associate the thought with the corresponding user
      }))
    );

    // Update users to include their thoughts
    await Promise.all(
      thoughts.map((thought) =>
        User.findOneAndUpdate(
          { username: thought.username },
          { $push: { thoughts: thought._id } }
        )
      )
    );

    console.log('Database seeded successfully!');
    process.exit(0); // Exit the process
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
