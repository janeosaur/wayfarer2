var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Wayfarer");

module.exports.Comment = require('./comments');
module.exports.City = require('./cities')
