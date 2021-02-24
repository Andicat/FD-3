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

class Scales {
    
    productsArr:Array<Product>;

    constructor() {
        this.productsArr = [];
    }

    add(...productList:Product[]):void {
        productList.forEach((p:Product) => this.productsArr.push(p));
    }

    getSumScale():number {
        return this.productsArr.reduce( (r:number,p:Product) => r + p.getScale(),0);
    }

    getNameList():Array<string> {
        return this.productsArr.map((p:Product) => p.getName());
    }
    
}

class Product {

    name:string;
    weight:number;

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

class Apple extends Product {

    constructor(_name:string,_weight:number) {
        super(_name,_weight); 
    }

    getScale():number {
        super.getScale();
        return this.weight;
    }

    getName():string {
        super.getName();
        return 'Apple ' + this.name;
    }
}

class Tomato extends Product {

    constructor(_name:string,_weight:number) {
        super(_name,_weight); 
    }

    getScale():number {
        super.getScale();
        return this.weight;
    }

    getName():string {
        super.getName();
        return 'Tomato ' + this.name;
    }
}

let scale:Scales = new Scales();
//scale.getNameList();

let apple1:Apple = new Apple('green',120);
let apple2:Apple = new Apple('red',160);
let apple3:Apple = new Apple('big',250);

let tomato1:Tomato = new Tomato('yellow',50);
let tomato2:Tomato = new Tomato('black',150);
let tomato3:Tomato = new Tomato('cherry',40);
let tomato4:Tomato = new Tomato('green',100);

scale.add(apple1,apple2,apple3,tomato1,tomato2,tomato3,tomato4);

let scaleList:Array<string>;
let scaleTotalWeight:number;

scaleList = scale.getNameList();
scaleTotalWeight = scale.getSumScale();

console.log('List of products: ',scaleList);
console.log('Total weight of products: ',scaleTotalWeight);
