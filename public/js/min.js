$(document).ready(function () {
    var guardar1 = $('#guardar_cocinero');
    var guardar2 = $('#guardar_usuario')


    // validador
    $.validate({
        lang: 'es',
        modules: 'security'

    });
    //--------obtener fecha actual
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day;

    //---------------Usuarios------------------


    //Registro de Usuarios
    guardar2.on('click', function () {
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let email = $('#email').val();
        let ciudad = $('#ciudad').val();
        let provincia = $('#provincia').val();
        let password = $('#contrasenia').val();
        let telefono = $('#telefono').val();
        let fecha = output;

        $.post('http://localhost:3000/showchef_user/add', {
            Nombre: nombre,
            Apellido: apellido,
            Email: email,
            Password: password,
            Provincia: provincia,
            Ciudad: ciudad,
            Telefono: telefono,
            FechaInicio: fecha,
            idRol: "U"
        }, function (showchef_user) {

        }); //fin post

    }) //fin funcion

    //-----------Consultar Usuarios---------------

    var listar = $('#linea')
    $.get('http://localhost:3000/showchef_user_consul', function (res) {
        res.forEach(usuario => {
            listar.append('<tr id="' + usuario.IdUsuario + '">' + '<td>' + usuario.IdUsuario + '</td>' +
                '<td>' + usuario.Nombre + '  ' + usuario.Apellido + '</td>' +
                '<td>' + usuario.Email + '</td>' +
                '<td>' + usuario.idRol + '</td>' +
                '<td>' + usuario.FechaInicio + '</td>' +
                '<td>' + usuario.Provincia + '</td>' +
                '<td>' +
                '<a href="../views/detalles.html" title="Ver detalles" data-toggle="tooltip">' + '<i class="fas fa-eye">' + '</i>' + '</i>' + '</a>' +
                '<a href="../views/modificar.html" title="Modificar usuario" data-toggle="tooltip">' + '<i class="far fa-edit">' + '</i>' + '</a>' +
                '<a href="#"title="Eliminar usuario" data-toggle="modal" data-target="#confirm-delete" class="eliminarUS">' + '<i class="far fa-trash-alt">' + '</i>' + '</a>' +
                '</td>' +
                '</tr>'
            )
        });
    });

    //eliminar usuario
    listar.on('click', '.eliminarUS', function () {
        let IdUsuario = $(this).parent().parent().attr('id');
        console.log(IdUsuario)
        $(this).parent().parent().remove();
        $.post('http://localhost:3000/showchef_user/delete', { IdUsuario: IdUsuario }, function () {
        });
    })


    //ver detalles de uruarios



    //---------Modificar Usuarios

    var modUser = $('#nombre_mod')

    modUser.on('change', 'nuevoNombe', function () {
        $.post('http://localhost:3000/showchef_user/update'), { IdUsuario: IdUsuario, Nombre: Nombre }

    })
    //------------Cocineros-------------------

    //-------------------Registro de Cocineros------------------
    guardar1.on('click', function () {
        let Nombre_c = $('#nombrec').val();
        let Apellido_c = $('#apellidoc').val();
        let Email_c = $('#emailc').val();
        let Ciudad_c = $('#ciudadc').val();
        let Provincia_c = $('#provinciac').val();
        let Password_c = $('#contraseniac').val();
        let Telefono_c = $('#telefonoc').val();
        let FechaInicio_c = output;
        let Especialidad_c = $('#especialidad').val();

        $.post('http://localhost:3000/showchef_cocinero/add', {
            Nombre_c: Nombre_c,
            Apellido_c: Apellido_c,
            Email_c: Email_c,
            Password_c: Password_c,
            Provincia_c: Provincia_c,
            Ciudad_c: Ciudad_c,
            Telefono_c: Telefono_c,
            FechaInicio_c: FechaInicio_c,
            idRol_c: "C",
            Especialidad_c: Especialidad_c
        }, function (showchef_cocinero) {

        }); //fin post
    }) //fin funcion

    //-------------consultar cocineros-----------------


    var listar = $('#linea')

    $.get('http://localhost:3000/showchef_cocinero_consul', function (res) {
        res.forEach(cocinero => {

            listar.append('<tr id="' + cocinero.idCocinero + '">' + '<td>' + cocinero.idCocinero + '</td>' +
                '<td>' + cocinero.Nombre_c + '  ' + cocinero.Apellido_c + '</td>' +
                '<td>' + cocinero.Email_c + '</td>' +
                '<td>' + cocinero.idRol_c + '</td>' +
                '<td>' + cocinero.FechaInicio_c + '</td>' +
                '<td>' + cocinero.Provincia_c + '</td>' +
                '<td>' +
                '<a href="#" title="Ver detalles" data-toggle="tooltip" class="mostrar">' + '<i class="fas fa-eye">' + '</i>' + '</i>' + '</a>' +
                '<a href="#" title="ver usuario" data-toggle="tooltip"  >' + '<i class="far fa-edit">' + '</i>' + '</a>' +
                '<a href="#"title="Eliminar usuario" data-toggle="modal" data-target="#confirm-delete" class="eliminarCo">' + '<i class="far fa-trash-alt">' + '</i>' + '</a>' +
                '</td>' +
                '</tr>'


                
            )

            //-------prueba dentro de la funcion
        //     let mostrar = $('.mostrar')
        //     mostrar.on('click', function () {
        //         let lista = $('#listaProyectos');
        //         lista.append('<li id="' + cocinero.idCocinero + '">' + cocinero.Nombre_c + '</li>')
        //    })




        });


    });


    listar.on('click', '.mostrar', function () {
        let idCocinero = $(this).parent().parent().attr('id');

       // $(this).parent().parent();
        $.get('http://localhost:3000/showchef_cocinero_consul',  function (cocinero) {
            $('#listaProyectos').append('<li id="' + idCocinero + '">' + cocinero.Nombre_c + '</li>')
        });
    })


      //-------prueba dentro de la funcion
      let mostrar = $('.mostrar')
      mostrar.on('click', function () {
          let lista = $('#listaProyectos');
          
     })

//--------------prueba2
  
    
//    mostrar.on('click', '.mostrar', function () {
//     let lista = $('#listaProyectos');
//         $.get('http://localhost:3000/showchef_cocinero_consul', function () {
//             lista.append('<li id="' + cocinero.idCocinero + '">' + cocinero.Nombre_c + '</li>')
//         });
//     })

    //----------prueba1
    //mostrar al hacer clic en un cocinero

    // var mostrar = $('#mostrar')

    // mostrar.on('click',  mostrar, function () {
    //     $.get('http://localhost:3000/showchef_cocinero_consul', function (res) {
    //         let lista = $('#listaProyectos');
    //         res.forEach(cocinero => {
    //             lista.append('<li id="' + cocinero.idCocinero + '">' + cocinero.Nombre_c + '</li>')

    //         });
    //     });//fin mostrar
    //     //eliminar cocinero

    // })




    listar.on('click', '.eliminarCo', function () {
        let idCocinero = $(this).parent().parent().attr('id');

        $(this).parent().parent().remove();
        $.post('http://localhost:3000/showchef_cocinero/delete', { idCocinero: idCocinero }, function () {
        });
    })
    //-------------------ocultar y reaparecer texto

    $(function () {
        $("#btn_cocinero").click(function () {
            $("#cont_usuario").hide();
            $("#cont_cocinero").show()


        });
        $("#btn_usuario").click(function () {
            $("#cont_cocinero").hide()
            $("#cont_usuario").show();


        });
    })
    //-------------togglle de pantalle gestion de usuarios
    $('[data-toggle="tooltip"]').tooltip();

    //-------------------intentando abrir los HTML en enlace externo
    $("a.external").click(function () {
        url = $(this).attr("href");
        window.open(url, '_blank');
        return false;
    });


}); //fin document.ready