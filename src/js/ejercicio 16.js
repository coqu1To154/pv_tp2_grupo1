const tabla= (numero) => {
console.log(`---TABLA MULTIPLICAR DEL ${numero}---`);
for(let i=1; i<=10;i++){
let resultado=numero*i;
console.log(`${numero} x ${i} = ${resultado}`);

}
};
tabla(5);
tabla(9);