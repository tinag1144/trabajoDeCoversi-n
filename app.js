let opt = prompt('Ingrese una opción válida (1-2)\n1. Convertir pesos a dolares\n2. Salir');

let usd = 1100


while (opt == "1") {


    switch (opt) { 
        case '1':
            let pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir"));
            let resultado = pesos / usd;
            alert("La cantidad de dolares es: " + resultado.toFixed(2));
            break;

        case '2':
           
            break;
    
    }

    opt = prompt('Ingrese una opción válida (1-2)\n1. Convertir pesos a dolares\n2. Salir');

}

