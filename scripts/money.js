var Money = function (timeTotal, moneyTotal) {
    'use strict';

    var that = this;
    var interval;

    var timeStep = 200;
    var moneyStep = Math.round(timeStep / timeTotal * moneyTotal);

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
        that.moneyCurrent = Math.min(that.moneyCurrent + moneyStep, moneyTotal);
        moneyElement.textContent = pad(that.moneyCurrent);
        progressElement.style.width = (that.moneyCurrent / moneyTotal * 100) + '%';

        if (that.moneyCurrent >= moneyTotal) {
            that.stop();
        }
    }

    this.start = function () {
        that.moneyCurrent = 0;
        interval = setInterval(tick, timeStep);
    };

    this.stop = function () {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    };
};
