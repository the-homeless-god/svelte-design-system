const warnings = ['Sourcemap is likely to be incorrect', 'Unknown input options: sourcemap']

const isIgnoredWarning = (warning) => warnings.some((warn) => warning.message.includes(warn))

const onwarn = (warning, _onwarn) => isIgnoredWarning(warning) || console.warn(warning.toString())

module.exports = {
  onwarn,
}
