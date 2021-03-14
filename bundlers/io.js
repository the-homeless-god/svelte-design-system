const environmentConfig = require('./environment')

const getIOConfig = (input, output, external) => ({
  input,
  output,
  external,
})

module.exports = {
  getDevelopmentConfig: () =>
    getIOConfig('src/main.ts', {
      file: `${environmentConfig.file.js}/bundle.js`,
      format: 'iife',
      sourcemap: environmentConfig.isDev,
    }),
  getProductionConfig: (input = 'src/components/index.ts') => ({
    umd: getIOConfig(input, {
      file: `${environmentConfig.file.module}/index.js`,
      format: 'umd',
      name: 'components',
    }),
    es: getIOConfig(input, { file: `${environmentConfig.file.module}/index.mjs`, format: 'esm' }, ['svelte/internal']),
  }),
}
