import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} `)
  next()
})

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)



app.use('/', (req, res)=> {
  res.json(`go to /graphql`)
})

module.exports = app
