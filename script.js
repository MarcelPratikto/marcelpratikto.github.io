// Function to toggle PDF report previews
function toggleReport(reportId) {
    var reportElement = document.getElementById(reportId);
    if (reportElement) {
        if (reportElement.classList.contains('active')) {
            reportElement.classList.remove('active');
        } else {
            reportElement.classList.add('active');
        }
    }
}

// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 10000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // 1. Automatically open PDF reports only on desktop screens (> 768px) to protect mobile viewports
    if (window.innerWidth > 768) {
        const consoleReport = document.getElementById('console-report');
        const aiReport = document.getElementById('ai-gamer-report');
        
        if (consoleReport) consoleReport.classList.add('active');
        if (aiReport) aiReport.classList.add('active');
    }

    // 2. Initialize carousel if present
    if (slides.length > 0) {
        showSlide(0);
        const carousel = document.querySelector('.story-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', startAutoSlide);
        }
    }
});