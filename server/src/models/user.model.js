import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  salt: {
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

export default mongoose.model('User', UserSchema)