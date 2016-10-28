exports.onRouteUpdate = function() {
    var event = document.createEvent("Event");
    event.initEvent("routeChange", false, true); 
    window.dispatchEvent(event);
};
