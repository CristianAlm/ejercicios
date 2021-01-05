document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script del septimo ejercicio esta funcionando');
    /**
     * La tabla de multiplicar de un numero introducido por pantalla
     */
    let number = parseInt(prompt('¿De que numero quieres la tabla?',1));

    for(let i = 1; i<=10; i++){
        document.write(' ' + i + ' * ' + number + ' =' + (i*number) + '<br/>' );
    }
})