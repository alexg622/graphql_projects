const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
})

module.exports = Post = mongoose.model('post', PostSchema)
