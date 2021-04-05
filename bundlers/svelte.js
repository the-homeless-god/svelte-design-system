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

const getConfiguration = ({ emitCss, compilerOptions }) =>
  svelte({
    emitCss,
    preprocess: preprocessor,
    compilerOptions,
  })

const getDevelopmentConfig = () =>
  getConfiguration({
    emitCss: true,
    compilerOptions: {
      dev: environmentConfig.isDev,
      hydratable: true,
    },
  })

const getProductionConfig = () =>
  getConfiguration({
    emitCss: false,
    include: ['src/components/**'],
    compilerOptions: {
      hydratable: true,
    },
  })

module.exports = {
  getDevelopmentConfig,
  getProductionConfig,
}
