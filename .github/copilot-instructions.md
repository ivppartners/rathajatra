# Rathajatra Website - AI Coding Agent Instructions

## Project Overview
SolidJS-based Lithuanian cultural/religious event website about Rathajatra festival. Single-page application with modal-style routing, built with Vite. Content is in Lithuanian.

## Tech Stack
- **Framework**: SolidJS 1.9+ (reactive framework similar to React but with fine-grained reactivity)
- **Router**: @solidjs/router 0.15+ with nested routes
- **Build Tool**: Vite 7+ running on port 3100
- **Package Manager**: pnpm (though npm/yarn work too)

## Development Commands
```bash
npm run dev      # Start dev server on localhost:3100
npm run build    # Production build (target: esnext)
npm run serve    # Preview production build
```

## Architecture Patterns

### Routing Strategy
This app uses **nested modal-style routing** where child routes render as overlays over parent routes:

- **Home route** (`/`) - Main landing page with navigation
- **Modal parent routes** - Act as layout wrappers that:
  - Render a backdrop overlay (`#bg`)
  - Include child content in a modal container (`#main`)
  - Auto-navigate back when clicking outside modal (via `onMount` event listeners)
  
Example modal parent: [src/routes/main/index.jsx](src/routes/main/index.jsx), [src/routes/tags/index.jsx](src/routes/tags/index.jsx), [src/routes/stories/index.jsx](src/routes/stories/index.jsx)

### Key Conventions
1. **Lazy Loading**: All route components use `lazy()` imports in [src/index.jsx](src/index.jsx)
2. **Click-Outside Navigation**: Modal parents implement identical click-outside handlers:
   ```jsx
   const handleClick = (event) => {
     if (!ref.contains(event.target)) {
       navigate("/back-to-parent");
     }
   };
   ```
3. **Modal Structure**: All modal routes use this DOM pattern:
   ```jsx
   <div class="body is-article-visible">
     <main id="wrapper">
       <div id="main" ref={ref}>
         {props.children}
         <A href="/parent" title="Uždaryti"><div class="close" /></A>
       </div>
     </main>
     <div id="bg"></div>
   </div>
   ```

### Component Patterns
- **Reusable Components**: Located in [src/components/](src/components/)
  - `Youtube` component: Embedded iframes with Lithuanian title prop
  - `clickOutside` directive: SolidJS directive for click-outside functionality (currently defined but not actively used)
- **Asset Imports**: Images imported from `src/assets/images/` (e.g., `import pic01 from "../../assets/images/jagannatha.webp"`)

### Route Organization
- `/main/*` - Main festival info pages (svente, programa, motyvacija, parama, apie, kontaktai)
- `/tags/*` - Topic/hashtag pages (rathayatra, iskcon, krishna, jagannatha, etc.)
- `/stories/*` - Historical/cultural stories (bandhuMohanty, epidemija, gitaGovinda, etc.)
- `/istorijos` - Story index page linking to `/stories/*` children

## File Naming & Language
- Lithuanian content throughout (file paths, UI text, comments)
- Route file names match Lithuanian path segments (e.g., `istorijos.jsx`, `motyvacija.jsx`)
- CSS: Single global stylesheet [src/index.css](src/index.css) imported in [src/index.jsx](src/index.jsx)

## Critical Notes
- **HTML lang attribute**: Set to `lang="lt"` in [index.html](index.html)
- **Vite config**: Custom port 3100, build target esnext
- **No TypeScript**: Uses JSConfig for IDE support only
- **SolidJS Specifics**: 
  - Use `class` not `className` (except when passing as prop to custom components)
  - Lifecycle hooks: `onMount`, `onCleanup`
  - No VDOM - direct DOM manipulation
  - Use `<A>` component from `@solidjs/router` for internal links

## When Adding New Routes
1. Create component file in appropriate `src/routes/` subdirectory
2. Add lazy import to [src/index.jsx](src/index.jsx)
3. Add `<Route>` declaration under correct parent route
4. Modal children should use existing parent layouts (`Main`, `Tags`, or `Stories`)
