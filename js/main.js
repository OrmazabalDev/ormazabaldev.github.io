/**
 * DevOrmazabal - main.js
 * Interactividad de la Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initSmoothScroll();
});

/**
 * Cambios dinámicos en el Header al hacer scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('navbar');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('bg-white/95', 'shadow-soft', 'border-brand-border');
            header.classList.remove('bg-white/90', 'border-transparent');
        } else {
            header.classList.remove('bg-white/95', 'shadow-soft', 'border-brand-border');
            header.classList.add('bg-white/90', 'border-transparent');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al inicio por si se recarga la página con scroll
}

/**
 * Control del menú hamburguesa para móviles
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
            mobileMenu.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Cerrar si se hace click fuera
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Scroll Spy: Resalta el link activo del menú según la sección visible
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active', 'text-brand-blue');
                        link.classList.remove('text-brand-gray');
                    } else {
                        link.classList.remove('active', 'text-brand-blue');
                        link.classList.add('text-brand-gray');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-30% 0px -60% 0px' // Margen ajustado para detectar la sección activa en el centro de la pantalla
    });

    sections.forEach(section => spyObserver.observe(section));
}

/**
 * Revelado de elementos al hacer scroll (Intersection Observer)
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez revelado
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/**
 * Scroll suave nativo para enlaces internos con offset del header
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.getElementById('navbar');
    const headerHeight = header ? header.offsetHeight : 80;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
