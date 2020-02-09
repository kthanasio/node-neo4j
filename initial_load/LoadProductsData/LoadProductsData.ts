// tslint:disable: no-console
import { FakeProductData }  from '../FakeProductData/fake.product.data';
import PromisePool = require('@supercharge/promise-pool');
import _ = require('underscore');
import { RunLoad } from './RunLoad';
import { GetProperty } from '../../services/utils/GetProperty';
import { Now } from '../../services/utils/Now';

async function LoadProducts() {
    const params = {products:[]};
    const batchSize = await GetProperty('batch_size').then(a=>{return parseInt(a,10);});
    const products = await FakeProductData().then(produtos=>{return produtos;});
    const totalProdutos = _.keys(products.products).length;
    let i = 0;
    for (i=0;i<totalProdutos; i+=batchSize) {
        console.log(`${Now()} -  Step ${i} / ` + totalProdutos/batchSize);
        params.products = products.products.slice(i,i+Math.min(totalProdutos,batchSize));
        // console.log(JSON.stringify(params));
        await RunLoad(params)
                .then( a => {return a;})
                .catch(err=> {console.log(err)});
    }
}
LoadProducts().then(()=>{console.log('Completed');})