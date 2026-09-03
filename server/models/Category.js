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
  },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false }
});

module.exports = mongoose.model('Category', categorySchema);
