const ConvertQueryToCypher = require ('../utils/convert_query_to_cypher');

const entrada = {"label":"cor",
                 "cond": "$eq",
                 "valor": "red"}
const converte = ConvertQueryToCypher(entrada);
converte.then((a)=>{console.log(a)})

//console.log(converte);