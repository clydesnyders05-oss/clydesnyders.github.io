// --- MASTER SCRIPT FOR ALL PAGE FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA ---
    const blogPosts = [
        // Blog data objects go here
    ];
    
    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

    // --- INITIALIZE ANIMATE ON SCROLL ---
    AOS.init({ once: true, duration: 900, offset: 50 });

    // --- ADVANCED NAVIGATION LOGIC ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    const activateNavLink = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateNavLink(entry.target.id);
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });
    
    sections.forEach(sec => observer.observe(sec));

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileNav.style.left === '0px';
        mobileNav.style.left = isOpen ? '-100%' : '0px';
    });
    document.querySelectorAll('#mobile-nav a').forEach(link => {
        link.addEventListener('click', () => mobileNav.style.left = '-100%');
    });

    // --- GALLERY FILTER & LIGHTBOX ---
    // Gallery logic goes here
});
