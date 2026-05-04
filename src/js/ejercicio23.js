import { actualizarTexto } from "./funciones23.js";

const input = document.querySelector("#entradaTexto");
const salida = document.querySelector("#textoMostrado");

input.addEventListener("input", () =>{
    actualizarTexto(input, salida);
});
