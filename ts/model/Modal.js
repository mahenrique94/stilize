var Modal = (function () {
    function Modal(element) {
        this._element = element;
    }
    Object.defineProperty(Modal.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.toggle = function () {
        var _this = this;
        this._element.forEach(function (modal) {
            if (_this._isHide(modal))
                modal.style.display = 'block';
            else
                modal.style.display = 'none';
        });
    };
    Modal.prototype._isHide = function (element) {
        return element.style.display == 'none' || element.style.display == '';
    };
    return Modal;
}());
