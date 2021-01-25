document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    console.log('archivo basico recursividad');

    let num = prompt('introduce un numero');
    let factor = factorial(num);
    console.log('El factorial del numero es ' + factor);
    
    function factorial(num){
        if(num > 1) num = num * factorial(num - 1);
        return num;
    }
})