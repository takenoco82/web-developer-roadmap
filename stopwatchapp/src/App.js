import { StopWatch } from "./model/StopWatch.js";

export class App {
    constructor() {
        console.log("App initilized");
        this.stopWatch = new StopWatch();
    }

    mount() {
        console.log("App#mount start");
        document.addEventListener("DOMContentLoaded", () => {
            this.updateTimer();

            // ボタンクリック時の動作
            const startButton = document.querySelector("#start-button");
            startButton.addEventListener("click", () => {
                console.log("start button clicked");
                this.stopWatch.start();
            });
            const pauseButton = document.querySelector("#pause-button");
            pauseButton.addEventListener("click", () => {
                console.log("pause button clicked");
                this.stopWatch.pause();
            });
            const resetButton = document.querySelector("#reset-button");
            resetButton.addEventListener("click", () => {
                console.log("reset button clicked");
                this.stopWatch.reset();
            });
        })
    }

    // タイマーの表示を更新する
    updateTimer() {
        const timer = document.querySelector("#timer");
        setTimeout(() => {
            const hours = `${"0" + this.stopWatch.hours}`;
            const minutes = `${"0" + this.stopWatch.minutes}`.slice(-2);
            const seconds = `${"0" + this.stopWatch.seconds}`.slice(-2);
            const milliseconds = `${"00" + this.stopWatch.milliseconds}`.slice(-3);
            timer.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
            this.updateTimer();
        }, 10);
    }
}
