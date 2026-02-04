# QalbyMuslim Landing (Next.js 14 + Tailwind + Framer Motion)

A premium, scroll-driven landing experience inspired by anywherebi.com, crafted for spiritual wellness. This lives alongside your existing static site in the same folder.

## Run (Next.js app)
```powershell
npm install
npm run dev
```
Open http://localhost:3000

## Build (Next.js app)
```powershell
npm run build
npm run start
```

## Assets for Hero Device
Place binary assets under `public/assets/` so Next.js can serve them:
- `public/assets/hero-video.mp4`
- `public/assets/hero-poster.svg`
- `public/assets/iphone-14-frame.png`
Update paths if you use different filenames.

---

# Qalby Muslim - Islamic Companion Web Application

A modern, dashboard-style web application for Islamic prayer times, Quran reading, and spiritual guidance. This web interface complements the [Qalby Muslim mobile app](https://apps.apple.com/ua/app/qalby-muslim/id6753021182).

## Features

### 🕌 Core Features
- **Real-time Prayer Times** - Displays today's prayer times (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha) with countdown to next prayer
- **Islamic Calendar** - Shows both Gregorian and Hijri (Islamic) dates
- **Live Clock** - Real-time display of current time
- **Location Detection** - Automatically detects user location for accurate prayer times

### 📖 Islamic Tools
- **Quran Reader** - Access to the Holy Quran with translation and recitation
- **Tasbih Counter** - Digital counter for dhikr and tasbeeh
- **Qibla Finder** - Compass to find the direction of Kaaba
- **Daily Duas** - Collection of authentic Islamic supplications

### 📊 Activity Tracking
- Track daily prayers completed
- Monitor Quran reading progress
- Count dhikr repetitions

### 📱 Mobile App Integration
- Direct links to download the iOS app from App Store
- Seamless integration with the mobile experience

## Design

The web application features a modern, dashboard-style UI inspired by business intelligence platforms:

- **Clean Interface** - Professional, uncluttered design with intuitive navigation
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Modern Color Scheme** - Blue primary color with complementary accent colors
- **Card-based Layout** - Information organized in easy-to-read cards
- **Sidebar Navigation** - Quick access to all features
- **Interactive Elements** - Smooth transitions and hover effects

## Screenshots

### Desktop View
![Desktop Screenshot](https://github.com/user-attachments/assets/3e12ff31-84cf-4e08-bbdb-f43df43df539)

### Mobile View
![Mobile Screenshot](https://github.com/user-attachments/assets/4b95cb79-4b4d-4468-901b-ca8ff73b44b1)

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family for clean typography

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local development server) or any other HTTP server

### Installation

1. Clone the repository:
```bash
git clone https://github.com/skhan143/Qalbymuslim-web.git
cd Qalbymuslim-web
```

2. Start a local server:

**Using Python:**
```bash
python3 -m http.server 8080
```

**Using Node.js:**
```bash
npx http-server -p 8080
```

**Using PHP:**
```bash
php -S localhost:8080
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

### Deployment

The application is a static website and can be deployed to any web hosting service:

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Modern web hosting with continuous deployment
- **Vercel** - Fast and easy deployment
- **AWS S3** - Scalable cloud hosting
- **Any traditional web hosting** - Just upload the files

## File Structure

```
Qalbymuslim-web/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Prayer Times Calculation
The application uses geolocation to detect the user's location and calculates prayer times accordingly. The calculation includes:
- Fajr (dawn prayer)
- Sunrise
- Dhuhr (noon prayer)
- Asr (afternoon prayer)
- Maghrib (sunset prayer)
- Isha (night prayer)

*Note: Current implementation uses sample times. For production, integrate with a proper prayer time calculation library like [adhan-js](https://github.com/batoulapps/adhan-js).*

### Responsive Design
The application adapts to different screen sizes:
- **Desktop (>1024px)** - Full sidebar with expanded content
- **Tablet (768px-1024px)** - Collapsible sidebar
- **Mobile (<768px)** - Optimized single-column layout

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #059669;    /* Secondary accent */
    --accent-color: #7c3aed;       /* Tertiary accent */
    /* ... other variables */
}
```

### Adding Prayer Time API
To integrate real prayer time calculations, consider using:
- [Aladhan API](https://aladhan.com/prayer-times-api)
- [Islamic Network Prayer Times API](https://prayertimes.date/)
- [adhan-js library](https://github.com/batoulapps/adhan-js)

## Future Enhancements

- [ ] User authentication and profile
- [ ] Prayer notifications
- [ ] Quran audio player with multiple reciters
- [ ] Tasbih counter with different dhikr presets
- [ ] Prayer time alerts
- [ ] Monthly calendar view
- [ ] Customizable themes
- [ ] Multi-language support (Arabic, Urdu, etc.)
- [ ] Progressive Web App (PWA) capabilities
- [ ] Offline mode support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact the developer or open an issue on GitHub.

## Acknowledgments

- Islamic prayer time calculations based on standard astronomical calculations
- Icons provided by [Font Awesome](https://fontawesome.com/)
- Typography by [Google Fonts](https://fonts.google.com/)
- Mobile app available on [App Store](https://apps.apple.com/ua/app/qalby-muslim/id6753021182)

---

**May Allah accept our prayers and guide us on the straight path. Ameen.**