;

(function(document) {
  const getCookie = name => {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')

    return v ? v[2] : null
  }

  const setCookie = (name, value, days) => {
    var d = new Date
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
  }

  const cookieName = 'cookies'

  if (getCookie(cookieName)) {
    return
  }

  const
    cookieBanner = document.getElementById('cookieBanner'),
    cookieButton = document.getElementById('cookieBanner')

  cookieBanner.classList.toggle('hidden')
  cookieButton.addEventListener('click', () => {
    setCookie(cookieName, 'accepted', 365)
    cookieBanner.classList.toggle('hidden')
  })
})(document)
