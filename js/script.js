document.getElementById("enviar").addEventListener("click", function() {
  const nombreInput = document.getElementById("nombre");
  const nombre = nombreInput.value.trim();

  if(nombre === "") {
    alert("Por favor, introduce tu nombre.");
    return;
  }

  localStorage.setItem("nombreUsuario", nombre);

  window.location.href = "index2.html";
});