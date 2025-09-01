document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("nombreUsuario") || "invitado";
  const saludoTexto = `¡Hola, ${nombre}!`;
  const saludoElemento = document.getElementById("nombreSaludo");
  const cursor = document.querySelector(".cursor");

  const parrafos = [
    "Gracias por interesarte sobre mi perfil.",
    "Elige una de las opciones (PROYECTOS, CONTACTO, SOBRE JAVIER)"
  ];

  const parrafosIds = ["p1", "p2"];

  let i = 0;

  function escribirTexto(texto, elemento, callback) {
    let j = 0;
    function escribirLetra() {
      if (j < texto.length) {
        elemento.textContent += texto.charAt(j);
        j++;
        setTimeout(escribirLetra, 40);
      } else if (callback) {
        callback();
      }
    }
    escribirLetra();
  }

  escribirTexto(saludoTexto, saludoElemento, () => {
    function escribirParrafo(index) {
      if (index < parrafos.length) {
        const p = document.getElementById(parrafosIds[index]);
        p.style.display = "block";
        escribirTexto(parrafos[index], p, () => {
          escribirParrafo(index + 1);
        });
      }
    }
    escribirParrafo(0);
  });
});