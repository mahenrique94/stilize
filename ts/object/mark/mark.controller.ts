/// <reference path="./mark.object.ts"/>

class MarkController {

    private _mark : Mark = new Mark();

    public mark(mark : HTMLObjectElement) : void {
        this._mark.mark(mark);
    }

}

const marks = document.querySelectorAll("[class*=o-mark__data]");
if (marks.length > 0) {
    marks.forEach(mark => {
        new Mark().checkRequired(mark);
        if (mark.checked) {
            let index = 0;
            let element;
            for(var i = 1; i <= mark.value.length; i++) {
                    element = mark.parentNode.querySelector(`.o-mark__element[data-marked="${mark.value}"]`);
                if (element == undefined)
                    element = mark.parentNode.querySelector(`.o-mark__element[data-marked="${mark.value.substring(index, i)}"]`);
                if (element)
                    element.classList.add("is-marked");
                index++;
            }            
        }
    });
}