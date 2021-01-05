document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script del quinto ejercicio esta funcionando');
    /**
     * Mostrar todos los numeros divisores de un numero introducido en un prompt
     */

    let numero = parseInt(prompt('Introduci un numero',1));

    for(let i=1; i <= numero; i++){
       //Un divisor es cuando al dividirlo entre si da 0
       if(numero%i == 0){
            console.log('Divisor ' + i);
       } 
    }
})