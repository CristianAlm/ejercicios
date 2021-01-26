document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    console.log('potencia dentro de matriz');

    const maxFila = 9;
    const maxColumna = 3;

    let mat = new Array();

    mat = cargarMatriz(mat);
    console.log(mat);

    let matrizA = [[3,1,-2],[0,4,2],[7,5,1]];
    let matrizB = [[-1,0,8],[3,6,9],[0,0,3]];
    let matrizT = productoMatrices(matrizA, matrizB);
    
    console.log(matrizA);
    console.log(matrizB);
    console.log('---La multiplicacion de la matriz A por la matriz B es: ');
    console.log(matrizT);
    

    function productoMatrices(matrizA, matrizB){
        let matAux = [];

        for(let i = 0; i < 3; i++){ 
            matAux[i] = new Array();
            for(let j = 0; j < 3; j++){
                matAux[i][j] = matrizA[i][0] * matrizB[0][j] + matrizA[i][1] * matrizB[1][j] + matrizA[i][2] * matrizB[2][j] ;
            }
        }
        return matAux;
    }

    function cargarMatriz(mat){

        for(let i = 0; i < maxColumna; i++){ 
            mat[i] = new Array();//agrego otro arreglo
            for(let j = 0; j < maxFila; j++){
                mat[i][j] = potencia((j+1),(i+1));
            }
        }
        return mat;
    }

    function potencia(a,b){
        let value = 1;
        while (b>0) {
            value *= a;
            b--;
        }
        return value;
    }
    
})