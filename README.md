# 🎓 JAIN University - Kanakapura Campus Website

A modern, responsive website for JAIN (Deemed-to-be University) Kanakapura Campus, built with Next.js 16, React 19, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?logo=tailwindcss)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [Styling](#-styling)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Global Search** - Real-time search with autocomplete for pages, departments, and programs
- **Interactive Navigation** - Mega menu with department dropdowns
- **Multi-step Admission Form** - Guided admission process with form validation

### 📄 Pages
- **Home** - Hero section, quick stats, featured programs, campus highlights
- **About Us** - University information and history
- **Academics** - Academic programs overview
- **Departments** - 9 specialized departments with individual detail pages
- **Admissions** - Multi-step application form
- **Placements** - Career services, statistics, and top recruiters
- **Research** - Research initiatives and facilities
- **Campus Life** - Student life and facilities
- **Contact Us** - Contact information and inquiry form

### 🔍 Search Functionality
- Click the search icon in the navbar to open the search modal
- Real-time filtering as you type
- Results categorized by: Pages, Departments, Programs, Quick Links
- Keyboard support (ESC to close)

---

## 🛠 Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.1 | React framework with App Router |
| [React](https://react.dev/) | 19.0.0 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.1 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 12.38.0 | Animation library |
| [Lucide React](https://lucide.dev/) | 0.475.0 | Icon library |

### Development Tools
| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| PostCSS | CSS processing |
| Autoprefixer | CSS vendor prefixes |

---

## 📁 Project Structure

```
jain-university-homepage/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with navbar & footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── about/                   # About Us page
│   ├── academics/               # Academics overview
│   ├── admissions/              # Admission form
│   ├── campus-life/             # Campus life page
│   ├── contact-us/              # Contact page
│   ├── departments/             # Departments section
│   │   ├── page.tsx            # Departments listing
│   │   └── [slug]/             # Dynamic department pages
│   │       └── page.tsx        # Individual department detail
│   ├── placements/              # Placements & career services
│   └── research/                # Research page
│
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation with search
│   ├── Footer.tsx               # Site footer
│   ├── HeroSection.tsx          # Homepage hero
│   ├── QuickStats.tsx           # Statistics display
│   ├── ProgramsGrid.tsx         # Programs showcase
│   ├── CTAStrip.tsx             # Call-to-action banner
│   └── NewsTicker.tsx           # News ticker component
│
├── public/                       # Static assets
│   ├── jain university.jpg      # University images
│   ├── engineering and technology.jpeg
│   ├── school of law.jpeg
│   └── ...                      # Department images
│
├── tailwind.config.js           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** 9.x or later (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jain-university-homepage.git
   cd jain-university-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🗺 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, stats, programs |
| `/about` | About Us | University information |
| `/academics` | Academics | Academic programs overview |
| `/admissions` | Admissions | Multi-step admission form |
| `/departments` | Departments | All departments listing |
| `/departments/[slug]` | Department Detail | Individual department pages |
| `/placements` | Placements | Career services & statistics |
| `/research` | Research | Research initiatives |
| `/campus-life` | Campus Life | Student life & facilities |
| `/contact-us` | Contact | Contact information |

### Department Slugs
- `/departments/engineering` - Engineering & Technology
- `/departments/management` - Management Studies
- `/departments/commerce` - Commerce & Finance
- `/departments/sciences` - Sciences
- `/departments/creative-arts` - Design, Media & Creative Arts
- `/departments/humanities` - Humanities & Social Sciences
- `/departments/law` - School of Law
- `/departments/healthcare` - Allied Healthcare Sciences
- `/departments/computing` - Applied Computing

---

## 🧩 Components

### Core Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Main navigation with mega menu, search modal, mobile drawer |
| `Footer` | Site footer with links, contact info, Google Maps integration |
| `HeroSection` | Homepage hero with animated content |
| `QuickStats` | Animated statistics cards |
| `ProgramsGrid` | Featured programs showcase |
| `CTAStrip` | Call-to-action banner |
| `NewsTicker` | Scrolling news announcements |

### Navbar Features
- Sticky header with scroll effects
- Department dropdown menu
- Global search with autocomplete
- Mobile-responsive hamburger menu
- Active route highlighting

---

## 🎨 Styling

### Color Palette

The project uses JAIN University's brand colors defined in `tailwind.config.js`:

| Color | Hex | Usage |
|-------|-----|-------|
| `jain-red` | `#c61423` | Primary CTA, buttons |
| `jain-navy` | `#0b132b` | Headings, dark sections |
| `jain-slate` | `#f1f5f9` | Light backgrounds |
| `jain-dark` | `#080e1f` | Footer background |
| `theme-gold` | `#f5a623` | Accents |

### Custom Utilities

```css
/* Custom shadows */
shadow-card    /* Subtle card elevation */
shadow-card-lg /* Prominent card elevation */

/* Custom animations */
animate-fade-up /* Fade in with upward motion */
```

### Typography

The project uses the Plus Jakarta Sans font family via CSS variables.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and configures build settings
5. Click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

### Environment Variables

No environment variables are required for basic functionality.

For production, you may want to add:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

### Tailwind Config

Custom configuration includes:
- JAIN brand colors
- Custom font family
- Card shadows
- Fade-up animation

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind CSS utilities
- Keep components modular and reusable

---

## 📄 License

This project is private and proprietary to JAIN (Deemed-to-be University).

---

## 📞 Contact

**JAIN University - Kanakapura Campus**
- 📍 JCVR+27P, Karnataka 562112
- 🌐 [jainuniversity.ac.in](https://jainuniversity.ac.in)

---

<p align="center">
  Made with ❤️ for JAIN University
</p>