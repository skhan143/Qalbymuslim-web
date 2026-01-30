// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Navigation menu active state
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Close sidebar on mobile after clicking
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('active');
        }
    });
});

// Update current time
function updateCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update Gregorian date
function updateGregorianDate() {
    const dateElement = document.getElementById('gregorianDate');
    if (dateElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Calculate Hijri date (approximation)
function updateHijriDate() {
    const hijriElement = document.getElementById('hijriDate');
    if (hijriElement) {
        // Use Aladhan API to get accurate Hijri date
        fetch('https://api.aladhan.com/v1/gToH?date=' + new Date().toISOString().split('T')[0])
            .then(response => response.json())
            .then(data => {
                if (data.code === 200 && data.data && data.data.hijri) {
                    const hijri = data.data.hijri;
                    hijriElement.textContent = `${hijri.day} ${hijri.month.en} ${hijri.year}`;
                } else {
                    hijriElement.textContent = 'Loading...';
                }
            })
            .catch(error => {
                console.error('Error fetching Hijri date:', error);
                hijriElement.textContent = 'Unavailable';
            });
    }
}

// Get user location
function getUserLocation() {
    const locationElement = document.getElementById('userLocation');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                
                // For demo purposes, we'll use a static location name
                // In production, use reverse geocoding API
                locationElement.textContent = 'Current Location';
                
                // Calculate prayer times based on location
                calculatePrayerTimes(latitude, longitude);
            },
            (error) => {
                console.error('Error getting location:', error);
                locationElement.textContent = 'Location unavailable';
                // Use default location for prayer times
                calculatePrayerTimes(40.7128, -74.0060); // Default: New York
            }
        );
    } else {
        locationElement.textContent = 'Location not supported';
        calculatePrayerTimes(40.7128, -74.0060); // Default: New York
    }
}

// Calculate prayer times (simplified calculation)
function calculatePrayerTimes(latitude, longitude) {
    // NOTE: This is a simplified version with sample times for demonstration
    // For production, integrate a proper library like:
    // - adhan-js: https://github.com/batoulapps/adhan-js
    // - Aladhan API: https://aladhan.com/prayer-times-api
    // These will provide accurate prayer times based on location and calculation method
    
    const now = new Date();
    const baseTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Sample prayer times (would be calculated based on location and date in production)
    const prayerTimes = {
        fajr: new Date(baseTime.getTime() + 5 * 60 * 60 * 1000 + 30 * 60 * 1000),
        sunrise: new Date(baseTime.getTime() + 6 * 60 * 60 * 1000 + 45 * 60 * 1000),
        dhuhr: new Date(baseTime.getTime() + 12 * 60 * 60 * 1000 + 30 * 60 * 1000),
        asr: new Date(baseTime.getTime() + 15 * 60 * 60 * 1000 + 45 * 60 * 1000),
        maghrib: new Date(baseTime.getTime() + 18 * 60 * 60 * 1000 + 15 * 60 * 1000),
        isha: new Date(baseTime.getTime() + 19 * 60 * 60 * 1000 + 45 * 60 * 1000)
    };
    
    // Update prayer times in UI
    updatePrayerTimeDisplay('fajrTime', prayerTimes.fajr);
    updatePrayerTimeDisplay('sunriseTime', prayerTimes.sunrise);
    updatePrayerTimeDisplay('dhuhrTime', prayerTimes.dhuhr);
    updatePrayerTimeDisplay('asrTime', prayerTimes.asr);
    updatePrayerTimeDisplay('maghribTime', prayerTimes.maghrib);
    updatePrayerTimeDisplay('ishaTime', prayerTimes.isha);
    
    // Find and display next prayer
    findNextPrayer(prayerTimes);
}

// Update prayer time display
function updatePrayerTimeDisplay(elementId, time) {
    const element = document.getElementById(elementId);
    if (element) {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        element.textContent = `${hours}:${minutes}`;
    }
}

