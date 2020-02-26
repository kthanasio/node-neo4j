import PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');

async function GetProperty (p: string) {
    return prop.get(p);
}

export { GetProperty };