const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },

  // Get a single thought by ID
  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId)
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(thought => {
        return User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
      })
      .then(() => res.json({ message: 'Thought created and associated with user!' }))
      .catch(err => res.status(500).json(err));
  },

  // Update a thought by ID
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  // Delete a thought by ID
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch(err => res.status(500).json(err));
  },

  // Create a reaction for a thought
  addReaction(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  }
};
