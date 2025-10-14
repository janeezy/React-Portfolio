# AI Coding Instructions - React Portfolio

## Project Overview
This is a single-page React portfolio application for Ezinne Adaego Jane Duru, built with Create React App, featuring a single mega-component architecture with smooth animations and modern styling.

## Architecture Patterns

### Single Component Design
- **Main component**: `src/components/Portfolio.js` (~1500 lines) contains the entire application logic
- **App structure**: `App.js` simply renders `<Portfolio />` - all functionality is in one file
- **State management**: Uses React hooks (`useState`, `useEffect`) for theme, navigation, and mobile menu
- **No routing**: Navigation handled via `activeSection` state switching content within the same component

### Styling & UI Patterns
- **Design system**: Tailwind CSS with custom gradients and glassmorphism effects
- **Typography**: Poppins (sans-serif) for body text, Roboto Slab (serif) for headings
- **Color scheme**: Dual theme (dark/light) with purple-indigo-pink gradient accents
- **Component pattern**: Reusable `Card` and `Section` components defined within Portfolio.js
- **Responsive**: Desktop sidebar navigation + mobile hamburger menu

## Key Dependencies & Integration Points

### Animation Stack
- **Framer Motion**: Used extensively for page transitions, hover effects, and micro-animations
- **Pattern**: Wrap components in `<motion.div>` with `initial`, `animate`, `exit` props
- **Common animations**: Scale on hover, slide in from bottom, rotating icons

### Icon System
- **Lucide React**: All icons imported from single package for consistency
- **Usage**: Direct imports like `import { Home, User, Mail } from "lucide-react"`

### Font Loading
- **Strategy**: Fontsource packages loaded via npm, not CDN
- **Implementation**: `@fontsource/poppins` and `@fontsource/roboto-slab` in package.json

## Development Workflow

### Scripts & Commands
```bash
npm start          # Development server on localhost:3000
npm run build      # Production build to /build folder
npm test           # Jest test runner
```

### Theme System
- **Implementation**: JavaScript-controlled with `document.body.className` and inline styles
- **Background gradients**: Applied via `document.body.style.background` on theme change
- **Component theming**: Theme prop passed down, conditional classes based on `theme === "dark"`

### Content Management
- **Data**: Hardcoded within Portfolio.js (no external CMS or JSON files)
- **Sections**: Array of navigation items with id, icon, and title properties
- **Content rendering**: Large switch statement in `renderContent()` function

## Code Style & Conventions

### Component Structure
- **Function components**: Arrow functions preferred
- **Props destructuring**: Immediate destructuring in parameter list
- **Conditional rendering**: Ternary operators for theme-based styling
- **CSS classes**: Template literals with conditional logic for dynamic styling

### State Management
```javascript
const [activeSection, setActiveSection] = useState("home");
const [menuOpen, setMenuOpen] = useState(false);
const [theme, setTheme] = useState("dark");
```

### Animation Patterns
```javascript
// Standard motion component pattern
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

## Asset Organization
- **Images**: Stored in `/public` folder (IMG.png, logo.ico, Favicon.ico)
- **Manifest**: Standard PWA manifest.json in public folder
- **No src/assets**: All static assets served from public directory

## Testing & Quality
- **Setup**: React Testing Library + Jest (Create React App defaults)
- **ESLint**: React app configuration with Jest support
- **No custom tests**: Uses boilerplate test files only

## Deployment Considerations
- **Static hosting**: Builds to standard `/build` folder for CDN deployment
- **No environment variables**: All configuration is hardcoded
- **PWA ready**: Has manifest.json and service worker setup via CRA