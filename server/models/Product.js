const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  categorySlug: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String },
  images: [{ type: String }],
  isQuoteOnly: { type: Boolean, default: false },
  pricing: {
    price: { type: Number },
    unit: { type: String },
    minOrderQuantity: { type: Number },
  },
  specifications: {
    type: Map,
    of: String
  },
  features: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
