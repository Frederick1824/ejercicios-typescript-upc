const inputNombre = document.getElementById("nombre");
const botonSaludar = document.getElementById("saludar");
const resultado = document.getElementById("resultado");

botonSaludar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  resultado.textContent = nombre ? `Hola, ${nombre}` : "Escribí un nombre primero.";
});
