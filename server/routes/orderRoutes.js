const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect, admin } = require('../middleware/authMiddleware');

// Get all orders (Admin)
router.get('/', protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 }).populate('items.productId').populate('user', 'id name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get logged in user orders
router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order/quote (Public)
router.post('/', async (req, res) => {
  try {
    const orderData = req.body;
    // Attach user if they passed a token (handled implicitly if we used protect, but public can also order)
    // For a true hybrid approach, we would use a permissive auth middleware, but for now we trust the body or allow anonymous.
    const order = new Order(orderData);
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update order status (Admin)
router.put('/:id/status', protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
