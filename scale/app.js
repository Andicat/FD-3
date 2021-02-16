/*Разработать класс Весы (Scales), имеющий:
массив добавленных на весы Продуктов (объектов класса Product);
метод add для добавления нового Продукта на весы;
метод getSumScale для получения суммарного веса добавленных Продуктов;
метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
Добавляемые методом add Продукты (объекты класса Product) должны иметь методы getScale и getName.
Разработать минимум два различных класса продуктов (например, Яблоко (Apple) и Помидор (Tomato)),
наследующих от Product методы getScale и getName.
Создать объект класса Весы.
Создать несколько объектов классов Яблоко, Помидор и т.д.
с различными именами и весами, добавить их на весы, выдать в консоль результат работы методов getSumScale и getNameList.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        return this.weight;
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return 'Apple ' + this.name;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    Tomato.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return 'Tomato ' + this.name;
    };
    return Tomato;
}(Product));
var scale = new Scales();
//scale.getNameList();
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