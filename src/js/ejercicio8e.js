let cant = 0;
let notas = [1,2,3,4,5,6,7,8,9,10];
const totalNotas = notas.length;
const cantAprobados = (notas) => {
    notas.forEach (nota => {
        if (nota>=6) {
            cant++;
        }
    })
    return cant;
}
console.log(`Cantidad total de notas: ${totalNotas}`);
console.log(`Cantidad de notas aprobadas: ${cantAprobados(notas)}`);