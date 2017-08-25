const { GraphQLNonNull } = require('graphql')
const EventType = require('../types/event.js')
const EventInputType = require('../types/input/event.js')

module.exports  = {
  type: EventType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(EventInputType)
    }
  },

  resolve: (root, { data }, { db: {Event} }) => new Promise((res, rej)=> {
    const newEvent = new Event(data)

    newEvent.save()
      .then(data=> res(data))
      .catch(err=> rej(err))
  })

}

