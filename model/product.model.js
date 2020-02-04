"use strict";
exports.__esModule = true;
// var atributoType = {
//         chave: string;
//         valor: string;
// }
var Product = /** @class */ (function () {
    function Product(sku, product, color, dco, name, price, marca, material, atributos) {
        this.sku = sku;
        this.product = product;
        this.color = color;
        this.dco = dco;
        this.name = name;
        this.price = price;
        this.marca = marca;
        this.material = material;
        this.atributos = atributos;
    }
    return Product;
}());
exports.Product = Product;
console.log('1. ###### PRODUCT MODEL');
