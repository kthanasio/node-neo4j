// tslint:disable:no-console
import express = require('express');
import bodyParser = require('body-parser');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
      info: {
          description: 'This is a sample server',
          title: 'Swagger',
          version: '1.0.0',
      },
      host: 'localhost:3000',
      basePath: '/',
      produces: [
          "application/json"
      ],
      schemes: ['http']
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
};

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true
}));

import {router as categoryRouter} from './routes/category.routes';
import {router as productRouter} from './routes/product.routes';
app.use('/products',productRouter);
app.use('/categories',categoryRouter);

expressSwagger(options)
app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});