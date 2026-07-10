const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const numeroWhatsApp = "2250702354211";

    const texte = `
Bonjour Clever Entreprises,

Je souhaite faire une demande de devis.

Nom : ${nom}
Téléphone : ${telephone}
Email : ${email}
Service souhaité : ${service}

Message :
${message}
`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");
});const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuLinks = document.querySelectorAll(".main-nav a");

menuToggle.addEventListener("click", function () {
    const menuIsOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});