import {
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql'

module.exports = new GraphQLInputObjectType({
  name: 'EventInput',
  fields: {
    name: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    }
  }
})
