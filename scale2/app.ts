/*Обеспечить наличие у яблок и помидор методов getScale и getName не наследованием от класса Product, 
а реализацией интерфейса IScalable.
*/

class Scales {
    
    productsArr:Array<IScalable>;

    constructor() {
        this.productsArr = [];
    }

    add(...productList:Array<IScalable>):void {
        productList.forEach((p:IScalable) => this.productsArr.push(p));
    }

    getSumScale():number {
        return this.productsArr.reduce((r:number,p) => r + p.getScale(),0);
    }

    getNameList():Array<string> {
        return this.productsArr.map((p:IScalable) => p.getName());
    }
    
}

interface IScalable {
    getScale():number; 
    getName():string;
}


class Apple implements IScalable {

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
        return 'Apple ' + this.name;
    }
}

class Tomato implements IScalable {

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
        return 'Tomato ' + this.name;
    }
}

let scale:Scales = new Scales();

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
