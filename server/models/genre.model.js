import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Genre name is required',
    unique: 'Genre name must be unique'
  },
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Genre', GenreSchema);