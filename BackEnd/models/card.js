const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  id: { type: String, unique: true, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
