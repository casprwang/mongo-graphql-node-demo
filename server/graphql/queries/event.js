const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql')

// importing module from mongodb
const EventType = require('../types/event')

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
