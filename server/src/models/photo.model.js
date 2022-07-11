import mongoose from 'mongoose'

const Photo = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    requiered: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: '1'
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('Photo', Photo)