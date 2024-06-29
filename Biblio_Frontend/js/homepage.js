let currentIndex = 0;

const slides = document.querySelectorAll('.image-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.image-slider');
    slider.style.transform = `translateX(-${100 * index}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}
