const swaggerJsDoc = require('swagger-jsdoc');
const fs = require('fs')
const config = require('./config')
const CONTROLLER_PATH = config.CONTROLLER_PATH
const path = require('path')

let fileArr = []
try {
    const files = fs.readdirSync(CONTROLLER_PATH);
    files.forEach(file => {
        let pushFile = path.join(CONTROLLER_PATH, file);
        fileArr.push(pushFile);
    });
} catch (err) {
    console.error(err);
}


let options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'Career Kranti API Documentation',
            version : '1.0.0',
            description : 'API documentation for Career Kranti Application'
        },
    },
    apis: fileArr,
}

const specs = swaggerJsDoc(options)
module.exports = specs