# ARKIII React + Vite Website

A complete React conversion of the ARKIII Discord Bot landing page with all features and pages.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173/`

## 📁 Project Structure

```
arkiii-react/
├── public/
│   └── bot.ico              # Bot icon
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.jsx       # Footer with links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx         # Main landing page
│   │   ├── Home.css
│   │   ├── Documentation.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── Cookies.jsx
│   │   └── PageLayout.css   # Shared styles for all pages
│   ├── App.jsx              # Main app with routing
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Features

### Home Page
- **Hero Section** with animated text and stats
- **Features Grid** with 6 feature cards
- **Premium Section** with mockup preview
- **Smooth GSAP Animations** on scroll
- **Custom Cursor** effect

### Pages
- 📚 **Documentation** - Complete bot guide with commands
- 📧 **Contact** - Contact form with social links
- ❓ **FAQ** - Interactive accordion FAQ
- 🔒 **Privacy Policy** - Data protection information
- 📜 **Terms of Service** - Usage terms
- 🍪 **Cookie Policy** - Cookie information

### Components
- **Header** - Fixed navigation with React Router links
- **Footer** - Three-column footer (Branding, Support, Legal)

## 🛠️ Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **GSAP** - Scroll animations
- **CSS3** - Styling with glassmorphism effects
- **Font Awesome** - Icons
- **Google Fonts** - Rajdhani & Orbitron fonts

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Styling

- All text is in UPPERCASE (except code snippets and form placeholders)
- Dark theme with cyan (#00f3ff) and purple (#7000ff) accents
- Glassmorphism effects with backdrop blur
- Custom cursor with hover effects
- Responsive grid layouts

## 🔗 Navigation

All pages feature:
- Fixed header with navigation
- Footer with branding and links
- 100px gap between footer columns
- Smooth page transitions

## 🌐 Routes

- `/` - Home page
- `/documentation` - Bot documentation
- `/contact` - Contact form
- `/faq` - Frequently asked questions
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookies` - Cookie policy

## 📝 Customization

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #00f3ff;    /* Cyan */
  --secondary: #7000ff;   /* Purple */
  --accent: #ff0055;      /* Pink */
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route to `<Routes>`
4. Add link to Header/Footer

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder. Deploy this folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

## 📄 License

© 2024 ARKIII AUTOMATION. ALL RIGHTS RESERVED.

---

**Built with React + Vite** ⚡
