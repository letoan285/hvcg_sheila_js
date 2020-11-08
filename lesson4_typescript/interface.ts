interface IProduct {
    id: number;
    name: string;
    price: string;
    color?: string;
    getPrice: (price: number) => number;
}

const Car: IProduct  = {
    id: 3,
    name: 'iphone',
    price: '800',
    color: 'yello',
    getPrice: (price: number) => {
        return price;
    }
}

interface IMyProduct extends IProduct {}

interface IYourProduct extends IMyProduct, IProduct {}

// const myProduct2: IYourProduct = {
//     id: 2,
//     name: 'product',
//     // price: 23,
//     color: 'red',
// }