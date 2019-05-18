const graphql = require('graphql')
const { GraphQLSchema } = graphql
const mongoose = require('mongoose')
require('../models')
const God = mongoose.model('god')
const RootQueryType = require('./root_query_type')
const mutations = require('./mutations')

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
})
