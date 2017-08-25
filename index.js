import app from './server'
import config from './server/config'


app.listen(config.port, err=>{
  if (err) throw err

  console.log(`Now browse to localhost:${config.port}/graphql`)
}o