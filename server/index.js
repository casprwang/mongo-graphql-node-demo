const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')
const db = require('./db')

const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} `)
  next()
})

app.use('/graphql',graphqlHTTP({
  context: {
    db
  },
  schema: schema,
  graphiql: true
})
)


app.use('/', (req, res)=> {
  res.json(`go to /graphql`)
})

module.exports = app
