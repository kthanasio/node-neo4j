// tslint:disable:no-console
import express = require('express');
import bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true
}));

import {router as categoryRouter} from './routes/category.routes';
import {router as productRouter} from './routes/product.routes';
app.use('/products',productRouter);
app.use('/categories',categoryRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});