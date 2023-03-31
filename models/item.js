const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  url: { type: String, required: false },
  list: { type: Schema.Types.ObjectId, ref: "List" },
});

module.exports = mongoose.model("Item", Item);
