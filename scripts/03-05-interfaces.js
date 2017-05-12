var interfaces;
(function (interfaces) {
    var Auto = (function () {
        function Auto(data, engineType) {
            this.engine = data.engine;
            this.basePrice = data.basePrice;
            this.state = data.state;
            this.engineType = engineType;
        }
        Auto.prototype.stop = function (callback) {
            var _this = this;
            window.setTimeout(function () { callback(true, _this.engineType); }, 1000);
        };
        Auto.prototype.start = function (callback) {
            var _this = this;
            window.setTimeout(function () { callback(true, _this.engineType); }, 1000);
        };
        return Auto;
    }());
})(interfaces || (interfaces = {}));
//# sourceMappingURL=03-05-interfaces.js.map