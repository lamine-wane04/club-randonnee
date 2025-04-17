// Initialize Lucide icons
lucide.createIcons();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-up class
document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to logos
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.05)';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});