function scrollToPart(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Afficher le bouton "Retour en haut" après un scroll
window.addEventListener('scroll', () => {
    const topButton = document.getElementById('topButton');
    if (window.scrollY > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});
