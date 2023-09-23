

// Función para generar números aleatorios sin repetición en un rango
function generarNumerosAleatorios(cantidad, maximo) {
    const numerosDisponibles = Array.from({ length: maximo + 1 }, (_, index) => index);
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

// Event listeners para los botones de sorteo
document.getElementById("sortear4").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(4, 99);
    mostrarNumerosSorteados(numerosSorteados);
});

document.getElementById("sortear5").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(5, 99);
    mostrarNumerosSorteados(numerosSorteados);
});

document.getElementById("sortear6").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(6, 99);
    mostrarNumerosSorteados(numerosSorteados);
});

document.getElementById("sortear7").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(7, 99);
    mostrarNumerosSorteados(numerosSorteados);
});

document.getElementById("sortearNr").addEventListener("click", () => {
    const numerosSorteados = generarNumerosAleatorios(5, 48);
    mostrarNumerosSorteados(numerosSorteados);
});
