const inputNombre = document.getElementById("nombre") as HTMLInputElement;
const botonSaludar = document.getElementById("saludar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

botonSaludar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  resultado.textContent = nombre ? `Hola, ${nombre}` : "Escribí un nombre primero.";
});
