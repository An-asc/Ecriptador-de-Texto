// Capturamos los elementos del DOM
const inputTextarea = document.querySelector(".textarea1");
const encriptarBtn = document.getElementById("encriptarBtn");
const desencriptarBtn = document.getElementById("desencriptarBtn");
const outputText = document.getElementById("outputText");
const copiarBtn = document.getElementById("copiarBtn");

// Función de validación (no mayúsculas ni caracteres especiales)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo acepta letras minúsculas y espacios
    return regex.test(texto);
}

// Función de encriptar
function encriptarTexto(texto) {
    if (!validarTexto(texto)) {
        alert("El texto contiene mayúsculas o caracteres no permitidos.");
        return "";  // Retornar vacío para no proceder
    }
    // Lógica básica de encriptación (cambia cada vocal por otra secuencia)
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

// Función de desencriptar
function desencriptarTexto(texto) {
    if (!validarTexto(texto)) {
        alert("El texto contiene mayúsculas o caracteres no permitidos.");
        return "";  // Retornar vacío para no proceder
    }
    // Lógica básica para desencriptar (revierte el proceso de encriptación)
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

// Añadir eventos a los botones de encriptar y desencriptar
encriptarBtn.addEventListener("click", function() {
    const textoIngresado = inputTextarea.value.trim();  // Trim para eliminar espacios extra
    if (!textoIngresado) {
        alert("Por favor ingresa un texto para encriptar.");
        return;
    }

    const textoEncriptado = encriptarTexto(textoIngresado);
    if (textoEncriptado) {
        outputText.textContent = textoEncriptado;
    }
});

desencriptarBtn.addEventListener("click", function() {
    const textoIngresado = inputTextarea.value.trim();
    if (!textoIngresado) {
        alert("Por favor ingresa un texto para desencriptar.");
        return;
    }

    const textoDesencriptado = desencriptarTexto(textoIngresado);
    if (textoDesencriptado) {
        outputText.textContent = textoDesencriptado;
    }
});

// Función para copiar el texto encriptado/desencriptado al portapapeles
copiarBtn.addEventListener("click", function() {
    const textoACopiar = outputText.textContent;
    
    if (!textoACopiar) {
        alert("No hay texto para copiar.");
        return;
    }

    // Verifica si la API de portapapeles es compatible
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoACopiar).then(() => {
            alert("Texto copiado al portapapeles.");
        }).catch(err => {
            alert("Hubo un error al copiar el texto: " + err);
        });
    } else {
        alert("Tu navegador no soporta la API de portapapeles.");
    }
});
