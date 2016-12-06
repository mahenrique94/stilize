class ControllerHelper {

    public static allowController(child : HTMLObjectElement, controller : string) : boolean {
        let element : HTMLObjectElement = child;
        while (element.nodeName.toLowerCase() !== 'html') {
            if (element.getAttribute('data-controller') === controller)
                return true;
            element = element.parentNode;
        }
        return false;
    }

}