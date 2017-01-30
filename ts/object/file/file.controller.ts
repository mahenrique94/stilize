class FileController {

    public dialog(button) : void {
        let input = button.parentNode.querySelector('input[type=file]');
        input.click();
    }

    public selected(input) : void {
        let info = input.parentNode.querySelector('.o-file__info');
	    info.textContent = input.files[0].name;
    }

}