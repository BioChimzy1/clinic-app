// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA button functionality
document.getElementById('cta-btn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    
    // Simple validation and success message
    if (name) {
        alert(`Thank you ${name}! Your message has been sent.`);
        this.reset();
    }
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#2c3e50';
        header.style.boxShadow = 'none';
    }
});

// Simple typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-content h1');
    const originalText = heroText.innerHTML;
    typeWriter(heroText, originalText);
});
