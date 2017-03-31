/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class ProcessingAnimation implements Object, Factory {

    public create() : HTMLObjectElement {
        let animation = document.createElement("DIV");
        animation.classList.add("o-processing__animation");
        animation.innerHTML = "<i class=\"icon-spin1 animate-spin\"></i>";
        return animation;
    }
    
}