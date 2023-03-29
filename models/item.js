const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema({
  item: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  url: { type: String, required: false },
});

module.exports = mongoose.model("Item", Item);
