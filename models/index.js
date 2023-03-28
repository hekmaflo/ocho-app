const mongoose = require("mongoose");
const UserSchema = require("./user");
const ProfileSchema = require("./profile");
const ListSchema = require("./list");
const ItemSchema = require("./item");

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
const List = mongoose.model("List", ListSchema);
const Item = mongoose.model("Item", ItemSchema);

module.exports = {
  User,
  Profile,
  List,
  Item,
};
