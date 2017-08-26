import {
  GraphQLList
} from 'graphql'

// importing module from mongodb
import EventType from '../types/event'

module.exports = {
  type: new GraphQLList(EventType),
  // {id} destructed from args
  
  // the context is in the option object
  resolve: (root, args, { db: { Event } }) => new Promise((res, rej)=>{
    Event.find({})
      .then(data=> res(data))
      .catch(err=> reject(err))
  })
}
