var db = require('../models');

function index(req,res) {
  db.Comment.find(function(error, comments) {
    if (error) { res.send(error) };
    res.json(comments);
  });
}

function show(req, res) {
  db.Comment.findById(req.params.id, function(error, comment) {
    if (error) { res.send(error) };
    res.json(comment);
  });
}

function destroy(req, res) {
  db.Comment.remove({_id: req.params.id}, function(error, comment) {
    if (error) { res.send(error) };
    res.json({ message: 'comment has been deleted' })
  });
}

function update(req, res) {
  db.Comment.findById(req.params.id, function(error, comment) {
    if (error) { res.send(error) };
    (req.body.name) ? comment.name = req.body.name : null;
    (req.body.title) ? comment.title = req.body.title : null;
    (req.body.text) ? comment.text = req.body.text : null;
    (req.body.date) ? comment.date = req.body.date : null;
    comment.save(function(error) {
      if (error) { res.send (error) };
      res.json({ message: 'comment has been updated' })
    });
  });
}

function create(req, res) {
  var comment = new db.Comment();
  comment.name = req.body.name;
  comment.title = req.body.title;
  comment.text = req.body.text;
  comment.city = req.body.city;
  comment.date = Date.now();
  comment.save();
  db.City.findOne({name: comment.city}, function(error, foundCity) {
    if (error) { console.log('comment error at find one city for create comment') }
    foundCity.comments.push(comment._id);
    foundCity.save();
    res.json(foundCity);
  });
}

function showUser(req, res) {
  db.Comment.find({name: req.params.name}, function(error, comments) {
    if (error) { res.send (error) };
    res.json(comments);
  });
}

function nuke(req, res) {
  db.Comment.remove(function(error, nuked) {
    if (error) { res.send(err) };
    res.json(nuked);
  });
}

module.exports = {
  index: index,
  show: show,
  destroy: destroy,
  update: update,
  create: create,
  showUser: showUser,
  nuke: nuke,
}
