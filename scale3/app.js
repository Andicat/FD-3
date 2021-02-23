/*Создать проект Scales3 (весы) на основе проекта Scales.
Класс Scales должен быть параметризован StorageEngine — способом хранения добавленных на весы элементов.
StorageEngine должен реализовывать интерфейс IStorageEngine с методами addItem(item), getItem(index), getCount().
Разработать несколько классов с различными способами хранения:
ScalesStorageEngineArray — для хранения в Array<тип>;
ScalesStorageEngineLocalStorage — для хранения в localStorage.
Создать несколько Весов с различными способами хранения, добавить на каждые весы несколько элементов,
выдать в консоль результат работы методов getSumScale и getNameList.

Продукты не делить на яблоки/помидоры, работать просто с классом Product.
Ни сами весы, ни механизмы хранения не нужно параметризовать тем, что именно в них хранится,
 «захардкодить» что хранится именно Product.
В классе Product публичных свойств не использовать, только публичные методы.

Прислать на проверку на адрес loktev.alex.74@gmail.com ссылку на git-репозиторий и имя папки с выполненным домашним заданием.
*/
var Scales = /** @class */ (function () {
    function Scales(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    Scales.prototype.add = function (item) {
        this.storageEngine.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            sumScale += this.storageEngine.getItem(i).getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            nameList.push(this.storageEngine.getItem(i).getName());
        }
        return nameList.join(', ');
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (_item) {
        this.storage.push(_item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (_index) {
        return this.storage[_index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage(_storageName) {
        this.storageName = _storageName;
        localStorage.setItem(this.storageName, JSON.stringify([]));
    }
    ScalesStorageEngineLocalStorage.prototype.getLsData = function () {
        var ls = localStorage.getItem(this.storageName);
        var dataLs = [];
        if (ls) {
            dataLs = JSON.parse(ls);
        }
        return dataLs;
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (_item) {
        var dataLs = this.getLsData();
        dataLs.push(_item);
        localStorage.setItem(this.storageName, JSON.stringify(dataLs));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (_index) {
        var ls = localStorage.getItem(this.storageName);
        var dataLs = [];
        if (ls) {
            dataLs = JSON.parse(ls);
        }
        var productName = dataLs[_index].name;
        var productWeight = dataLs[_index].weight;
        var product = new Product(productName, productWeight);
        return product;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var dataLs = this.getLsData();
        return dataLs.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
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
var product1 = new Product('green apple', 120);
var product2 = new Product('red apple', 160);
var product3 = new Product('big apple', 250);
var product4 = new Product('black tomato', 150);
var product5 = new Product('cherry tomato', 40);
var product6 = new Product('green tomato', 100);
var scale1 = new Scales(new ScalesStorageEngineArray);
scale1.add(product1);
scale1.add(product2);
scale1.add(product3);
scale1.add(product4);
scale1.add(product5);
scale1.add(product6);
var scaleList1 = scale1.getNameList();
var scaleSum1 = scale1.getSumScale();
console.log('Scale1. List of products on scale: ', scaleList1);
console.log('Scale1. Total weight of products: ', scaleSum1);
var scale2 = new Scales(new ScalesStorageEngineLocalStorage('ScalesStorageEngineLocalStorage'));
scale2.add(product1);
scale2.add(product2);
scale2.add(product3);
scale2.add(product4);
scale2.add(product5);
scale2.add(product6);
var scaleList2 = scale2.getNameList();
var scaleSum2 = scale2.getSumScale();
console.log('Scale2. List of products on scale: ', scaleList2);
console.log('Scale2. Total weight of products: ', scaleSum2);
//# sourceMappingURL=app.js.map