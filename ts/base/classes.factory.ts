/// <reference path="../component/nav/nav.controller.ts"/>
/// <reference path="../component/tab/tab.controller.ts"/>
/// <reference path="../component/media/media.controller.ts"/>
/// <reference path="../object/modal/modal.controller.ts"/>
/// <reference path="../object/steps/steps.controller.ts"/>

(classes => {
    
    classes.ModalController = ModalController;
    classes.NavController = NavController;
    classes.TabController = TabController;
    classes.StepsController = StepsController;
    classes.MediaController = MediaController;

})(window.classes || (window.classes = {}));