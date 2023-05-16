const mongoose = require ('mongoose');
const orderSchema = new mongoose.Schema ({
  orderNumber: {type: String, required: true},
  date: {type: Date, required: true},
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
  },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  orderItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem'}],
  payment: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
  shipping: {type: mongoose.Schema.Types.ObjectId, ref: 'Shipping'},
});
module.exports = mongoose.model ('Order', orderSchema);
