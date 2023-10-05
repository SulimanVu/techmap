const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  emil: String,
  phone: String,
  login: String,
  role: String,
  password: String,
  rating: Number
});

const User = mongoose.model("User", userSchema);
module.exports = User;
