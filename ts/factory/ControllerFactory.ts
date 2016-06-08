(function($, win) {
    $.addEventListener('DOMContentLoaded', function() {
        $.querySelectorAll('[data-controller]').forEach(function(element) {
            let clazz = element.dataset.controller;
            win[clazz] = new win.classes[clazz]();
        });
    });
})(document, window);