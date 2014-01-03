var Photo = function (timeTotal) {
    'use strict';

    var timeout;

    var photoFrames = document.getElementsByClassName('photo');
    var topFrame = true;

    var photos = [
        'dubai1.jpg',
        'dubai2.jpg',
        'dubai3.jpg',
        'dubai4.jpg',
        'dubai5.jpg'
    ];
    var timings = [0, 20, 20, 20, 20].map(function (time) {
        return timeTotal * time / 100;
    });
    var current = 0;

    function tick() {
        photoFrames[topFrame ? 0 : 1].src = 'images/' + photos[current];
        photoFrames[1].style.opacity = topFrame ? 0 : 1;
        topFrame = !topFrame;

        if (++current < photos.length) {
            setTimeout(tick, timings[current]);
        }
    }

    this.start = function () {
        current = 0;
        setTimeout(tick, timings[0]);
    };

    this.stop = function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
    };
};
