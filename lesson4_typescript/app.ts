//1. string
let str = 'my string'; // infererer;
let myStr: string;

//2. number
const num: number = 4; // explixit type
let myNum = 34; // infererer;
// myNum = 'hello';
// let x;

//3. boolean
let bool: boolean = true;
let myBool: boolean;
myBool = false;
// myBool.valueOf;
//5. undefined
let x;

let y = undefined;
if(!y){
    console.log('y is undefined');
}
//6. null
let xx = null;

//7. array
let arr = [];
// let myArr = Array(1,3,4,'goog', true, {id: 1});
let a = [1,2,3,4,5];
let arr1: string[] = ['mango', 'pinable', 'jack']; //
let arr2: Array<string> = ['mango', 'pinable', 'jack'];  /// generics 
// let arr3: Array<number> = [12,2,3,4, 'yes'];
//10. tupple
let tup: any[] = [1,2,3, 'vietnam', 'hanoi', true, 34]; // tupple
//11. union
let var1: number | string | boolean;
var1 =  4;
var1 = '9';
var1 = true;
// any;
let xxx: any;

xxx = 'string type';
xxx = {id: 1}
xxx = true;
// xxx = [12,3,4, 'gaegaw'];
xxx = 99.9869869689;
// xxx.toFix(2);
// xxx.
let myVar: any = {id: 1, name: 'My Variable', ages: 20};

// myVar.name = 'New Name';
// myVar.age = 9;
// let myAge = myVar.age;

//8. void

function getVal(x: string): void { // define return type
    let y = x;
    console.log(y);
    
    // return x;
}
// const getVals = (): string => {
//     return 'Toan';
// }

// let myName = getVal('Sheila');

// console.log(myName);

//9. never
// function nevFunc(): never {
//     throw Error('This is eror');
// }

// function nevFun(): never {
//     while(true){
//         console.log('alway true');
//         // break;
//     }
//     // throw Error('This is eror');
// }

// nevFun();

//4. object

let originArr = [22, 2, 3, 4, 5, 6, 1, 7, 8, 9];
let min: number;
for(let i = 0; i < originArr.length; i++){
    let minTemp = originArr[0];
    // console.log(minTemp);
    // break;
    // min = originArr[0];
    if(minTemp > originArr[i]){
        // console.log(minTemp); // 22
        // console.log(originArr[i]); /// 2
        
        minTemp = originArr[i];
    }
    min = minTemp;
    // console.log(minTemp);
    // console.log(min);
    // console.log(originArr[i]);
    
    
}

let minN= originArr.sort((a, b)=> a-b)[0];

// console.log(minN);
// console.log(originArr[0]);



// console.log(min);
// function getMin(arr: number[]){
//     let min = arr.sort((a, b) => a-b);
//     return min[0];
// }

// let newArr2 = [4,7,98,55,6,7,88];
// let minNumber = getMin(originArr);
// let minNumber2 = getMin(newArr2);

// console.log(minNumber2);
// enum

// const DAY_OF_WEEK = {
//     MON: 0,
//     TUE: 1
// }
enum DAY {
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun
}

// let today = DAY.sun;

// console.log(today);

// const myLuckyNumber = DAY.sat;

// console.log(myLuckyNumber);

// type casting--> type assertion

let myVar1: any;

// myVar1 = 'Hello Vietname';
// myVar1.

// myVar1 = {name: 'Sheila', age: 30, address: 'HCM'};

// myVar1.

// myVar1 = 'New Val';
// myVar1 = 34.468768967;
// let myNum2 = (myVar1 as number).toFixed(2);

// console.log((myVar1 as string).length);
// console.log(myNum2);

// type 

// tech lead
type YourType = {
    color: string;
}
type MyType = {
    id: number;
    name: string;
    age: number;
    address?: string;
    [key: string]: any; // where user can declare more properties
}

type NewType = YourType & MyType;
// type NewType = YourType | MyType;


// followers
let myValues: NewType = {
    id: 1,
    name: 'Sheila',
    age: 8,
    price: 9000,
    stock: 200,
    color: 'yello'
}

// let myValues3: NewType = {
// color: 'yello'
// }

// dung y lead
let myValues2: MyType = {
    id: 1,
    name: 'Sheila',
    age: 8,
    address: 'vietnam'
}