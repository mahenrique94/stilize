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
/// <reference path="../model/Modal.ts"/>
(function (classes) {
    var ModalController = (function () {
        function ModalController() {
            this._modal = new Modal(document.querySelectorAll('[class*=modal]'));
        }
        ModalController.prototype.show = function (obj) {
            event.preventDefault();
            if (obj)
                this._modal.show(obj.href || obj.formAction);
            else
                this._modal.close();
        };
        return ModalController;
    }());
    classes.ModalController = ModalController;
})(window.classes || (window.classes = {}));
(function ($, win) {
    $.addEventListener('DOMContentLoaded', function () {
        $.querySelectorAll('[data-controller]').forEach(function (element) {
            var clazz = element.dataset.controller;
            win[clazz] = new win.classes[clazz]();
        });
    });
})(document, window);
/// <reference path="../interface/ElementStilize.ts"/>
var BgModal = (function () {
    function BgModal() {
    }
    BgModal.prototype.create = function () {
        var bgModal = document.createElement('div');
        bgModal.classList.add('bg-modal');
        bgModal.setAttribute('data-controller', 'ModalController');
        bgModal.setAttribute('onclick', 'ModalController.show();');
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
// Controllers
/// <reference path="controller/ModalController.ts"/>
// Factorys
/// <reference path="factory/ControllerFactory.ts"/>
/// <reference path="factory/ModalFactory.ts"/>
// Helpers
// Models
// Views 
