const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql

const mongoose = require('mongoose')
const God = mongoose.model('god')
const GodType = require('./god_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  feilds: () => ({
    newGod: {
      type: GodType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        generation: { type: GraphQLInt },
        description: { type: GrpahQLStrig }
      },
      resolve(parentValue, { name, type, generation, description }) {
        return (new God({ name, type, generation, description})).save()
      }
    },
    updateGod: {
      type: GodType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        generation: { type: GraphQLInt },
        description: { type: GraphQLString }
      },
      rresolve(parentValue, { id, name, type, generation, description }) {
        return God.findOneAndUpdate({ _id: id }, { $set: name, type, generation, description }, { new: true }, (err, god) => {
            return god;
        });
      }
    }
  })
})

module.exports = mutation
