var Product = /** @class */ (function () {
    function Product() {
        // this.name = 'Samsung';
        this.getName();
        this.color = 'Yello';
    }
    Product.prototype.getName = function () {
        this.name = 'Iphone 6';
    };
    return Product;
}());
var iphone = new Product();
console.log(iphone.name);
console.log(iphone.color);
