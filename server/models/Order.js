const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  type: {
    type: String,
    enum: ['order', 'quote'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending'
  },
  customerInfo: {
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    gstin: String,
    phone: String,
    message: String,
  },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    priceAtTime: Number, // if order
  }],
  totalAmount: Number, // if order
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
