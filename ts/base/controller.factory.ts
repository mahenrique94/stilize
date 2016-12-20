/// <reference path="../helpers/string.helper.ts"/>

(function(document, window) {

    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('[data-controller]').forEach(element => {
            let controller : string = StringHelper.trimAll(element.dataset.controller);
            let clazzes : Array<String> = controller.split(',');
            clazzes.forEach(clazz => {
                window[clazz] = new window.classes[clazz]();
            });
        });
    });
    
})(document, window);