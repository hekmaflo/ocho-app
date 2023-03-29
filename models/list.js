const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const List = new Schema({
  listname: { type: String, required: true },
  description: { type: String, required: true },
  profile_id: { type: Schema.Types.ObjectId, ref: "profile_id" },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("List", List);
