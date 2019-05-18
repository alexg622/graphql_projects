const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql
const mongoose = require('mongoose')
const UserType = require('./user_type')
const PostType = require('./post_type')

const User = mongoose.model("user")
const Post = mongoose.model("post")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, {name, email, password }) {
        return (new User({ name, email, password })).save()
      }
    },
    newPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
      },
      resolve(parentValue, { title, body }) {
        return (new Post({ title, body })).save()
      }
    }
  }
})

module.exports = mutation
