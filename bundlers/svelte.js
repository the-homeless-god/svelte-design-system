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
          modules: false,
          targets: {
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
