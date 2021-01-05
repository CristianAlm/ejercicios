document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script del cuarto ejercicio esta funcionando');

    /**
     * Mostrar todos los numeros inpares que hay entre dos numeros introducidos por el usuario
     */

    let numero1 = parseInt(prompt('Introduce el primer numero',0));
    let numero2 = parseInt(prompt('Introduce el segundo numero',0)); 

    while(numero1 < numero2){
        numero1++;
        if(numero1%2 !=0){//El resto de numero 1 dividido entre 2 es difeente a 0 entonces es numero inpar
            console.log('El ' + numero1 + ' es inpar');
        }

    }
})