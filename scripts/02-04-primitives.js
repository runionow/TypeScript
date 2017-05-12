var primitive;
(function (primitive) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    // string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['John', 'Doe', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined 
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(primitive || (primitive = {}));
//# sourceMappingURL=02-04-primitives.js.map