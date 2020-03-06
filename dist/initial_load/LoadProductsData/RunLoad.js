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
Object.defineProperty(exports, "__esModule", { value: true });
const ExecutarCypherQuery_1 = require("../../services/utils/ExecutarCypherQuery");
function RunLoad(products) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertStat = `UNWIND $products AS produto MERGE (n:Product {sku: produto.sku})
                            ON CREATE SET n.data_criacao=date(), n.data_atualizacao=date()
                            ON MATCH SET n.data_atualizacao=date()
                        WITH n,produto.atributos as atributos
                        UNWIND atributos as atributo
                        WITH n,atributo,'POSSUI_ATRIBUTO_' + toUpper(trim(atributo.chave)) as relacao,
                            apoc.text.upperCamelCase(trim(atributo.chave)) as label_atributo,atributo.valor as valor_atributo
                        CALL apoc.merge.node([label_atributo],{valor: [valor_atributo]}) YIELD node
                        CALL apoc.merge.relationship(n,relacao, {}, {}, node) YIELD rel
                        RETURN n`;
        yield ExecutarCypherQuery_1.ExecutarCypherQuery(insertStat, products);
    });
}
exports.RunLoad = RunLoad;
//# sourceMappingURL=RunLoad.js.map