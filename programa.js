// Cajas de texto
let textoEntrada = document.getElementById("textoEntrada");
textoEntrada.focus();
let textoSalida = document.getElementById("textoSalida");
// Functions
function encriptar() {
  let mensaje = textoEntrada.value;
  if (mensaje.trim().length === 0) {
    alert("Introduce un mensaje!");
  } else {
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i];
      switch (caracter) {
        case "a":
          resultado += "ai";
          break;
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += caracter;
      }
    }
    console.log(resultado);
    textoSalida.value = resultado;
    document.getElementById("copiar").style.display = "block";
  }
}

function desencriptar() {
  let mensaje = textoEntrada.value;
  if (mensaje.trim().length === 0) {
    alert("Introduce un mensaje!");
  } else {
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/enter/g, "e");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ufat/g, "u");
    let fraseDesencriptada = mensaje;
    console.log(fraseDesencriptada);
    textoSalida.value = fraseDesencriptada;
    document.getElementById("copiar").style.display = "block";
  }
}
// Copiar texto
function copiar() {
  let copiarTexto = textoSalida.value;
  textoSalida.focus(); // da el enfoque al elemento
  navigator.clipboard
    .writeText(copiarTexto)
    .then(() => {
      alert("Se copió el texto!");
      botonCopiar.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
    });
}

// Botones y  datos de texto

let botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", encriptar);

let botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click", desencriptar);

let botonCopiar = document.getElementById("copiar");
botonCopiar.addEventListener("click", copiar);
