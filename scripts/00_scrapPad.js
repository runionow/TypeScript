var rambo = function (startButton, pauseButton, clearButton) {
    document.getElementById(startButton).
        addEventListener("click", startTimer, false);
    document.getElementById(pauseButton).
        addEventListener("click", pauseTimer, false);
    document.getElementById(clearButton).
        addEventListener("click", clearTimer, false);
    displayTimer();
};
var myAdd = function (x, y) { return x + y; };
rambo('startButton', 'pauseButton', '115');
//# sourceMappingURL=00_scrapPad.js.map