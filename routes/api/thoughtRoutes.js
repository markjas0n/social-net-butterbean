// Import the Express router
const router = require('express').Router();
// Import the thought controller functions
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// Define routes for /api/thoughts
router.route('/')
  .get(getThoughts) // GET all thoughts
  .post(createThought); // POST a new thought

// Define routes for /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought) // GET a single thought by ID
  .put(updateThought) // PUT to update a thought by ID
  .delete(deleteThought); // DELETE a thought by ID

// Define routes for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction) // POST to add a reaction to a thought
  .delete(removeReaction); // DELETE to remove a reaction from a thought

// Export the router to use in the main routes file
module.exports = router;
