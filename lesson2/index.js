const products = [
    {id: 1, name: 'Product 1', price: 1200, stock: 20},
    {id: 2, name: 'Product 2', price: 1600, stock: 20}
];

function getProducts(products){
    let output = "";
    products.forEach((item) => {
        output+= `
                <li>product name: ${item.title} -  Price: ${item.body}</li>
            `;
    });

    document.body.innerHTML= output;
}

// function createProduct(product, callback){
//    setTimeout(() => {
//        products.push(product);

//        callback(products);
       
//     }, 1000);
    
// }

// createProduct({id: 3, name: 'Product 3', price: 7000, stock: 23}, getProducts);

// getProducts(products);

// ES5 < 2015
// callback
// Promise--> es6: resolve, reject
// asyn/await
// generator

// let x = 1;
// function getPromise(){
//     const isLier = true;
//     if(isLier){
//         return Promise.reject('Something Wrong');
//     } else {

//         return Promise.resolve(x+9);
//     }
// }

// getPromise().then((res)=> {
//     console.log(res)
// }).catch(err => console.log(err));
// function createProduct(product){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             products.push(product);
//             resolve(products);
//         }, 3000);
//     })
    
// }

// createProduct({id: 3, name: 'product 3', price: 999, stock: 22}).then((response) => {
//     getProducts(response);
// })

// function getProductList(){
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then((res) => {
//             resolve(res);
//         }).catch(err => reject(err))
//     })
    
// }

// getProductList().then((res) => {
//     getProducts(res);
// })

// Ham asyn ko return value, instead return Promise
// async function getVal(){
//     return 20;
// }

//

// getVal().then((res) => {
//     console.log(9+1+res);
// })

// function getDefault(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(40);
//         }, 2000)
//     })
   
// }

// async function getNum(){
//     const x = await getDefault();
//     return 5+x;
// }

// getNum().then((res) => {
//     console.log(res)
// });


// Generator
// function* myFunc(){
//     yield 1;
//     yield console.log('Normal Runc 2');
//     yield console.log('Normal Runc 3');
//     yield console.log('Normal Runc 4');
// }
    

// myFunc().next((x) => console.log('xx', x));
// redux-saga--> generator
// rxjs
// redux-think, 
// redux-observable
