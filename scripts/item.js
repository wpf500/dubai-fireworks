var Item = function (money) {
    'use strict';

    var interval;

    var items = [
        {'name': 'Buy a water handpump', 'icon': 'water', 'cost': 50},
        {'name': 'Repay a student\'s debt', 'icon': 'student', 'cost': 59100},
        {'name': 'Buy a house in Hammersmith', 'icon': 'house', 'cost': 753952},
        {'name': 'Buy a Bugati Veyron 16.4', 'icon': 'car', 'cost': 1300000},
        {'name': 'Film The Prestige', 'icon': 'film', 'cost': 40000000},
        {'name': 'Buy Cardiff City FC', 'icon': 'football', 'cost': 120000000},
    ];
    var list = new Ractive({
        'el': 'js-items',
        'template': document.getElementById('js-item').innerHTML,
        'data': {'items': items}
    });

    function tick() {
        items.forEach(function (item) {
            item.count = Math.floor(money.moneyCurrent / item.cost);
            list.update();
        });
    }

    this.start = function () {
        interval = setInterval(tick, 100);
    };

    this.stop = function () {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    }
};
