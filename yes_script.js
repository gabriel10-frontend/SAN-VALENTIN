document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "TE AMOO.pdf"; // Asegúrate de que el archivo "carta.pdf" esté en la misma carpeta
        link.download = "TE AMOO.pdf"; // Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});


