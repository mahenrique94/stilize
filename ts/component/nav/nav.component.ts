class Nav {

    public toggle(obj : HTMLObjectElement) : void {
        if (this._isHide(obj))
            this._show(obj);
        else
            this._hide(obj);
    }

    private _show(obj : HTMLObjectElement) : void {
        obj.classList.remove('is-hide');
        obj.classList.add('is-show');
    }

    private _hide(obj : HTMLObjectElement) : void {
        obj.classList.remove('is-show');
        obj.classList.add('is-hide');
    }

    private _isHide(obj : HTMLObjectElement) : boolean {
        return obj.classList.contains('is-hide');
    }

}