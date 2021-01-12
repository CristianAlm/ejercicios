document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('Archivo ordenacion alternativo dos');

    const MAX = 10;
    let array= [];

    array = asignarValores(array);

    console.log(array);

    array = ordenamiento(array);

    console.log(array);

    function ordenamiento(array){
        let aux;
        let rounds = array.length;
        let ordenado = false;

        while (!ordenado) {
            ordenado = true;

            for(let i = array.length - 1; i >-1 - rounds ;i--){
                if (array[i-1] > array[i]) {
                    aux = array[i-1];
                    array[i-1] = array[i];
                    array[i] = aux; 

                    ordenado=false;
                }
                //console.log(array);
            }
            rounds++;
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