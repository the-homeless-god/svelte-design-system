const scss = require('rollup-plugin-scss')

const environmentConfig = require('./environment')

const scssConfiguration = {
  prefix: '@import \'src/styles/variables.scss\';',
}

const scssRollupConfig = (postfix, dev) => ({
  output: `${dev ? environmentConfig.file.css : environmentConfig.file.module}/${postfix}.css`,
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

const getClientConfig = () => getScssConfig(environmentConfig.isDev ? 'bundle' : 'styles')

module.exports = {
  configuration: scssConfiguration,
  getClientConfig,
  getSvelteStyles,
}
