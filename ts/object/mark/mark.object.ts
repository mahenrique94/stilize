/// <reference path="../../interface/object.ts"/>

class Mark implements Object {

    public mark(mark : HTMLObjectElement) : void {
        this._toggle(mark);
    }

    private _toggle(mark : HTMLObjectElement) : void {
        let data : HTMLObjectElement = mark.parentNode.querySelector('input');
        if (mark.classList.contains('is-marked')) {
            mark.classList.remove('is-marked');
            data.setAttribute('checked', 'false');
            data.value = 'F';
        } else {
            mark.classList.add('is-marked');
            data.setAttribute('checked', 'true');
            data.value = 'T';
        }
    }

}