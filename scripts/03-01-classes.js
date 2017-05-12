var ClassTutorial;
(function (ClassTutorial) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        return Engine;
    }());
    var Car = (function () {
        function Car(engine) {
            this._engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value === undefined)
                    throw 'Supply a Engine !';
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        Car.prototype.start = function () {
            console.log('Engine has been started !');
        };
        Car.prototype.stop = function () {
            console.log('Engine has been switched off !');
        };
        return Car;
    }());
})(ClassTutorial || (ClassTutorial = {}));
window.onload = function () {
    var Engine = new Engine(512, 'V8');
    var Car = new Car(Engine);
    Car.start();
};
//# sourceMappingURL=03-01-classes.js.map