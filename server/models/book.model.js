import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  author: {
    type: String,
    trim: true,
    required: 'Author is required'
  },
  genre_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: 'Genre is required'
  },
  published_year: {
    type: Number,
    required: 'Published year is required'
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

export default mongoose.model('Book', BookSchema);