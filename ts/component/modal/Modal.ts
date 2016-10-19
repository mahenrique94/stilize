/// <reference path="../../interface/ElementStilize.ts"/>

class Modal implements ElementStilize {

    private _elements : any;

    constructor(elements) {
        this._elements = elements;
    }

    get elements() : any {
        return this._elements;
    }

    public close() : void {
        this.toggle();
    }

    public create() : any {
        let modal = document.createElement('div');
        modal.classList.add('c-modal');        
        return modal;
    }

    public show(url : string) : void {
        this._elements[2].src = url;
        setTimeout(() => this.toggle(), 150);        
    }

    public toggle() : void {
        this._elements.forEach(element => {
            if (this._isHide(element)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
                if (element.tagName == 'IFRAME') {
                    element.src = '';
                    element.innerHTML = '';
                }
            }
        });
    }

    private _isHide(element : any) {
        return element.classList.contains('is-hide') || element.style.display == 'none' || element.style.display == '' || element.style.display == undefined;
    }    

}