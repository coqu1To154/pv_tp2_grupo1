import { procesarTexto } from './funciones22.js';

const entrada = document.getElementById('inputTexto');
const salida = document.getElementById('textoReflejado');

// El evento 'input' detecta cambios en tiempo real
entrada.addEventListener('input', () => {
    const valorActual = entrada.value;
    
   
    salida.textContent = procesarTexto(valorActual);
});