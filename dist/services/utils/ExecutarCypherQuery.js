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
// tslint:disable:no-console
const neo4j = require("neo4j-driver");
const parser = require("parse-neo4j");
const GetProperty_1 = require("./GetProperty");
function ExecutarCypherQuery(query, p) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = yield GetProperty_1.GetProperty('neo4j.url').then(a => a.toString());
        const user = yield GetProperty_1.GetProperty('neo4j.user').then(a => a.toString());
        const password = yield GetProperty_1.GetProperty('neo4j.password').then(a => a.toString());
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();
        const resultado = session.run(query, p)
            .then(parser.parse)
            .catch((error) => {
            console.log(error);
            return error;
        })
            .finally(() => {
            driver.close();
            session.close();
        });
        return resultado;
    });
}
exports.ExecutarCypherQuery = ExecutarCypherQuery;
//# sourceMappingURL=ExecutarCypherQuery.js.map