// Find next prayer
function findNextPrayer(prayerTimes) {
    const now = new Date();
    const prayers = [
        { name: 'Fajr', time: prayerTimes.fajr },
        { name: 'Sunrise', time: prayerTimes.sunrise },
        { name: 'Dhuhr', time: prayerTimes.dhuhr },
        { name: 'Asr', time: prayerTimes.asr },
        { name: 'Maghrib', time: prayerTimes.maghrib },
        { name: 'Isha', time: prayerTimes.isha }
    ];
    
    let nextPrayer = null;
    for (const prayer of prayers) {
        if (prayer.time > now) {
            nextPrayer = prayer;
            break;
        }
    }
    
    // If no prayer found today, next is Fajr tomorrow
    if (!nextPrayer) {
        nextPrayer = { name: 'Fajr', time: new Date(prayerTimes.fajr.getTime() + 24 * 60 * 60 * 1000) };
    }
    
    const badge = document.getElementById('nextPrayerBadge');
    if (badge) {
        const timeUntil = Math.floor((nextPrayer.time - now) / (1000 * 60)); // minutes
        const hours = Math.floor(timeUntil / 60);
        const minutes = timeUntil % 60;
        
        let timeString = '';
        if (hours > 0) {
            timeString = `${hours}h ${minutes}m`;
        } else {
            timeString = `${minutes}m`;
        }
        
        badge.textContent = `Next: ${nextPrayer.name} in ${timeString}`;
    }
}

// Feature card interactions
const featureCards = document.querySelectorAll('.feature-card .btn-primary');
featureCards.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const features = ['Quran', 'Daily Reminders', 'Qibla Finder', 'Tasbih Counter'];
        alert(`${features[index]} feature - Coming soon!\n\nThis feature is available in our mobile app.`);
    });
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Update time every second
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // Update dates
    updateGregorianDate();
    updateHijriDate();
    
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Get location and calculate prayer times
    getUserLocation();
    
    // Note: Prayer times are calculated once per day, no need to refresh constantly
    
    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize premium animations/effects
    initScrollReveal();
    initStatsAnimation();
    initParallax();
    initMagneticButtons();
    createLiquidBackground();
    createStarsBackground();
    initHeroIntro();
    applyDeviceScreenInsets();
    manageHeroVideoVisibility();
    initSectionTransitions();
    initBarbaTransitions();
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close sidebar on desktop
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('active');
        }
    }, 250);
});

// Prevent default action for placeholder links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// Service Worker registration (for PWA support in future)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Commented out for now - can be enabled when service worker is created
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('SW registered:', registration);
        // }).catch(error => {
        //     console.log('SW registration failed:', error);
        // });
    });
}

// ===== Premium Animations & Effects =====
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Animated stats counter on scroll
function initStatsAnimation() {
    if (prefersReducedMotion()) return;
    
    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length === 0) return;
    
    statValues.forEach(stat => {
        // Check if not already animated
        if (stat.dataset.animated) return;
        
        const finalValue = parseInt(stat.textContent) || 0;
        if (finalValue === 0) return; // Skip 0 values
        
        // Only animate if using GSAP
        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate number counter
            gsap.fromTo(
                stat,
                { textContent: 0 },
                {
                    textContent: finalValue,
                    duration: 1.2,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: stat.closest('.stat-item'),
                        start: 'top center+=100',
                        once: true,
                    },
                    onComplete: () => {
                        stat.dataset.animated = 'true';
                    }
                }
            );
        }
    });
}

