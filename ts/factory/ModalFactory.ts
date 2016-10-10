/// <reference path="../component/modal/Modal.ts"/>
/// <reference path="../component/modal/BgModal.ts"/>
/// <reference path="../component/modal/IframeModal.ts"/>

class ModalFactory {

    public static createModal() : any {
        let iframeModal = new IframeModal().create();
        let modal = new Modal(null).create();
        let bgModal = new BgModal().create();
        modal.appendChild(iframeModal);
        bgModal.appendChild(modal);
        return bgModal;
    }

}

document.body.appendChild(ModalFactory.createModal());