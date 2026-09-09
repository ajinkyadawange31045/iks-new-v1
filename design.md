# Design System & UI/UX Architecture

> **Project**: Indian Knowledge Systems (IKS) Research Centre  
> **Institution**: Somaiya Vidyavihar University (Awarded by the IKS Division, Ministry of Education, Govt. of India)  
> **Specialization**: Maritime & Artistic Traditions

---

## 1. Executive Summary & Design Philosophy

The IKS Research Centre website embodies a **Living Manuscript & Maritime Heritage** design philosophy. It bridges scholarly academic authority with India's ancient cultural richness, translating ancient maritime navigation and indigenous artistic traditions (such as *Chitrakathi* storytelling) into a digital experience.

### Core Pillars
1. **Parchment & Manuscript Materiality**: The interface mimics traditional hand-made paper, palm-leaf manuscripts, and archival textures rather than flat modern minimalism.
2. **Maritime & Oceanic Rhythm**: Curving SVG wave dividers, oceanic teal tones, and fluid motion honor India's seafaring heritage.
3. **Classical Literary Typography**: Paired high-contrast serif and calligraphic script typefaces evoke historical manuscripts, Sanskrit treatises, and academic distinction.
4. **Curated Earth & Mineral Palette**: Natural pigments reminiscent of ocean waters (Teal), terracotta pottery/ochre dyes (Red-Brown/Rust), sandalwood/parchment (Beige/Tan), and aged teak wood (Dark Espresso).

---

## 2. Color Palette & Chromatic Sense

The color system is organized around thematic duality: **Maritime (Teal/Ocean)** and **Artistic (Terracotta/Earth)**, grounded on warm paper neutrals.

### 2.1 Color Tokens & Hex Values

| Token Name | Hex Code | HSL / RGB Equivalent | Semantic Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Parchment Cream (Base)** | `#f7ead8` | `rgb(247, 234, 216)` | Primary global page background across all pages |
| **Paper Tan (Mid-Tone)** | `#e8dcc6` | `rgb(232, 220, 198)` | Secondary background, scrollbar track, card bases |
| **Paper Cream (Light)** | `#faf8f3` | `rgb(250, 248, 243)` | Elevated paper surfaces, dropdown menus, modals |
| **Research Card Base** | `#faf5ed` | `rgb(250, 245, 237)` | Surface fill for research & feature cards |
| **Warm Sand Ochre** | `#e5bc83` | `rgb(229, 188, 131)` | SVG wave fill layers, footer headings, accent borders |
| **Maritime Teal (Primary)** | `#2d7d7d` | `rgb(45, 125, 125)` | Maritime pillar, primary CTA buttons, active links, icons |
| **Maritime Teal (Light)** | `#4a9d9d` | `rgb(74, 157, 157)` | Hover states, secondary accents, icons on dark surfaces |
| **Artistic Terracotta (Primary)**| `#8b4a3c` | `rgb(139, 74, 60)` | Artistic pillar, script highlights, active indicators, borders |
| **Artistic Terracotta (Light)**| `#a65a4a` | `rgb(166, 90, 74)` | Artistic card accents, button hover gradients |
| **Vibrant Heritage Red** | `#c24a3a` | `rgb(194, 74, 58)` | Primary button for "Explore Artistic", high-emphasis CTAs |
| **Dark Espresso / Earth** | `#5c3a2a` | `rgb(92, 58, 42)` | Primary headings ($H_1-H_6$), strong text, logo typography |
| **Muted Sepia Brown** | `#8b6f5e` | `rgb(139, 111, 94)` | Body copy, secondary descriptions, metadata, dividers |
| **Aged Wood (Footer Dark)** | `#3b2f27` | `rgb(59, 47, 39)` | Rich dark footer background providing grounded closure |

### 2.2 Signature Gradients

```css
/* Maritime Identity Gradient */
background: linear-gradient(135deg, #2d7d7d 0%, #4a9d9d 50%, #2d7d7d 100%);

/* Artistic Identity Gradient */
background: linear-gradient(135deg, #8b4a3c 0%, #a65a4a 50%, #8b4a3c 100%);

/* Dual Heritage Fusion Gradient (Used for section dividers, badges & composite CTAs) */
background: linear-gradient(to right, #2d7d7d 0%, #8b4a3c 100%);
```

---

## 3. Typography & Typesetting Hierarchy

The typography stack relies on Google Fonts curated specifically for classical scholarly tone and organic expressiveness.

### 3.1 Font Families

