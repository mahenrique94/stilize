class Modal {

    private _element : any;

    constructor(element) {
        this._element = element;
    }

    get element() : any {
        return this._element;
    }

    public toggle() : void {
        this._element.forEach(modal => {
            if (this._isHide(modal))
                modal.style.display = 'block';
            else
                modal.style.display = 'none';
        });
    }

    private _isHide(element : any) {
        return element.style.display == 'none' || element.style.display == '';
    }    

}