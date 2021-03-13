const scss = require('rollup-plugin-scss')

const environmentConfig = require('./environment')

const scssConfiguration = {
  prefix: '',
}

const scssRollupConfig = (postfix, dev) => ({
  output: `${environmentConfig.cssContainer}/${postfix}.css`,
  sourceMap: dev,
  sourceMapEmbed: dev,
  prefix: scssConfiguration.prefix,
  watch: 'src/**/*.(scss|svelte)',
  outputStyle: 'compressed',
})

const getSvelteStyles = () => ({
  less: { includePaths: ['src', 'node_modules'] },
  css: { includePaths: ['src', 'node_modules'] },
  scss: scssConfiguration,
})

const getScssConfig = (path) => scss(scssRollupConfig(path, environmentConfig.isDev))

const getClientConfig = () => getScssConfig('bundle')

module.exports = {
  configuration: scssConfiguration,
  getClientConfig,
  getSvelteStyles,
}
