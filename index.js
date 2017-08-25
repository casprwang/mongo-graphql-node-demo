const app = require('./server')
const config = require('./server/config')


app.listen(config.port, err=>{
  if (err) throw err

  console.log(`Now browse to localhost:${config.port}/graphql`)
})
