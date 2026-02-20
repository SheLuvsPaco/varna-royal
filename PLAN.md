# Window Repair Landing Page — AI Builder Brief
## Inspired by Loewen.com & Marvin.com

> **Purpose of this file:** Give your AI builder (v0, Cursor, Bolt, etc.) everything it needs to produce a premium, conversion-focused landing page for a window repair business — with the same editorial, luxury aesthetic as Loewen and Marvin. Read every section before writing a single line of code.

---

## 1. DESIGN PHILOSOPHY (The Big Idea)

Both Loewen and Marvin share the same core design truth: **they don't sell windows — they sell the feeling of light, space, and craftsmanship.** Their websites feel like high-end architecture magazines, not contractor directories.

The three pillars you must carry into every design decision:

| Pillar | What It Means in Practice |
|--------|--------------------------|
| **Restraint** | Less is more. Big white/dark space is a luxury signal, not wasted screen. |
| **Photography First** | The image IS the design. Text and UI are just frames around the photo. |
| **Editorial Voice** | Copy is confident, short, poetic. Never salesy. Never bulleted features. |

For a **window repair** business, the adaptation is: you're not selling luxury products, but you ARE selling the same emotional outcome — a home that feels whole, protected, beautiful, and light-filled again.

---

## 2. DESIGN TOKENS (Colors, Typography, Spacing)

### 2.1 Color Palette

Use ONE of these two palettes (pick based on brand feel):

**Palette A — Dark Luxury (Loewen-inspired)**
```
--color-bg:          #0D0D0B   /* near-black warm */
--color-surface:     #161612   /* card background */
--color-border:      #2A2A24   /* subtle dividers */
--color-text-primary:#F5F2EC   /* warm off-white */
--color-text-muted:  #8C8A82   /* secondary text */
--color-accent:      #C9A96E   /* warm gold — used sparingly */
--color-accent-light:#E8D5A3   /* hover states */
```

**Palette B — Light Editorial (Marvin-inspired)**
```
--color-bg:          #FAFAF7   /* warm paper white */
--color-surface:     #F2F0EA   /* card/section tint */
--color-border:      #E0DDD4   /* dividers */
--color-text-primary:#1A1A16   /* deep charcoal, not pure black */
--color-text-muted:  #6B6B60   /* secondary text */
--color-accent:      #1A3A2A   /* deep forest green — used sparingly */
--color-accent-light:#2D5C42   /* hover states */
```

> **Rule:** Never use pure #000000 or #FFFFFF. Always use warm tints.

### 2.2 Typography

Avoid Inter, Roboto, Arial at all costs. Use this pairing:

```
/* Display / Headlines */
font-family: 'Playfair Display', serif;      /* editorial authority */
/* OR */
font-family: 'Cormorant Garamond', serif;    /* more refined, thinner */

/* Body / UI */
font-family: 'DM Sans', sans-serif;          /* modern, clean, friendly */
/* OR */
font-family: 'Jost', sans-serif;             /* geometric but warm */
```

**Type Scale:**
```
--text-hero:    clamp(52px, 8vw, 110px)   /* section 1 headline */
--text-xl:      clamp(36px, 5vw, 64px)    /* section headlines */
--text-lg:      clamp(24px, 3vw, 36px)    /* sub-headlines */
--text-base:    18px                       /* body copy */
--text-sm:      14px                       /* labels, captions */
--text-xs:      12px                       /* fine print, tags */

--leading-tight:  1.05   /* headlines */
--leading-normal: 1.6    /* body text */
--tracking-wide:  0.08em /* small caps labels */
```

### 2.3 Spacing System

```
--space-xs:   8px
--space-sm:   16px
--space-md:   32px
--space-lg:   64px
--space-xl:   120px
--space-2xl:  180px
--space-3xl:  240px
```

Sections breathe. Minimum vertical padding per section: `--space-xl` (120px). Never compress sections.

### 2.4 Grid

```
max-width: 1440px     /* page container */
padding:   0 80px     /* desktop gutters */
padding:   0 24px     /* mobile gutters */

/* Standard grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 24px;
```

---

