
//********MUEVE A PIKACHU */


  $('#botonPikachu').click(function() {
    
    
   $("#brazo-2-js").css({ transform: 'rotate(45deg)' });
   $("#brazo-1-js").css({ transform: 'rotate(-45deg)' });

   

   $('#boca-1-js').animate({ top: '+=5px' }, 500).animate({ top: '-=5px' }, 500);

   


  });



//*******PIKACHU SE VUELVE INVISIBLE */


$('#botonPikachuInvisible').click(function() {

   

  $("#contenedorPikachu").fadeOut(1000).fadeIn(2000);

});




//******PIKACHU SALTA */

$('#botonPikachuSalta').click(function() {
   

  $("#contenedorPikachu").animate({ top: '+=50px' }, 100).animate({ top: '-=50px' }, 100);

});


//CONSTANTES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//********OJITOS DE PIKACHU-CONSTANTE */

function pestañeaPika() {
  
  $("#ojo-1-js img, #ojo-2-js img").css({ opacity: 0 });

  
  setTimeout(function() {
      $("#ojo-1-js img, #ojo-2-js img").css({ opacity: 1 });
  }, 100); //
}


setInterval(pestañeaPika, 3000);



//********COLA DE PIKACHU-CONSTANTE */

function mueveColaPika() {
  // Mover la cola hacia arriba (rotar -30 grados)
  $("#cola-1-js img").css({ transform: 'rotate(-1deg)' });

  // Mover la cola hacia abajo (rotar 0 grados) después de 0.5 segundos
  setTimeout(function() {
    $("#cola-1-js img").css({ transform: 'rotate(0deg)' });
  }, 500);
}

// Hacer que la cola se mueva hacia arriba y hacia abajo cada 2 segundos
setInterval(mueveColaPika, 2000);













