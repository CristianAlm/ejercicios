document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('Archivo ordenacion alternativo');

    const MAX = 10;
    let array= [];

    array = asignarValores(array);

    console.log(array);

    array = ordenamiento(array);

    console.log(array);

    function ordenamiento(array){

        let aux;
        let posMin;
        let posMay;
        let posFinal = array.length -1;

        for(let i = 0; i < array.length/2;i++){

            posMin = i;
            posMay = i;

            for(let j = i; j <= posFinal; j++){
        
                if (array[j] > array[posMay]) {
                    posMay = j;
                }if (array[j] < array[posMin]) {
                    posMin = j;
                }
            }

            aux = array[posMin];
            array[posMin] = array[i];
            array[i] = aux;

            if (posMay == i) {
                posMay = posMin;
            }

            aux = array[posFinal];
            array[posFinal] = array[posMay];
            array[posMay] = aux;

            posFinal--;

        }
            
        return array;
    }
    
    function asignarValores(array){
        for(let i = 0; i < MAX; i++){
            array[i] = getRandomInt(0, 100);
        }
    
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return array;
    }

})