var Money = function (timeTotal, moneyTotal) {
    var that = this;
    var interval;

    var timeStep = 200;
    var moneyStep = Math.round(timeStep / timeTotal * moneyTotal);

    var moneyCurrent = 0;

    var moneyElement = document.getElementById('js-money');
    var progressElement = document.getElementById('js-progress');

    var pad = (function () {
        var len = (moneyTotal + "").length;
        return function (val) {
            val += "";
            while (val.length < len) {
                val = "0" + val;
            }
            return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    })();

    function tick() {
        moneyCurrent = Math.min(moneyCurrent + moneyStep, moneyTotal);
        moneyElement.textContent = pad(moneyCurrent);
        progressElement.style.width = (moneyCurrent / moneyTotal * 100) + '%';

        if (moneyCurrent >= moneyTotal) {
            that.stop();
        }
    }

    this.start = function () {
        interval = setInterval(tick, timeStep);
    };

    this.stop = function () {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    };
};
