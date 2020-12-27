;

(function(document) {
  'use strict'

  const
    menu      = document.getElementById('menu'),
    menuClose = document.getElementById('menu-close'),
    menuOpen  = document.getElementById('menu-open')

  menuClose.addEventListener('click', () => menu.classList.toggle('hidden'))
  menuOpen.addEventListener('click', () => menu.classList.toggle('hidden'))
})(document)
