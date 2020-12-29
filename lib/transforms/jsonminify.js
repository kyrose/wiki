const jsonmin = require('jsonminify')

module.exports = (content, outputPath = '.json') => {
  if (!String(outputPath).endsWith('.json')) {
    return content
  }

  return jsonmin(content)
}
