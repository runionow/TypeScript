var Shapes;
(function (Shapes) {
    var IRectangle = (function () {
        function IRectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return IRectangle;
    }());
    Shapes.IRectangle = IRectangle;
})(Shapes || (Shapes = {}));
//# sourceMappingURL=04-02-internal-modules.js.map