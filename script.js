// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
}

// Function to change slide (next/previous)
function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop around if at beginning or end
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Function to go to specific slide
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Auto-slide functionality
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Start auto-slide
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 10000); // 10 seconds
}

// Reset auto-slide (restart timer)
function resetAutoSlide() {
    clearInterval(slideInterval);
    // startAutoSlide();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0);
        // startAutoSlide();
        
        // Pause auto-slide when hovering over carousel
        const carousel = document.querySelector('.story-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', startAutoSlide);
        }
    }
});