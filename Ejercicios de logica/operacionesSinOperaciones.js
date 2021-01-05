document.addEventListener("DOMContentLoaded", function () {
    "use strict"

     //ejercicio de resta
    let a;
    let b;

    function resta(a,b){

        let auxiliar=0;
    
        while(a>b){
            b++;
            auxiliar++;
        }

        return auxiliar;
        
    }
    
    let resultadoResta = resta(5,1);
    console.log('A menos B es igual a ' + resultadoResta);

    //ejercicio de multiplicar
    
    let resultadoMultplicacion = multiplicacion(10,3);
    console.log('A multiplicado por B es igual a ' + resultadoMultplicacion);

    function multiplicacion(a,b){

        let value =0;

        for(let aux =0; aux < a; aux++){
            value+=b;
        }

        return value;
    }

    //ejercicio de division
    
    let resultadoDivision = division(10,2);
    console.log('A dividido por B es igual a ' + resultadoDivision);

    function division(a,b){
         let value =0;
        while(a>=b){
            value++;
            a-=b;
        }

        return value;
    }
    
    //ejercicio de potencia
    
    let resultadoPotencia = potencia(3,3);
    console.log('La potencia de A elevada a B es ' + resultadoPotencia);

    function potencia(a,b){
        let value = 1;
        while (b>0) {
            value *= a;
            b--;
        }
        return value;
    }

    //ejercicio de factorial
    
    let resultadoFactorial = factorial(5);
    console.log('El factorial es ' + resultadoFactorial);

    function factorial(a){

        let value =1;

        for(let i = 1; i <= a; i++){
            value *= i;
        }

        return value;
        
    }


    //VerifyNumberPrimo

    let primo = verifyCousin(7);
    console.log('¿Es primo?' + primo);

    function verifyCousin(a){
        
        let primo = true;

        for (let i = 2; i < a/2 && primo; i++) {
            if (a % i === 0) primo = false;    
        }
        return primo;

    }

    //numero perfecto

    let numPerfecto = verifyNumPer(6);
    console.log('¿Es perfecto?'+numPerfecto);

    function verifyNumPer(a){
        let perfecto = false;
        let sumatoria = 0;

        for (let i = 1; i < a; i++){
            if(a % i == 0){
                sumatoria += i;
            }
        }

        if(sumatoria == a) perfecto =true;

        return perfecto;
    }

    //numeros amigos

    let numAmigo = verifyNum(220, 284);
    console.log('¿son amigos? '+numAmigo);

    function verifyNum(a, b){
        let amigo = false;
        
        amigo =verify(a, b, amigo);

        function verify(a, b, auxiliar){

            let perfectoA = false;
            let perfectoB = false;
            let sumatoriaA = 0;
            let sumatoriaB = 0;
    
            for (let i = 1; i <= a/2; i++){
                if(a % i == 0){
                    sumatoriaA += i;
                }
            }
            
            for (let i = 1; i <= b/2; i++){
                if(b % i == 0){
                    sumatoriaB += i;
                }
            }

            if(sumatoriaA == b) perfectoA =true;
            if(sumatoriaB == a) perfectoB =true;

            if ((perfectoA == true) && (perfectoB == true)) auxiliar = true;
            
            return auxiliar;
            
        }

        return amigo;

    }

})