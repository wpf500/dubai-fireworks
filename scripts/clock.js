var Clock = function (timeTotal, speed) {
    var that = this;
    var clockElement = document.getElementById('js-clock');
    var interval;
    var time = 0;

    function pad(val) {
        if (val <= 9) {
            return "0" + val;
        } else {
            return val;
        }
    }

    function tick() {
        var secs = ++time % 60;
        var mins = Math.floor(time / 60);
        clockElement.textContent = pad(mins) + ':' + pad(secs);

        if (time >= timeTotal) {
            that.stop();
        }
    }

    this.start = function () {
        time = 0;
        clockElement.textContent = '00:00';
        interval = setInterval(tick, 1000 / speed);
    };

    this.stop = function () {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    };
};
