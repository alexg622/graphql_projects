const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AbodeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coordinates: {
    type: String,
    required: true
  },
  gods: [{
    type: Schema.Types.ObjectId,
    ref: "god"
  }]
})

module.exports = Abode = mongoose.model('abode', AbodeSchema)