## 3. SECTION-BY-SECTION BREAKDOWN

### SECTION 1 — Navigation (Sticky Header)

**Loewen approach:** Minimal transparent nav over the hero. White or light text. Logo left, links right. No mega-menus. Single row.  
**Marvin approach:** Same minimal structure. Adds a subtle top utility bar with "Find a Dealer" type secondary links.

**What to build:**

```
Layout: Flex row, space-between
Height: 72px desktop / 60px mobile
Position: Fixed, top: 0
Background: transparent → blur-backdrop on scroll (backdrop-filter: blur(12px) + subtle bg opacity)
Logo: Left — wordmark only, no icon
Nav links: Center or right — 4-5 items max
CTA Button: Far right — "Get a Free Quote" or "Call Now"
  - Style: Small, bordered, no fill OR subtle accent fill
  - Border: 1px solid currentColor, borderRadius: 0px (sharp corners = premium)
```

**Behavior:**
- On page load: fully transparent, white text (works over dark hero image)
- On scroll past 80px: background fades in with `backdrop-filter: blur(12px)` and `background: rgba(13,13,11,0.85)` (dark) or `rgba(250,250,247,0.92)` (light)
- Logo and links stay the same color

**CSS snippet:**
```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 80px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;
}
.nav.scrolled {
  background: rgba(13, 13, 11, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
```

---

### SECTION 2 — Hero (Full Viewport)

This is THE most important section. Both Loewen and Marvin open with a full-screen, edge-to-edge photograph or video. No borders. No card container. The image bleeds to every edge.

**Loewen hero:** Autoplay video (muted, no controls). Close-up architectural shot — wood grain on a window frame, natural light flooding through glass. Very cinematic. Text overlaid in bottom-left, small and quiet.

**Marvin hero:** Full-bleed photograph with short powerful headline centered or left-aligned. "Windows and doors custom crafted for your vision." Below it: a short one-line subheadline and a single CTA.

**What to build:**

```
Height: 100vh (full viewport)
Content: Full-bleed background image OR autoplay video (loop, muted, playsInline)
Overlay: Linear gradient from transparent → rgba(0,0,0,0.35) bottom-up
         (darkens bottom so white text is readable)

Text block: Positioned bottom-left OR center
  - Label (small caps, letter-spaced): "Window Repair Experts" or "Est. 2010"
  - Headline (display font, large): 2-3 lines max
  - Subhead (body font, muted): 1 line, 60-80 chars max  
  - CTA: One primary button only
```

**Hero Headline examples (adapt to client):**
- "Your Home Deserves Perfect Windows"
- "Light Back In. Life Back On."
- "Repaired Right. The First Time."

**Image guidelines for hero:**
- Bright, natural light flooding through clean windows
- Interior lifestyle shot — kitchen, living room, morning light
- NO stock photo of a smiling repairman
- Warm color temperature, golden hour preferred

**Animation:**
```css
/* Text reveal on load */
.hero-text { 
  opacity: 0; 
  transform: translateY(24px);
  animation: fadeUp 0.9s ease forwards;
  animation-delay: 0.3s;
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
```

**CTA Button style:**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: 1px solid rgba(255,255,255,0.6);
  color: white;
  font-family: var(--font-sans);
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: white;
  color: var(--color-bg);
  border-color: white;
}
```

---

### SECTION 3 — Value Proposition (3 Pillars)

Both Loewen and Marvin follow the hero with a "why us" section built around 3 core values. Loewen uses: **Authentic, Handcrafted, Enduring**. Marvin uses a "Driven by purpose" narrative block.

**Structure (Loewen method — more visual):**
```
Layout: 3-column grid (each column = 1 value)
Each column contains:
  - Large square or portrait image (fills the column)
  - Value label (small, uppercase, letter-spaced) below image
  - Short paragraph (2-3 sentences, no bullets)
