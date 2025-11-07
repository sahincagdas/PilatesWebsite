// Pilates Studio - Main JavaScript
// Reusable functions for all pages

// Mobile Menu Toggle
// Mobile Menu Toggle - GÜNCELLENMİŞ VERSİYON
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenuButton = document.getElementById('closeMenu'); // Yeni eklenen kapatma butonu için
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (menuToggle && mobileMenu && mobileOverlay) {
        
        const openMenu = () => {
            // 1. Overlay'i hemen görünür yap (gizliliği kaldır) ve karartma animasyonunu başlat
            mobileOverlay.classList.remove('hidden');
            // Menü ve overlay'e 'active' sınıfı ekleyerek animasyonu tetikleyelim
            mobileMenu.classList.add('active'); 
            
            // 2. Menüyü ekran içine kaydır (translate-x-full sınıfını kaldır)
            mobileMenu.classList.remove('translate-x-full');
            // 3. Opaklık animasyonunu başlat (Bu, overlay'deki opacity-0 class'ını kaldırır)
            mobileOverlay.classList.remove('opacity-0');
            
            // 4. Erişilebilirlik ve ikonlar
            menuToggle.setAttribute('aria-expanded', 'true');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = 'close'; // Menü açma butonunun ikonunu 'kapat' yap
            
            // 5. Sayfa kaydırmayı engelle
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            // 1. Menüyü ekran dışına kaydır (translate-x-full sınıfını ekle)
            mobileMenu.classList.add('translate-x-full');
            // 2. Karartma animasyonunu tersine çevir (opacity-0 ekle)
            mobileOverlay.classList.add('opacity-0');
            
            // Menüden 'active' sınıfını kaldır
            mobileMenu.classList.remove('active'); 

            // 3. CSS geçişi (transition) tamamlandıktan sonra (300ms) hidden sınıfını ekle
            setTimeout(() => {
                mobileOverlay.classList.add('hidden');
            }, 300); // HTML'deki duration-300 süresi ile uyumlu olmalı
            
            // 4. Erişilebilirlik ve ikonlar
            menuToggle.setAttribute('aria-expanded', 'false');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = 'menu'; // Menü açma butonunun ikonunu 'menü' yap

            // 5. Sayfa kaydırmayı geri yükle
            document.body.style.overflow = '';
        };

        // Menü Açma/Kapama İkonuna Tıklama
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Menü açıkken 'active' class'ı ekleniyor
            if (mobileMenu.classList.contains('active')) closeMenu(); 
            else openMenu();
        });
        
        // Yeni Kapatma Butonuna Tıklama (Menü içindeki 'X' butonu)
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', closeMenu);
        }

        // Overlay'e Tıklama
        mobileOverlay.addEventListener('click', closeMenu);

        // Menü dışına tıklama (Kapatma ikonu hariç)
        document.addEventListener('click', (e) => {
            // Menü açıksa VE tıklanan yer menü veya menü butonunun dışında ise kapat
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) 
            {
                closeMenu();
            }
        });

        // Escape tuşuna basma
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
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
    // Mobil menü butonlarını (menuToggle, darkModeToggleMobile, closeMenu) 
    // ve header'daki darkModeToggle butonunu hariç tutuyoruz.
    const ctaButtons = document.querySelectorAll(
        'button:not(#menuToggle):not(#darkModeToggle):not(#darkModeToggleMobile):not(#closeMenu):not([type="submit"])'
    );
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Sadece bağlantı olmayan ve disabled olmayan butonlar için yükleme durumunu uygula
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
                    // Burası test amaçlı, normalde formu submit eder veya sayfayı yönlendirir.
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

// Initialize all features when DOM is ready (or immediately if script loaded after DOM)
function initAll() {
    initMobileMenu();
    initDarkMode();
    initSmoothScroll();
    initScrollAnimations();
    initButtonLoadingStates();
    initKeyboardNavigation();
    initActiveNav();
    initModals();
    initCompareToggle();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    // DOM already ready — run immediately
    initAll();
}

// Highlight active navigation link based on current pathname
function initActiveNav() {
    const links = document.querySelectorAll('header a[href], #mobileMenu a[href]');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        // normalize index
        const linkFile = href.split('/').pop();
        if (linkFile === path || (path === '' && (linkFile === 'index.html' || linkFile === './'))) {
            link.classList.add('text-primary');
            link.classList.add('font-bold');
        } else {
            link.classList.remove('text-primary');
            link.classList.remove('font-bold');
        }
    });
}

// Simple modal handling for purchase flow
function initModals() {
    const openers = document.querySelectorAll('[data-modal-target]');
    const modal = document.getElementById('purchaseModal');
    const overlay = document.getElementById('modalOverlay');
    const closers = modal ? modal.querySelectorAll('[data-modal-close]') : [];

    function openModal() {
        if (!modal || !overlay) return;
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // focus first input if any
        const input = modal.querySelector('input, button, textarea, select');
        if (input) input.focus();
    }

    function closeModal() {
        if (!modal || !overlay) return;
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    openers.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        const plan = btn.getAttribute('data-plan');
        if (modal) {
            const planField = modal.querySelector('[name="plan"]');
            if (planField) planField.value = plan || '';
        }
        openModal();
    }));

    closers.forEach(btn => btn.addEventListener('click', closeModal));
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

// Simple compare toggle for pricing features
function initCompareToggle() {
    const toggle = document.getElementById('compareToggle');
    const compareTable = document.getElementById('compareTable');
    if (!toggle || !compareTable) return;
    toggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            compareTable.classList.remove('hidden');
        } else {
            compareTable.classList.add('hidden');
        }
    });
}
