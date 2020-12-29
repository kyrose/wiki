;

(function(window, document) {
  'use strict'

  const
    searchBox    = document.getElementById('searchField'),
    resultList   = document.getElementById('searchResults'),
    noResultList = document.getElementById('noResultsFound')

  searchBox.addEventListener('focus', () => {
    if (!resultList.childNodes.length) {
      return
    }

    resultList.classList.add('flex')
    resultList.classList.remove('hidden')
  })

  document.addEventListener('click', event => {
    if (searchBox.contains(event.target)) {
      return
    }

    resultList.classList.add('hidden')
    noResultList.classList.add('hidden')
  })

  const search = event => {
    const options = {
      bool: 'OR',
      expand: true,
    }
    const results = window.searchIndex.search(event.target.value, options)

    resultList.classList.add('hidden')
    resultList.classList.remove('flex')
    noResultList.classList.add('hidden')

    if (!results || 0 === results.length) {
      noResultList.classList.remove('hidden')

      return
    }

    resultList.innerHTML = ''
    resultList.classList.add('flex')
    resultList.classList.remove('hidden')

    results.map(result => {
      const { id, title } = result.doc

      const listItem = document.createElement('li')
      resultList.appendChild(listItem)

      const link = document.createElement('a')
      link.setAttribute('href', id)
      link.textContent = title
      listItem.appendChild(link)
    })
  }

  fetch('/search-index.json')
    .then(response => response.json())
    .then(docs => {
      window.searchIndex = elasticlunr(function() {
        this.addField('title')
        this.addField('excerpt')
        this.setRef('id')

        docs.forEach(function(doc) {
          this.addDoc(doc)
        }, this)
      })

      document.getElementById('searchField').addEventListener('input', search)
    })
})(window, document)
