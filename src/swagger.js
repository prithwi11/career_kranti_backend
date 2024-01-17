const swaggerAutogen = require('swagger-autogen')({openapi : '3.0.0'});
const fs = require('fs')
const config = require('./config')
const CONTROLLER_PATH = config.CONTROLLER_PATH
const path = require('path')

let fileArr = []
try {
    const files = fs.readdirSync(CONTROLLER_PATH);
    files.forEach(file => {
        console.log('file', file)
        let pushFile = path.join(CONTROLLER_PATH, file);
        fileArr.push(pushFile);
    });
} catch (err) {
    console.error('err', err);
}
const doc = {
  info : {
    version : '1.0.0',
    title : 'REST API Documentation',
    description : 'Check for all the API details'
  },
  servers : [
    {
      url : 'http://localhost:5500',
      description : ''
    }
  ],
  tags : [
    {
      name : 'Sample Tag',
      description : 'Sample Tag Description'
    },
  ],
  components : {}
}

const outputFile = './swagger-output.json';
const routes = fileArr;

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);