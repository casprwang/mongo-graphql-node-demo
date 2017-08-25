import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import queries from './queries'

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  })
})