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
            const children = mark.parentNode.querySelectorAll(".o-mark__element");
            children.forEach(child => {
                if (child.dataset.marked !== "") {
                    if (mark.value.indexOf(child.dataset.marked) >= 0)
                        child.classList.add("is-marked");
                } else {
                    if (mark.value === child.dataset.marked)
                        child.classList.add("is-marked");
                }
            });
        }
    });
}