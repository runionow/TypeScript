var CastingTypes;
(function (CastingTypes) {
    var Casting = (function () {
        function Casting(xId, yId, outputId) {
            this.z = document.getElementById(xId);
            this.y = document.getElementById(yId);
            this.output = document.getElementById(outputId);
            this.writeEvents();
        }
        Casting.prototype.add = function (x, y) {
            return x + y;
        };
        Casting.prototype.subtract = function (X, y) {
            return x - y;
        };
        Casting.prototype.writeEvents = function () {
            var _this = this;
            document.getElementById('Add').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.add(parseInt(_this.z.value), parseInt(_this.y.value)).toString();
            });
            document.getElementById('Subtract').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.subtract(parseInt(_this.z.value), parseInt(_this.y.value)).toString();
            });
        };
        return Casting;
    }());
})(CastingTypes || (CastingTypes = {}));
//# sourceMappingURL=03-02-casting-types.js.map