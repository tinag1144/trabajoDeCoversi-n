const usd = 1300;
let opt;

// Función para mostrar el menú de opciones
// y solicitar la opción al usuario

do {
    opt = prompt('Ingrese una opción válida (1-2)\n1. Convertir pesos a dólares\n2. Salir');

    switch (opt) {
        case '1':
            
            let pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir"));
            
            // Validar que la entrada sea un número
            // y que no sea NaN
            if (isNaN(pesos)) {
                alert("Por favor, ingrese un número válido.");
                break;
            }

            let resultado = pesos / usd;

            // Guardar la conversión en un objeto
            // y convertirlo a JSON
            let conversion = {
                tipo: 'Divisa',
                Entrada: pesos + ' ARS',
                resultado: resultado.toFixed(2) + ' USD',
                fecha: new Date().toLocaleDateString(),
            };

            // Mostrar el resultado
            // y los detalles de la conversión
            alert('La cantidad de dólares es: ' + resultado.toFixed(2));
            console.log('Detalles de la conversión:', JSON.stringify(conversion, null, 2));
            break;

        case '2':
            alert("Saliendo del programa...");
            break;

        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }

} while (opt !== '2');
