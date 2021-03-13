const json = require('@rollup/plugin-json')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const svg = require('rollup-plugin-svelte-svg')

const cssBundler = require('./css')
const svelteConfig = require('./svelte')
const environmentConfig = require('./environment')
const jsConfig = require('./javascript')
const ioConfig = require('./io').getProductionConfig()
const resolveConfig = require('./resolve')

const { isDev } = environmentConfig

const plugins = [
  cssBundler.getClientConfig(),
  svelteConfig.getProductionConfig(),
  resolveConfig.getClientConfig(),
  jsConfig.useCommonJs(),
  svg({ dev: isDev }),
  typescript({ sourceMap: isDev, inlineSources: isDev }),
  json(),
  terser({
    module: true,
  }),
]

const productionConfig = {
  plugins,
  preserveEntrySignatures: true,
}

const getProductionConfig = (additionalSettings) => ({
  ...productionConfig,
  ...additionalSettings,
})

module.exports = [
  getProductionConfig({
    ...ioConfig.es,
  }),
  getProductionConfig({
    ...ioConfig.umd,
  }),
]