```

**Structure (Marvin method — more text-focused):**
```
Layout: 2-column split
Left: Large headline + paragraph + link ("Our Story")
Right: Stacked 3 cards (icon + title + 1-line description)
```

**For window repair, adapt the 3 pillars to:**
1. **Fast** — "Back in working order within 24 hours"
2. **Honest** — "Straight diagnosis. Fair price. No surprises."
3. **Done Right** — "Guaranteed workmanship on every job"

**Typography rules for this section:**
- Section label (above headline): 11-12px, all-caps, letter-spacing: 0.15em, muted color
- Headline: Display font, 48-64px, tight line-height (1.05)
- Body: 17-18px, relaxed line-height (1.7), muted color (not full contrast)

---

### SECTION 4 — Full-Bleed Image Interrupt

Both sites use this pattern: after 1-2 content sections, a full-width photograph appears with NO padding, NO container, NO text overlay. Pure image. It forces the visitor to stop and feel.

```
Width: 100vw (break out of container)
Height: 60-70vh
Object-fit: cover
Object-position: center
No text, no buttons, no overlays
Subtle parallax effect (optional): background-attachment: fixed
```

**What image to use:**
- Beautiful repaired window in a warm home context
- Light streaming through clean glass onto hardwood floors
- Shot from inside looking out to a garden or street

---

### SECTION 5 — Services / What We Fix

**Marvin pattern:** Grid of project/product cards — clean, image-heavy, minimal text.  
**Loewen pattern:** Large editorial images with a short title, linked to product pages.

**What to build:**

```
Layout: Masonry-style or asymmetric grid (NOT equal boxes)
  - Option A: 2 large left + 1 right (stacked), repeat
  - Option B: Horizontal scroll on mobile, static grid desktop

Each card:
  - Full-height image (no icon, no illustration)
  - Hover: subtle zoom (transform: scale(1.03)) + label fades in
  - Title: bottom-left of card, in white over a dark gradient
  - NO price tags. NO "Learn More" buttons inside card.
  - The entire card is clickable.

Services to show (adapt to client):
  1. Broken Glass Replacement
  2. Seal & Fog Repair (double-pane condensation)
  3. Frame & Sash Repair
  4. Window Hardware & Lock Repair
  5. Draught & Insulation Fix
  6. Emergency Boarding
```

**Card CSS:**
```css
.service-card {
  position: relative;
  overflow: hidden;
  border-radius: 0px; /* sharp — premium feel */
  cursor: pointer;
}
.service-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.service-card:hover img {
  transform: scale(1.04);
}
.service-card-label {
  position: absolute;
  bottom: 24px; left: 24px;
  color: white;
  font-family: var(--font-display);
  font-size: 22px;
}
```

---

### SECTION 6 — Trust / Social Proof

**Marvin method:** Rotating quote carousel — architect/designer testimonials, large italic quote text, attribution line with name and project title. Very editorial.

**Loewen method:** Project gallery grid — images of real completed projects.

**For a local window repair business, combine both:**

```
Layout: Full-width quote + background

Quote block:
  - Large quotation mark (decorative, display font, 120px, muted color)
  - Quote text: 24-32px, italic display font, line-height 1.4
  - Attribution: Name, suburb/city — 14px sans, uppercase
  - Navigation: Prev/Next arrows (minimal, thin stroke)
  - Optional: star rating (5 stars, filled)

Background: Single full-bleed image (blurred or darkened) 
            OR solid dark/light color block

Auto-advances every 5s. Pause on hover.
```

**Quote examples to mock:**
> "They came the same morning, replaced the glass, and cleaned up everything. I couldn't even tell they'd been there — except my window was perfect again."
> — *Maria S., Plovdiv*

---

### SECTION 7 — Process / How It Works

**Marvin approach:** Simple 3-step numbered list with short descriptions. No icons. Clean typography.

```
Layout: 3-column OR horizontal timeline

Each step:
  - Step number: Large, display font, muted (e.g., "01"), 80-100px
  - Title: Sans font, 22px, medium weight
  - Description: 3-4 sentences max, relaxed line-height
  - Optional: thin horizontal line connecting steps

Steps for window repair:
  01. Book a Visit — Call or fill in the form. We come to you within 24h.
  02. Honest Assessment — We diagnose the issue and give you a straight quote.
  03. Fixed & Gone — We do the work, clean up, and leave your home better than we found it.
