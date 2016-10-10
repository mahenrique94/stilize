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
        modal.classList.add('modal');        
        return modal;
    }

    public show(url : string) : void {
        this._elements[2].src = url;
        setTimeout(() => this.toggle(), 150);        
    }

    public toggle() : void {
        this._elements.forEach(modal => {
            if (this._isHide(modal)) {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'none';
                if (modal.tagName == 'IFRAME') {
                    modal.src = '';
                    modal.innerHTML = '';
                }
            }
        });
    }

    private _isHide(element : any) {
        return element.style.display == 'none' || element.style.display == '' || element.style.display == undefined;
    }    

}