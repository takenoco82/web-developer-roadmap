export class StopWatch {
    constructor() {
        console.log("constructor");
        this.timeFrames = [];
    }

    // 現在のタイムフレーム
    get lastTimeFrame() {
        if (this.timeFrames.length === 0) {
            return null;
        }
        return this.timeFrames.slice(-1)[0];
    }

    // ストップウォッチが動いているかどうか
    get isRunning() {
        // まだ開始すらしてない場合は false
        if (this.lastTimeFrame === null) {
            return false;
        }
        return this.lastTimeFrame.stoppedAt === null;
    }

    // 経過時間。単位はミリ秒。すべてのタイムフレームの経過時間の合計になる
    get elapsedTime() {
        return this.timeFrames.reduce((total, timeFrame) => {
            return total + timeFrame.elapsedTime;
        }, 0);
    }

    // 経過時間の hh部分
    get hours() {
        // 秒に変換
        const elapsedTimeSecond = Math.floor(this.elapsedTime / 1000);
        return Math.floor(elapsedTimeSecond / (60 * 60));
    }

    // 経過時間の mm部分
    get minutes() {
        const elapsedTimeSecond = Math.floor(this.elapsedTime / 1000);
        // hh部分の時間を引く
        const remain = elapsedTimeSecond - this.hours * (60 * 60);
        return Math.floor(remain / 60);
    }

    // 経過時間の ss部分
    get seconds() {
        const elapsedTimeSecond = Math.floor(this.elapsedTime / 1000);
        // hh部分、mm部分の時間を引く
        return elapsedTimeSecond - this.hours * (60 * 60) - this.minutes * 60;
    }

    // 経過時間の SSS 部分
    get milliseconds() {
        return this.elapsedTime % 1000;
    }

    start() {
        // すでに動いているので何もしない
        if (this.isRunning) {
            return false;
        }
        console.log("StopWatch#start");
        this.timeFrames.push(new TimeFrame());
        return true;
    }

    pause() {
        // まだ動いてないので何もしない
        if (!this.isRunning) {
            return false;
        }
        console.log("StopWatch#pause");
        this.lastTimeFrame.stop();
        return true;
    }

    reset() {
        console.log("StopWatch#reset");
        // タイムフレームを削除する
        this.timeFrames = [];
        return true;
    }
}

class TimeFrame {
    constructor() {
        this.startedAt = new Date();
        this.stoppedAt = null;
    }

    // 経過時間。単位はミリ秒
    get elapsedTime() {
        // 停止してない場合は 現在日時 - 開始日時
        if (this.stoppedAt === null) {
            return new Date() - this.startedAt
        }
        return this.stoppedAt - this.startedAt;
    }

    stop() {
        if (this.stoppedAt === null) {
            this.stoppedAt = new Date();
        }
        return this.elapsedTime;
    }
}
