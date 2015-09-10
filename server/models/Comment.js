var mongoose = require('mongoose');

// Define Comment Schema
var CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);