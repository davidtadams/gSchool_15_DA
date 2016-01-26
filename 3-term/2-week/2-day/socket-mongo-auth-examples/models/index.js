var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/socket_auth");
mongoose.set("debug", true);

module.exports.User = require("./user")