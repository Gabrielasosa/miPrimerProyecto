$(document).ready(function () {
var guardar = $('#guardar');
var pintar =$('#pintar')

// validador
$.validate({
    lang: 'es',
    modules : 'security'

});
//--------obtener fecha actual
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
//---------------


//Registro de Usuarios
guardar.on('click',function(){
    let nombre = $('#nombre').val();
    let apellido = $('#apellido').val();
    let email = $('#email').val();
    let ciudad = $('#ciudad').val();
    let provincia = $('#provincia').val();
    let password = $('#contrasenia').val();
    let telefono = $('#telefono').val();
    let fecha = output;

$.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido , Email:email , Password:password , Provincia:provincia , Ciudad:ciudad , Telefono:telefono , FechaInicio:fecha , idRol:"U"}, function(showchef){
    
} );//fin post

} )//fin funcion

//-------------------Registro de Chefs
// guardar.on('click',function(){
//     let nombre = $('#nombre').val();
//     let apellido = $('#apellido').val();
//     let email = $('#email').val();
//     let ciudad = $('#ciudad').val();
//     let provincia = $('#provincia').val();
//     let password = $('#contrasenia').val();
//     let telefono = $('#telefono').val();
//     let fecha = output;

// $.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido , Email:email , Password:password , Provincia:provincia , Ciudad:ciudad , Telefono:telefono , FechaInicio:fecha , idRol:"C"}, function(showchef){
    
// } );//fin post
// } )//fin funcion

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
  
//   function off(){
//     console.log("Hemos pulsado en off");
//   }
  
//   var checkbox = document.getElementById('1');
  
//   checkbox.addEventListener("change", comprueba, false);
  
//   function comprueba(){
//     if(checkbox.checked){
//         on();
//     }else{
//        off();
//     }
//   }

  





// })






});//fin document.ready