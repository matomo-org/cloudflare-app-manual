(function () {
    'use strict';

    var options = INSTALL_OPTIONS;

    window._paq = window._paq || [];

    if (!options.piwikdomain || !options.piwikidsite || options.piwikidsite === '0') {
        return;
    }

    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);

    var domain = String(options.piwikdomain);

    if (domain.indexOf('http') !== 0 && domain.indexOf('//') !== 0) {
        domain = 'https://' + domain;
    }

    if (domain.charAt(domain.length - 1) !== '/') {
        domain = domain + '/';
    }

    _paq.push(["setTrackerUrl", domain + "piwik.php"]);
    _paq.push(["setSiteId", options.piwikidsite]);

    var piwikVendorScript = document.createElement('script');
    piwikVendorScript.src = domain + 'piwik.js';
    document.head.appendChild(piwikVendorScript);
}());
