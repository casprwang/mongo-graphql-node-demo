import { 
  GraphQLID, 
  GraphQLNonNull,
} from 'graphql'

import EventType from '../types/event'

module.exports = {
  type: EventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => new Promise((res, rej)=>{
    res({
      id: 'sdklfjlsdjfsdlfjkds',
      name: 'Launch Party',
      date: 'Today'
    })
  })
}