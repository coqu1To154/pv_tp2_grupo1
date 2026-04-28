
const edades = [18, 22,25,30, 19, 21, 24, 55];
const procesarEdades = () => {
    let suma= 0;
    console.log("Lista de edades:")
    edades.forEach(edad => {
        console.log(edad);
        suma += edad;
});
const promedio = suma / edades.length;
console.log(`El promedio de las edades es: ${promedio}`);
};
procesarEdades();