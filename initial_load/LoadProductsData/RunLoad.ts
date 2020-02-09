// tslint:disable: no-console
import { GetProperty } from '../../services/utils/GetProperty';
import PromisePool = require('@supercharge/promise-pool');

import neo4j = require('neo4j-driver');

async function RunLoad(params: any) {

    const url = await GetProperty('neo4j.url').then(a=>{return a;});
    const user = await GetProperty('neo4j.user').then(a=>{return a;});
    const password = await GetProperty('neo4j.password').then(a=>{return a;});

    const insertData =  `UNWIND $products AS produto MERGE (n:Product {sku: produto.sku})
                            ON CREATE SET n.data_criacao=date(), n.data_atualizacao=date()
                            ON MATCH SET n.data_atualizacao=date()
                            WITH n,
                            produto.atributos as atributos
                            UNWIND atributos as atributo
                            WITH n,
                            atributo,
                            'POSSUI_ATRIBUTO_' + toUpper(trim(atributo.chave)) as relacao,
                            apoc.text.upperCamelCase(trim(atributo.chave)) as label_atributo,
                            atributo.valor as valor_atributo
                            CALL apoc.merge.node([label_atributo],{valor: [valor_atributo]}) YIELD node
                            CALL apoc.merge.relationship(n,relacao, {}, {}, node) YIELD rel
                            RETURN n`;

    const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
    const session = driver.session();
    try {
        // console.log('Criando base no neo4j');
        const resultPromise = await session.run(insertData,params);
        session.close();
        driver.close();
        return resultPromise;

    } catch (error) {
        console.log(error);
        session.close();
        driver.close();
    }
}
export { RunLoad }