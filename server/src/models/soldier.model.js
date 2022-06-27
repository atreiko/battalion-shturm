import mongoose from 'mongoose'

const Soldier = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
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

export default mongoose.model('Soldier', Soldier)