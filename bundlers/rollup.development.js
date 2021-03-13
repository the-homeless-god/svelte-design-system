const json = require('@rollup/plugin-json')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const livereload = require('rollup-plugin-livereload')
const svg = require('rollup-plugin-svelte-svg')

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
  ...ioConfig.getDevelopmentConfig(),
  plugins: [
    cssBundler.getClientConfig(),
    svelteConfig.getDevelopmentConfig(),
    resolveConfig.getClientConfig(),
    jsConfig.useCommonJs(),
    svg({ dev: isDev }),
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
