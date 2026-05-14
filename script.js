// Cierre automático del menú móvil al clickear un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

console.log("🎺 Web de Javy y su Charanga - Versión Final Lista 🎺");