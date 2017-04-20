/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>
/// <reference path="./processinganimation.object.ts"/>

class Processing implements Object, Factory {

    public new() : HTMLObjectElement {
        return this.create();
    }

    public create() : HTMLObjectElement {
        let processing = document.createElement("div");
        processing.classList.add("o-processing__background");
        processing.appendChild(new ProcessingAnimation().create());
        return processing;
    }

}