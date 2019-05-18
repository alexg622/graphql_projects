const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql
const mongoose = require('mongoose')
const Abode = mongoose.model('abode')

const AbodeType = new GraphQLObjectType({
  name: 'AbodeType',
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    coordinates: { type: GraphQLString },
    gods: {
      type: new GraphQLList(require('./god_type')),
      resolve(parentValue) {
        return Abode.findById(parentValue.id)
        .populate('gods')
      }
    }
  })
})

module.exports = AbodeType
