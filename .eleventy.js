const dev = global.dev = ('development' === process.env.NODE_ENV)

module.exports = config => {
  /* --- COLLECTIONS --- */
  config.addCollection('featured', collection =>
    collection
      .getFilteredByGlob('./src/**/*.md')
      .filter(p => dev || !p.data.draft)
      .filter(p => p.data.featured)
  )
  config.addCollection('menuItems', collection =>
    collection
      .getFilteredByGlob('./src/**/*.md')
      .filter(p => dev || !p.data.draft)
      .filter(item => 'eleventyNavigation' in item.data)
      .sort((a, b) => (a.data.eleventyNavigation.order || 0) - (b.data.eleventyNavigation.order || 0))
  )
  config.addCollection('search', collection =>
    collection
      .getFilteredByGlob('./src/**/*.md')
      .filter(p => dev || !p.data.draft)
      .sort((a, b) => {
        if (a.data.title < b.data.title) {
          return -1
        }

		    if (a.data.title > b.date.title) {
          return 1
        }

    		return 0
      })
  )

  /* --- FILTERS --- */
  const dateformat = require('./lib/filters/dateformat')
  config.addFilter('datefriendly', dateformat.friendly)
  config.addFilter('dateymd', dateformat.ymd)
  config.addFilter('readtime', require('./lib/filters/readtime'))

  /* --- PLUGINS --- */
  config.addPlugin(require('@11ty/eleventy-navigation'))
  config.addPlugin(require('eleventy-plugin-embed-everything'))
  config.addPlugin(require('@quasibit/eleventy-plugin-sitemap'), {
    sitemap: {
      hostname: 'https://inigochoa.github.io/wiki',
    },
  })

  /* --- SHORTCODES --- */
  config.addShortcode('excerpt', require('./lib/shortcodes/excerpt'))
  config.addShortcode('version', require('./lib/shortcodes/version'))

  /* --- TRANSFORMATIONS --- */
  if (!dev) {
    config.addTransform('htmlminify', require('./lib/transforms/htmlminify'))
  }
  config.addTransform('inline', require('./lib/transforms/inline'))
  config.addTransform('jsonminify', require('./lib/transforms/jsonminify'))

  /* --- WATCHES --- */
  config.addWatchTarget('./_assets/src/css/')
  config.addWatchTarget('./_assets/src/js/')

  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
  }
  const markdownIt = require('markdown-it')
  const mdIterator = require('markdown-it-for-inline')

  config.setLibrary('md', markdownIt(mdOptions)
    .use(mdIterator, 'url_new_win', 'link_open', function(tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(attr => 'href' === attr[0])

      if (href && (!href.includes('inigochoa.github.io') && !href.startsWith('/') && !href.startsWith('#'))) {
        tokens[idx].attrPush([ 'target', '_blank' ])
        tokens[idx].attrPush([ 'rel', 'noopener noreferrer' ])
      }
    })
  )

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  }
}
