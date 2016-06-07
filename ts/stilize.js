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
        return element.style.display == 'none' || element.style.display == '' || element.style.display == undefined;
    };
    return Modal;
}());
/// <reference path="../model/Modal.ts"/>
var ModalController = (function () {
    function ModalController() {
        this._modal = new Modal(document.querySelectorAll('[class*=modal]'));
    }
    ModalController.prototype.toggle = function () {
        this._modal.toggle();
    };
    return ModalController;
}());
// Models
// Controllers
/// <reference path="controller/ModalController.ts"/> 
