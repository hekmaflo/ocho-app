const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    profileTitle: { type: String, required: true },
    userBio: { type: String, required: false },
    image: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", Profile);
