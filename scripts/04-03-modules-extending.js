var com;
(function (com) {
    var runionow;
    (function (runionow) {
        var utils;
        (function (utils) {
            var shape;
            (function (shape) {
                var Rectangle = (function () {
                    function Rectangle(height, width) {
                        this.height = height;
                        this.width = width;
                    }
                    Rectangle.prototype.getArea = function () {
                        return this.height * this.width;
                    };
                    return Rectangle;
                }());
                shape.Rectangle = Rectangle;
            })(shape = utils.shape || (utils.shape = {}));
        })(utils = runionow.utils || (runionow.utils = {}));
    })(runionow = com.runionow || (com.runionow = {}));
})(com || (com = {}));
var arun = com.runionow.utils;
var arun1 = new arun.shape.Rectangle(10, 20);
//# sourceMappingURL=04-03-modules-extending.js.map