| Role | Font Family | Tailwind Class | Characteristics |
| :--- | :--- | :--- | :--- |
| **Headings & Display** | `'Playfair Display', serif` | `.font-serif-elegant` | High-contrast transitional serif, stately, editorial authority. |
| **Body & Prose** | `'Cormorant Garamond', serif`| `.font-serif-body` | Traditional humanist serif with calligraphic ductus and gentle ligatures. |
| **Script & Accents** | `'Dancing Script', cursive` | `.font-script` | Flowing calligraphic hand-script, used for conversational prompts & intros. |

### 3.2 Typographic Hierarchy & Sizing Specs

```
H1 (Hero Title)        → Playfair Display Bold (700/800) | clamp(1.875rem, 4vh + 1rem, 6rem) | #5c3a2a
H2 (Section Header)    → Playfair Display Bold (700)     | clamp(1.5rem, 3vh + 0.5rem, 3rem)  | #5c3a2a
H3 (Card / Sub-header) → Playfair Display SemiBold (600) | 1.125rem - 1.5rem (18px - 24px)    | #5c3a2a / #2d7d7d / #8b4a3c
Subtitles / Overlines  → Cormorant Garamond Medium (500) | 1rem - 1.25rem (16px - 20px)       | #8b6f5e
Body Text              → Cormorant Garamond Regular (400)| 1rem - 1.125rem, line-height: 1.6  | #8b6f5e / #5c3a2a
Script Taglines        → Dancing Script Italic (600)     | 1.25rem - 2.25rem                  | #8b4a3c
Badges / Metadata      → Cormorant Garamond SemiBold(600)| 0.75rem - 0.875rem, uppercase      | #ffffff / #5c3a2a
```

---

## 4. Textures, Depth & Surface Treatment

A defining hallmark of the UI is the multi-layered procedural paper texture applied to the body, cards, and footer.

### 4.1 CSS Parchment Creases & Noise Architecture

```css
/* Background composition for aged paper feel */
body {
  background-color: #f7ead8;
  background-image: 
    /* Vertical paper folds and crease lines */
    repeating-linear-gradient(
      90deg,
      rgba(139, 111, 94, 0.08) 0px,
      transparent 1px,
      transparent 40px,
      rgba(139, 111, 94, 0.08) 41px,
      transparent 42px,
      transparent 80px,
      rgba(139, 111, 94, 0.06) 81px,
      transparent 82px,
      transparent 120px
    ),
    /* Horizontal fine paper lines */
    repeating-linear-gradient(
      0deg,
      rgba(139, 111, 94, 0.05) 0px,
      transparent 1px,
      transparent 2px,
      rgba(139, 111, 94, 0.05) 3px
    ),
    /* SVG Fractal Noise Turbulence Overlay */
    url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  background-attachment: fixed;
}
```

### 4.2 Card Elevation & Border Chemistry

Cards do not use generic cold grays or stark black drop-shadows. Instead, they use warm sepia-tinted shadows and fine inner highlights:

- **`.paper-card`**:
  - Background: `rgba(247, 234, 216, 0.9)`
  - Shadow: `0 2px 8px rgba(92, 58, 42, 0.1), 0 4px 16px rgba(92, 58, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)`
  - Border: `1px solid rgba(139, 111, 94, 0.2)`
  - Corner Radius: `1.5rem` (`rounded-3xl`)
- **`.research-card`**:
  - Background: `#faf5ed` with internal fold gradients
  - Shadow: `0 4px 12px rgba(92, 58, 42, 0.15), 0 8px 24px rgba(92, 58, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)`
  - Border: `1px solid rgba(139, 111, 94, 0.3)`
  - Hover Interaction: `-translate-y-1` or `scale-[1.02]`, shadow escalation to `0 12px 32px rgba(92, 58, 42, 0.2)`

---

## 5. Structural Layout & Page Inclinations

### 5.1 Global Layout Hierarchy

```
┌────────────────────────────────────────────────────────┐
│ Fixed Blurred Header (Glassmorphic Parchment + Logo + Nav) │
├────────────────────────────────────────────────────────┤
│ Hero Section (Full Viewport / Min-h-screen)            │
│   - Institutional Hierarchy & Badge                    │
│   - Prominent Typography with Fluid Scaling            │
│   - Dual CTA Buttons (Maritime Teal vs Artistic Ruby)  │
│   - Multi-Layered SVG Wave Divider (Transitions to Content)│
├────────────────────────────────────────────────────────┤
│ Page Content Area (Contained in max-w-7xl, px-4 to px-8)│
│   - Gradient Pill Headings & Section Dividers          │
│   - Responsive Grid (1 col mobile → 2 col tablet → 3 col desktop)│
│   - Research Cards, Timelines, Profiles, Galleries     │
├────────────────────────────────────────────────────────┤
│ Top Wave Transition (Curved SVG Cut)                   │
│ Dark Earth Footer (#3b2f27) with Paper Overlay Texture  │
└────────────────────────────────────────────────────────┘
```

