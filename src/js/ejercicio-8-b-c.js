let notas = [1,2,3,4,5,6,7,8,9,10];
const recorrerArray = (notas) => {
    notas.forEach (nota => {
        if (nota>=6) {
            console.log(`${nota} es una nota aprobada`);
        }
        else {
            console.log(`${nota} es una nota desaprobada`);
        }
    });
}
recorrerArray(notas);
