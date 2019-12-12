<<<<<<< HEAD
var url = window.location.href;
var swLocation = '/twittor/sw.js';

if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    navigator.serviceWorker.register(swLocation);
}


// Referencias de jQuery

var titulo = $('#titulo');
var nuevoBtn = $('#nuevo-btn');
var salirBtn = $('#salir-btn');
var cancelarBtn = $('#cancel-btn');
var postBtn = $('#post-btn');
var avatarSel = $('#seleccion');
var timeline = $('#timeline');

var modal = $('#modal');
var modalAvatar = $('#modal-avatar');
var avatarBtns = $('.seleccion-avatar');
var txtMensaje = $('#txtMensaje');
=======

// Referencias de jQuery

var titulo      = $('#titulo');
var nuevoBtn    = $('#nuevo-btn');
var salirBtn    = $('#salir-btn');
var cancelarBtn = $('#cancel-btn');
var postBtn     = $('#post-btn');
var avatarSel   = $('#seleccion');
var timeline    = $('#timeline');

var modal       = $('#modal');
var modalAvatar = $('#modal-avatar');
var avatarBtns  = $('.seleccion-avatar');
var txtMensaje  = $('#txtMensaje');
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21

// El usuario, contiene el ID del héroe seleccionado
var usuario;




// ===== Codigo de la aplicación

function crearMensajeHTML(mensaje, personaje) {

<<<<<<< HEAD
    var content = `
=======
    var content =`
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21
    <li class="animated fadeIn fast">
        <div class="avatar">
            <img src="img/avatars/${ personaje }.jpg">
        </div>
        <div class="bubble-container">
            <div class="bubble">
                <h3>@${ personaje }</h3>
                <br/>
                ${ mensaje }
            </div>
            
            <div class="arrow"></div>
        </div>
    </li>
    `;

    timeline.prepend(content);
    cancelarBtn.click();

}



// Globals
<<<<<<< HEAD
function logIn(ingreso) {

    if (ingreso) {
=======
function logIn( ingreso ) {

    if ( ingreso ) {
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21
        nuevoBtn.removeClass('oculto');
        salirBtn.removeClass('oculto');
        timeline.removeClass('oculto');
        avatarSel.addClass('oculto');
        modalAvatar.attr('src', 'img/avatars/' + usuario + '.jpg');
    } else {
        nuevoBtn.addClass('oculto');
        salirBtn.addClass('oculto');
        timeline.addClass('oculto');
        avatarSel.removeClass('oculto');

        titulo.text('Seleccione Personaje');
<<<<<<< HEAD

=======
    
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21
    }

}


// Seleccion de personaje
avatarBtns.on('click', function() {

    usuario = $(this).data('user');

    titulo.text('@' + usuario);

    logIn(true);

});

// Boton de salir
salirBtn.on('click', function() {

    logIn(false);

});

// Boton de nuevo mensaje
nuevoBtn.on('click', function() {

    modal.removeClass('oculto');
<<<<<<< HEAD
    modal.animate({
        marginTop: '-=1000px',
        opacity: 1
    }, 200);
=======
    modal.animate({ 
        marginTop: '-=1000px',
        opacity: 1
    }, 200 );
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21

});

// Boton de cancelar mensaje
cancelarBtn.on('click', function() {
<<<<<<< HEAD
    modal.animate({
        marginTop: '+=1000px',
        opacity: 0
=======
   modal.animate({ 
       marginTop: '+=1000px',
       opacity: 0
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21
    }, 200, function() {
        modal.addClass('oculto');
        txtMensaje.val('');
    });
});

// Boton de enviar mensaje
postBtn.on('click', function() {

    var mensaje = txtMensaje.val();
<<<<<<< HEAD
    if (mensaje.length === 0) {
=======
    if ( mensaje.length === 0 ) {
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21
        cancelarBtn.click();
        return;
    }

<<<<<<< HEAD
    crearMensajeHTML(mensaje, usuario);
=======
    crearMensajeHTML( mensaje, usuario );
>>>>>>> e6e9d4e0ec4936629d6342ea600841b185b9de21

});