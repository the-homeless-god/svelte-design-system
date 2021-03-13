const svelte = require('rollup-plugin-svelte')

const preprocess = require('svelte-preprocess')
const environmentConfig = require('./environment')
const cssConfig = require('./css')

const preprocessor = preprocess({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          // No need for babel to resolve modules
          modules: false,
          targets: {
            // ! Very important. Target es6+
            esmodules: true,
          },
        },
      ],
    ],
  },
  defaults: {
    script: 'typescript',
  },
  sourceMap: environmentConfig.isDev,
  ...cssConfig.getSvelteStyles(),
  typescript: {
    tsconfigFile: './tsconfig.json',
  },
})

const getClientConfig = () =>
  svelte({
    emitCss: true,
    preprocess: preprocessor,
    compilerOptions: {
      dev: environmentConfig.isDev,
      hydratable: true,
    },
  })

module.exports = {
  getClientConfig,
}
