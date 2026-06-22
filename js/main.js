/* ========================================
   AuraEcho Landing Page — Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initParallaxEffect();
    initDownloadButton();
});

/* --- Navbar scroll state --- */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    const update = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    update();
}

/* --- Parallax effect on hero orbs --- */
function initParallaxEffect() {
    const orbs = document.querySelectorAll('.hero-orb');
    if (!orbs.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const vh = window.innerHeight;

                if (scrollY < vh) {
                    const f = scrollY / vh;
                    if (orbs[0]) orbs[0].style.transform = `translate(${-30 + f * 40}px, ${40 - f * 60}px) scale(${1 + f * 0.1})`;
                    if (orbs[1]) orbs[1].style.transform = `translate(${40 - f * 50}px, ${-30 + f * 40}px) scale(${1 + f * 0.08})`;
                    if (orbs[2]) orbs[2].style.transform = `translate(${f * 30}px, ${-20 + f * 30}px) scale(${1 - f * 0.1})`;
                }

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* --- Download button interaction --- */
function initDownloadButton() {
    const btn = document.getElementById('btnDownload');
    if (!btn) return;

    btn.addEventListener('click', function () {
        console.log('[AuraEcho] Download initiated');

        const originalHTML = this.innerHTML;
        this.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            准备下载...
        `;
        this.style.pointerEvents = 'none';
        this.style.opacity = '0.8';

        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.style.pointerEvents = '';
            this.style.opacity = '';
        }, 2000);
    });
}
