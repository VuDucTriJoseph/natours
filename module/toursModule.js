import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Tour must have the name!'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;
