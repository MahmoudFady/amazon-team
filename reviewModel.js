const mongoose = require ('mongoose');
const reviewSchema = new mongoose.Schema ({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  text: {type: String, required: true},
  starRating: {type: Number, required: true, min: 1, max: 5},
});
module.exports = mongoose.model ('Review', reviewSchema);
