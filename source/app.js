(function () {
  'use strict'

  var options = INSTALL_OPTIONS

  window._paq = window._paq || []

  if (!options.piwikdomain || !options.piwikidsite || options.piwikidsite === '0') {
    return
  }

  window._paq.push(['trackPageView'])
  window._paq.push(['enableLinkTracking'])

  if (options.disableCookies) {
    window._paq.push(['disableCookies'])
  }

  if (options.clientSideDNT) {
    window._paq.push(['setDoNotTrack', true])
  }

  var domain = String(options.piwikdomain)

  if (domain.indexOf('http') !== 0 && domain.indexOf('//') !== 0) {
    domain = 'https://' + domain
  }

  if (domain.charAt(domain.length - 1) !== '/') {
    domain = domain + '/'
  }

  window._paq.push(['setTrackerUrl', domain + 'matomo.php'])
  window._paq.push(['setSiteId', options.piwikidsite])

  var piwikVendorScript = document.createElement('script')
  var firstScriptOnPage = document.getElementsByTagName('script')[0]
  piwikVendorScript.src = domain + 'matomo.js'
  piwikVendorScript.async = true
  firstScriptOnPage.parentNode.insertBefore(piwikVendorScript, firstScriptOnPage)
}())
