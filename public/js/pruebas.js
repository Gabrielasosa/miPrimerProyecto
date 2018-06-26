$(document).ready(function () {
var guardar = $('#guardar');
var pintar =$('#pintar')
var form1= $('#form1')
//--------obtener fecha actual
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
//---------------


//Registro de Usuarios
// guardar.on('click',function(){
//     let nombre = $('#nombre').val();
//     let apellido = $('#apellido').val();
//     let email = $('#email').val();
//     let ciudad = $('#ciudad').val();
//     let provincia = $('#provincia').val();
//     let password = $('#contrasenia').val();
//     let telefono = $('#telefono').val();
//     let fecha = output;

// $.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido , Email:email , Password:password , Provincia:provincia , Ciudad:ciudad , Telefono:telefono , FechaInicio:fecha , idRol:"U"}, function(showchef){
    
// } );//fin post

// } )//fin funcion

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

$('#regUser').on('click', function () {
   form1.append('<form id="formularioContacto">'+
   +'<div style="margin:20px 0 25px 0;">'+
       '<label class="checkbox-inline">'
         +'<input type="checkbox" value="">Option 1'+
       +'</label>'
       +'<label class="checkbox-inline">'+
         '<input type="checkbox" value="">Option 2</label>'+
   
   '</div>')


    });//fin funcion
// $('#regUser')on('click', function () {})

// .on('click').form1.append('<form id="formularioContacto">'+
// +'<div style="margin:20px 0 25px 0;">'+
//     '<label class="checkbox-inline">'
//       +'<input type="checkbox" value="">Option 1'+
//     +'</label>'
//     +'<label class="checkbox-inline">'+
//       '<input type="checkbox" value="">Option 2</label>'+

// '</div>'

 
// <div class="form-group">
// <label>Nombre</label>
// <input type="text" class="form-control" data-validation="required alphanumeric" name="name" id="nombre">

// </div>
// <div class="form-group">
// <label>Apellido</label>
// <input type="text" class="form-control" id="apellido" data-validation="required alphanumeric" name="name">

// </div>
// <div class="form-group">
// <label>Email</label>
// <input type="text" class="form-control" id="email" data-validation="required email" name="email">
// </div>
// <div class="form-group">
// <label>Contraseña</label>
// <input type="password" class="form-control" name="pass_confirmation" data-validation="length" data-validation-length="min8">


// </div>
// <div class="form-group">
// <label>Confirma la contraseña</label>
// <input type="password" class="form-control" id="contrasenia" name="pass" data-validation="confirmation">
// </div>
// <div class="form-group">
// <label>Telefono</label>
// <input type="text" class="form-control" id="telefono" data-validation="required number" name="phone">
// </div>
// <div class="form-group">
// <label>Provincia</label>
// <input type="text" name="provincia" class="form-control" id="provincia" data-validation="required alphanumeric">
// </div>
// <div class="form-group">
// <label>Ciudad</label>
// <input type="text" id="ciudad" class="form-control" data-validation="required alphanumeric" name="address">
// </div>



// <div class="form-group">
// <button class="btn btn-primary" id="guardar" type="submit">Guardar</button>
// </div>



// <!-- <a href="#" class="btn btn-default">Cancelar</a> -->
// </form>'
// )

function on(){
    console.log("Hemos pulsado en on");
  }
  
  function off(){
    console.log("Hemos pulsado en off");
  }
  
  var checkbox = document.getElementById('inlineRadio1');
  
  checkbox.addEventListener("change", comprueba, false);
  
  function comprueba(){
    if(checkbox.checked){
        on();
    }else{
       off();
    }
  }





//-------------dar mensaje al crear el usuario correctamente
guardar.on('click',function() {
        $("form").remove()
        $('#pintar').after("<p>El Usuario se creo correctamente</p>")
;
})


// validador
$.validate({
    lang: 'es',
    modules : 'security'

});
});//fin document.ready