const environment = require('./bundlers/environment')
const developmentConfig = require('./bundlers/rollup.development')
const productionConfig = require('./bundlers/rollup.production')

const configs = []

if (environment.isDev) {
  configs.push(developmentConfig)
} else {
  configs.push(...productionConfig)
}

export default configs
