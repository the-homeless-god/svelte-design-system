const dotenv = require('dotenv')

const environment = dotenv.config().parsed || process.env

const container = {
  development: 'public/assets',
  production: 'dist',
}

const file = {
  css: `${container.development}/css`,
  js: `${container.development}/js`,
  module: `${container.production}`,
}

const getBooleanVariable = (key) => JSON.parse(environment[key] || null)

const isDev = getBooleanVariable('IS_DEVELOPMENT')
const isNodeDev = process.env.NODE_ENV === 'development'

module.exports = {
  isDev,
  isNodeDev,
  isCodeCoverage: getBooleanVariable('IS_CODE_COVERAGE_ENABLED'),
  file,
}
