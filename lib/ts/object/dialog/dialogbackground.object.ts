/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class DialogBackground implements Object, Factory {

    public create() : HTMLObjectElement {
        const background = document.createElement("div");
        background.classList.add("o-dialog__background", "js-o-dialog__background");
        background.setAttribute("onclick", "DialogController.close();");
        background.appendChild(new DialogClose().create());
        return background;
    }

    public close() : void {
        const background : HTMLObjectElement = document.querySelector(".js-o-dialog__background");
        background.remove();
    }

}