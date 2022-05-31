
let valorIngresado = prompt("ingrese un número para contar o ESC para Finalizar");

if(valorIngresado == "ESC"){
    
    console.log("la ejecución ha finalizado sin iteraciones")

}else{
    
    while(valorIngresado != "ESC"){

        valorIngresado = parseInt(valorIngresado);
        
        for(let i = 0; i <= valorIngresado; i++){
            console.log(i);
        }

        valorIngresado = prompt("Ingrese un nuevo valor numérico o ESC para finalizar");
    }

    console.log("la ejecución finalizó");

}




