
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
