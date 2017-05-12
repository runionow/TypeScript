var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ExtendingTypes;
(function (ExtendingTypes) {
    var Auto = (function () {
        function Auto(engine) {
            this.engine = engine;
        }
        return Auto;
    }());
    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(engine, fourByFour) {
            var _this = 
            // The below super method will pass values to the constructor of Auto class.
            _super.call(this, engine) || this;
            _this.fourByFour = fourByFour;
            return _this;
        }
        return Truck;
    }(Auto));
})(ExtendingTypes || (ExtendingTypes = {}));
//# sourceMappingURL=03-03-extending-types.js.map