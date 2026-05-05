import { obtenerNuevoTexto, COLOR_NUEVO } from './funciones19.js';


const parrafo = document.getElementById('textoParrafo');
const boton = document.getElementById('btnCambiar');


boton.addEventListener('click', () => {
   
    parrafo.textContent = obtenerNuevoTexto();
    
   
    parrafo.style.color = COLOR_NUEVO;
    parrafo.style.fontWeight = "bold";
});