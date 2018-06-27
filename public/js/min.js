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
    //---------------


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

    $.post('http://localhost:3000/showchef/add', {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Password: password,
        Provincia: provincia,
        Ciudad: ciudad,
        Telefono: telefono,
        FechaInicio: fecha,
        idRol: "U"
    }, function (showchef) {

    }); //fin post

}) //fin funcion

    //-------------------Registro de Chefs------------------
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
            Nombre_c: Nombre_c, Apellido_c: Apellido_c, Email_c: Email_c, Password_c: Password_c, Provincia_c: Provincia_c,
            Ciudad_c: Ciudad_c, Telefono_c: Telefono_c, FechaInicio_c: FechaInicio_c, idRol_c: "C",Especialidad_c:Especialidad_c
        }, function (showchef) {

        });//fin post
    })//fin funcion

    //------------------Guardar segun su rol
    // function on(){
    //     guardar.on('click',function(){
    //         let nombre = $('#nombre').val();
    //         let apellido = $('#apellido').val();
    //         let email = $('#email').val();
    //         let ciudad = $('#ciudad').val();
    //         let provincia = $('#provincia').val();
    //         let password = $('#contrasenia').val();
    //         let telefono = $('#telefono').val();
    //         let fecha = output;

    //     $.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido , Email:email , Password:password , Provincia:provincia , Ciudad:ciudad , Telefono:telefono , FechaInicio:fecha , idRol:"U"}, function(showchef){

    //     } );//fin post

    //     } )//fin funcion
    //   }


    //-------------------ocultar y reaparecer texto

    $("#cont_usuario").hide()
    $("#cont_cocinero").hide()
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


}); //fin document.ready