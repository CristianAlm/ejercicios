document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log('archivo de array');

    /**
     * Debes recorrer un array con números decimales y al finalizar mostrar por pantalla los siguientes datos

    - El número mayor encontrado en el array

    - El número menor encontrado en el array

    - El valor promedio de entre los números de todo el array

    CONDICION OBLIGATORIA: Todo esto debe hacerse con único bucle for
     */

    const MAX = 10;
    let array = [MAX];
    let mayor = 0, menor = 100, promedio = 0;
    
    console.log(array);
    
    for(let i = 0; i < MAX; i++){

        array[i] = getRandomInt(0, 100);

        if (mayor < array[i]) {
            mayor = array[i];
        }
        if (menor > array[i]) {
            menor = array[i];
        }
        promedio += array[i];
    }

    console.log('El numero mas alto es '+mayor);
    console.log('El numero menor es '+menor);
    console.log('El promedio del array es '+(promedio/MAX));

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

})