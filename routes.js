var con = require('./config.js');
var app = require('./app');

//----RUTAS----

app.get('/nosotros', function (req, res) {
    res.render('nosotros');
})


app.get('/registro', function (req, res) {
    res.render('registro');
})


app.get('/gestionUsuarios', function (req, res) {
    res.render('gestionUsuarios');
})

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/index', function (req, res) {
    res.render('index');
})

//----------------todas las rutas para usuario-----------------

//ruta para añadir usuarios

app.post('/showchef_user/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO usuario (Nombre, Apellido,Email,Provincia,Ciudad,Telefono,FechaInicio,idRol,Password) 
    VALUES ('${req.body.Nombre}','${req.body.Apellido}','${req.body.Email}','${req.body.Provincia}'
    ,'${req.body.Ciudad}','${req.body.Telefono}','${req.body.FechaInicio}','${req.body.idRol}','${req.body.Password}')`;

    con.query(sql, function (err, result) {

        if (err) {
            res.send(err);
        } else {
            let showchef_user = {
                IdUsuario: result.IdUsuario,
                Nombre: req.body.Nombre,
                Apellido: req.body.Apellido,
                Email: req.body.Email,
                Provincia: req.body.Provincia,
                Ciudad: req.body.Ciudad,
                Telefono: req.body.Telefono,
                FechaInicio: req.body.FechaInicio,
                idRol: req.body.idRol,
                Password: req.body.Password

            }
            res.send(showchef_user);
        }
    });



});

//consultar los usuarios de showchef

app.get('/showchef_user_consul', function (req, res) {
    let sql = 'SELECT * from usuario';

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);

        } else {
            res.send(result);
        }
    });

});

//eliminar usuarios de showchef
app.post('/showchef_user/delete', function (req, res) {
    let sql = `DELETE FROM usuario where IdUsuario = '${req.body.IdUsuario}'`;
    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//modificar usuarios de showchef

app.post('/showchef_user/update', function (req, res) {

    let sql = `UPDATE usuario set Nombre='${req.body.Nombre}' where IdUsuario = '${req.body.IdUsuario}'`;
    console.log(sql)
    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {

            res.send(result);
        }
    });
});

//Consultar usuario por ID
app.get('/showchef_usuario_consulId', function (req, res) {
    //let idusuaria = req.params.id;
    let sql = `SELECT * from usuario WHERE IdUsuario = ${req.query.IdUsuario}`;

    con.query(sql, function (err, result) {

        if (err) {

            res.send(err);
        } else {

            res.send(result)
        }


    });
});

//----------------todas las rutas para Cocinero-----------------

//ruta para añadir Cocinero

app.post('/showchef_cocinero/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO cocinero (Nombre_c, Apellido_c,Email_c,Provincia_c,Ciudad_c,Telefono_c,FechaInicio_c,idRol_c,Password_c,Especialidad_c) 
    VALUES ('${req.body.Nombre_c}','${req.body.Apellido_c}','${req.body.Email_c}','${req.body.Provincia_c}'
    ,'${req.body.Ciudad_c}','${req.body.Telefono_c}','${req.body.FechaInicio_c}','${req.body.idRol_c}','${req.body.Password_c}','${req.body.Especialidad_c}')`;

    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {
            let showchef_cocinero = {
                idCocinero: result.idCocinero,
                Nombre: req.body.Nombre_c,
                Apellido: req.body.Apellido_c,
                Email: req.body.Email_c,
                Provincia: req.body.Provincia_c,
                Ciudad: req.body.Ciudad_c,
                Telefono: req.body.Telefono_c,
                FechaInicio: req.body.FechaInicio_c,
                idRol: req.body.idRol_c,
                Password: req.body.Password_c,
                Especialidad_c: req.body.Especialidad_c

            }
            res.send(showchef_cocinero);
        }
    });


});

//consultar los cocineros de showchef

app.get('/showchef_cocinero_consul', function (req, res) {
    let sql = 'SELECT * from cocinero';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

});
//eliminar cocinero ShowChef
app.post('/showchef_cocinero/delete', function (req, res) {
    let sql = `DELETE FROM cocinero where idCocinero = '${req.body.idCocinero}'`;
    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//------------
//Consultar cocinero por ID
app.get('/showchef_cocinero_consulId', function (req, res) {
    //let idusuaria = req.params.id;
    let sql = `SELECT * from cocinero WHERE idCocinero = ${req.query.idCocinero}`;
    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {

            res.send(result)
        }


    });
});


//modificar a traves del input

app.post('/showchef_cocinero/update', function (req, res) {

    let sql = `UPDATE cocinero set Nombre_c='${req.body.Nombre_c}' where idCocinero = '${req.body.idCocinero}'`;

    con.query(sql, function (err, result) {
        if (err) {

            res.send(err);
        } else {

            res.send(result);
        }
    });
});