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
  // Conversión de metros a millas.
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
  // Objetivo: calcular el producto de dos números introducidos por el usuario.
  const n1 = await pedirNumero("Ingrese el primer número: ");
  const n2 = await pedirNumero("Ingrese el segundo número: ");
  console.log(`Producto: ${n1 * n2}`);
}

async function ejercicio28(): Promise<void> {
  // Autor: Federico Montoro - Fecha: 28/04/2026
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
    default: console.log("Elegí un ejercicio del 1 al 30, animal de la compu.");
  }
}

async function main(): Promise<void> {
  console.log("=== Ejercicios TypeScript 1 al 30 ===");
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

main();
