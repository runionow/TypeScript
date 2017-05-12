var InterfaceType;
(function (InterfaceType) {
    var squareIt = function (num) { return num * num; };
    var squareItBasic = function (num) { return num * num; };
    // For more refer to 02-06
    var squareIT;
    var rectA = { h: 9 };
    var rectB = { h: 9, w: 10 };
    squareIT = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var p = {
        name: 'Arun',
        age: 40,
        kids: 2,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
})(InterfaceType || (InterfaceType = {}));
//# sourceMappingURL=02-07-Interfaces.js.map