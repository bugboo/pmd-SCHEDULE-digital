// ==============================
// Schedule Digital - script.js
// ==============================

// Header muda de cor ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
    }
});

// Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });
});

// ==============================
// Animação dos Cards
// ==============================

const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.classList.add("esconder");

    observador.observe(card);

});

// ==============================
// Botão Voltar ao Topo
// ==============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.classList.add("ativo");

    } else {

        botaoTopo.classList.remove("ativo");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Efeito Hover nos Cards
// ==============================

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// Destaque do menu
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    sections.forEach(secao => {

        const topo = secao.offsetTop - 120;
        const altura = secao.clientHeight;

        if (pageYOffset >= topo) {

            atual = secao.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("active");

        }

    });

});