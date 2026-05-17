// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-container').forEach(el => observer.observe(el));

// ===== ACTIVE NAV DOT =====
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.nav-dot');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navDots.forEach(dot => {
                dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => navObserver.observe(section));

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${Math.random() > 0.5 ? '#00e5ff' : '#c9a84c'};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        container.appendChild(particle);
    }
}

// Float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
        25% { transform: translate(${Math.random() * 100 - 50}px, -${Math.random() * 100}px) scale(1.2); opacity: 0.5; }
        50% { transform: translate(${Math.random() * 100 - 50}px, -${Math.random() * 200}px) scale(0.8); opacity: 0.3; }
        75% { transform: translate(${Math.random() * 100 - 50}px, -${Math.random() * 100}px) scale(1.1); opacity: 0.4; }
    }
`;
document.head.appendChild(style);

createParticles();

// ===== SMOOTH SCROLL FOR NAV DOTS =====
navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(dot.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
