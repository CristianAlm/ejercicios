document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('Archivo bubble');

    const MAX = 10;
    let array= [];

    array = asignarValores(array);

    console.log(array);

    array = ordenamientoBubble(array);

    console.log(array);
    
    function asignarValores(array){
        for(let i = 0; i < MAX; i++){
            array[i] = getRandomInt(0, 100);
        }
    
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return array;
    }

    function ordenamientoBubble(array){
        let aux;
        let ronda = 0;
        let ord = false;

        while (!ord) {

            ord = true;

            for (let i = 0; i < array.length - 1 - ronda; i++) {

                if (array[i] > array[i+1]) {

                    aux = array[i+1];

                    array[i+1] = array[i];

                    array[i] = aux;

                    ord = false;

                }

            }
            ronda++;
        }
        return array;
    }
})