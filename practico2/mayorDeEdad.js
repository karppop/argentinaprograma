const readlineSync = require('readline-sync');
const edad = readlineSync.question("Cual es tu edad?")
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
