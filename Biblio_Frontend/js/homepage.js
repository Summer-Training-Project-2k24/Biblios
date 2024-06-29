let currentIndex = 0;
let intervalTime = 3000;

const slides = document.querySelectorAll('.image-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const progressBar = document.querySelector('.progress-bar');

function showSlide(index) {
    const slider = document.querySelector('.image-slider');
    slider.style.transform = `translateX(-${100 * index}%)`;
    updateDots(index);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}


function currentSlide(index) {
    currentIndex = index;
    showSlide(index);
}

setInterval(nextSlide, intervalTime);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
