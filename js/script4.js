document.addEventListener("DOMContentLoaded", () => {
  const parrafos = [
    "Mi e-mail de contacto es: ...",
    "Ademas puedes..."
  ];

  const parrafosIds = ["p1"];

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

  escribirParrafo(0); // empieza directo con los párrafos
});
