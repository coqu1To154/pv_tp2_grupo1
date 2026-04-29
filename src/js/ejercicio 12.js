const verificarEdad = (edad) => {
if(edad >= 18 ){
console.log(`La edad ${edad} es confirmada para votar`);


}else {
console.log(`La edad ${edad} no esta permitida votar`);

}
};
verificarEdad(7)
verificarEdad(18)
verificarEdad(80)