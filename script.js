// Scroll reveal
const revealElements = document.querySelectorAll('.panel-content, .full-content, .project-hero, .project-grid, .project-architecture, .contact-inner');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.topbar-nav a');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === `#${id}` ? '#f0f0f0' : '';
            });
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Parallax on image breaks
window.addEventListener('scroll', () => {
    document.querySelectorAll('.image-break img').forEach(img => {
        const rect = img.parentElement.getBoundingClientRect();
        const speed = 0.3;
        img.style.transform = `translateY(${rect.top * speed}px)`;
    });
});
