document.addEventListener("DOMContentLoaded", function() {
    const imagenesSecundarias = document.querySelectorAll(".imagen-secundaria");
    const imagenPrincipal = document.getElementById("imagen-principal");

    imagenesSecundarias.forEach(function(imgSecundaria) {
        imgSecundaria.addEventListener("click", function() {
            const indice = imgSecundaria.getAttribute("data-index");
            const nuevaImagenSrc = imgSecundaria.getAttribute("src");

            imagenPrincipal.src = nuevaImagenSrc;

            // Ahora, movemos la imagen anterior principal al lugar de la imagen secundaria
            const imagenAnteriorPrincipal = document.querySelector(".contenedor_detalles_carrusel .imagen-secundaria");
            const imagenAnteriorSrc = imagenAnteriorPrincipal.getAttribute("src");
            imagenAnteriorPrincipal.setAttribute("src", nuevaImagenSrc);
            imgSecundaria.setAttribute("src", imagenAnteriorSrc);
        });
    });
});