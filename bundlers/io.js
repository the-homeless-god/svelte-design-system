const environmentConfig = require('./environment')

const getIOConfig = () => ({
  input: 'src/main.ts',
  output: {
    file: `${environmentConfig.jsContainer}/bundle.js`,
    format: 'iife',
    sourcemap: environmentConfig.isDev,
  },
})

module.exports = {
  getClientConfig: getIOConfig,
}
