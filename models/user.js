const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    profile: { type: SchemaType.ObjectId, ref: "Profile" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
