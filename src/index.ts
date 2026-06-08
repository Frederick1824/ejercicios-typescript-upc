import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

async function pedirTexto(mensaje: string): Promise<string> {
  return (await rl.question(mensaje)).trim();
}

async function pedirNumero(mensaje: string): Promise<number> {
  const valor = Number(await pedirTexto(mensaje));
  if (Number.isNaN(valor)) {
    console.log("Eso no es un número válido.");
    return pedirNumero(mensaje);
  }
  return valor;
}

// ==========================================
// BLOQUE DE EJERCICIOS (1 al 30)
// ==========================================

function ejercicio1(): void {
  const nombre = "Fede";
  console.log(`Hola, ${nombre}`);
}

function ejercicio2(): void {
  console.log(118 + 56);
}

function ejercicio3(): void {
  console.log(12345 + 67890);
}

function ejercicio4(): void {
  console.log(12 * 13);
}

function ejercicio5(): void {
  console.log(321 - 213);
}

function ejercicio6(): void {
  console.log(301 / 3);
}

function ejercicio7(): void {
  console.log(301 % 3);
}

function ejercicio8(): void {
  console.log(-2 + 3 * 5);
}

function ejercicio9(): void {
  console.log((20 + 5) % 6);
}

function ejercicio10(): void {
  console.log(15 + (-5 * 6) / 10);
}

function ejercicio11(): void {
  console.log(2 + (10 / 5) * 2 - (7 % 1));
}

function ejercicio12(): void {
  let n1: number;
  let n2: number;
  let n3: number;

  n1 = 10;
  n2 = 20;
  n3 = 30;

  console.log(n1, n2, n3);
}

function ejercicio13(): void {
  const n1 = 10, n2 = 20, n3 = 30;
  console.log(n1, n2, n3);
}

function ejercicio14(): void {
  const n1 = 121;
  const n2 = 132;
  console.log(n1 * n2);
}

function ejercicio15(): void {
  const n1 = 285;
  const n2 = 1396;
  console.log(n1 + n2);
}

function ejercicio16(): void {
  const n1 = 3784;
  const n2 = 16;
  console.log(n1 % n2);
}

function ejercicio17(): void {
  const n1 = 5;
  const n2 = 3;
  const n3 = 4;
  console.log(n1 + n2 * n3);
}

function ejercicio18(): void {
  const numero1 = 87;
  const numero2 = 94;
  console.log(numero1 * numero2);
}

function ejercicio19(): void {
  console.log("No se puede: las variables no pueden empezar con número, ejemplo: 1numero.");
}

function ejercicio20(): void {
  console.log("No se puede: los nombres de variables no pueden tener espacios, ejemplo: número 1.");
}

function ejercicio21(): void {
  const número1 = 87;
  const número2 = 94;
  console.log(número1 * número2);
}

function ejercicio22(): void {
  const metros = 3000;
  const metrosPorMilla = 1609;
  const millas = metros / metrosPorMilla;
  console.log(`${metros} metros equivalen a ${millas} millas.`);
}

async function ejercicio23(): Promise<void> {
  const numero1 = await pedirNumero("Ingrese el primer número: ");
  const numero2 = await pedirNumero("Ingrese el segundo número: ");
  console.log(`Producto: ${numero1 * numero2}`);
}

async function ejercicio24(): Promise<void> {
  const numero1 = await pedirNumero("Ingrese el primer número: ");
  const numero2 = await pedirNumero("Ingrese el segundo número: ");

  if (numero2 === 0) {
    console.log("No se puede dividir por cero.");
    return;
  }

  console.log(`División: ${numero1 / numero2}`);
  console.log(`Resto: ${numero1 % numero2}`);
}

async function ejercicio25(): Promise<void> {
  const n1 = await pedirNumero("Ingrese el primer número: ");
  const n2 = await pedirNumero("Ingrese el segundo número: ");
  const n3 = await pedirNumero("Ingrese el tercer número: ");
  console.log(`Suma: ${n1 + n2 + n3}`);
}

async function ejercicio26(): Promise<void> {
  const millasNauticas = await pedirNumero("Ingrese millas náuticas: ");
  const metros = millasNauticas * 1852;
  console.log(`${millasNauticas} millas náuticas equivalen a ${metros} metros.`);
}

async function ejercicio27(): Promise<void> {
  const n1 = await pedirNumero("Ingrese el primer número: ");
  const n2 = await pedirNumero("Ingrese el segundo número: ");
  console.log(`Producto: ${n1 * n2}`);
}

async function ejercicio28(): Promise<void> {
  const n1 = await pedirNumero("Ingrese el primer número: ");
  const n2 = await pedirNumero("Ingrese el segundo número: ");

  if (n2 === 0) {
    console.log("No se puede dividir por cero.");
    return;
  }

  console.log(`División: ${n1 / n2}`);
  console.log(`Resto: ${n1 % n2}`);
}

