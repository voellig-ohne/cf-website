exports.onRouteUpdate = function(e) {
    var event = document.createEvent('Event');
    event.initEvent('routeChange', false, true);
    window.dispatchEvent(event);

    if (window.ga && e.action === 'PUSH') {
        ga('set', 'page', e.pathname);
        ga('send', 'pageview');
    }
};
