"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker/locale/pt_BR');
var product_model_1 = require("../../model/product.model");
var GetProperty_1 = require("../../services/utils/GetProperty");
var Products = { products: [] };
function FakeProductData() {
    return __awaiter(this, void 0, void 0, function () {
        var qty_products, i, _color, _product, _departamento, _productName, _productAdjective, _tamanho, _preco, _material, produto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, GetProperty_1.GetProperty('qty_products')
                        .then(function (a) { return a; })];
                case 1:
                    qty_products = _a.sent();
                    console.log("Quantidade de produtos: " + qty_products);
                    console.log('Creating Product Fake Data');
                    for (i = 1; i <= qty_products; i++) {
                        _color = faker.commerce.color();
                        _product = faker.commerce.product();
                        _departamento = faker.commerce.department();
                        _productName = faker.commerce.productName();
                        _productAdjective = faker.commerce.productAdjective();
                        _tamanho = (i % 8) + 1;
                        _preco = parseInt(faker.commerce.price(), 10);
                        _material = faker.commerce.productMaterial();
                        produto = new product_model_1.Product(i, _product, _color, _departamento, _productName, _preco, _productAdjective, _material, [{ chave: 'cor', valor: _color },
                            { chave: 'department', valor: _departamento },
                            { chave: 'productName', valor: _productName },
                            { chave: 'productAdjective', valor: _productAdjective },
                            { chave: 'tamanho', valor: _tamanho },
                            { chave: 'preco', valor: _preco },
                            { chave: 'material', valor: _material }]);
                        Products.products.push(produto);
                    }
                    return [2 /*return*/, Products];
            }
        });
    });
}
exports.FakeProductData = FakeProductData;
//FakeProductData().then(a=>console.log(a));
//# sourceMappingURL=fake.product.data.js.map