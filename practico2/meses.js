const readlineSync = require('readline-sync');
const numero = readlineSync.question("Coloque un numero del 1 al 12 ");

switch (numero) {
    case "1":
      console.log ("La cantidad de dias del mes de enero es 31");
      break;
    case "2":
      console.log("La cantidad de dias del mes de febrero es 28");
      break;
    case "3":
      console.log("La cantidad de dias del mes de marzo es 31"); 
      break;
    case "4":
      console.log("La cantidad de dias del mes de abril es 30");
      break;
    case "5":
      console.log("La cantidad de dias del mes de mayo es 31");
      break;
    case "6":
      console.log("La cantidad de dias del mes de junio es 30");
      break;
    case "7":
      console.log("La cantidad de dias del mes de julio es 31");
      break;
    case "8":
      console.log("La cantidad de dias del mes de agosto es 31");
      break;
    case "9":
      console.log("La cantidad de dias del mes de septiembre es 30");
      break;
    case "10":
      console.log("La cantidad de dias del mes de octubre es 31");
      break;
    case "11":
      console.log("La cantidad de dias del mes de noviembre es 30");
      break;
    case "12":
        console.log("La cantidad de dias del mes de diciembre es 31");
        break;
    default:
        console.log("Numero incorrecto");
        
}