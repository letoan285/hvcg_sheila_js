//1. string
var str = 'my string'; // infererer;
var myStr;
//2. number
var num = 4; // explixit type
var myNum = 34; // infererer;
// myNum = 'hello';
// let x;
//3. boolean
var bool = true;
var myBool;
myBool = false;
// myBool.valueOf;
//5. undefined
var x;
var y = undefined;
if (!y) {
    console.log('y is undefined');
}
//6. null
var xx = null;
//7. array
var arr = [];
// let myArr = Array(1,3,4,'goog', true, {id: 1});
var a = [1, 2, 3, 4, 5];
var arr1 = ['mango', 'pinable', 'jack']; //
var arr2 = ['mango', 'pinable', 'jack']; /// generics 
// let arr3: Array<number> = [12,2,3,4, 'yes'];
//10. tupple
var tup = [1, 2, 3, 'vietnam', 'hanoi', true, 34]; // tupple
//11. union
var var1;
var1 = 4;
var1 = '9';
var1 = true;
// any;
var xxx;
xxx = 'string type';
xxx = { id: 1 };
xxx = true;
// xxx = [12,3,4, 'gaegaw'];
xxx = 99.9869869689;
// xxx.toFix(2);
// xxx.
var myVar = { id: 1, name: 'My Variable', ages: 20 };
// myVar.name = 'New Name';
// myVar.age = 9;
// let myAge = myVar.age;
//8. void
function getVal(x) {
    var y = x;
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
var originArr = [22, 2, 3, 4, 5, 6, 1, 7, 8, 9];
var min;
for (var i = 0; i < originArr.length; i++) {
    var minTemp = originArr[0];
    // console.log(minTemp);
    // break;
    // min = originArr[0];
    if (minTemp > originArr[i]) {
        // console.log(minTemp); // 22
        // console.log(originArr[i]); /// 2
        minTemp = originArr[i];
    }
    min = minTemp;
    // console.log(minTemp);
    // console.log(min);
    // console.log(originArr[i]);
}
var minN = originArr.sort(function (a, b) { return a - b; })[0];
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
var DAY;
(function (DAY) {
    DAY[DAY["mon"] = 0] = "mon";
    DAY[DAY["tue"] = 1] = "tue";
    DAY[DAY["wed"] = 2] = "wed";
    DAY[DAY["thu"] = 3] = "thu";
    DAY[DAY["fri"] = 4] = "fri";
    DAY[DAY["sat"] = 5] = "sat";
    DAY[DAY["sun"] = 6] = "sun";
})(DAY || (DAY = {}));
// let today = DAY.sun;
// console.log(today);
// const myLuckyNumber = DAY.sat;
// console.log(myLuckyNumber);
// type casting--> type assertion
var myVar1;
// myVar1 = 'Hello Vietname';
// myVar1.
// myVar1 = {name: 'Sheila', age: 30, address: 'HCM'};
// myVar1.
myVar1 = 'New Val';
myVar1 = 34.468768967;
var myNum2 = myVar1.toFixed(2);
console.log(myVar1.length);
console.log(myNum2);
