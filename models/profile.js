const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    profileTitle: { type: String, required: true },
    userBio: { type: String, required: false },
    image: { type: String, required: false },
    lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", Profile);
