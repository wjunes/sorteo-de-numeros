

// Función para generar números aleatorios sin repetición en un rango
function generarNumerosAleatorios(cantidad, maximo) {
    const numerosDisponibles = Array.from({ length: maximo }, (_, index) => index + 1);
    const numerosSorteados = [];

    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
        const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
        numerosSorteados.push(numeroAleatorio);
    }

    return numerosSorteados;
}

// Función para mostrar los números sorteados en el frontend
function mostrarNumerosSorteados(numeros) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = ` ${numeros.join(", ")}`;
}

// Event listener para el botón de sorteo
document.getElementById("sortear").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(5, 48);
    mostrarNumerosSorteados(numerosSorteados);
});
