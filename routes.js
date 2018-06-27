var con = require('./config.js');
var app = require('./app');

//----RUTAS----

app.get('/', function (req, res) {
    res.render('index');
})
app.get('/index', function (req, res) {
    res.render('index');
})

app.get('/registro', function (req, res) {
    res.render('registro');
})

//----------------todas las rutas para usuario-----------------

//ruta para añadir usuarios

app.post('/showchef_user/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO usuario (Nombre, Apellido,Email,Provincia,Ciudad,Telefono,FechaInicio,idRol,Password) 
    VALUES ('${req.body.Nombre}','${req.body.Apellido}','${req.body.Email}','${req.body.Provincia}'
    ,'${req.body.Ciudad}','${req.body.Telefono}','${req.body.FechaInicio}','${req.body.idRol}','${req.body.Password}')`;

    con.query(sql, function (err, result) {
        console.log(sql)
        if (err) {
            res.send(err);
        }
        else {
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
        }
        else {
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
                Especialidad_c:req.body.Especialidad_c

            }
            res.send(showchef_cocinero );
        }
    });


});