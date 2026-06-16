const fs = require('fs');
const path = require('path');



module.exports = (app) => {
    fs.readdirSync(__dirname)
        .filter(file => file !== 'index.js')
        .forEach(file => {

            console.log('Loading file =>', file);

            const route = require(path.join(__dirname, file));

            console.log('Route =>', route);

            app.use(route.basePath, route.router);
        });
};