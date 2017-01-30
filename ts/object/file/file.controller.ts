class FileController {

    public dialog(button) : void {
        let input = button.parentNode.querySelector('input[type=file]');
        input.click();
    }

}