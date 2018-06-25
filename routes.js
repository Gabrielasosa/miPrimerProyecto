var con = require('./config.js');
var app = require('./app');

//----RUTAS----

app.get ('/', function(req, res){
    res.render('index');
})


//ruta para añadir usuarios

app.post('/showchef/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO usuario (Nombre, Apellido) VALUES ('${req.body.Nombre}','${req.body.Apellido}')`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let showchef = {
                IdUsuario: result.IdUsuario,
                Nombre: req.body.Nombre,
                Apellido: req.body.apellido
               
            }
            res.send(showchef);
        }
    });



});

//post original
/* app.post('/showchef/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO usuario (Nombre,Apellido,Email,Ciudad,Provincia,FechaInicio,IdRol,Password) VALUES ('${req.body.Nombre}','${req.body.Apellido}','${req.body.Email}','${req.body.Ciudad}','${req.body.FechaInicio}'
    ,'${req.body.IdRol}','${req.body.Password}')`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let showchef = {
                IdUsuario: result.IdUsuario,
                Nombre: req.body.Nombre,
                Apellido: req.body.Apellido,
                Email:req.body.Email,
                Ciudad: req.body.Ciudad,
                FechaInicio:req.body.FechaInicio,
                IdRol: req.body.IdRol,
                Password:req.body.Password,
            }
            res.send(showchef);
        }
    });



});
*/
//consultar los usuarios de showchef

app.get('/showchef', function (req, res) {
    let sql = 'SELECT * from usuario';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

});

//eliminar usuarios de showchef
app.post('/showchef/delete', function (req, res) {
    let sql = `DELETE FROM usuario where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

//modificar usuarios de showchef
app.post('/showchef/update', function (req, res) {
    let sql = `UPDATE usuario set estado='${req.body.estado}' where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        
        if (err) {
            console.log(err)
            res.send(err);
            
        }
        else {
            res.send(result);
            // let proyecto={
            //     name: req.body.name
            // }
        }
    });
});