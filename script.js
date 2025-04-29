let hideTimeout; // Timer pour cacher le menu

function toggleMenu() {
    const menu = document.getElementById('navbarDropdown');
    const hamburger = document.getElementById('hamburger');

    if (menu.classList.contains('show')) {
        // Si menu ouvert => fermer
        menu.classList.remove('show');
        hamburger.classList.remove('active');
        // Attendre la fin de l'opacité pour masquer display
        setTimeout(() => {
            menu.style.display = 'none'; // Cacher le menu après animation
            // Réinitialiser les couleurs du hamburger lors de la fermeture
            hamburger.querySelectorAll('span').forEach(span => span.style.background = '#fff');
            const links = menu.querySelectorAll('a');
            links.forEach(link => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(-20px)';
            });
        }, 500); // Attendre la fin de l'animation
    } else {
        // Si menu fermé => ouvrir
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
            hamburger.classList.add('active');
            // Appliquer la couleur jaune au hamburger lors de l'ouverture
            hamburger.querySelectorAll('span').forEach(span => span.style.background = '#f1c40f');
            // Animer les liens du menu
            const links = menu.querySelectorAll('a');
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = '1'; // Rendre visible les liens
                    link.style.transform = 'translateY(0)';
                }, 100 * (index + 1)); // Délai progressif pour chaque lien
            });
        }, 10); // Légère pause avant l'animation
    }
}

// Fonction pour cacher après un délai si souris sort du menu
function hideMenuAfterDelay() {
    hideTimeout = setTimeout(() => {
        const menu = document.getElementById('navbarDropdown');
        const hamburger = document.getElementById('hamburger');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            hamburger.classList.remove('active');
            setTimeout(() => {
                menu.style.display = 'none';
                // Réinitialiser les liens
                const links = menu.querySelectorAll('a');
                links.forEach(link => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(-20px)';
                });
                // Réinitialiser la couleur des barres du hamburger (et X)
                hamburger.querySelectorAll('span').forEach(span => span.style.background = '#fff');
            }, 500);
        }
    }, 2000);
}

// Si souris revient sur le menu => annuler fermeture
function cancelHideMenu() {
    clearTimeout(hideTimeout);
}

// Scroll fluide vers une partie
function scrollToPart(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Scroll fluide vers le haut
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Afficher / cacher bouton retour en haut
window.onscroll = function() {
    const topButton = document.getElementById('topButton');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Gestion du menu pour la souris
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('navbarDropdown');

    menu.addEventListener('mouseleave', hideMenuAfterDelay);
    menu.addEventListener('mouseenter', cancelHideMenu);
});
