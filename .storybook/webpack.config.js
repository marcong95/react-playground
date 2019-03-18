const path = require('path')
const _ = require('lodash')
const projectConfig = require('../config/webpack.config.dev')

const requiredExtensions = ['styl', 'yaml']
const testRegex = re =>
  _.some(requiredExtensions, ext => re.source.includes(ext));

module.exports = async ({ config, mode }) => {
  const rules = projectConfig.module.rules
  const { oneOf: targetRules } = rules.find(rule => rule.oneOf !== undefined)
  const requiredRules = targetRules.filter(rule => {
    if (rule.test instanceof Array) {
      return _.some(rule.test, regex => testRegex(regex))
    } else if (rule.test instanceof RegExp) {
      return testRegex(rule.test)
    } else {
      return false
    }
  })

  config.module.rules.push(...requiredRules.map(
    rule => Object.assign({
      include: path.resolve(__dirname, '../src')
    }, rule)
  ))

  return config
}
