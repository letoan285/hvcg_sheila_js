// class Animal {
//     color = 'Grey'; // public

//     #flyable = 'Yes';// private

//     getName(){
//         return 'Animal';
//     }
//     getFly(){
//         return this.#flyable;
//     }
// }

// class Dog extends Animal {// ke thua
//     getAnimalName(){
//         // return this.#flyable;
//     }
// }

// // global
// const milu = new Dog();
// milu.color = 'REEEED'
// // Ke Thuc cho bang het
// // Ke thua chi su dung(ke thua co dieu kien)
// // Ke thua ko lam duoc gi

// console.log(milu.getFly());

// C++ multible inheritance -->hard

// class Animal {
//     weight = 0;
//     height = 0;
//     eat(food){
//         // this.height = food
//         return 'I Eat Food';
//     }
// }

// class Dog extends Animal {
//     eat(food){
//         this.weight = food*2;
//         this.height = food + 10;
//     }
// }


// class Cat extends Animal {
//     eat(food){
//         this.height = food;
//         this.weight = food*1.5;
//     }
// }

// const milu = new Dog();
// milu.eat(9);


// const meow = new Cat();
// meow.eat(9);

// console.log(milu.height);
// console.log(meow.height);

// //
// console.log(milu.weight);
// console.log(meow.weight);
