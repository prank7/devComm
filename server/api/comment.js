var express = require('express');
var Comment = require('../models/Comment');
var router = express.Router();

// GET /api/comments/
router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    if(err) return res(err);
    res.json({'comments': comments});
  })
});

// POST /api/comments/
router.post('/', function(req, res) {
  var newComment = Comment({
    author: req.body.author,
    body: req.body.body
  });

  newComment.save(function(err, comment) {
    if(err) return res(err);
    res.send(comment);
  })
});

// DELETE /api/comments/:id
router.delete('/:id', function(req, res, next) {
  Comment.remove({ _id: req.params.id }, function(err, comments) {
    if(err) return res.json(err);
    res.json(comments);
  })
});

module.exports = router;
