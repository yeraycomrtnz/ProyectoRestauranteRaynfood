document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navToggle = document.getElementById("nav-toggle"); // Seleccionamos el icono
    const navLinks = document.querySelector(".nav-links"); // Seleccionamos los enlaces del menú

    // Cambiar el color de fondo del nav cuando se hace scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Función para mostrar u ocultar los enlaces de navegación cuando se hace click en el icono
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");  // Alternamos la clase 'active' que controla la visibilidad
    });
});
