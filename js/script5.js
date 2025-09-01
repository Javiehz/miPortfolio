document.addEventListener("DOMContentLoaded", () => {
  const parrafos = [
    "Soy Javier, tengo 23 años y soy un apasionado de la tecnología.",
    "Tengo un grado medio de Sistemas Microinformáticos y Redes.",
    "Actualmente estoy estudiando un grado superior de Desarrollo",
    "de Aplicaciones Multiplataforma."
  ];

  const parrafosIds = ["p1", "p2", "p3", "p4"]; 
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
