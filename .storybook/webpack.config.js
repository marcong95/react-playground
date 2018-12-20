const path = require('path')
const _ = require('lodash')
const projectConfig = require('../config/webpack.config.dev')

module.exports = (baseConfig, env, defaultConfig) => {
  const rules = projectConfig.module.rules
  const { oneOf: styleRule } = rules.find(rule => rule.oneOf !== undefined)
  const stylusRelevants = styleRule.filter(rule => {
    if (rule.test instanceof Array) {
      return _.some(rule.test, regex => regex.source.includes('styl'))
    } else if (rule.test instanceof RegExp) {
      return rule.test.source.includes('styl')
    } else {
      return false
    }
  })

  defaultConfig.module.rules.push(...stylusRelevants.map(
    rule => Object.assign({
      include: path.resolve(__dirname, '../src')
    }, rule)
  ))

  return defaultConfig
}
