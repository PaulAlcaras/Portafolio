let currentIndex = 1; // Comienza en el segundo proyecto para que esté en el medio
const projects = document.querySelectorAll('.carousel .project');
const totalProjects = projects.length;

function updateActiveSlide() {
    projects.forEach((project, index) => {
        project.classList.remove('active');
        if (index === currentIndex) {
            project.classList.add('active');
        }
    });
}

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    // Ajustamos el movimiento del carrusel de tal manera que el proyecto actual esté centrado
    carousel.style.transform = `translateX(-${(index - 1) * 33.33}%)`;
    updateActiveSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalProjects;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    showSlide(currentIndex);
}

showSlide(currentIndex); // Mostrar el primer proyecto activo en el medio al cargar
