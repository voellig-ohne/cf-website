exports.onRouteUpdate = function() {
    window.dispatchEvent(new Event('routeChange'))
};
