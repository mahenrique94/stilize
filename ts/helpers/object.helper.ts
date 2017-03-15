class ObjectHelper {

    public static show(obj : HTMLObjectElement) : void {
        obj.classList.add("is-show");
        obj.classList.remove("is-hide");
        obj.setAttribute("aria-hidden", "false");
        obj.setAttribute("aria-expanded", "true");
    }

    public static hide(obj : HTMLObjectElement) : void {
        obj.classList.add("is-hide");
        obj.classList.remove("is-show");
        obj.setAttribute("aria-hidden", "true");
        obj.setAttribute("aria-expanded", "false");
    }

    public static isHide(obj : HTMLObjectElement) : boolean {
        return obj.classList.contains("is-hide");
    }

}