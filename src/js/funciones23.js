export const actualizarTexto = (texto, salida)=>{
    salida.textContent = texto;

    if(texto.length > 20){
        salida.style.backgroundColor = "lightcoral";
    } else{
        salida.style.backgroundColor = "white";
    }
};