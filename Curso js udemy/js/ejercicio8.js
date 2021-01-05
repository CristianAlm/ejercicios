document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script del octavo ejercicio esta funcionando');
    /**
     * Hacer una calculadora
     * Que pida dos numeros por pantalla
     * Si metemos un numero mal que nos vuelva a pedir
     * En el body, en un alerta y por la consola el resultado
     *  de sumar, restar, multiplicar y dividir esas dos cifras
     */
    
    let numero1 = parseInt(prompt('Introduce el primer numero', 0));
    let numero2 = parseInt(prompt('Introduce el segundo numero', 0)); 

    while(numero1<0 || numero2<0 || isNaN(numero1 || isNaN(numero2))){
        numero1 = parseInt(prompt('Introduce el primer numero', 0));
        numero2 = parseInt(prompt('Introduce el segundo numero', 0));
    }

    let resultado = "La suma es: " + (numero1+numero2) + "</br>" + "la resta es: " + (numero1-numero2) + "<br/>" + "La multiplicacion es: " + (numero1*numero2) + "<br/>" + "La division es: " + (numero1/numero2);
    document.write(resultado);
})