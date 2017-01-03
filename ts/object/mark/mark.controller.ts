/// <reference path="./mark.object.ts"/>

class MarkController {

    private _mark : Mark = new Mark();

    public mark(mark : HTMLObjectElement) : void {
        this._mark.mark(mark);
    }

}

let marks = document.querySelectorAll('.o-mark__data');
marks.forEach(mark => {
    if (mark.checked) {
        let element = mark.parentNode.querySelector('.o-mark__element');
        element.classList.add('is-marked');
    }
});