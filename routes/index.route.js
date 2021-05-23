const fs = require('fs');

async function loadRoutes(app){
    fs.readdirSync(__dirname + "/.").forEach(file => {
        if(file==="index.route.js")
            return ;
        const parts = file.split(".");
        if(parts[1]!=="route")
            return ;
        const route = require("./" + file);
        app.use('/' + parts[0], route);
    });
}

module.exports = {
    loadRoutes
};