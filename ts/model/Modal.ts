class Modal {

    private _element : any;

    constructor(element) {
        this._element = element;
    }

    public toggle() : void {
        this._element.style.display = 'none';
    }

}