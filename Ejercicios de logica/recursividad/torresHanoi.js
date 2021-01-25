document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    console.log('Torres de Hanoi');
    let n;
    let source;
    let destination;
    let aux;

    ordenadoHanoi(4,1,3,2);

    function ordenadoHanoi(n, source, destination, aux){
        if(n>0){
            ordenadoHanoi(n-1, source, aux, destination);
            console.log('Disk from position '+ source +' to ' + destination);
            ordenadoHanoi(n-1, aux, destination, source);
        }
    }
})