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

    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
    g.defer=true; g.async=true; g.src=domain+"piwik.js"; s.parentNode.insertBefore(g,s);

}());
