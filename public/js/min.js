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
    guardar1.on('click', function () {
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

    //-------------------Registro de Chefs
    guardar2.on('click',function(){
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let email = $('#email').val();
        let ciudad = $('#ciudad').val();
        let provincia = $('#provincia').val();
        let password = $('#contrasenia').val();
        let telefono = $('#telefono').val();
        let fecha = output;

    $.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido , Email:email , Password:password , Provincia:provincia , Ciudad:ciudad , Telefono:telefono , FechaInicio:fecha , idRol:"C"}, function(showchef){

    } );//fin post
    } )//fin funcion

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
$(function(){
    $("#btn_cocinero").click(function(){
        $("#cont_cocinero").toggle();

    });
    $("#btn_usuario").click(function(){
        $("#cont_usuario").toggle();
        
    });
})

}); //fin document.ready