/// <reference path="../helper/string.function.ts"/>

(function(document, window) {
    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('[data-controller]').forEach(element => {
            let controller : string = StringFunction.trimAll(element.dataset.controller);
            let clazzes : Array<String> = controller.split(',');
            clazzes.forEach(clazz => {
                window[clazz] = new window.classes[clazz]();
            });
        });
    });
})(document, window);