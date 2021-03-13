const dotenv = require('dotenv')

const environment = dotenv.config().parsed || process.env

const container = 'public/assets'
const cssContainer = `${container}/css`
const jsContainer = `${container}/js`

const getBooleanVariable = (key) => JSON.parse(environment[key] || null)

const isDev = getBooleanVariable('IS_DEVELOPMENT')
const isNodeDev = process.env.NODE_ENV === 'development'

console.log(environment)

module.exports = {
  isDev,
  isNodeDev,
  isCodeCoverage: getBooleanVariable('IS_CODE_COVERAGE_ENABLED'),
  cssContainer,
  jsContainer,
}
