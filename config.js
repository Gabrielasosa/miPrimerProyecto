var mysql = require('mysql');
//creando la conexion con la base de datos
var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'showchef'
});


con.connect(function(err){
    if(err) throw err;
    console.log('Base de datos Conectado')
})