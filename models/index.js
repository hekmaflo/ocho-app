const mongoose = require("mongoose");
const UserSchema = require("./user");
const ProfileSchema = require("./profile");

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = {
  User,
  Profile,
};
