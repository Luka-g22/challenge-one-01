let textArea = document.querySelector(".textarea");
let mensaje = document.querySelector(".mensaje");
let ingreseTexto = document.querySelector(".ingreseTexto");

let matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

if (mensaje.length == 0) {
  ingreseTexto.style.visibility = "visible";
} else {
  ingreseTexto.style.visibility = "hidden";
}

function encriptarClick() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptado) {
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < matriz.length; i++) {
    if (stringEncriptado.includes(matriz[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return stringEncriptado;
}

function desencriptarClick() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (stringDesencriptado.includes(matriz[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }
  return stringDesencriptado;
}

function copiarClick() {
  navigator.clipboard.writeText(mensaje.value);
}