// Scroll reveal using GSAP ScrollTrigger (fallback to IntersectionObserver)
function initScrollReveal() {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (prefersReducedMotion() || elements.length === 0) return;

    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        elements.forEach(el => {
            gsap.from(el, {
                y: 22,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    } else {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.12 });
        elements.forEach(el => obs.observe(el));
    }
}

// Lightweight parallax for elements with data-parallax
function initParallax() {
    const items = Array.from(document.querySelectorAll('[data-parallax]'));
    if (prefersReducedMotion() || items.length === 0) return;

    const factors = new Map();
    const mobileScale = (window.innerWidth <= 768) ? 0.5 : (window.innerWidth <= 1024 ? 0.75 : 1);
    items.forEach(el => {
        const base = parseFloat(el.getAttribute('data-parallax')) || 0.05;
        factors.set(el, base * mobileScale);
    });

    let ticking = false;
    function update() {
        ticking = false;
        const scrollY = window.scrollY || window.pageYOffset;
        items.forEach(el => {
            const r = el.getBoundingClientRect();
            const factor = factors.get(el);
            const offset = (scrollY + r.top) * factor;
            el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
        });
    }
    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }
    window.addEventListener('scroll', requestTick, { passive: true });
    update();
}

// Magnetic button hover interaction
function initMagneticButtons() {
    const buttons = Array.from(document.querySelectorAll('.btn-primary.magnetic'));
    if (buttons.length === 0) return;

    const strength = 18;
    buttons.forEach(btn => {
        let bounding = null;
        function onEnter() {
            bounding = btn.getBoundingClientRect();
        }
        function onMove(e) {
            if (!bounding) return;
            const cx = bounding.left + bounding.width / 2;
            const cy = bounding.top + bounding.height / 2;
            const dx = (e.clientX - cx) / (bounding.width / 2);
            const dy = (e.clientY - cy) / (bounding.height / 2);
            const x = dx * strength;
            const y = dy * strength;
            if (window.gsap) {
                gsap.to(btn, { x, y, duration: 0.4, ease: 'power3.out' });
            } else {
                btn.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
        function onLeave() {
            if (window.gsap) {
                gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: 'power3.out' });
            } else {
                btn.style.transform = 'translate(0, 0)';
            }
            bounding = null;
        }
        btn.addEventListener('mouseenter', onEnter);
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
        btn.addEventListener('blur', onLeave);
    });
}

// Animate SVG liquid background (turbulence/displacement)
function createLiquidBackground() {
    const turb = document.getElementById('liquidTurbulence');
    const disp = document.getElementById('liquidDisplace');
    if (!turb || !disp) return;
    if (prefersReducedMotion()) return;

    let t = 0;
    function animate() {
        t += 0.008;
        const bf = 0.01 + (Math.sin(t) + 1) * 0.006; // 0.01–0.022
        const scale = 24 + (Math.cos(t * 0.6) + 1) * 10; // 24–44
        turb.setAttribute('baseFrequency', bf.toFixed(4));
        disp.setAttribute('scale', scale.toFixed(1));
        requestAnimationFrame(animate);
    }
    animate();
}

// Soft gold starfield
function createStarsBackground() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let w = 0, h = 0, rafId = null;
    const GOLD = 'rgba(212,175,55,'; // alpha appended

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        const density = Math.min(140, Math.floor((w * h) / 50000));
        stars = Array.from({ length: density }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.8 + 0.6,
            a: Math.random() * Math.PI * 2,
            s: 0.008 + Math.random() * 0.012
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        for (const star of stars) {
            const alpha = 0.15 + (Math.sin(star.a) + 1) * 0.15; // 0.15–0.45
            const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 2.2);
            grad.addColorStop(0, GOLD + (alpha + 0.15).toFixed(3) + ')');
            grad.addColorStop(1, GOLD + '0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r * 2.2, 0, Math.PI * 2);
            ctx.fill();
            star.a += star.s;
        }
        rafId = requestAnimationFrame(draw);
    }

    resize();
    if (prefersReducedMotion()) {
        // Static stars only
        const tmp = stars;
        stars = tmp.map(s => ({ ...s, s: 0 }));
        draw();
    } else {
        draw();
    }
    window.addEventListener('resize', () => {
        cancelAnimationFrame(rafId);
        resize();
        draw();
    });
}

