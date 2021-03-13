const json = require('@rollup/plugin-json')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const livereload = require('rollup-plugin-livereload')

const cssBundler = require('./css')
const svelteConfig = require('./svelte')
const environmentConfig = require('./environment')
const jsConfig = require('./javascript')
const ioConfig = require('./io')
const warnBundler = require('./warning')
const resolveConfig = require('./resolve')
const testConfig = require('./test')

const { isDev } = environmentConfig

module.exports = {
  ...ioConfig.getClientConfig(),
  plugins: [
    cssBundler.getClientConfig(),
    svelteConfig.getClientConfig(),
    resolveConfig.getClientConfig(),
    jsConfig.useCommonJs(),
    typescript({ sourceMap: isDev, inlineSources: isDev }),
    json(),
    !isDev
      && terser({
        module: true,
      }),
    environmentConfig.isCodeCoverage && testConfig.checkCodeCoverage(),
    isDev && environmentConfig.isNodeDev && livereload('public'),
  ],
  preserveEntrySignatures: false,

  onwarn: warnBundler.onwarn,

  watch: {
    clearScreen: false,
  },
}
