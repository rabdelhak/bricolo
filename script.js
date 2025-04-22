function alertPromo() {
  alert("Découvrez nos offres spéciales du mois !");
}
function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  const menuIcon = document.getElementById("menuToggle");

  navMenu.classList.toggle("show");

  // Change l'icône ☰ ↔ ✖
  if (navMenu.classList.contains("show")) {
    menuIcon.textContent = "✖";
  } else {
    menuIcon.textContent = "☰";
  }
}

// Nouveau : reset du menu quand l’écran est large
window.addEventListener("resize", () => {
  const navMenu = document.querySelector("nav ul");
  const menuIcon = document.getElementById("menuToggle");

  if (window.innerWidth > 768) {
    navMenu.classList.remove("show");
    menuIcon.textContent = "☰";
  }
});


function scrollToServices() {
  const servicesSection = document.getElementById("services");
  servicesSection.scrollIntoView({ behavior: "smooth" });
}
