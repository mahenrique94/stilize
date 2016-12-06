/// <reference path="../helper/string.function.ts"/>

(function(document, window) {
    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('[data-controller]').forEach(element => {
            let controller = StringFunction.trimAll(element.dataset.controller);
            let clazzes = controller.split(',');
            clazzes.forEach(clazz => {
                window[clazz] = new window.classes[clazz]();
            });
        });
    });
})(document, window);