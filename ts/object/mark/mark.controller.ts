/// <reference path="./mark.object.ts"/>

class MarkController {

    private _mark : Mark = new Mark();

    public mark(mark : HTMLObjectElement) : void {
        this._mark.mark(mark);
    }

}

let marks = document.querySelectorAll('[class*=o-mark__data]');
if (marks.length > 0) {
    marks.forEach(mark => {
        if (mark.checked) {
            let index = 0;
            for(var i = 1; i <= mark.value.length; i++) {
                let element = mark.parentNode.querySelector(`.o-mark__element[data-marked='${mark.value.substring(index, i)}']`);
                if (element == undefined)
                    element = mark.parentNode.querySelector(`.o-mark__element[data-marked='${mark.value}']`);
                element.classList.add('is-marked');
                index++;
            }            
        }
    });
}