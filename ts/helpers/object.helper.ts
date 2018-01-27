class ObjectHelper {

    public static hide(obj : HTMLObjectElement) : void {
        obj.classList.add("is-hide");
        obj.classList.remove("is-show");
        obj.setAttribute("aria-hidden", "true");
        obj.setAttribute("aria-expanded", "false");
    }

    public static isHide(obj : HTMLObjectElement) : boolean {
        return obj.classList.contains("is-hide");
    }

    public static isNull(obj : any) : boolean {
        return obj == null;
    }

    public static show(obj : HTMLObjectElement) : void {
        obj.classList.add("is-show");
        obj.classList.remove("is-hide");
        obj.setAttribute("aria-hidden", "false");
        obj.setAttribute("aria-expanded", "true");
    }

    public static toggle(obj : HTMLObjectElement) : void {
        if (ObjectHelper.isHide(obj)) {
            ObjectHelper.show(obj);
        } else {
            ObjectHelper.hide(obj);
        }
    }

}