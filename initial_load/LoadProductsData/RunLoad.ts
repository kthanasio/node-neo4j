// tslint:disable: no-console
import { ExecutarCypherQuery } from '../../services/utils/ExecutarCypherQuery';

async function RunLoad(products: any) {

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

    await ExecutarCypherQuery(insertStat,products);
}
export { RunLoad }