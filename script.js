function nextPage() {
    window.location.href = 'yes.html';
}

function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".container");

    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Asegurar que en pantallas táctiles no se vuelva imposible de presionar
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) { // Dispositivos móviles
        const noButton = document.getElementById("noButton");
        noButton.removeAttribute("onmouseover"); // Evitar el movimiento en móviles
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const flowerContainer = document.getElementById("flowerContainer");

    if (!flowerContainer) return; // Evita errores si no existe el contenedor

    const flowerImages = [
        "corazones.png",
        "corazones.png",
        "corazones.png"
    ];

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.backgroundImage = `url(${flowerImages[Math.floor(Math.random() * flowerImages.length)]})`;

        // Posiciona la flor en un lugar aleatorio
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        flowerContainer.appendChild(flower);

        // Hace crecer la flor y luego la hace desaparecer
        setTimeout(() => {
            flower.classList.add("grow");
        }, 100);

        setTimeout(() => {
            flower.classList.add("fadeOut");
        }, 3000); // Desaparece después de 3s

        setTimeout(() => {
            flower.remove();
        }, 4000); // Elimina la flor del DOM después de 4s
    }

    // Crear flores en bucle
    setInterval(() => {
        createFlower();
    }, 500); // Nueva flor cada 0.5 segundos
});

