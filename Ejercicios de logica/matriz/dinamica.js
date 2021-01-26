document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    console.log('matriz dinamica');

    let mat = [];
    let puntero = [];

    let cantRows = parseInt(prompt('Introduzca cantidad de filas'));

    puntero = cargoRows(puntero, cantRows);
    console.log(puntero);
    mat = cargoMatriz(mat, puntero);
    console.log(mat);

    function cargoMatriz(mat, puntero){

        for(let i = 0; i < cantRows; i++){ 
            mat[i] = new Array();//agrego otro arreglo
            for(let j = 0; j < puntero[i]; j++){
                mat[i][j] = getRandomInt(0, 100);
            }
        }
        return mat;
    }

    function cargoRows(puntero, cantRows){
        for(let i =0; i<cantRows;i++){
            let aux = parseInt(prompt('Ingrese cantidad de columnas'));
            puntero[i] = aux;
        }
        return puntero;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

})