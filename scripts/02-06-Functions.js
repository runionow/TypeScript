var FunctionType;
(function (FunctionType) {
    var squareITSimple = function (h, w) {
        return h * w;
    };
    // Arrow Functions
    var squareITSimplest = function (h, w) { return h * w; };
    // Function Declaration
    var helloWorld;
    // Function Definition
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'Unknown Person'));
    };
    helloWorld();
    helloWorld('John');
    var squareIT;
    var rectA = { h: 9 };
    var rectB = { h: 9, w: 10 };
    squareIT = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIT(rectA));
    console.log(squareIT(rectB));
})(FunctionType || (FunctionType = {}));
//# sourceMappingURL=02-06-Functions.js.map