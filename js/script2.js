document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("nombreUsuario") || "invitado";
  const saludoTexto = `¡Hola, ${nombre}!`;
  const saludoElemento = document.getElementById("nombreSaludo");
  const cursor = document.querySelector(".cursor");

  const parrafos = [
    "Gracias por interesarte sobre mi perfil.",
    "Me llamo Javier, actualmente soy estudiante de DAM2.",
    "Tengo 22 años, nací en el año 2002.",
    "Soy un apasionado del mundo de la informática. Desde pequeño he estado rodeado de tecnología.",
    "Tengo un grado medio de Sistemas Microinformáticos y Redes."
  ];

  const parrafosIds = ["p1", "p2", "p3", "p4", "p5"];

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

  // Paso 1: Escribir saludo
  escribirTexto(saludoTexto, saludoElemento, () => {
    // Paso 2: Escribir párrafos uno por uno
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