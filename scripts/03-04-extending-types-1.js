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
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        Engine.prototype.start = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        Engine.prototype.stop = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return Engine;
    }());
    var Accesory = (function () {
        function Accesory(accesoryNumber, title) {
            this.accesoryNumber = accesoryNumber;
            this.title = title;
        }
        return Accesory;
    }());
    var Auto = (function () {
        function Auto(basePrice, engine, make, model) {
            this._engine = engine;
            this._basePrice = basePrice;
            this.make = make;
            this.model = model;
        }
        Auto.prototype.calculateTotal = function () {
            var taxRate = 0.08;
            return this._basePrice + (taxRate * this._basePrice);
        };
        Auto.prototype.addAccessories = function () {
            var accessories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accessories[_i] = arguments[_i];
            }
            this.accessoryList = '';
            for (var i = 0; i < accessories.length; i++) {
                var ac = accessories[i];
                this.accessoryList += ac.accesoryNumber + ' ' + ac.title + '<br />';
            }
        };
        Auto.prototype.getAccesoryList = function () {
            return this.accessoryList;
        };
        Auto.prototype.getBasePrice = function () {
            return this._basePrice;
        };
        Auto.prototype.setBasePrice = function (value) {
            if (value === undefined)
                throw 'Please input Value !';
            else {
                this._basePrice = value;
            }
        };
        Auto.prototype.getEngine = function () {
            return this._engine;
        };
        Auto.prototype.setEngine = function (value) {
            if (value === undefined)
                throw 'Input an Engine Object !';
            else {
                this._engine = value;
            }
        };
        return Auto;
    }());
    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
            var _this = _super.call(this, basePrice, engine, make, model) || this;
            _this.bedLength = bedLength;
            _this.fourByFour = fourByFour;
            return _this;
        }
        return Truck;
    }(Auto));
})(ExtendingTypes || (ExtendingTypes = {}));
window.onload = function () {
    var auto = new Auto(4000, new Engine(300, 'V8'), 'Chevy', 'Silverado');
    alert(auto.engine.engineType);
};
//# sourceMappingURL=03-04-extending-types-1.js.map