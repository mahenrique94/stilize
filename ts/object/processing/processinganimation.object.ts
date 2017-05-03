/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class ProcessingAnimation implements Object, Factory {

    public create() : HTMLObjectElement {
        const animation = document.createElement("div");
        animation.classList.add("o-processing__animation");
        animation.innerHTML = "<i class=\"icon-spin1 animate-spin\"></i>";
        return animation;
    }
    
}