const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmblemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gods: [{
    type: Schema.Types.ObjectId,
    ref: 'god'
  }]
})

module.exports = Emblem = mongoose.model('emblem', EmblemSchema)
