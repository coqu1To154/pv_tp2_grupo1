export function procesarTexto(valor) {
    if (valor.trim() === "") {
        return "Esperando que escribas algo...";
    }
    return valor;
}