var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log('Started');
        alert('Engine has been Started' + this.engine);
    };
    Car.prototype.stop = function () {
        console.log('Stopped');
        alert('engine has been Stopped' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var Engine = new Car('V8');
    Engine.start();
    Engine.stop();
};
//# sourceMappingURL=HelloWorld.js.map