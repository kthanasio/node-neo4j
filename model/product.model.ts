// var atributoType = {
//         chave: string;
//         valor: string;
// }
class Product {
        sku: string;
        product: string;
        color: string;
        dco: string;
        name: string;
        price: number;
        marca: string;
        material: string;
        atributos: [{chave, valor}];
        constructor(sku,
                    product,
                    color,
                    dco,
                    name,
                    price,
                    marca,
                    material,
                    atributos){
            this.sku = sku;
            this.product= product;
            this.color = color;
            this.dco = dco;
            this.name = name;
            this.price = price;
            this.marca = marca;
            this.material = material;
            this.atributos = atributos;

        }
}
console.log('1. ###### PRODUCT MODEL');
export { Product };

function newFunction() {
        "use strict";
}
