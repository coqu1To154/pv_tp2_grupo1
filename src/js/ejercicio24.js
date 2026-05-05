
import { mostrarResultado, mostrarEnConsola } from './funciones24.js';

const radios = document.querySelectorAll('input[name="lenguaje"]');

radios.forEach(function(radio) {

  radio.addEventListener('change', function() {

    const valorSeleccionado = this.value;

    mostrarResultado(valorSeleccionado);
    mostrarEnConsola(valorSeleccionado);

  });

});