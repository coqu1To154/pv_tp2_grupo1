const mostrarDiezImpares = () => {
let cantidadEncontrada = 0;
let numeroActual = 1;
console.log("Listado de los primeros 10 numeros impares:") ;

while (cantidadEncontrada <10){

if (numeroActual % 2 !== 0){
    console.log(`Impar N${cantidadEncontrada + 1}: ${numeroActual}`);
cantidadEncontrada++;





}
numeroActual++;


}

};
mostrarDiezImpares();