document.addEventListener("DOMContentLoaded", function(){
    "use strict"
    console.log('Agenda');

    const cantMeses = 12;
    let calendario = [];
    let dias =0;
    calendario = cargarMeses(calendario, dias, cantMeses);
    console.log(calendario);

    function cargarMeses(calendario, dias, cantMeses){
        for(let i = 0; i < cantMeses; i++){ 
            calendario[i] = new Array();//agrego otro arreglo
            dias = verifyMes(i);
            for(let j = 0; j < dias; j++){
                calendario[i][j] = j+1;
            }
        }
        return calendario;
    }

    function verifyMes(dias){

        if((dias == 3)||(dias == 5)||(dias == 8)||(dias == 10)) dias = 30
        else if(dias == 1) dias = 28
        else dias = 31;
        return dias;
    }

})