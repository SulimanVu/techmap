const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  eamil: String,
  phone: String,
  login: String,
  role: String,
  password: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
