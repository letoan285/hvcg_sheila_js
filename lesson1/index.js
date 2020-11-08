
// data type
// let,  const
// var,
// redeclare-
// 

//hoisting
// console.log(x); //wrong
// let x = 39;

// console.log(y); // wrong
// var y = 39;
// console.log(y); // wrong
// let x = 20;
// function getVal(){
//    let x = 50;
//     return x + 10;
// }

// let z = getVal();

// console.log(x);
// console.log(z);
// 
// let x = 20;
// let x: numuber; /// declare
// x = 20;//asign
// let x = 50;
// const x = 90;
// x = 50;
// primitive type, reference type


// Primitive type
let x = 10; //
let y = x;
y = 90;
console.log(x);


// reference type
let x1 = {name: 'Sheila', age: 20} //

let y1 = x1;

y1.age = 90;

console.log(x1);

// reference type--> momorize in heap
const intitialProduct = 100;//primitive typ-->memorize in stack

function getProduct(product){
    return product+20;
}

const samsung = getProduct(intitialProduct);

// const iphone = intitialProduct;

console.log(samsung);
console.log(intitialProduct);

// reference type --> heap
// let x = {
//     id: 1
// }

// // let x = 30;

// let y = () => {
//     return 3;
// }

// const val1 = 50;

// const val2 = () => {
//     return 50;
// }

// console.log(val1);
// console.log(val2());

// return, ko return;

// function getX(x){
//     console.log('the value is ==== ' + x);
//     return x * 2;
// }
// let yy = getX(4);

// console.log(yy);

// const getX = x => x*2;

// console.log(getX(9));

// higher order function --->

// const button = document.getElementById('btn');

// button.addEventListener('click', () => alert('hello Sheila'));
// pass function vs call function
// function hfunc 

// object destructuring 
const person = {
    name: 'Shaila',
    address: 'USA',
    family: ['brother', 'father']
} 


// const name = person.name;
// const address = person.address;
// const family = person.family;
// const family = 'home';

// const {name, address, family: myFamily} = person;
// console.log(name);
// console.log(address);
// console.log(myFamily);

// array destructugin

const myArr = ['Hanoi', 'Toan', 'Good'];

// const city = myArr[0];
// const name = myArr[1];
// const score = myArr[2];

// const address = myArr[3];
// eslint airbnb
// const [_, name, score] = myArr; // useState();

// console.log(name);

// // em khai bao
// function getVal (_, y){
//     return y*2;
// }

// anh su dung;
// console.log(getVal(6,5));

// const name = 'Toan';
// const age = 30;
// const address = 'Hanoi, Vietnam';
// const myInfo = 'no info';

// const mySelf = {
//     name,
//     age,
//     address,
//     infor: myInfo
// }

// console.log(mySelf);

// template leteral // backtick
// ```````````````

// console.log(`My Name is Sheila
// this year is 2000`);

// function getService(url){
//     return fetch(url);
// }
// let id = 3;
// let name = 'Vietnam'
// getService(`http://google.com/api/${id}/${name}`);

// rest operator, spread operator;...
// map, filter, sort, reducer
// const arr = [1, 3, 20, 5, 9, 50];

// sort
// const newArr = arr.sort((a, b) => a-b);
// console.log(newArr);

// map ko lam thay doi so luong phan tu
// let newArr = arr.map((element) => {
//     return element*2
// })
// console.log(arr);

// filter-->lam thay doi / rut gon so phan tu trong array

// const newAr = arr.filter(element=> element % 2==0) // single function

// console.log(newAr);

// reduce // giam so luong phan tu theo dieu kien, va lay ket qua--> 1 element


// const myArr1 = [1,3,5,7,9];

// let xx = myArr1.reduce((curr, acc) => curr+acc)

// console.log(xx);

// rest operator
// const doReducer = (...arr) => arr.reduce((curr, acc) => curr + acc);

// console.log(doReducer(1, 3, 5, 7, 9));


        
        // const iphone = getProducts(product);
        // console.log(product);
        // console.log(iphone);
        // object, array, function
        // , ten bien, vung nho, gia tri 2ex10hr = 90
        
        
        
        // deep copy, shallow copy
        // const product = {
        //     id: 1,
        //     name: 'iphone',
        //     price: 1200,
        //     category: {
        //         id: 1,
        //         name: 'Mobile'
        //     }
        // }

        // function getProducts(product){
        //     return {
        //             ...product, // clone--> deep or shallow
        //             name: 'Samsung',
        //             price: 900,
        //             category: {
        //                 id: 2,
        //                 name: 'Laptop'
        //             }
        //         }
        // }

        // let pro = product -->shallow copy;

        /// deep copy
        // const newP = JSON.parse(JSON.stringify(product)); // reference to same ram secment memory
        // newP.name = 'Samsung';
        // newP.price = 9999;
// const newproduct = getProducts(product);

// console.log(product);
// console.log(newproduct);

// console.log(1);
// console.log(2);
// console.log(3);

function getAsync1(){
   
    setTimeout(() => {
        console.log(' 1');
    }, 0)
 
}

function getAsync2(){
    setTimeout(() => {
        let x = 30;
        console.log(' 2');
    })
}

function getAsync3(){

        console.log(' 3');
}
// que
getAsync1();
getAsync2();
getAsync3();

// giai quyet async nhu the nao?