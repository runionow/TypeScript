var Shapes;
(function (Shapes) {
    var rectangle = (function () {
        function rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return rectangle;
    }());
    Shapes.rectangle = rectangle;
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var shape = new Shapes.rectangle(10);
var shape1 = new Shapes.Circle(10);
//# sourceMappingURL=04-01-modules.js.map