document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbarToggle');
    const navbarContent = document.getElementById('navbarNav');

    toggleButton.addEventListener('click', function () {
        // Alterna a classe "collapse" da navbar
        navbarContent.classList.toggle('collapse');
    });
});
