document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script del sexto ejercicio esta funcionando');

    /**
     * Hacer un programa qe nos diga si un numero es par o inpar.
     * Con ventana prompt
     * Si no es valido que nos pida de nuevo el numero
     */

    let number = parseInt(prompt('Introduce un numero',0));
    
    while(isNaN(number)){//Mientras sea algo que no sea un numero va a estar dando el bucle
        number = parseInt(prompt('Introduce un numero',0));
    }
    if(number%2 == 0){
        console.log('El numero ' + number + ' es par');
    }else{
        console.log('El numero ' + number + ' es inpar');
    }
})