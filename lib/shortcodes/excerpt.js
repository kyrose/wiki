const striptags = require('striptags')

module.exports = article => {
  if (!article.hasOwnProperty('templateContent')) {
    return null
  }

  let excerpt = ''
  const
    content = article.templateContent,
    separatorsList = [
      { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
      { start: '<p>', end: '</p>' },
    ]

  separatorsList.some(separators => {
    const
      startPosition = content.indexOf(separators.start),
      endPosition = content.indexOf(separators.end)

    if (-1 !== startPosition && -1 !== endPosition) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim()

      return true
    }
  })

  return striptags(excerpt)
}
