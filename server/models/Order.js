const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    // status: {
    //   type: String,
    //   enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    //   default: 'pending',
    // },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('order', orderSchema);
module.exports = Order;