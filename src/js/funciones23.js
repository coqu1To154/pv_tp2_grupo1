export const actualizarTexto = (input, salida)=>{
    const texto = input.value;

    salida.textContent = texto;

    if(texto.length > 20){
        salida.style.backgroundColor = "lightcoral";
    } else{
        salida.style.backgroundColor = "white";
    }

};
