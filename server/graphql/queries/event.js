import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql'

// importing module from mongodb
import EventType from '../types/event'

module.exports = {
  type: EventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  // {id} destructed from args
  resolve: (root, {id}, { db: { Event } }) => new Promise((res, rej)=>{
    Event.findById(id)
      .then(data=> res(data))
      .catch(err=> reject(err))
  })
}
