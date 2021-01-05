document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script esta funcionando');
    /**
     * El ejercicio consiste en mostrar la suma y la media de los numeros introducidos por el usuario y mostrarlo, hasta que el usuario ingrese un numero negativo
     */


   let suma = 0;
   let contador = 0;
   
   do{
    var numero = parseInt(prompt('Introduce numeros hasta que sean negativos', 0));

       if(isNaN(numero)){//Si no es numero el valor del numero seria 0
            numero = 0;
       }else if(numero >= 0){
            suma+=numero;
            contador++;
       }
       console.log(suma);
       console.log(contador);
   }while(numero >= 0)//Si el numero es mayor o igual a 0, solo en ese caso se va a seguir ejecutando el do while. Si es menor a 0 se va a hacer un breck.

   console.log('La suma de todos los numero es: ' + suma);
   console.log('La media de todos los numeros es: ' + (suma/contador));


})