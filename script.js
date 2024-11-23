document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Hero section animations
    gsap.from('.badge', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.hero-content h1', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });

    gsap.from('.hero-content p', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });

    gsap.from('.cta-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    // Stats section animations
    gsap.from('.stat-item', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
        }
    });

    // Features section animations
    gsap.from('.feature-card', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
        }
    });

    // Navigation animations
    gsap.from('nav', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out',
    });
}); 