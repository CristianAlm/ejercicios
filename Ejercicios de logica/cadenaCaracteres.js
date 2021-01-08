document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('archivo de cadena de caracteres');

    //Algoritmo para analizar una frase y comprobar si es simetrica

    let array = [];
    let simetrica = false; 
    
    array = pedirPalabra(array);
    mostrarCaracteres(array);
    simetrica =  verifyPalabra(array);

    console.log('¿Es simetrica? ' + simetrica);

    function pedirPalabra(array){
        let palabra = [];
        palabra = prompt('Introduce la palabra');
        return palabra;
    }

    function mostrarCaracteres(array){
        for(let i =0; i < array.length; i++){
            console.log('El caracter '+ i +' es ' + array[i]);
        }
    }

    function verifyPalabra(array){

        let palabraValida = false;

        if(!(array.length%2 == 0)){
            console.log('No es simetrica porque la cantidad de caracteres es inpar');
        }else{
            //console.log('Puede ser simetrica porque es par.');
            while (!palabraValida) {             
                for(let i = 0; i < array.length/2; i++){
                    //console.log('posicion '+ i + ' atras ' + (array.length -1 - i) + ' resultando ' +  palabraValida);
                    if (array[i] == array[array.length - 1 - i]) {
                        palabraValida = true;
                    }else{
                        palabraValida = false;
                    }
                    //console.log('posicion '+ i + ' atras ' + (array.length -1 - i) + ' resultando ' +  palabraValida);
                }
                break;
            }
        }
        return palabraValida;
    }
})