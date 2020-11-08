function getBill(product: {id: string, name: string}){
    const price = 200;
    return product;
}


// tao co biet dau, thay ko bao loi gi
const myBill = getBill({id: 'gae', name: 'gaewga'});
console.log(myBill);
// Tuong lai