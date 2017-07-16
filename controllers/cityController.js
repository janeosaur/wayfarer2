var db = require('../models');

function index(req, res) {
  db.City.find({})
    .populate('comments')
    .exec(function(error, cities) {
      if (error) { res.send(error) };
      res.json(cities);
    });
}

function show(req, res) {
  db.City.findOne({name: req.params.name})
  .populate('comments')
  .exec(function(error, city) {
    if (error) { res.send(error) };
    res.json(city);
  });
}

module.exports = {
  index: index,
  show: show
}
