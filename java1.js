// Comienzo del juego
alert("¡Bienvenido al Juego de Desafíos!");
alert("Eres un valiente aventurero en busca de tesoros mágicos.");

// Definición de desafíos
const desafios = [
    {
        pregunta: "Desafío 1: ¿Qué tiene llaves pero no abre puertas ni coches?",
        respuesta: "un piano"
    },
    {
        pregunta: "Desafío 2: Si tienes 3 manzanas y comes 2, ¿cuántas manzanas te quedan?",
        respuesta: "1"
    },
    {
        pregunta: "Desafío 3: Soy alto cuando soy joven y corto cuando soy viejo. ¿Qué soy?",
        respuesta: "una vela"
    },
    // Se agregaron tres desafíos adicionales con sus preguntas y respuestas.
    {
        pregunta: "Desafío 4: Puedo volar sin tener alas. Puedo llorar sin tener ojos. ¿Qué soy?",
        respuesta: "el tiempo"
    },
    {
        pregunta: "Desafío 5: Siempre va pero nunca llega. ¿Qué es?",
        respuesta: "el mañana"
    },
    {
        pregunta: "Desafío 6: Soy un número que sigue al 2, antes del 4 y no soy el 3. ¿Qué número soy?",
        respuesta: "el 7"
    }
];

// Función para jugar un desafío
function jugarDesafio(desafio) {
    const respuesta = prompt(desafio.pregunta);
    if (respuesta && respuesta.toLowerCase() === desafio.respuesta) {
        // Si la respuesta es correcta, muestra un mensaje de éxito.
        alert("¡Correcto! Has superado el desafío.");
        return true;
    } else {
        // Si la respuesta es incorrecta, muestra un mensaje de error y permite volver a intentar.
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
        return false;
    }
}

// Jugar los desafíos
let completados = 0;
for (let i = 0; i < desafios.length; i++) {
    if (jugarDesafio(desafios[i])) {
        completados++;
    } else {
        i--; // Permite que el jugador intente nuevamente el mismo desafío.
    }
}

// Final del juego
if (completados === desafíos.length) {
    // Si el jugador supera todos los desafíos, muestra un mensaje de éxito.
    alert("¡Felicidades! Has completado todos los desafíos y encontrado el tesoro mágico. Eres un verdadero aventurero.");
} else {
    // Si el jugador no supera todos los desafíos, muestra un mensaje de fin de juego.
    alert("Fin del juego. No has logrado completar todos los desafíos esta vez.");
}
