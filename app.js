// Función para encriptar
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Manejar el evento de encriptar
document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let outputText = encryptText(inputText);
    document.getElementById("output-text").value = outputText;
});

// Manejar el evento de desencriptar
document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let outputText = decryptText(inputText);
    document.getElementById("output-text").value = outputText;
});

// Copiar el texto al portapapeles
document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});
