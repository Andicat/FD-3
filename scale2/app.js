/*Обеспечить наличие у яблок и помидор методов getScale и getName не наследованием от класса Product,
а реализацией интерфейса IScalable.
*/
var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function () {
        var _this = this;
        var productList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            productList[_i] = arguments[_i];
        }
        productList.forEach(function (p) { return _this.productsArr.push(p); });
    };
    Scales.prototype.getSumScale = function () {
        return this.productsArr.reduce(function (r, p) { return r + p.getScale(); }, 0);
    };
    Scales.prototype.getNameList = function () {
        return this.productsArr.map(function (p) { return p.getName(); });
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return 'Apple ' + this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return 'Tomato ' + this.name;
    };
    return Tomato;
}());
var scale = new Scales();
var apple1 = new Apple('green', 120);
var apple2 = new Apple('red', 160);
var apple3 = new Apple('big', 250);
var tomato1 = new Tomato('yellow', 50);
var tomato2 = new Tomato('black', 150);
var tomato3 = new Tomato('cherry', 40);
var tomato4 = new Tomato('green', 100);
scale.add(apple1, apple2, apple3, tomato1, tomato2, tomato3, tomato4);
var scaleList;
var scaleTotalWeight;
scaleList = scale.getNameList();
scaleTotalWeight = scale.getSumScale();
console.log('List of products: ', scaleList);
console.log('Total weight of products: ', scaleTotalWeight);
//# sourceMappingURL=app.js.map