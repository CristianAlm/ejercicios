document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script esta funcionando');
    
    /**
     * Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
     * Si los numeros no son un numero o sos menores o iguales a 0 nos vuelva a pedir los datos
     */
    
     let numero1 = parseInt(prompt('Introduce el primer numero', 0));
     let numero2 = parseInt(prompt('Introduce el segundo numero', 0));
    
     while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
         //isNaN vuelve un true o false. Si isNaN no fuera numero vuelve true por lo cual no es numero y sigue el ejecutando el blucle
         //asigno la variable
        numero1 = parseInt(prompt('Introduce el primer numero', 0));
        numero2 = parseInt(prompt('Introduce el segundo numero', 0));
     }
    
     console.log(numero1, numero2);
    
     if(numero1==numero2){
         console.log('Los numeros son iguales');
     }else if(numero1 > numero2){
         console.log('El numero mayor es: ' + numero1 + ' y el numero menor es: ' + numero2);
     }else if(numero1< numero2){
         console.log('El numero mayor es: '+ numero2 + ' y el numero menor es: '+ numero1);
     }else{
         console.log('Introduci numeros correctos');
     }
})