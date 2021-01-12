document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('Archivo selection');

    const MAX = 10;
    let array= [];

    array = asignarValores(array);

    console.log(array);

    array = ordenamientoSelection(array);

    console.log(array);

    function ordenamientoSelection(array){
        let aux=0;
        let posMin;

        for(let i = 0; i < array.length; i++){
            posMin = i;//aca asumimos que este elemento es el menor a menos que encontremos otro

            for(let j = i+1; j< array.length; j++){//Ahora recorro para ver si hay uno menor
                if (array[posMin]>array[j]) posMin = j; //cada vez que encontramos uno mas pequeño lo actualizamos
            }
            aux = array[i];
            array[i] = array[posMin];
            array[posMin] = aux;
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