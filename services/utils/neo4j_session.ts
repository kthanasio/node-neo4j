const parser = require('parse-neo4j');
import { SessionInterface } from '../../interfaces/Session';

// class Session implements SessionInterface {
//     constructor(){
//         const PropertiesReader = require('properties-reader');
//         const prop = PropertiesReader('app.properties');
//         var getProperty = (pty) => {return prop.get(pty);}
        
//         const neo4j = require('neo4j-driver');
//         const url = getProperty('neo4j.url');
//         const user = getProperty('neo4j.user');
//         const password = getProperty('neo4j.password');
        
//         const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
//         const session = driver.session();
//     }

//     // async run (query_data: string,param: string) {

//     //     const resultado = await this.run(query_data,param);

//     //     resultado.then(data => { return data });
        
//     // }

// }

//export = Session;