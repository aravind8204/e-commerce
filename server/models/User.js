const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    fullName: String,
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type : String,
      enum : ["admin","user"],
    }
    
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('user', userSchema)
module.exports = User