async function ejercicio29(): Promise<void> {
  const a = await pedirNumero("Ingrese a: ");
  const b = await pedirNumero("Ingrese b: ");

  const resultado1 = (a + b) * (a - b);
  const resultado2 = a ** 2 - b ** 2;

  console.log(`(a+b)*(a-b) = ${resultado1} | a²-b² = ${resultado2}`);
}

async function ejercicio30(): Promise<void> {
  const numero = await pedirNumero("Ingrese un número: ");

  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// ==========================================
// CONTROLADOR DEL ENRUTAMIENTO (SWITCH)
// ==========================================

async function ejecutarEjercicio(numero: number): Promise<void> {
  switch (numero) {
    case 1: ejercicio1(); break;
    case 2: ejercicio2(); break;
    case 3: ejercicio3(); break;
    case 4: ejercicio4(); break;
    case 5: ejercicio5(); break;
    case 6: ejercicio6(); break;
    case 7: ejercicio7(); break;
    case 8: ejercicio8(); break;
    case 9: ejercicio9(); break;
    case 10: ejercicio10(); break;
    case 11: ejercicio11(); break;
    case 12: ejercicio12(); break;
    case 13: ejercicio13(); break;
    case 14: ejercicio14(); break;
    case 15: ejercicio15(); break;
    case 16: ejercicio16(); break;
    case 17: ejercicio17(); break;
    case 18: ejercicio18(); break;
    case 19: ejercicio19(); break;
    case 20: ejercicio20(); break;
    case 21: ejercicio21(); break;
    case 22: ejercicio22(); break;
    case 23: await ejercicio23(); break;
    case 24: await ejercicio24(); break;
    case 25: await ejercicio25(); break;
    case 26: await ejercicio26(); break;
    case 27: await ejercicio27(); break;
    case 28: await ejercicio28(); break;
    case 29: await ejercicio29(); break;
    case 30: await ejercicio30(); break;
    case 50: await ejercicio50(); break;
    case 51: await ejercicio51(); break;
    case 55: await ejercicio55(); break;
    case 56: await ejercicio56(); break;
    case 57: await ejercicio57(); break;
    case 58: await ejercicio58(); break;
    case 59: await ejercicio59(); break;
    case 60: await ejercicio60(); break;
    case 61: await ejercicio61(); break;
    case 62: await ejercicio62(); break;
    case 63: await ejercicio63(); break;
    case 64: await ejercicio64(); break;
    case 65: await ejercicio65(); break;
    case 66: await ejercicio66(); break;
    case 67: await ejercicio67(); break;
    case 68: await ejercicio68(); break;
    case 69: await ejercicio69(); break;
    case 70: await ejercicio70(); break;
    default:
      console.log("Elegí un ejercicio válido: 1 al 30 o 50 al 70.");
  }
}

// ==========================================
// FUNCIÓN PRINCIPAL (MAIN)
// ==========================================

async function main(): Promise<void> {
  console.log("=== Ejercicios TypeScript 1 al 30 y 50 al 70 ===");
  console.log("Escribí 0 para salir.\n");

  let continuar = true;

  while (continuar) {
    const numero = await pedirNumero("Número de ejercicio: ");

    if (numero === 0) {
      continuar = false;
    } else {
      await ejecutarEjercicio(numero);
      console.log("");
    }
  }

  rl.close();
}

// ==========================================
// BLOQUE DE EJERCICIOS (50 al 70)
// ==========================================

async function ejercicio50(): Promise<void> {
  const a = await pedirNumero("Número 1: ");
  const b = await pedirNumero("Número 2: ");

  if (a === b) {
    console.log("Son iguales");
  } else if (a > b) {
    console.log(`${a} es mayor`);
  } else {
    console.log(`${b} es mayor`);
  }
}

async function ejercicio51(): Promise<void> {
  const x = await pedirNumero("Número: ");

  if (5 === x) {
    console.log("El número es 5");
  } else {
    console.log("El número no es 5");
  }
}

async function ejercicio55(): Promise<void> {
  const n = await pedirNumero("Número: ");
  console.log(`Valor absoluto: ${n >= 0 ? n : -n}`);
}

async function ejercicio56(): Promise<void> {
  const a = await pedirNumero("Número 1: ");
  const b = await pedirNumero("Número 2: ");

  console.log(`El menor es: ${a < b ? a : b}`);
}

async function ejercicio57(): Promise<void> {
  const n = await pedirNumero("Número del 1 al 5: ");

  switch (n) {
    case 1: console.log("uno"); break;
    case 2: console.log("dos"); break;
    case 3: console.log("tres"); break;
    case 4: console.log("cuatro"); break;
    case 5: console.log("cinco"); break;
    default: console.log("Número inválido");
  }
}

async function ejercicio58(): Promise<void> {
  const simbolo = (await pedirTexto("Ingrese un carácter: "))[0];

  switch (simbolo) {
    case ".":
    case ",":
    case ";":
    case ":":
      console.log("Es un signo de puntuación");
      break;
    default:
      if (simbolo >= "0" && simbolo <= "9") {
        console.log("Es una cifra numérica");
      } else {
        console.log("Es otro carácter");
      }
  }
}

async function ejercicio59(): Promise<void> {
  const letra = (await pedirTexto("Ingrese una letra: ")).toLowerCase()[0];

  switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("Es una vocal");
      break;
    default:
      if (letra >= "0" && letra <= "9") {
        console.log("Es una cifra numérica");
      } else {
        console.log("Es una consonante");
      }
  }
}

