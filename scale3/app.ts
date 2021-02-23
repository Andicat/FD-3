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

interface IStorageEngine {
    addItem(item:Product):void; 
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {
    
    storageEngine:StorageEngine;

    constructor(_storageEngine:StorageEngine) {
        this.storageEngine = _storageEngine;
    }

    add(item:Product):void {
        this.storageEngine.addItem(item);
    }

    getSumScale():number {
        let sumScale = 0;
        for (let i=0; i< this.storageEngine.getCount();i++) {
            sumScale += this.storageEngine.getItem(i).getScale();
        }
        return sumScale;
    }

    getNameList():string {
        let nameList:Array<string> = [];
        for (let i=0; i< this.storageEngine.getCount();i++) {
            nameList.push(this.storageEngine.getItem(i).getName());
        }
        return nameList.join(', ');
    }
    
}

class ScalesStorageEngineArray implements IStorageEngine {

    storage:Array<Product>;

    constructor() {
        this.storage = [];
    }

    addItem(_item:Product):void {
        this.storage.push(_item);
    };

    getItem(_index:number):Product {
        return this.storage[_index];
    };

    getCount():number {
        return this.storage.length;
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    storageName:string;

    constructor(_storageName:string) {
        this.storageName = _storageName;
        localStorage.setItem(this.storageName,JSON.stringify([]));
    }

    private getLsData():Array<object> {
        let ls = localStorage.getItem(this.storageName);
        let dataLs = [];
        if (ls) {
            dataLs = JSON.parse(ls);
        }
        return dataLs;
    }

    addItem(_item:Product):void {
        let dataLs = this.getLsData();
        dataLs.push(_item);
        localStorage.setItem(this.storageName,JSON.stringify(dataLs));
    };

    getItem(_index:number):Product {
        let ls = localStorage.getItem(this.storageName);
        let dataLs = [];
        if (ls) {
            dataLs = JSON.parse(ls);
        }
        let productName = dataLs[_index].name;
        let productWeight = dataLs[_index].weight;
        let product = new Product(productName,productWeight);
        return product;
    };

    getCount():number {
        let dataLs = this.getLsData();
        return dataLs.length;
    };
}

class Product {

    private name:string;
    private weight:number;

    constructor(_name:string,_weight:number) {
        this.name=_name;
        this.weight=_weight;
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }
}

let product1 = new Product('green apple',120);
let product2 = new Product('red apple',160);
let product3 = new Product('big apple',250);
let product4 = new Product('black tomato',150);
let product5 = new Product('cherry tomato',40);
let product6 = new Product('green tomato',100);

let scale1 = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray);
scale1.add(product1);
scale1.add(product2);
scale1.add(product3);
scale1.add(product4);
scale1.add(product5);
scale1.add(product6);

let scaleList1:string = scale1.getNameList();
let scaleSum1:number = scale1.getSumScale();
console.log('Scale1. List of products on scale: ',scaleList1);
console.log('Scale1. Total weight of products: ',scaleSum1);

let scale2 = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage('ScalesStorageEngineLocalStorage'));
scale2.add(product1);
scale2.add(product2);
scale2.add(product3);
scale2.add(product4);
scale2.add(product5);
scale2.add(product6);

let scaleList2:string = scale2.getNameList();
let scaleSum2:number = scale2.getSumScale();
console.log('Scale2. List of products on scale: ',scaleList2);
console.log('Scale2. Total weight of products: ',scaleSum2);
