const postcss = require('postcss')
const _ = require('lodash')

function findColor(colors, color) {
  const colorsNormalized = _.mapKeys(colors, (value, key) => {
    return _.camelCase(key)
  })

  return _.get(colorsNormalized, _.camelCase(color), color)
}

module.exports = function ({ colors, backgroundColors }) {
  if (_.isArray(backgroundColors)) {
    backgroundColors = _(backgroundColors).map(color => [color, color]).fromPairs()
  }

  return _(backgroundColors).toPairs().map(([className, colorName]) => {
    const kebabClass = _.kebabCase(className)

    return postcss.rule({
      selector: `.bg-${kebabClass}`
    }).append({
      prop: 'background-color',
      value: findColor(colors, colorName)
    })
  }).value()
}
