# A.X.L BLADE Bot Landing Page

Modern React + Vite landing page for A.X.L BLADE Discord Bot.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173/`

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🌐 Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the upload area
4. Done! ✅

### Option 2: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: Git Deploy
1. Push your code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy! ✅

## 📁 Project Structure

```
bot-landing-page/
├── public/
│   ├── bot.ico
│   └── _redirects        ← Important for React Router!
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Premium.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Documentation.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── Cookies.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── dist/                 ← Build output (deploy this!)
├── package.json
└── vite.config.js
```

## 🔗 Routes

- `/` - Home
- `/premium` - Premium Plans
- `/features` - Features Section (scroll on home)
- `/contact` - Contact Form
- `/faq` - FAQ
- `/documentation` - Bot Documentation
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy

## ⚙️ Important Files

### `public/_redirects`
Required for React Router to work on Netlify. All routes redirect to `index.html`.

```
/*    /index.html   200
```

### Discord Server Link
Update in all files:
```
https://discord.gg/M7DJFf2qzm
```

## 🎨 Technologies

- React 18
- Vite
- React Router DOM
- GSAP (Animations)
- CSS3
- Font Awesome
- Google Fonts

## 📝 License

© 2024 A.X.L BLADE AUTOMATION. ALL RIGHTS RESERVED.
