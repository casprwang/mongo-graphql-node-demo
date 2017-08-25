import app from './server'
import config from './server/config'


app.listen(config.port, 
  () => console.log(`Now browse to localhost:${config.port}/graphql`)
)
