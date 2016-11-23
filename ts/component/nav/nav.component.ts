class Nav {

    toggle(obj : HTMLObjectElement) : void {
        if (this._isHide(obj))
            this._show(obj);
        else
            this._hide(obj);
    }

    _show(obj : HTMLObjectElement) : void {
        obj.style.opacity = '1';
        obj.style.transform = 'scale(1)';
    }

    _hide(obj : HTMLObjectElement) : void {
        obj.style.opacity = '0';
        obj.style.transform = 'scale(0)';
    }

    _isHide(obj : HTMLObjectElement) : boolean {
        return obj.style.opacity === '0' || obj.style.opacity === '';
    }

}