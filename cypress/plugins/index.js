const rollupPreprocessor = require('@bahmutov/cy-rollup')
const codeCoverage = require('@cypress/code-coverage/task')

module.exports = (on, config) => {
  const options = {
    configFile: './bundlers/rollup.development.js',
  }

  on('file:preprocessor', rollupPreprocessor(options))
  codeCoverage(on, config)

  return config
}
