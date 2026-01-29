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
        const now = new Date();
        // Simple approximation - for production, use a proper library like moment-hijri
        const hijriYear = Math.floor(((now.getFullYear() - 622) * 1.030684) + 1);
        const hijriMonths = [
            'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
            'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
            'Ramadan', 'Shawwal', 'Dhul-Qadah', 'Dhul-Hijjah'
        ];
        // Simple approximation based on current date
        const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const monthIndex = Math.floor((dayOfYear % 354) / 29.5) % 12;
        const day = Math.floor((dayOfYear % 354) % 29.5) + 1;
        hijriElement.textContent = `${day} ${hijriMonths[monthIndex]} ${hijriYear}`;
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
        const features = ['Quran', 'Tasbih Counter', 'Qibla Finder', 'Daily Duas'];
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
