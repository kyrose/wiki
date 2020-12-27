;

(function(document) {
  const
    scrollTopButton = document.getElementById('scrollTopButton'),
    content = document.getElementById('content')

  if (0 === scrollTopButton.length) {
    return
  }

  content.addEventListener('scroll', () => {
    (50 <= content.scrollTop)
      ? scrollTopButton.classList.remove('hidden')
      : scrollTopButton.classList.add('hidden')
  })

  scrollTopButton.addEventListener('click', () => content.scroll({ behavior: 'smooth', top: 0 }))
})(document)
