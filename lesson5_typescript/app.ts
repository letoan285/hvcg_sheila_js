// import { NameTypes, ENameTypes } from './Types';
// // 'Toan, Sheila, Xuan Phuc';
// /// get name function
// function getName(name: NameTypes): string {
//     return name;
// }
// // console.log(ENameTypes.TOAN); // toan

// console.log(getName(ENameTypes.TOAN));
// abstraction 

// abstract class Product {
//     name: string;
//     price: number;
//     constructor(){
//         this.name = 'Mango'
//     }
//     getName(){
//         return 'My Name Is Mango'
//     }
//     abstract getAge();
//     abstract getAll(); // function get all products
// }

// class Mango extends Product {
//    ownName = {id: 1, name: 'my name'}; // name nay ko duoc thay doi;
//     getAge(){}
//     getAll(){
//         return [
//             {id: 1, name: 'product'}
//         ];
//     }
//     // abstract getAllProps();
// }

// const banana = new Mango();
// banana.name = 'My Name Is NEw mango';
// banana.ownName.id = 2;

// console.log(banana.ownName.id);

// class Apple {
//     constructor(private name: string, public price: number){}
// }

// const smallApple = new Apple('Apple', 2000);

// // smallApple.name = 'Mys Small Apple';
// console.log(smallApple.price);

// gao, mango, wine, salt, orange.
/// 20000 25000 150k 12000, 45000-->tinh tong hoa don(bill)
//getRicePrice(5).getMangoPrice(6).getSaltPrice(3)---->bill--->total bill. chaining method

// function getMyname(){
//     return {
//         name: 'gaega'
//     }
// }
// getMyname().name; 

// class Bill {
//     public ricePrice = 20000; // per kg
//     public mangoPrice = 25000; // per kg
//     public winePrice = 15000; // per bottle
//     public saltPrice = 12000; // per kg
//     public orangePrice = 45000; // per kg
//     public bill = 0; // ban dau chua co gia tri//chua mat dong nao

//     getRicePrice(weight: number){
//         this.bill += this.ricePrice*weight;
//         return this;
//     }

//     getMangoPrice(weight: number){
//         this.bill += this.mangoPrice*weight;
//         return this;

//     }

//     getWinePrice(weight: number){
//         this.bill += this.winePrice*weight;
//         return this;

//     }

//     getSaltPrice(weight: number){
//         this.bill += this.saltPrice*weight;
//         return this;

//     }

//     getOrangePrice(weight: number){
//         this.bill += this.orangePrice*weight;
//         return this;
//     }
// }

// const myBill = new Bill()
// myBill.getRicePrice(2).getMangoPrice(4).bill;

// const myBill = new Bill();
// let bill = myBill.getRicePrice(5).getMangoPrice(6).getWinePrice(3).getSaltPrice(7).getOrangePrice(4).bill;
// console.log(bill);

// trong typescript interface va class co the trung ten nhau
// export interface Car {
//     price: number;
//     name: string;
//     supplier: string;
// }
// // neu class trung ten voi interface thi tu dong no se implement
// // khi export class or interface thi phai export cai con lai
// export class Car {
//     name = 'huyndai'
// }

// const myCar = new Car();
// myCar.supplier = 'Nhat ban';
// console.log(myCar.price= 566);

// trong typescript 1 interface co the extend 1 class
// class MyCar implements IMyCar {
//     color: string = 'yellow';
//     name = 'gaeg';
//     price = 900;
// }

// interface IMyCar extends Vehicle {
//     color: string;
// }

// ///
// class Vehicle implements IVehicle {
//     name: string = 'My Vihicle';
//     price  =9000;
// }

// interface IVehicle {
//     name: string;
//     price: number;
// }

// Generics
// function getVal(name: string): number | string | boolean {
//     // return 12;
//     if(name == 'toan'){
//         return name;
//     } else if (name ==='Someone'){
//         return ['y', 'gagw'];
//     }
//     return false;
// }

// function getVal<T>(name: T): T {
//     return name;
// }

// getVal<any[]>(['hello', 4, 'yes or now']);

// class Product <T, S, P>{
//     constructor(public name: T, public price: S,  public stock: P){}
// }


// // nguoi dev sau
// const apple = new Product<string, string, boolean>('Iphone 6', '1200', true);
// console.log(apple.name);
// console.log(apple.price);
// console.log(apple.stock);

// // nguoi dev sau
// const apple1 = new Product<number, string, string>(6, '1200', 'true');
// console.log(apple1.name);
// console.log(apple1.price);
// console.log(apple1.stock);

// advanced


namespace APP {
    export const app = {id: 2}

}

export const app = [{id: 1}];

const myApp = app;
const myApp2 = APP.app;


console.log(myApp[0]);
console.log(myApp2);


