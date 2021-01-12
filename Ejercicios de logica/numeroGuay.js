document.addEventListener("DOMContentLoaded", function(){
    "use strict"

    /**
     * Diseña un algoritmo y escribe el código que diga si
     *  un número es guay o no. Un número es guay cuando es el resultado de la suma de números consecutivos desde el 1.
     */
    console.log('archivo guay');

    let num = prompt("Introduce el numero ");
    let numValido = false; 
    numValido = verify(num, numValido);
    console.log('¿El numero ' + num + ' guay? ' + numValido);

    function verify(num , valido){
        let sumatoria = 0;
        
        for(let i = 1; i < num && valido == false; i++){
            sumatoria += i;
            console.log(sumatoria);
            if (sumatoria == num) valido= true;
        }
        return valido;

    }
})