// OOP - 4 factors of OOP
// 1. Inheritance - tinh ke thua
// 2. Encapsulation - tinh dong goi
// 3. Abstraction - Tinh truu tuong--->interface // Typescript
// 4. Polimophism - Tinh da hinh

//1. Class --> lop, co cac tinh chat chung(dai dien)
//2. Object --> la 1 thuc the, duoc lap thanh tu lop (instance);

// obj = "Hello OBJ";
// console.log(obj);

// Global Scope
// const carName  = 'Toyota';

class Car { // lop xe
    // Class Scope
    // SCOPE
    // carName = 'Honda'; // Thuoc tinh cua object
    // getName(carName = 'Vinfast'){ // function /method -- Local Scope
    //     let car = carName;
    //     car = 'My For'
    //     return car;
    //     // eslint will release error

    //     // Class Member Scope
    // }
    myName = 'Sheila'; // Bien Binh Thuong

    static getName(){ // Ham Bat Thuong (ham Static)
        return 'Static Member';
    }
    static getColor(){
        return Car.myColor;
    }

    static vichleName = "My Name Is Car";
    static myColor = "My COlor Is Coral";
    // static m = "My COlor Is Coral";

    getProp(){// Ham Binh thuong
        return 999;
    }

    getNum(){ // Ham Binh Thuong
        return this.getProp();// chuyen binh thuong, phuong phap cung binh thuong
    }
    getMyName(){// Ham Binh Thuong
        return Car.vichleName;
    }

    getDemoName(){
        return this.myName+'HEEEE';
    }

    static getStaticName(){// ham binh thuong
        const car = new Car();
        return car.getDemoName(); /// conflict logic

    }
    //1. Tu Ham Binh Thuong--> Thuoc Tinh Bat Thuong --> use Class to access static member
    //2. Tu Ham Bat Thuong Truy cap Thuoc Tinh Bat Thuong --> use Class To access static member(normal)
    //3. Tu Ham Bat Thuong truy cap Thuoc tinh Binh Thuong
}

const myCar = new Car(); // instance

// console.log(myCar.carName);
// console.log(myCar.getName());

// const myVar = myCar.carName;

// const myVar2 = myCar.getName('Huyndai');

// console.log(myVar2);
console.log(myCar.getMyName());

console.log(Car.getStaticName());
// console.log(Car.vichleName);