/// <reference path="../../interface/component.ts"/>

class Media implements Component {

    public play(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let source : HTMLObjectElement = media.querySelector(".c-media__source");        
        this._start(player, source);
    }

    public pause(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let source : HTMLObjectElement = this._getCurrent(player);
        player.pause();
        player.classList.remove("is-playing");
        player.classList.add("is-paused");
        source.classList.remove("is-current");
        source.classList.add("is-waiting");
    }

    public first(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let current : HTMLObjectElement = this._getCurrent(player);
        let next : HTMLObjectElement = this._getFirst(player);
        player.src = next.src;
        player.play();
        current.classList.remove("is-current");
        current.classList.add("is-queueing");
        next.classList.remove("is-played");
        next.classList.add("is-current");
    }

    public backwards(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let current : HTMLObjectElement = this._getCurrent(player);
        let next : HTMLObjectElement = this._getPrevious(player);
        player.src = next.src;
        player.play();
        current.classList.remove("is-current");
        current.classList.add("is-queueing");
        next.classList.remove("is-played");
        next.classList.add("is-current");
    }

    public forward(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let current : HTMLObjectElement = this._getCurrent(player);
        let next : HTMLObjectElement = this._getNext(player);
        player.src = next.src;
        player.play();
        current.classList.remove("is-current");
        current.classList.add("is-played");
        next.classList.remove("is-queueing");
        next.classList.add("is-current");
    }

    public last(media : HTMLObjectElement) : void {
        let player : HTMLObjectElement = this._getPlayer(media);
        let current : HTMLObjectElement = this._getCurrent(player);
        let next : HTMLObjectElement = this._getLast(player);
        player.src = next.src;
        player.play();
        current.classList.remove("is-current");
        current.classList.add("is-played");
        next.classList.remove("is-queueing");
        next.classList.add("is-current");
    }

    private _getPlayer(media : HTMLObjectElement) : HTMLObjectElement {
        return media.querySelector(".c-media__player");
    }

    private _getCurrent(player : HTMLObjectElement) : HTMLObjectElement {
        return player.querySelector(".c-media__source.is-current");
    }

    private _getWaiting(player : HTMLObjectElement) : HTMLObjectElement {
        return player.querySelector(".c-media__source.is-waiting");
    }

    private _getFirst(player : HTMLOListElement) : HTMLObjectElement {
        let sources = player.querySelectorAll(".c-media__source.is-played");
        for(let i = 1; i < sources.length; i++) {
            sources[i].classList.remove("is-played");
            sources[i].classList.add("is-queueing");
        }
        return sources[0];
    }

    private _getPrevious(player : HTMLOListElement) : HTMLObjectElement {
        let sources = player.querySelectorAll(".c-media__source.is-played");
        return sources[sources.length - 1];
    }

    private _getNext(player : HTMLOListElement) : HTMLObjectElement {
        return player.querySelectorAll(".c-media__source.is-queueing")[0];
    }

    private _getLast(player : HTMLOListElement) : HTMLObjectElement {
        let sources = player.querySelectorAll(".c-media__source.is-queueing");
        for(let i = 0; i < (sources.length - 1); i++) {
            sources[i].classList.remove("is-queueing");
            sources[i].classList.add("is-played");
        }
        return sources[sources.length - 1];
    }

    private _start(player : HTMLObjectElement, source : HTMLObjectElement) : void {
        let traveled : HTMLObjectElement = player.parentNode.querySelector(".c-media__traveled");
        let duration : HTMLObjectElement = player.parentNode.querySelector(".c-media__duration");
        let current : HTMLObjectElement = player.parentNode.querySelector(".c-media__current");
        if (this._isPaused(player)) {
            let source = this._getWaiting(player);
            player.play();
            player.classList.remove("is-paused");   
            player.classList.add("is-playing");
            source.classList.remove("is-waiting");
            source.classList.add("is-current");
        } else {
            player.src = source.src;
            player.play();
            player.classList.remove("is-stoped");   
            player.classList.add("is-playing");
            source.classList.remove("is-queueing");
            source.classList.add("is-current");
        }
        setInterval(() => {
            traveled.textContent = (player.currentTime / 60).toFixed(2);
            duration.textContent = (player.duration / 60).toFixed(2);
            current.style.width = player.currentTime + "%";
        }, 1000);
    }

    private _isPaused(player : HTMLObjectElement) : boolean {
        return player.classList.contains("is-paused");
    }

}