// Hero intro animation
function initHeroIntro() {
    if (prefersReducedMotion() || !window.gsap) return;
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const device = document.querySelector('.device');
        const flare = document.querySelector('.device-flare');
    const ctas = document.querySelectorAll('.hero-ctas > *');
        tl.set([title, subtitle, device, ctas], { opacity: 0, y: 18 })
            .fromTo(title, { y: 24 }, { opacity: 1, y: 0, duration: 0.75 })
            .fromTo(subtitle, { y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
            .fromTo(device, { y: 28, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.45')
            .fromTo(ctas, { y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.4');

        if (flare) {
                tl.to(flare, { opacity: 0.6, duration: 0.35, ease: 'sine.inOut' }, '-=0.5')
                    .to(flare, { opacity: 0.0, duration: 0.6, ease: 'sine.inOut' }, '+=0.3');
                gsap.to(flare, {
                        opacity: 0.35,
                        duration: 3.2,
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: -1,
                        delay: 1.2
                });
        }

    if (device) {
        gsap.to(device, {
            y: -8,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }
}

// Play/pause hero video when visible
function manageHeroVideoVisibility() {
    const video = document.querySelector('.device-screen');
    if (!video) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => { /* ignore autoplay restrictions */ });
                }
            } else {
                try { video.pause(); } catch (_) {}
            }
        });
    }, { threshold: 0.2 });
    obs.observe(video);
}

// Read inset attributes from .device and apply as CSS variables
function applyDeviceScreenInsets() {
    const device = document.querySelector('.device');
    if (!device) return;
    const top = device.getAttribute('data-screen-top') || '6%';
    const bottom = device.getAttribute('data-screen-bottom') || '6%';
    const left = device.getAttribute('data-screen-left') || '6%';
    const right = device.getAttribute('data-screen-right') || '6%';
    device.style.setProperty('--screen-top', top);
    device.style.setProperty('--screen-bottom', bottom);
    device.style.setProperty('--screen-left', left);
    device.style.setProperty('--screen-right', right);
}

// ===== Page/Section Transitions =====
function pageTransitionIn() {
    return new Promise(resolve => {
        const wrap = document.getElementById('pageTransition');
        const bg = wrap?.querySelector('.page-transition__bg');
        if (!wrap || !bg || prefersReducedMotion()) return resolve();
        wrap.style.opacity = '1';
        if (window.gsap) {
            gsap.set(bg, { transformOrigin: '50% 100%' });
            gsap.timeline({ onComplete: resolve })
                .to(bg, { scaleY: 1, duration: 0.5, ease: 'power3.inOut' });
        } else {
            bg.style.transform = 'scaleY(1)';
            resolve();
        }
    });
}

function pageTransitionOut() {
    return new Promise(resolve => {
        const wrap = document.getElementById('pageTransition');
        const bg = wrap?.querySelector('.page-transition__bg');
        if (!wrap || !bg || prefersReducedMotion()) return resolve();
        if (window.gsap) {
            gsap.set(bg, { transformOrigin: '50% 0%' });
            gsap.timeline({ onComplete: () => { wrap.style.opacity = '0'; resolve(); } })
                .to(bg, { scaleY: 0, duration: 0.6, ease: 'power3.inOut' }, 0.1);
        } else {
            bg.style.transform = 'scaleY(0)';
            wrap.style.opacity = '0';
            resolve();
        }
    });
}

function initSectionTransitions() {
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    links.forEach(link => {
        link.addEventListener('click', async (e) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            if (prefersReducedMotion()) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            await pageTransitionIn();
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
            await pageTransitionOut();
        });
    });
}

function initBarbaTransitions() {
    if (!window.barba) return;
    try {
        barba.init({
            preventRunning: true,
            timeout: 5000,
            prevent: ({ el }) => {
                const href = el.getAttribute && el.getAttribute('href');
                return href && href.startsWith('#'); // let our section transitions handle anchors
            },
            transitions: [{
                name: 'overlay-transition',
                async once() {
                    await pageTransitionOut();
                },
                async leave(data) {
                    await pageTransitionIn();
                    data.current.container.remove();
                },
                async enter() {
                    await pageTransitionOut();
                }
            }]
        });
    } catch (e) {
        console.warn('Barba initialization failed:', e);
    }
}
