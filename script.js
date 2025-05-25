// Marcel Pratikto Resume Website - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeAnimations();
    initializeContactInteractions();
    initializeSmoothScrolling();
    initializeSkillTags();
});

// Fade-in animation for elements as they come into view
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and experience items
    const elementsToAnimate = document.querySelectorAll('.section, .experience-item, .skill-category');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Contact item interactions
function initializeContactInteractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const text = item.querySelector('span').textContent;
        
        item.addEventListener('click', function() {
            if (text.includes('@')) {
                // Email
                window.location.href = `mailto:${text}`;
            } else if (text.match(/^\d{3}-\d{3}-\d{4}$/)) {
                // Phone number
                window.location.href = `tel:${text}`;
            }
        });

        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.cursor = text.includes('@') || text.match(/^\d{3}-\d{3}-\d{4}$/) ? 'pointer' : 'default';
        });
    });
}

// Smooth scrolling for any future navigation
function initializeSmoothScrolling() {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Interactive skill tags
function initializeSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add a ripple effect
            createRippleEffect(this);
            
            // Optional: You could add functionality to filter content or show more details
            console.log(`Clicked on skill: ${this.textContent}`);
        });
    });
}

// Create ripple effect for interactive elements
function createRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2;
    const y = rect.height / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - size / 2) + 'px';
    ripple.style.top = (y - size / 2) + 'px';
    ripple.classList.add('ripple');

    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Utility function to add typing effect (for future use)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Print/PDF functionality
function printResume() {
    window.print();
}

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    // Save theme preference
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
}

// Load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Export functions for potential future use
window.MarcelResumeUtils = {
    typeWriter,
    printResume,
    toggleTheme,
    createRippleEffect
};