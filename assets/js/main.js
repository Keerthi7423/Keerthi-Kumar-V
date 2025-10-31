/*=============== SCROLLREVEAL ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true // Animations repeat on scroll
});

/* ---------- HOME ---------- */
sr.reveal(".home__data", { origin: "left" });
sr.reveal(".home__image", { origin: "right", delay: 300 });
sr.reveal(".home__info", { origin: "bottom", delay: 500 });
sr.reveal(".home__social", { origin: "bottom", delay: 700 });

/* ---------- ABOUT ---------- */
sr.reveal(".about__image", { origin: "left" });
sr.reveal(".about__data", { origin: "right", delay: 300 });

/* ---------- SERVICES ---------- */
sr.reveal(".services__card", { origin: "bottom", interval: 200 });

/* ---------- PROJECTS ---------- */
sr.reveal(".projects__swiper", { origin: "bottom", interval: 200 });
sr.reveal(".projects__card", { origin: "bottom", interval: 200 });

/* ---------- WORK / EDUCATION ---------- */
sr.reveal(".work__card", { origin: "bottom", interval: 200 });

/* ---------- CONTACT ---------- */
sr.reveal(".contact__container", { origin: "bottom" });
sr.reveal(".contact__data", { origin: "left", delay: 200 });
sr.reveal(".contact__content", { origin: "right", delay: 400 });

/* ---------- NAVBAR ACTIVE LINK ON SCROLL ---------- */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(".nav__list a[href*=" + sectionId + "]");

    if (link) {
      link.classList.toggle(
        "active-link",
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      );
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SERVICES TOGGLE SKILLS ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".services__button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const info = btn.previousElementSibling; // skills div
      info.classList.toggle("active");

      const icon = btn.querySelector("i");
      if (icon) icon.classList.toggle("active");
    });
  });
});
