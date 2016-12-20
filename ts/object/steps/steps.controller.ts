/// <reference path="./steps.object.ts"/>

class StepsController {

    private _steps : Steps = new Steps();

    public step(step : HTMLObjectElement) : void {
        this._steps.step(step.dataset.target, step.dataset.current);   
    }

}