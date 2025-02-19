document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        console.log("Scrolling..."); // Debug para ver si la función se ejecuta
        if (window.scrollY > 50) {
            console.log("Añadiendo clase 'scrolled'"); // Verifica si se activa el cambio
            nav.classList.add("scrolled");
        } else {
            console.log("Quitando clase 'scrolled'"); // Verifica si se revierte el cambio
            nav.classList.remove("scrolled");
        }
    });
});


