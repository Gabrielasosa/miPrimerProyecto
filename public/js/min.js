$(document).ready(function () {
var guardar = $('#guardar');
var pintar =$('#pintar')
guardar.on('click',function(){
    let nombre = $('#nombre').val();
    let apellido = $('#apellido').val();
    let email = $('#email').val();
    let ciudad = $('#ciudad').val();
    let provincia = $('#provincia').val();
    let password = $('#contrasenia').val(); 

$.post('http://localhost:3000/showchef/add', { Nombre: nombre, Apellido: apellido}, function(showchef){
    pintar.append('<div id="pintar2">El Usuario ' + showchef.Nombre + 'se creo Correctamente</div>')
}

);//fin funcion
console.log(guardar);
} )


});//fin document.ready