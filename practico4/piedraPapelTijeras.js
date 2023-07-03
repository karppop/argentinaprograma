const JUGADA_PIEDRA = "piedra";
const JUGADA_PAPEL = "papel";
const JUGADA_TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
  let numeroAleatorio = Math.floor(Math.random() * 3);
  if (numeroAleatorio === 0) {
    return JUGADA_PIEDRA;
  } else if (numeroAleatorio === 1) {
    return JUGADA_PAPEL;
  } else {
    return JUGADA_TIJERAS;
  }
}

function obtenerJugadaUsuario() {
  const readlineSync = require('readline-sync');
  const numero = readlineSync.question("Ingrese un numero del 0 al 2 (0-Piedra, 1-Papel, 2-Tijeras): ");
  if (numero == 0) {
    return JUGADA_PIEDRA;
  } else if (numero == 1) {
    return JUGADA_PAPEL;
  } else if (numero == 2) {
    return JUGADA_TIJERAS;
  } else {
    console.log ("Numero incorrecto");
    return obtenerJugadaUsuario();
  }
}

function determinarGanador(compu, usuario) {
  if (compu === usuario) {
    return "Empate";
  } else if (
    (compu === JUGADA_PIEDRA && usuario === JUGADA_TIJERAS) ||
    (compu === JUGADA_PAPEL && usuario === JUGADA_PIEDRA) ||
    (compu === JUGADA_TIJERAS && usuario === JUGADA_PAPEL)
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

function jugarJuego(cantidadJugadas) {
  let victoriasComputadora = 0;
  let victoriasUsuario = 0;

  for (let i = 0; i < 3; i++) {
    let compu = obtenerJugadaComputadora();
    let usuario = obtenerJugadaUsuario();

    let resultado = determinarGanador(compu, usuario);
    console.log("Ronda %i - La computadora eligió: %s. El usuario eligió: %s. El resultado fue: %s", i + 1, compu, usuario, resultado);

    if (resultado === "Gana la computadora") {
      victoriasComputadora++;
    } else if (resultado === "Gana el usuario") {
      victoriasUsuario++;
    }
  }

  if (victoriasComputadora > victoriasUsuario) {
    console.log("La computadora es la ganadora del juego.");
  } else if (victoriasUsuario > victoriasComputadora) {
    console.log("El usuario es el ganador del juego.");
  } else {
    console.log("El juego terminó en empate.");
  }
}

const readlineSync = require('readline-sync');
const cantidadJugadas = readlineSync.questionInt("Ingrese la cantidad de rondas: ");

jugarJuego(cantidadJugadas);