### 5.2 Responsive Section Spacing
- **Container**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-12 sm:py-16 md:py-20 lg:py-24`
- **Grid Gap**: `gap-6 sm:gap-8 lg:gap-10`
- **Card Padding**: `p-6 sm:p-8 md:p-10`

---

## 6. Key UI Component Blueprints

### 6.1 Navigation Bar (`Navbar.js`)
- **Fixed Position**: Stays anchored to the top (`z-index: 50`).
- **Scroll Transition**: Switches from transparent to `rgba(245, 241, 232, 0.95)` with `backdrop-blur-md` and warm shadow upon scrolling past `10px`.
- **Active Route Indicator**: Framer Motion layout pill (`layoutId="navbar-indicator"`) in `#8b4a3c` gliding under the active tab.
- **Mobile Menu**: Full-screen overlay with paper background drawer sliding from the right (`spring` physics) and body scroll lock.

### 6.2 Section Header Pattern
Every major section features a standardized tri-element header:
1. **Title**: Playfair Display bold in `#5c3a2a` (`tracking-wider`).
2. **Divider Bar**: `h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80`.
3. **Subtitle**: Cormorant Garamond italic/medium in `#8b6f5e`.

### 6.3 Wave Dividers (Organic Heritage Transitions)
Section boundaries avoid harsh linear cuts. Instead, continuous multi-curve SVG waves (`fill="#e5bc83"`, with 3 distinct opacity depths: `1.0`, `0.65`, `0.45`) create gentle transitions between parchment, sand, and dark footer zones.

### 6.4 Icon Treatment
- Icons (Lucide React) are housed inside circular gradient badges:
  - Maritime items: `bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d]` with pure white icons.
  - Artistic items: `bg-gradient-to-br from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c]` with pure white icons.
- Shadows: Soft colored drops (`shadow-lg`).

### 6.5 Interactive Form Elements
- Inputs & Dropdowns use `.research-card` paper styling with `#8b6f5e/30` borders.
- Active & Focus States: Glow rings in `--teal-primary` (`focus:ring-[#2d7d7d]`).
- Custom scrollbar: `--paper-tan` background with `--brown-medium` rounded thumb.

---

## 7. Motion & Micro-Interaction System

| Interaction | Trigger | Animation Spec | Purpose |
| :--- | :--- | :--- | :--- |
| **Scroll Reveal** | Intersection Observer (`whileInView`) | `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}` | Staggered reading rhythm (`delay: index * 0.1`) |
| **Card Hover** | Mouse Over | `transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl` | Tactile feedback |
| **CTA Buttons** | Mouse Over | `transform hover:scale-105 transition-all duration-300` | Inviting action |
| **Floating Badges** | Continuous Loop | `@keyframes float { 0%, 100% { transform: translateY(0px) } 50% { transform: translateY(-15px) } }` | Lively visual interest |
| **Text Selection** | User Select | `::selection { background: #2d7d7d; color: #ffffff; }` | Brand-consistent highlight |

---

## 8. Viewport Scalability & Defensive Design

The design system incorporates specialized scaling classes for extreme viewport heights and widths (`.hero-responsive`, `clamp()` functions from standard laptops up to ultra-large institutional displays):
- Fluid clamping for font sizes (`clamp(1.875rem, 4vh + 1rem, 12rem)`).
- Fluid clamping for logo imagery and wave heights.
- Graceful degradation for compact laptop heights (`@media (max-height: 800px) and (min-width: 1024px)`).

---

## 9. Design Rules for New Features & Extensions

When building new pages or adding components to this project:
1. **Always use Warm Parchment (`#f7ead8` / `.research-card` / `.paper-card`)** as the background base. Never use flat pure white (`#ffffff`) or cold gray (`#f3f4f6`) backgrounds.
2. **Always balance Maritime Teal (`#2d7d7d`) and Artistic Terracotta (`#8b4a3c`)** for actions, indicators, and categorized content.
3. **Always preserve typography pairings**: Playfair Display for all titles/headings and Cormorant Garamond for descriptions, lists, and reading text.
4. **Use organic wave separators (`SVG`)** when transitioning between major color shifts (e.g., hero to content, content to footer).
5. **Keep corner radii generous (`rounded-2xl` or `rounded-3xl`)** to reflect organic, hand-crafted craftsmanship.
