# Medical Exchange Nepal — Complete Site Guide

> **What this project is:** A marketing and operations website for **Medical Exchange Nepal** — an organisation that places international medical students and healthcare trainees in Nepali hospitals, while also promoting Nepal as a destination for **medical tourism**, **elective treatment**, and **spiritual & wellness** travel.

**Live site:** https://medicalexchangenepal.com/  
**Contact:** info@medicalinternshipnepal.com · +977-9862728072  
**WhatsApp:** Floating chat button on every page

---

## Table of contents

1. [The three pillars — what each section is for](#the-three-pillars--what-each-section-is-for)
2. [Full page map](#full-page-map)
3. [Navigation structure](#navigation-structure)
4. [Tech stack & architecture](#tech-stack--architecture)
5. [Shared UI components](#shared-ui-components)
6. [Design system & UX principles](#design-system--ux-principles)
7. [Key user journeys](#key-user-journeys)
8. [Media & assets](#media--assets)
9. [SEO & performance](#seo--performance)
10. [Admin & backend](#admin--backend)
11. [Build & deploy](#build--deploy)

---

## The three pillars — what each section is for

The site serves **three related but distinct audiences**. They live under **Services** in the main navigation.

```
┌─────────────────────────────────────────────────────────────────┐
│                    MEDICAL EXCHANGE NEPAL                        │
├─────────────────┬─────────────────────┬─────────────────────────┤
│  Medical        │  Elective           │  Spiritual &            │
│  Tourism        │  Treatment          │  Wellness               │
│  (overview)     │  (patients)         │  (wellness travellers)  │
└─────────────────┴─────────────────────┴─────────────────────────┘
         │                    │                      │
         ▼                    ▼                      ▼
   International        Patients seeking        Retreat & healing
   patients & students   surgery, dental,        seekers (Ayurveda,
   researching Nepal     IVF, cosmetic care      yoga, Tibetan medicine)
   as a healthcare hub   at lower cost
```

### 1. Medical Tourism (`medical-tourism`)

**Route key:** `medical-tourism`  
**Component:** `MedicalTourismPage.tsx`  
**Audience:** International patients, medical students, and professionals researching Nepal as a **healthcare destination**.

**Role on the site:** The **gateway / overview page**. It explains *why* Nepal matters for cross-border care — cost savings, English-medium hospitals, ophthalmology reputation, Himalayan recovery context — without listing every procedure price.

**What’s on the page:**

| Section | Purpose |
|--------|---------|
| **Hero** (`PageHero`) | Photo-backed headline with CTAs to treatment options and contact |
| **Why this matters now** | Split layout — hospital photo + editorial on medical tourism trends |
| **Photo grid** (`ExperienceGallery`) | Real hospital, diagnostics, and training environments (no captions) |
| **Destination stats** | Partner hospitals, specialties, English care, wellness angle |
| **6 showcase cards** | Value, eye care, dental/cosmetic, complex care, wellness recovery, English access |
| **How MEN is involved** | Platform story + photo of trainees in hospital |
| **4 platform highlights** | Clinical access, cross-border trust, ambassadors, Himalayan context |
| **CTA** | Apply now (students) or contact |

**Cross-links to:** Elective Treatment, Spiritual & Wellness, Application, Contact

---

### 2. Elective Treatment (`elective-treatment`)

**Route key:** `elective-treatment`  
**Component:** `ElectiveTreatmentPage.tsx`  
**Audience:** **Medical tourists / patients** comparing procedures and prices (not student electives).

**Role on the site:** The **commercial treatment catalogue**. Transparent Nepal vs. Western price comparisons for surgery, fertility, cosmetic, dental, and diagnostics.

**What’s on the page:**

| Section | Purpose |
|--------|---------|
| **Hero** (`PageHero`, violet theme) | “World-Class Treatment. A Fraction of Western Prices.” + cost estimate CTA |
| **Why patients choose Nepal** | Cost, credentials, English teams, recovery environment |
| **Photo grid** (`ExperienceGallery`) | Hospital rotations, diagnostics, consultations — caption-free |
| **Featured procedures** | IVF, dental implants, knee replacement cards with savings badges |
| **Patient journey** (`PatientJourney`) | 5 steps: consultation → travel → procedure → recovery → follow-up |
| **Stats strip** | Savings %, categories, procedure count |
| **6 treatment category cards** | Surgical, ophthalmology, fertility, cosmetic, dental, diagnostics (with images) |
| **Price comparison table** | Filterable by category (`aria-pressed` chips for active filter) |
| **Why Nepal — 4 cards** | Savings, NMC registration, English teams, Himalayan recovery |
| **Accreditation strip** | TUTH, Bir, KCH, PMH, NMC, IFMSA partner links |
| **Cross-links** | Spiritual & Wellness recovery add-ons, Medical Elective Pricing |
| **CTA** | Free consultation |

**Data highlights:** 20+ procedures with Nepal price, Western comparison price, and savings %.

---

### 3. Spiritual & Wellness (`spiritual-wellness`)

**Route key:** `spiritual-wellness`  
**Component:** `SpiritualWellnessPage.tsx`  
**Audience:** Wellness travellers, spiritual seekers, and patients wanting **recovery / retreat** after clinical care.

**Role on the site:** Promotes Nepal’s **Ayurveda, yoga, meditation, Tibetan medicine, and Himalayan wellness** — often as an add-on to treatment or elective programmes.

**What’s on the page:**

| Section | Purpose |
|--------|---------|
| **Cover hero** | Half-height image from `public/spritual/` with bottom gradient text |
| **Cinematic carousel** | 3D cover-flow carousel — 7 wellness programme cards with spiritual images |
| **Why Nepal is different** | Editorial on living traditions vs. resort spas |
| **Living traditions** | Text-only section (monastery stays, Ayurveda recovery, treks) |
| **Stats strip** | Healing traditions, programme count, starting price, vs. Bali/Kerala |
| **6 pillar cards** (no photos) | Ayurveda, yoga, Himalayan setting, Tibetan medicine, affordability, integration |
| **Programme accordion** | 6 expandable programmes with pricing, highlights, ideal-for |
| **Cross-links** | Elective Treatment, Medical Elective Pricing |
| **CTA** | Custom wellness package |

**Programmes covered:**

1. Ayurveda & Panchakarma ($800–$2,500)  
2. Yoga & Meditation Retreat ($600–$1,500)  
3. Silent & Spiritual Retreat ($400–$1,200)  
4. Himalayan Yoga Trek ($1,200–$2,000)  
5. Holistic Detox ($700–$1,800)  
6. Tibetan Sound Healing ($350–$900)

**Image source:** Dedicated folder `public/spritual/` (not the main clinical gallery).

---

### How the three pillars connect

| User intent | Start here | Then |
|------------|------------|------|
| “Is Nepal credible for healthcare?” | Medical Tourism | → Elective Treatment for prices |
| “How much is a knee replacement / IVF?” | Elective Treatment | → Contact for quote |
| “Can I recover with yoga / Ayurveda after surgery?” | Spiritual & Wellness | ↔ Elective Treatment cross-link |
| “I’m a medical student, not a patient” | Programs / Pricing | → Application → My Elective |

---

## Full page map

The app is a **single-page application (SPA)** with **state-based routing** in `App.tsx` (`currentPage` string — no React Router).

### Core pages

| Route key | Component | Role |
|-----------|-----------|------|
| `home` | `HomePage` | Landing — hero collage, stats, programs preview, services hub, partner logos |
| `about` | `AboutPage` | Mission, team, founding story |
| `contact` | `ContactPage` | Contact form, map, WhatsApp, consultation booking |
| `gallery` | `GalleryPage` | Videos + masonry photo gallery with lightbox |
| `testimonials` | `TestimonialsPage` | Student stories and quotes |
| `faqs` | `FAQsPage` | Accordion FAQ by category |
| `accommodation` | `AccommodationPage` | Housing options for interns |

### Programs (student electives & internships)

| Route key | Component | Specialty |
|-----------|-----------|-----------|
| `programs` | `ProgramsPage` | Grid overview of all 6 programs |
| `pricing` | `PricingPage` | Fee grid, currency toggle, **Build Your Elective** wizard |
| `program-medical-elective` | `MedicalElectivePage` | General medical elective |
| `program-surgery` | `SurgeryPage` | Surgical training |
| `program-midwifery-elective` | `MidwiferyElectivePage` | Nursing / midwifery |
| `program-dental-electives` | `DentalElectivePage` | Dental electives |
| `program-physiotherapy-internship` | `PhysiotherapyInternshipPage` | Physiotherapy |
| `program-paramedical` | `ParamedicalPage` | Paramedical |

### Services (tourism & treatment)

| Route key | Component | Role |
|-----------|-----------|------|
| `medical-tourism` | `MedicalTourismPage` | Healthcare destination overview |
| `elective-treatment` | `ElectiveTreatmentPage` | Procedure pricing for patients |
| `spiritual-wellness` | `SpiritualWellnessPage` | Wellness & retreat programmes |

### Application & portal

| Route key | Component | Role |
|-----------|-----------|------|
| `application` | `ApplicationPage` | Multi-step application form + file uploads |
| `my-elective` | `MyElectivePage` | Post-application portal — checklist, timeline, packing list |

### Admin (internal)

| Route key | Component | Role |
|-----------|-----------|------|
| `admin-login` | `AdminLoginPage` | JWT login |
| `admin-dashboard` | `AdminDashboardPage` | View/manage submitted applications |

---

## Navigation structure

### Desktop

- **Home** · **About**
- **Programs** (dropdown)
  - All Programs · Pricing
  - 6 specialty sub-pages
- **Services** (dropdown)
  - Medical Tourism · Elective Treatment · Spiritual & Wellness
- **Gallery** · **Testimonials** · **Stay** · **FAQs** · **Contact**
- **My Elective** (pill button)
- **Apply Now** (primary CTA)

### Mobile

- Hamburger menu with accordions for Programs and Services
- Quick access to My Elective portal and Apply Now

### Global UI

- **Sticky nav** with active-page highlighting
- **WhatsApp FAB** (bottom-right, all pages)
- **Footer** with quick links, contact info, copyright

---

## Tech stack & architecture

| Layer | Technology |
|-------|------------|
| UI | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + custom DAL design tokens |
| Animation | Framer Motion |
| Icons | Lucide React |
| HTTP | Axios (admin/application API) |
| Deploy | Vercel (SPA rewrite to `index.html`) |

### Project structure

```
Medi-Intern/
├── public/
│   ├── gallery/          # Clinical photos (1–8.jpeg) + videos
│   ├── spritual/         # Wellness-only photography
│   ├── partners/         # Hospital logo SVGs
│   ├── logo.jpg
│   ├── manifest.json, robots.txt, sitemap.xml
├── src/
│   ├── App.tsx           # Routing, nav, footer, WhatsApp
│   ├── components/       # Page components
│   │   ├── landing/      # Home hero, collage, in-pictures
│   │   ├── layout/       # LayoutContainer
│   │   └── service/      # Reusable service-page building blocks
│   ├── data/
│   │   └── landingContent.ts   # galleryImage(), GALLERY_VIDEOS
│   ├── design/
│   │   ├── dal.css       # Design system utilities
│   │   └── dal.ts        # Layout tokens
│   ├── index.css         # Tailwind + global components
│   └── main.tsx
├── index.html            # SEO meta, schema.org
├── vercel.json
└── package.json
```

### Routing pattern

```tsx
const [currentPage, setCurrentPage] = useState("home");
// Pages receive setCurrentPage to navigate internally
<HomePage setCurrentPage={setCurrentPage} />
```

Scroll-to-top runs on every page change.

---

## Shared UI components

Located in `src/components/service/` and reused across service pages:

| Component | File | Used for |
|-----------|------|----------|
| **PageHero** | `PageHero.tsx` | Photo hero with readable text scrim (violet / blue / emerald themes) |
| **ExperienceGallery** | `ExperienceGallery.tsx` | 2×3 photo grid, optional captions (service pages use no captions) |
| **GalleryVideoCard** | `GalleryVideoCard.tsx` | Play/pause/mute video cards (portrait 9:16 or landscape) |
| **PatientJourney** | `PatientJourney.tsx` | Numbered step timeline (Elective Treatment) |
| **AccreditationStrip** | `AccreditationStrip.tsx` | Clickable hospital & NMC partner badges |

Landing-specific (`src/components/landing/`):

| Component | Role |
|-----------|------|
| `HeroSection` | Home page hero with story collage |
| `HeroStoryCollage` | 70/10/10/10 image narrative grid |
| `HeroAtmosphere` | Ambient background effects |
| `InPicturesSection` | Home gallery teaser |
| `PartnerLogoStrip` | Scrolling partner hospital logos |

Other reusable:

| Component | Role |
|-----------|------|
| `Counter.tsx` | Animated stat numbers on homepage |
| `LayoutContainer` | Max-width content wrapper |

---

## Design system & UX principles

### DAL design system (`src/design/dal.css`)

- **Layout:** `layout-container`, 12-column grid, hero zones
- **Hero readability:** Multi-layer scrims, dimmed photos, solid highlight text (not transparent gradient clip)
- **Interaction:** `dal-hover-zoom`, `dal-btn` with scale hover
- **Accessibility:** `focus-visible` rings on buttons; `aria-pressed` on filter chips

### Nielsen usability heuristics (applied)

| Heuristic | Implementation |
|-----------|----------------|
| Visibility of system status | Active nav item, filter chip `aria-pressed`, My Elective locked/unlocked state |
| Match system & real world | Plain language (“Build Your Elective”, “Get a Free Cost Estimate”) |
| User control & freedom | Accordion sections, carousel prev/next, video play/mute |
| Consistency & standards | Shared `PageHero`, `card`, `btn-primary`, footer links |
| Error prevention | Form validation on application; checklist before departure |
| Recognition over recall | Icons + labels on nav; programme emojis; journey step numbers |
| Aesthetic & minimalist design | No mismatched stock captions; text-only cards where photos don’t fit |
| Help & documentation | FAQs, My Elective checklist, packing list, timeline |

### Tailwind tokens (`tailwind.config.js`)

- **primary** — brand blue (actions, links)
- **secondary** — slate (text, borders)
- **accent** — highlights

---

## Key user journeys

### A. Medical student applies for elective

```
Home → Programs → Pricing (calculator) → Application (multi-step)
  → My Elective portal unlocked (localStorage)
  → Checklist + timeline + packing list
```

**Pricing wizard steps:** Specialty → Location & duration → Add-ons → Summary  
**Deposit:** $350 USD secures placement  
**Locations:** Kathmandu (TUTH, Bir, Kanti) · Pokhara (GMC, Western Regional)

### B. Patient researches treatment abroad

```
Services → Medical Tourism (overview)
  → Elective Treatment (price table + featured procedures)
  → Contact (free consultation)
  → Optional: Spiritual & Wellness (recovery retreat)
```

### C. Wellness traveller

```
Services → Spiritual & Wellness
  → Carousel browse programmes
  → Expand accordion for details
  → Contact (custom package)
```

### D. Admin reviews applications

```
admin-login → JWT in localStorage → admin-dashboard
  → View/filter applications submitted via ApplicationPage
```

---

## Media & assets

### Clinical gallery (`public/gallery/`)

| Asset | Typical use |
|-------|-------------|
| `1.jpeg` – `8.jpeg` | Hospital, outreach, diagnostics, training |
| `medicine.jpeg`, `trek.jpeg`, `swimming.jpeg` | Pharmacy, adventure, leisure |
| `video.mp4`, `video 2.mp4`, `video 3.mp4` | Gallery page + activity footage |

Helper: `galleryImage(n)` → `/gallery/{n}.jpeg`

### Spiritual gallery (`public/spritual/`)

Wellness-only images for Spiritual & Wellness carousel and hero — separate from clinical photos to avoid context mismatch.

### Partner logos (`public/partners/`)

SVG logos: TUTH, Bir, GMC, KCH, PMH, NMC — used on homepage partner strip.

---

## SEO & performance

- Semantic HTML, heading hierarchy, `aria-label` on heroes
- Open Graph + Twitter Card meta in `index.html`
- Schema.org JSON-LD on Home, Medical Tourism, and other key pages
- `sitemap.xml`, `robots.txt`, PWA `manifest.json`
- Lazy-loaded images, `loading="lazy"` on galleries
- Preconnect hints for external fonts/resources

---

## Admin & backend

- **ApplicationPage** submits data (and files) to backend API
- **AdminLoginPage:** `POST /api/auth/login` → JWT stored in `localStorage`
- **AdminDashboardPage:** Authenticated application management
- Scripts: `npm run server` / `npm run dev:server` (Node backend — may be separate deploy)

**My Elective** reads application data from `localStorage` — portal unlocks after successful application submit.

---

## Build & deploy

```bash
npm install
npm run dev       # Vite dev server
npm run build     # Production → dist/
npm run preview   # Preview build locally
npm run lint      # ESLint
```

**Vercel:** `vercel.json` rewrites all routes to `/index.html` for SPA hosting.

---

## Team

| Name | Role |
|------|------|
| Rohit Rawat | Co-founder |
| Pratik Gautam | Co-founder |
| Uddhav Kathayat | Co-founder |
| Sulav Gautam | Co-founder / Developer |

---

## Quick reference — “Which page do I need?”

| I want to… | Go to |
|------------|-------|
| Learn about Nepal as a healthcare hub | **Medical Tourism** |
| Compare surgery / dental / IVF prices | **Elective Treatment** |
| Book yoga, Ayurveda, or a retreat | **Spiritual & Wellness** |
| Apply as a medical student | **Application** (+ **Pricing** first) |
| Track my prep after applying | **My Elective** |
| See real photos & videos | **Gallery** |
| Verify hospital partners | **Accreditation strip** (Treatment page + Home) |
| Talk to someone | **Contact** or **WhatsApp** button |

---

*Last updated: May 2026 — reflects current codebase including Services pillars, shared components, and My Elective portal.*
