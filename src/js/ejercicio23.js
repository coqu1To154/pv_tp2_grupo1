import { actualizarTexto } from "./funciones23.js";

const input = document.querySelector("#entradaTexto");
const salida = document.querySelector("#textoResultado");

input.addEventListener("input", () =>{
    actualizarTexto(input.value, salida);
});
