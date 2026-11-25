function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

function commander(plat) {
  const message = `Bonjour César BURKINA, je souhaite commander : ${plat}. Merci de me confirmer la disponibilité.`;
  window.open(`https://wa.me/22607207830?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

// Ferme le menu mobile après sélection d'une rubrique.
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("show");
  });
});
