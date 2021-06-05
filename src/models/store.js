const mongoose = require("mongoose")

//SCHEMA
const storeSchema = new mongoose.Schema({
  likes: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  webpage: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('store', storeSchema)