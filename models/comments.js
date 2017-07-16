'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  name: String,
  user: String,
  image: String,
  text: String,
  date: String,
  title: String,
  city: String
});

// this exports a value, not objectx
module.exports = mongoose.model('Comment', CommentsSchema);
