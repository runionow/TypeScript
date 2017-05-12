var ObjectTypes;
(function (ObjectTypes) {
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log(rectangle.calcArea());
    var squareIT = function (x) {
        return x * x;
    };
    var val1 = squareIT(2);
    console.log(val1);
    val1 = squareIT(8);
    console.log(val1);
    var squareIT1 = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
})(ObjectTypes || (ObjectTypes = {}));
//# sourceMappingURL=02-05-objectTypes.js.map