const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 4000
}

// default env as production
process.env.NODE_ENV = process.env.NODE_ENV || config.dev
config.env = process.env.NODE_ENV

let envConfig

try {
  envConfig = require(`./${config.env}`)
  envConfig = envConfig || {}
} catch (e) {
  envConfig = {}
}

module.exports = Object.assign(config, envConfig)
