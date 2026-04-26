let acumulador = 0;
let cant = 10;
let notas = [1,2,3,4,5,6,7,8,9,10];
const promedio = (notas) => {
    notas.forEach (nota => {
        acumulador +=nota;
    })
    return acumulador/cant;
}

console.log(`El promedio de las notas es ${promedio(notas)}`);
