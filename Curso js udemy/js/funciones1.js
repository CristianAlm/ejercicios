document.addEventListener("DOMContentLoaded", function(){
    'use strict'
    console.log('El script primero de funciones esta funcionando');
    /**
     * Funciones
     * Es una agrupacion reutilizables de un conjunto de instrucciones
     */
    /**
     * Parametros
     * 
     */
    function calculadora(numero1, numero2, mostrar = false){
        //return 'Hola soy la calculadora!';
        if(mostrar == false){
            console.log('suma: ' + (numero1+numero2));
            console.log('resta: ' + (numero1-numero2));
            console.log('multiplicacion: ' + (numero1*numero2));
            console.log('division: ' + (numero1/numero2));
            console.log('----------------------');
        }else{
            document.write('suma: ' + (numero1+numero2) + '<br/>');
            document.write('resta: ' + (numero1-numero2) + '<br/>');
            document.write('multiplicacion: ' + (numero1*numero2) + '<br/>');
            document.write('division: ' + (numero1/numero2) + '<br/>');
            document.write('----------------------');
        }
    }
    //Le paso valores
    calculadora(12,8);
    calculadora(2,5, true);
    //calculadora(98,2);
    /**
     * 
     for(let i = 1; i <=10; i++){
         console.log(i);
         calculadora(i, 8);
     }
     */
    /**
     * Parametros opcionales con el "Mostrar"
     */

     //Informacion de textos

     let numero = 444;
     let texto1 = "Bienvenido al curso y curso";
     let texto2 = "es buen curso";

    let dato = numero.toString();
    console.log(dato)
    console.log("La variable dato es un " + typeof dato)
    dato = texto1.toUpperCase();
    console.log(dato);
    dato = texto2.toLowerCase();
    console.log(dato);

    let nombre = "Mi nombre es Cristian";

    console.log(nombre.lenght);
    console.log(nombre.length);

    let textoTotal = texto1+ " " + texto2;
    console.log(textoTotal);

    console.log("----parte de busqueda----");

    let busqueda = texto1.indexOf("curso");
    console.log(busqueda);
    busqueda = texto1.lastIndexOf("curso");
    console.log(busqueda);
    busqueda = texto1.match("curso");
    console.log(busqueda);
    
    /**
     tambien esta el metodo substr(numero,numero)
     otro metodo charAt() que selecciono una letra
     otro metodo startsWith()busca y te da un boolean
     otro metodo endsWitch()
     otro metodo includes() para buscar una palabra y te da un boolean 
    */

    console.log("-Funciones para reemplazar-");

    /**
     * funcion para eemplazar replace(texto, texto)
     * metodo slice(numero, numero) para cortar string
     * metodo split()para que vaya a un array con palabras separadas
     * metodo trim() quita espacios
     */








    





})