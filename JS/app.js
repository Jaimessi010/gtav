// =============================
// MENÚ RESPONSIVE
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Cerrar menú al seleccionar una opción

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =============================
// MODAL
// =============================

const infoBtn = document.getElementById("infoBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");


// Abrir modal

infoBtn.addEventListener("click", () => {

    modal.classList.add("active");

});


// Cerrar modal

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


// Cerrar dando clic fuera del modal

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// Cerrar con ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


// =============================
// BOTÓN EXPLORAR
// =============================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    alert(
        "Los Santos es la principal ciudad de GTA V. " +
        "Está inspirada principalmente en Los Ángeles y forma parte " +
        "del estado ficticio de San Andreas."
    );

});


// =============================
// ANIMACIONES AL HACER SCROLL
// =============================

const cards = document.querySelectorAll(
    ".character-card, .feature-card, .game-card, .stat"
);


// Agregar clase inicial

cards.forEach(card => {

    card.classList.add("reveal");

});


function revealElements() {

    const windowHeight = window.innerHeight;

    cards.forEach(card => {

        const elementTop =
            card.getBoundingClientRect().top;

        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {

            card.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealElements
);


// Ejecutar una vez al cargar

revealElements();


// =============================
// CAMBIO DE NAVBAR AL HACER SCROLL
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0, 0, 0, 0.96)";

    } else {

        header.style.background =
            "rgba(0, 0, 0, 0.88)";

    }

});