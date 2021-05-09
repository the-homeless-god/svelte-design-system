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

const getBooleanVariable = (key) => {
  const value = environment[key]

  if (value !== undefined && value !== null && value.length > 0) {
    return value.toLowerCase() === 'true'
  }

  return false
}

const isCodeCoverage = getBooleanVariable('IS_CODE_COVERAGE_ENABLED')
const isDev = getBooleanVariable('IS_DEVELOPMENT')
const isNodeDev = process.env.NODE_ENV === 'development'

module.exports = {
  isDev,
  isNodeDev,
  isCodeCoverage,
  file,
}
