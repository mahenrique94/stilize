class FileController {

    public dialog(button) : void {
        const input = button.parentNode.querySelector("input[type=file]");
        input.click();
    }

    public selected(input) : void {
        const info = input.parentNode.querySelector(".o-file__info");
	    info.textContent = input.files[0].name;
    }

}