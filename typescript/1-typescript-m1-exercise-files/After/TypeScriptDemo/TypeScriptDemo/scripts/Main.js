// Module
var Shapes;
(function (Shapes) {
    // Class
    var Point = (function () {
        // Constructor
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        // Instance member
        Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
        return Point;
    }());
    // Static member
    Point.origin = new Point(0, 0);
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));
// Local variables
var p = new Shapes.Point(3, 4);
var dist = p.getDist();
//# sourceMappingURL=Main.js.map