// Pilates Studio - Main JavaScript
// Reusable functions for all pages

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.querySelector('.material-symbols-outlined').textContent = 
                mobileMenu.classList.contains('active') ? 'close' : 'menu';
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
            }
        });
    }
}

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    
    // Check for saved theme preference or default to system preference
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateDarkModeIcons('light_mode');
    } else {
        document.documentElement.classList.remove('dark');
        updateDarkModeIcons('dark_mode');
    }
    
    function updateDarkModeIcons(icon) {
        if (darkModeToggle) {
            darkModeToggle.querySelector('.material-symbols-outlined').textContent = icon;
        }
        if (darkModeToggleMobile) {
            darkModeToggleMobile.querySelector('.material-symbols-outlined').textContent = icon;
        }
    }
    
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcons(isDark ? 'light_mode' : 'dark_mode');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Fade-in animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add loading state to buttons
function initButtonLoadingStates() {
    const ctaButtons = document.querySelectorAll('button:not(#menuToggle):not(#darkModeToggle):not(#darkModeToggleMobile):not([type="submit"])');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.closest('a') && !this.disabled) {
                e.preventDefault();
                const originalText = this.querySelector('span').textContent;
                this.classList.add('loading');
                const textElement = this.querySelector('span');
                if (textElement) {
                    textElement.textContent = 'Yükleniyor...';
                }
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    if (textElement) {
                        textElement.textContent = originalText;
                    }
                    window.location.href = 'contact.html';
                }, 800);
            }
        });
    });
}

// Keyboard navigation improvements
function initKeyboardNavigation() {
    // Add focus visible styles
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDarkMode();
    initSmoothScroll();
    initScrollAnimations();
    initButtonLoadingStates();
    initKeyboardNavigation();
});
