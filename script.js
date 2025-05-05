// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("show");
});

/* Scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}*/


// Scroll vers les sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    const offset = 30; // Compense la navbar fixe
    
    window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth"
    });
}

// Ferme le menu dropdown quand on clique sur un lien
document.querySelectorAll(".navbar-dropdown a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        dropdown.classList.remove("show");
        document.body.style.overflow = "";
    });
});




//btn cacher log
 function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
  }

  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }

  // Fermer la modale en cliquant en dehors
  window.onclick = function(e) {
    const modal = document.getElementById("loginModal");
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };




function showForm(formId){
	document.querySelectorAll(".modal-content").forEach(form=>form.classList.remove("active"));
	document.getElementById(formId).classList.add("active");
	
}
