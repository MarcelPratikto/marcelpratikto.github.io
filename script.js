// Function to dynamically load and toggle PDF report previews safely on mobile & desktop
function loadAndToggleReport(reportId, pdfUrl) {
    var reportElement = document.getElementById(reportId);
    var iframeElement = document.getElementById('iframe-' + reportId);

    if (reportElement && iframeElement) {
        // Load the PDF source only when the user clicks the preview button
        if (!iframeElement.src || iframeElement.src === window.location.href || iframeElement.src === window.location.origin + "/") {
            iframeElement.src = pdfUrl;
        }

        // Toggle open/closed state
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
    // Automatically open PDF reports and load their sources only on desktop screens (> 768px)
    if (window.innerWidth > 768) {
        const consoleReport = document.getElementById('console-report');
        const consoleIframe = document.getElementById('iframe-console-report');
        if (consoleReport && consoleIframe) {
            consoleIframe.src = 'docs/ECEN_260_Final_Project_Report.pdf';
            consoleReport.classList.add('active');
        }

        const aiReport = document.getElementById('ai-gamer-report');
        const aiIframe = document.getElementById('iframe-ai-gamer-report');
        if (aiReport && aiIframe) {
            aiIframe.src = 'docs/AI_Gamer_Project_Report.pdf';
            aiReport.classList.add('active');
        }
    }

    // Initialize carousel if present
    if (slides.length > 0) {
        showSlide(0);
        const carousel = document.querySelector('.story-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', startAutoSlide);
        }
    }
});