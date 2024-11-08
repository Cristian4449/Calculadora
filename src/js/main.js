function agregarValor(valor) {
    const resultado = document.getElementById('resultado');
    
    if (valor === '.') {
        // Evitar múltiples puntos en un mismo número
        const partes = resultado.value.split(/[\+\-\*\/]/); // Separamos los números por operadores
        const parteActual = partes[partes.length - 1];
        
        if (parteActual.includes('.')) {
            return; // No agregar otro punto si la parte actual ya tiene uno
        }
    }

    resultado.value += valor;
}

function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.value = '';
}

function calcularResultado() {
    const resultado = document.getElementById('resultado');
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        alert("Expresión inválida");
    }
}
