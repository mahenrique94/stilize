/// <reference path="../interface/ElementStilize.ts"/>
var Modal = (function () {
    function Modal(elements) {
        this._elements = elements;
    }
    Object.defineProperty(Modal.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.close = function () {
        this.toggle();
    };
    Modal.prototype.create = function () {
        var modal = document.createElement('div');
        modal.classList.add('modal');
        return modal;
    };
    Modal.prototype.show = function (url) {
        var _this = this;
        event.preventDefault();
        this._elements[2].src = url;
        setTimeout(function () {
            _this.toggle();
        }, 100);
    };
    Modal.prototype.toggle = function () {
        var _this = this;
        this._elements.forEach(function (modal) {
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
/// <reference path="../interface/ElementStilize.ts"/>
var BgModal = (function () {
    function BgModal() {
    }
    BgModal.prototype.create = function () {
        var bgModal = document.createElement('div');
        bgModal.classList.add('bg-modal');
        bgModal.setAttribute('onclick', 'new ModalController().show(this.href);');
        return bgModal;
    };
    return BgModal;
}());
/// <reference path="../interface/ElementStilize.ts"/>
var IframeModal = (function () {
    function IframeModal() {
    }
    IframeModal.prototype.create = function () {
        var iframeModal = document.createElement('iframe');
        iframeModal.classList.add('iframe-modal');
        iframeModal.id = 'iframe-modal';
        iframeModal.name = 'iframe-modal';
        return iframeModal;
    };
    return IframeModal;
}());
/// <reference path="../model/Modal.ts"/>
/// <reference path="../model/BgModal.ts"/>
/// <reference path="../model/IframeModal.ts"/>
var ModalFactory = (function () {
    function ModalFactory() {
    }
    ModalFactory.createModal = function () {
        var iframeModal = new IframeModal().create();
        var modal = new Modal(null).create();
        var bgModal = new BgModal().create();
        modal.appendChild(iframeModal);
        bgModal.appendChild(modal);
        return bgModal;
    };
    return ModalFactory;
}());
document.body.appendChild(ModalFactory.createModal());
/// <reference path="../model/Modal.ts"/>
var ModalController = (function () {
    function ModalController() {
        this._modal = new Modal(document.querySelectorAll('[class*=modal]'));
    }
    ModalController.prototype.show = function (url) {
        if (url)
            this._modal.show(url);
        else
            this._modal.close();
    };
    return ModalController;
}());
// Factory
/// <reference path="factory/ModalFactory.ts"/>
// Controllers
/// <reference path="controller/ModalController.ts"/>
// Models
