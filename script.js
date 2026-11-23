// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Abas de projetos
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
  });
});

// Estrelas de nível (1 a 5)
document.querySelectorAll(".stars[data-level]").forEach(el => {
  const level = Number(el.dataset.level);
  el.innerHTML = "★".repeat(level) + `<span class="off">${"★".repeat(5 - level)}</span>`;
  el.title = `${level} de 5`;
});

// Lightbox da galeria
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});
const closeLb = () => lightbox.classList.remove("open");
lightbox.addEventListener("click", e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
