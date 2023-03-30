const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const List = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("List", List);
