# Arabic Luxury Wedding Invitation & RSVP Website

A premium, elegant, and fully responsive digital wedding invitation and RSVP web application featuring an Arabic luxury aesthetic, modern glassmorphism design, and an interactive 3D wedding cake model.

---

## 🎨 Color Palette & Design
- **Deep Emerald Green**: `#1D4533`
- **Warm Ivory / Cream**: `#F7EAE0`
- **Soft Peach**: `#F9D2BA`
- **Deep Brown**: `#5E3122`
- **Satin Gold Trim**: `#C5A059` / `#D4AF37`

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production website will be in the `dist/` folder, ready to deploy to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

---

## ✏️ How to Customize Wedding Details
All wedding data is centrally configured in:
`src/config/weddingConfig.ts`

You can easily change:
- Bride & Groom names, descriptions, and photos
- Wedding date, day of week, ceremony time, and reception time
- Arabic quote and English translation
- Event schedule timeline
- Venue address and Google Maps directions link
- RSVP questions, max guest count, and dietary options

---

## 📦 What is Included in this Package
- `src/`
  - `components/`
    - `Hero.tsx` (Cinematic opening with couple names & date)
    - `WeddingCake3D.tsx` (Interactive Three.js 3D Wedding Cake with lighting & rotation)
    - `WeddingDetails.tsx` (Countdown timer, schedule & Add to Calendar buttons)
    - `Couple.tsx` (Bride & Groom profiles framed in Arabic arches)
    - `ArabicQuote.tsx` (Calligraphy quote with English translation)
    - `Venue.tsx` (Venue details & Google Maps glass button)
    - `RSVP.tsx` (Interactive RSVP form with confetti & localStorage)
    - `Navigation.tsx` (Floating glass navbar + mobile drawer)
    - `FloatingDecorations.tsx` (Floating leaves, petals & gold dust)
    - `AudioPlayer.tsx` (Ambient music player toggle)
    - `Footer.tsx` (Minimal elegant footer by PixelMint)
  - `config/weddingConfig.ts` (All customizable wedding data)
  - `assets/patterns.tsx` (SVG Arabic arches & Girih lattice motifs)
- `dist/` (Pre-built production ready HTML, CSS, and JS)
