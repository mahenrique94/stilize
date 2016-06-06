var Modal = (function () {
    function Modal(element) {
        this._element = element;
    }
    Modal.prototype.toggle = function () {
        this._element.style.display = 'none';
    };
    return Modal;
}());
