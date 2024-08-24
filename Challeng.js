
document.addEventListener('DOMContentLoaded', () => {
    const iconDesktop = document.getElementById('icon-desktop');
    const scriptWindow = document.getElementById('script-window');
    const closeWindowButton = document.getElementById('close-window');
    const hideWindowButton = document.getElementById('hide-window');

    // Mostrar ventana al hacer clic en el icono del escritorio
    iconDesktop.addEventListener('click', () => {
        scriptWindow.style.display = 'flex';
    });

    // Cerrar ventana al hacer clic en el botón de cerrar
    closeWindowButton.addEventListener('click', () => {
        scriptWindow.style.display = 'none';
    });

    // Ocultar ventana al hacer clic en el botón de ocultar
    hideWindowButton.addEventListener('click', () => {
        scriptWindow.style.display = 'none';
    });
});



// Funciones para encriptar, desencriptar y copiar el resultado
function encryptMessage(message) {
    return message.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptMessage(message) {
    return message.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function displayResult(result) {
    document.getElementById('result').textContent = result;
}

function showLoadingAnimation() {
    const resultDiv = document.getElementById('result');
    const loadingAnimation = document.createElement('div');
    loadingAnimation.id = 'loading-animation';

    const hourglass = document.createElement('img');
    hourglass.src = 'icons8-hourglass-32.png'; // Asegúrate de usar la ruta correcta
    hourglass.alt = 'Reloj de arena';
    hourglass.style.width = '30px'; // Ajusta el tamaño según necesites

    const loadingText = document.createElement('div');
    loadingText.id = 'loading-text';

    let dots = 0;
    const textInterval = setInterval(() => {
        loadingText.textContent = `Codificando${'.'.repeat(dots % 4)}`;
        dots++;
    }, 500);

    loadingAnimation.appendChild(hourglass);
    loadingAnimation.appendChild(loadingText);
    resultDiv.innerHTML = '';
    resultDiv.appendChild(loadingAnimation);

    setTimeout(() => {
        clearInterval(textInterval);
        resultDiv.innerHTML = ''; // Limpia la animación
    }, 3000);
}

document.getElementById('encrypt-button').addEventListener('click', function () {
    const message = document.getElementById('message-input').value.toLowerCase();
    showLoadingAnimation();
    setTimeout(() => {
        const encryptedMessage = encryptMessage(message);
        displayResult(encryptedMessage);
    }, 3000);
});

document.getElementById('decrypt-button').addEventListener('click', function () {
    const message = document.getElementById('message-input').value.toLowerCase();
    showLoadingAnimation();
    setTimeout(() => {
        const decryptedMessage = decryptMessage(message);
        displayResult(decryptedMessage);
    }, 3000);
});

document.getElementById('copy-button').addEventListener('click', function () {
    const range = document.createRange();
    range.selectNode(document.getElementById('result'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});
