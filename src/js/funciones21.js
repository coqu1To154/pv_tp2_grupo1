// datos de paises y capitales
export const datos = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Uruguay: "Montevideo",
    Peru: "Lima",
    Colombia: "Bogota",
};

// cargar paises en select
export const cargarPaises = (selectPaises) => {
    Object.keys(datos).forEach(pais => {
        const option = document.createElement("option");
        option.value = pais;
        option.textContent = pais;
        selectPaises.appendChild(option);
    });
};

// seleccionar capital automaticamente
export const seleccionarCapital = (pais,selectCapitales,resultado) => {
    selectCapitales.innerHTML = "";
    const capital = datos[pais];
    const option = document.createElement("option");
    option.value = capital;
    option.textContent = capital;
    selectCapitales.appendChild(option);
    
    // mostrar en pantalla
    resultado.textContent = `País: ${pais} - Capital: ${capital}`;
};