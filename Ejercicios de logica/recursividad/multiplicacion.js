document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    console.log('multiplicacion recursividad');
    let a,b;

    a = parseInt(prompt('Ingrese el primer numero'));
    b = parseInt(prompt('Ingrese el segundo numero'));

    let c = rMultiplicacion(a,b);
    console.log('El resultado de ' + a + ' por ' + b + ' es ' + c);

    function rMultiplicacion(a,b){
        if((a==0)||(b==0)) return 0;
        else if(b==1) return a;
        else{
            return a + rMultiplicacion(a, b-1);
        }
    }
})