// tslint:disable:no-console
import neo4j = require('neo4j-driver');
import parser = require('parse-neo4j');
import { GetProperty } from './GetProperty';

async function ExecutarCypherQuery (query: string,p?: any) {
    const url = await GetProperty('neo4j.url').then(a=>a.toString());
    const user = await GetProperty('neo4j.user').then(a=>a.toString());
    const password = await GetProperty('neo4j.password').then(a=>a.toString());

    const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
    const session = driver.session();

    const resultado = session.run(query,p)
                             .then(parser.parse)
                             .catch((error) => {
                                                  console.log(error);
                                                  return error;
                                                })
                             .finally(()=>{
                                            driver.close();
                                            session.close();
                                           });

    return resultado;
}
export { ExecutarCypherQuery }