async function ejercicio60(): Promise<void> {
  const n = await pedirNumero("Número del 1 al 5: ");

  if (n === 1) console.log("uno");
  else if (n === 2) console.log("dos");
  else if (n === 3) console.log("tres");
  else if (n === 4) console.log("cuatro");
  else if (n === 5) console.log("cinco");
  else console.log("Número inválido");
}

async function ejercicio61(): Promise<void> {
  const simbolo = (await pedirTexto("Ingrese un carácter: "))[0];

  if (simbolo === "." || simbolo === "," || simbolo === ";" || simbolo === ":") {
    console.log("Es un signo de puntuación");
  } else if (simbolo >= "0" && simbolo <= "9") {
    console.log("Es una cifra numérica");
  } else {
    console.log("Es otro carácter");
  }
}

async function ejercicio62(): Promise<void> {
  const letra = (await pedirTexto("Ingrese una letra: ")).toLowerCase()[0];

  if ("aeiou".includes(letra)) {
    console.log("Es una vocal");
  } else if (letra >= "0" && letra <= "9") {
    console.log("Es una cifra numérica");
  } else {
    console.log("Es una consonante");
  }
}

async function ejercicio63(): Promise<void> {
  let password = 0;

  while (password !== 1111) {
    password = await pedirNumero("Ingrese contraseña: ");
  }

  console.log("Contraseña correcta");
}

async function ejercicio64(): Promise<void> {
  let n = await pedirNumero("Número: ");

  while (n !== 0) {
    console.log(`Su cuadrado es ${n * n}`);
    n = await pedirNumero("Número: ");
  }
}

async function ejercicio65(): Promise<void> {
  let seguir = "s";

  while (seguir === "s") {
    const a = await pedirNumero("Primer número: ");
    const b = await pedirNumero("Segundo número: ");

    if (b !== 0 && a % b === 0) {
      console.log(`${a} es múltiplo de ${b}`);
    } else {
      console.log(`${a} no es múltiplo de ${b}`);
    }

    seguir = (await pedirTexto("¿Continuar? s/n: ")).toLowerCase();
  }
}

async function ejercicio66(): Promise<void> {
  let seguir = "s";

  while (seguir === "s") {
    const a = await pedirNumero("Primer número: ");
    const b = await pedirNumero("Segundo número: ");

    if (b !== 0 && a % b === 0) {
      console.log(`${a} es múltiplo de ${b}`);
    } else if (a !== 0 && b % a === 0) {
      console.log(`${b} es múltiplo de ${a}`);
    } else {
      console.log("Ninguno es múltiplo del otro");
    }

    seguir = (await pedirTexto("¿Continuar? s/n: ")).toLowerCase();
  }
}

async function ejercicio67(): Promise<void> {
  let i = 1;

  while (i <= 10) {
    console.log(i);
    i++;
  }
}

async function ejercicio68(): Promise<void> {
  let i = 26;

  while (i >= 10) {
    console.log(i);
    i -= 2;
  }
}

async function ejercicio69(): Promise<void> {
  let n = await pedirNumero("Número entero positivo: ");
  let cifras = 0;

  if (n === 0) {
    cifras = 1;
  } else {
    while (n > 0) {
      n = Math.floor(n / 10);
      cifras++;
    }
  }

  console.log(`Tiene ${cifras} cifras`);
}

async function ejercicio70(): Promise<void> {
  const secreto = 7;
  let intentos = 0;
  let adivino = false;

  while (intentos < 3 && !adivino) {
    const n = await pedirNumero("Adivine un número del 1 al 10: ");
    intentos++;

    if (n === secreto) {
      adivino = true;
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto");
    }
  }

  if (!adivino) {
    console.log(`Perdiste. El número era ${secreto}`);
  }
}

// Ejecución inicial de la app
main();