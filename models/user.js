const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    // profile: { type: SchemaType.ObjectId, ref: "Profile" },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