```

**Typography for step numbers:**
```css
.step-number {
  font-family: var(--font-display);
  font-size: clamp(60px, 8vw, 100px);
  line-height: 1;
  color: var(--color-text-muted);
  opacity: 0.3;
  margin-bottom: 16px;
}
```

---

### SECTION 8 — Photo Gallery (Project Grid)

Both sites use large project galleries. Loewen's Instagram feed + curated project images. Marvin's photo gallery. This is a pure visual trust-builder.

```
Layout: Irregular grid (NOT uniform rows)
  Recommended: CSS grid with explicitly placed items

  [Large image - 2 cols, 2 rows] [Medium image - 1 col] 
                                 [Medium image - 1 col]
  [Medium image] [Medium image] [Large image - 1 col, 2 rows]

Images: Actual repaired windows in homes
        Before/after pairs (side by side if possible)
        Close-ups of quality craftsmanship (frame, seal, hardware)

Hover: Subtle scale + optional caption fade-in (location, type of repair)

No border-radius. Sharp edges = premium.
Gap between images: 6-8px (very tight grid, content-focused)
```

---

### SECTION 9 — CTA Band / Contact

**Marvin:** Simple centered CTA — "Find a Dealer" with a map/locator.  
**Loewen:** "Find a Dealer" with a clean form and address.

**For window repair, make this the most important conversion section:**

```
Layout: Dark full-width band (contrast against rest of page)
        OR Large split: Left text / Right form

Left side:
  - Pre-headline label: "Ready to Fix It?"
  - Headline: Large, display font, 2 lines
    e.g. "Get Your Windows Fixed This Week"
  - Sub: 1 line reassurance — "Free assessment. No obligation."
  - Phone number: Large, clickable (tel: link)
    Style: Very prominent, accent color

Right side (form):
  - Minimal fields: Name, Phone, Type of Issue (dropdown), Preferred Time
  - Submit button: Full-width, accent color, sharp corners
  - Below button: "We respond within 2 hours" — 12px, muted

Form field style:
  - Border: 1px solid var(--color-border)
  - Background: transparent
  - No border-radius OR very subtle 2px
  - On focus: border changes to accent color
  - Font: same as body, 16px (prevents zoom on iOS)
  - Padding: 14px 16px
```

---

### SECTION 10 — Footer

**Loewen footer:** Very minimal. Logo, address, copyright. 2-column max.  
**Marvin footer:** 4-column: About, Support, Resources, Find a Dealer. Clean and organized.

**What to build:**

```
Background: Slightly darker than page bg (or same)
Separator: 1px solid var(--color-border) at top

Layout: 3 columns
  Col 1: Logo + 1-line description + phone/address
  Col 2: Quick links (Services, About, Gallery, FAQ)
  Col 3: Social icons (minimal, icon only) + "Privacy Policy"

Bottom bar: Copyright line, centered or left, 12px muted
```

---

## 4. INTERACTION & ANIMATION PRINCIPLES

Both sites are calm. Animations are slow, purposeful, and subtle. Never distracting.

### Rules:
```
Scroll reveal animations:
  - Elements fade up as they enter viewport
  - translateY: 30px → 0, opacity: 0 → 1
  - Duration: 0.7-1.0s
  - Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - Stagger delay between siblings: 0.1-0.15s

Hover states:
  - Images: scale(1.03-1.05), duration 0.5s
  - Buttons: color/background transition, duration 0.25s
  - Links: opacity 0.7 OR underline slides in from left

Page transitions:
  - Not required for MVP
  - If added: simple fade (opacity 0→1, 300ms)

NO: Parallax on mobile (performance)
NO: Spinning animations
NO: Bounce or spring physics
NO: Anything that moves faster than 0.25s (feels cheap)
```

---

## 5. MOBILE DESIGN RULES

Both Loewen and Marvin are fully responsive. Key mobile adaptations:

```
Nav: Hamburger menu (icon only, no label)
     Slide-in overlay from right, full height

Hero: Same full-screen image, vertical crop
      Text repositioned to bottom-center

Value Prop section: Stack vertically (3 columns → 1 column)

