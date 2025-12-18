# CLINICA DENTARA DR. GHEORGHIADE - Next.js

A modern dental clinic website built with Next.js, featuring a full-screen video hero, services showcase, team section, and contact form.

## Features

- ✅ Full-screen video hero section
- ✅ Responsive design
- ✅ Modern UI with gradient accents
- ✅ Services showcase with images
- ✅ Team section
- ✅ Contact form with validation
- ✅ Booking modal
- ✅ Mobile-friendly navigation
- ✅ SEO optimized

## Tech Stack

- Next.js 14
- React 18
- CSS Modules (no external CSS frameworks)
- Unsplash images for demo content

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd nextjs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting

## Project Structure

```
nextjs-app/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Full-screen hero
│   ├── Services.tsx       # Services section
│   ├── Team.tsx           # Team section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── BookingModal.tsx   # Booking modal
├── public/                # Static assets
└── package.json
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC