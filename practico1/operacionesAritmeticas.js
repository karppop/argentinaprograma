let num1 = 8, num2 = 7, num3 = 6, num4 = 5;
let suma = num1 + num2;
let resta = num3 - num4;
let resultadoFinal = suma * resta;
let esPar;
if ((resultadoFinal % 2) === 0) {
    esPar = true;
}
console.log("Mis variables iniciales fueron:"+num1+", "+ num2+", "+ num3+", " +num4 +". La respuesta a verificar si el resultado final es par es: "+ esPar);
