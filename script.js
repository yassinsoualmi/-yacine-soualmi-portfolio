document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".skill-card, .timeline-item, .contact-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = `opacity .65s ease ${i * 70}ms, transform .65s ease ${i * 70}ms`;
  observer.observe(el);
});

// Cursor glow for desktop.
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});

// Subtle magnetic effect on the main CTA.
document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("pointermove", (e) => {
    const r = button.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.12;
    const y = (e.clientY - r.top - r.height / 2) * 0.12;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});
