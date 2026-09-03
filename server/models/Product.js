const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  categorySlug: { type: String, required: true },
  subcategorySlug: { type: String, required: false },
  shortDescription: { type: String, required: false, default: '' },
  fullDescription: { type: String },
  images: [{ type: String }],
  isQuoteOnly: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  pricing: {
    price: { type: Number },
    salePrice: { type: Number },
    unit: { type: String },
    minOrderQuantity: { type: Number },
  },
  specifications: {
    type: Map,
    of: String
  },
  features: [{ type: String }],
  stock: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
