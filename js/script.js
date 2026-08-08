/* ==========================================
   RATUL ANICK PAUL
   PORTFOLIO SCRIPT
========================================== */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.style.background = "rgba(11,31,58,.98)";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        navbar.style.background = "rgba(11,31,58,.96)";
        navbar.style.padding = "14px 0";
        navbar.style.boxShadow = "none";
    }
});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section,.timeline-item,.research-card,.project-card,.publication-card,.education-card,.cert-card"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});