document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('Archivo insertion');

    const MAX = 10;
    let array= [];

    array = asignarValores(array);

    console.log(array);

    array = ordenamientoInsertion(array);

    console.log(array);

    function ordenamientoInsertion(array){

        //En este algoritmo el intercambio se guarda la pos primero, se mueven las casillas y se pone la pos al principio
        let aux;
        
        for(let i = 1; i < array.length;i++){//recorro desde la segunda posicion
            aux = array[i];//guardamos la pos del vector
            
            let j;
            for (j = i-1; (j >=0) && (array[j]>aux) ; j--) {//hasta que se encuentre un numeor mayor
                array[j+1] = array[j];//con esto corro las posiciones
            }

            array[j+1] = aux;//Donde no encontro mayores pongo el valor aux

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