Services grid: Single column scroll on mobile
               Each card: 100vw width, 280px height

Gallery: Horizontal scroll (overflow-x: auto, snap-type: x mandatory)
         Each image: 80vw width, 60vw height, snap-align: start

CTA section: Stack left+right vertically
             Form on bottom
             Phone number top, large

Footer: Single column, centered
```

---

## 6. PHOTOGRAPHY ART DIRECTION

This is the #1 factor that separates premium from generic. If the client has no photos, use Unsplash or Pexels with these search terms:

**For hero:**
- "natural light living room interior"
- "morning light through window home"
- "cozy home large windows sunlight"

**For services:**
- "window frame close up detail"
- "glass replacement home"
- "modern home windows interior"

**For gallery:**
- "before after window renovation"
- "home window bright natural light"
- "architect detail window frame wood"

**What to AVOID:**
- Repairman in uniform with tools
- Stock smiling family
- Logos / badges / certifications in hero
- Generic "checklist" images

**Color correction rule:** All images should feel warm (golden/cream tones), not cool/blue. If needed, apply a CSS filter:
```css
.hero-image {
  filter: brightness(0.9) saturate(1.1) sepia(0.05);
}
```

---

## 7. COPY VOICE & TONE GUIDE

Both Loewen and Marvin write like architects, not salespeople.

**DO:**
- Short sentences. Confident. Never desperate.
- Speak to the feeling, not the feature
- Use "your home" not "our service"
- Trust signals embedded naturally ("since 1989", "25 years in the trade")

**DON'T:**
- "We are the #1 provider of..."
- Bullet lists of features in body copy
- Exclamation marks
- All-caps urgency ("CALL NOW!!!")

**Example rewrites:**

| Generic | Premium |
|---------|---------|
| "Fast, reliable window repair services!" | "Fixed right. Usually the same day." |
| "We offer a wide range of services" | "Whatever's broken, we know how to fix it." |
| "Call us today for a free quote!" | "Start with a free look. No pressure." |
| "Experienced team of professionals" | "25 years of honest work in this city." |

---

## 8. COMPONENT REFERENCE SUMMARY

| Component | Key Property | Value |
|-----------|-------------|-------|
| Border-radius buttons | Sharp = premium | 0px or 2px max |
| Border-radius cards | Sharp = premium | 0px |
| Border-radius images | None | 0px |
| Border-radius form inputs | Minimal | 0-2px |
| Shadow on cards | None or very subtle | 0 2px 8px rgba(0,0,0,0.06) |
| Image aspect ratio (hero) | Full bleed | 100vw × 100vh |
| Image aspect ratio (services) | Portrait | 3:4 |
| Image aspect ratio (gallery) | Mixed | landscape + portrait |
| Button padding | Generous | 14px 32px |
| Section vertical padding | Generous | 120px top + bottom |
| Max line-length body text | Readable | 65-75 characters |

---

## 9. TECHNICAL STACK RECOMMENDATION

For v0 / Bolt / Cursor builds:

```
Framework:     Next.js (App Router) or plain HTML+CSS+JS
Styling:       Tailwind CSS (custom tokens) OR vanilla CSS with variables
Fonts:         Google Fonts — Cormorant Garamond + DM Sans
Icons:         Lucide (thin stroke, minimal)
Images:        Next/Image with priority on hero, lazy on rest
Animations:    Framer Motion (React) OR IntersectionObserver + CSS
Form:          React Hook Form OR plain HTML form → mailto/formspree
```

---

## 10. FINAL CHECKLIST BEFORE SHIPPING

- [ ] All text readable at minimum 14px
- [ ] Phone number is a `tel:` link, tappable on mobile
- [ ] Hero image loads fast (WebP, compressed, < 300KB)
- [ ] Nav collapses to hamburger on mobile
- [ ] Form has required field validation
- [ ] No placeholder text as labels (labels are above inputs)
- [ ] CTA button visible above the fold on mobile
- [ ] Google Maps / address in footer for local SEO
- [ ] Page title and meta description set
- [ ] Favicon present
- [ ] Page loads under 3s on mobile (check Lighthouse)