//Declaracion de las variables
const horas = 9;
const minutos = 12; 
//Funcion flecha para el punto
const HorasMin =  (hora,min) => {
    return hora*60*60+min*60;
}
//Mostrar por consola resultados
console.log("Horas: " + horas + " Minutos: " + minutos);
console.log("Cantidad de segundos: "+HorasMin(horas,minutos));