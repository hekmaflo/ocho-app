const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema({
  item: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: false },
  list_id: { type: Schema.Types.ObjectId, ref: "list_id" },
});
