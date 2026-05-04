import { cargarPaises, seleccionarCapital } from "./funciones21.js";

const selectPaises = document.getElementById("paises");
const selectCapitales = document.getElementById("capitales");
const resultado = document.getElementById("resultado");

cargarPaises(selectPaises);

selectPaises.addEventListener("change", () => {
    const paisSeleccionado = selectPaises.value;

    if (paisSeleccionado !== "") {
        seleccionarCapital(paisSeleccionado, selectCapitales, resultado);
    }
});