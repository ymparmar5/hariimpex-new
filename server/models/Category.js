const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  division: { 
    type: String, 
    enum: ['display', 'cooling'],
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);
