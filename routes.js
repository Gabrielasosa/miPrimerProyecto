var con = require('./config.js');
var app = require('./app');

//----RUTAS----

app.get ('/', function(req, res){
    res.render('index');
})


