let textArea = document.querySelector(".textarea");

let matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarClick() {
  const textoEncriptado = encriptar(textArea.value);
  textArea.value = textoEncriptado;
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
  textArea.value = textoEncriptado;
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
  navigator.clipboard.writeText(textArea.value);
}
