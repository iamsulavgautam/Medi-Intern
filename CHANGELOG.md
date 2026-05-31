# Medical Exchange Nepal — Changelog

> All changes made during the competitive feature build session (2026-05-29).
> Based on a competitive teardown of Work the World, Elective Africa, IVHQ, Flytocure, AirClinic, and Compare Medical Tourism.

---

## New Files Created

### `src/components/PricingPage.tsx`
A full pricing page accessible via the **Pricing** nav link.

**Features:**
- **Transparent fee grid** — Kathmandu vs Pokhara × 1–6 weeks + "Extra Week" column
- **Currency switcher** — USD / EUR / GBP / AUD / CAD / NPR (live conversion, indicative rates)
- **What's Included / Not Included** lists
- **"Build Your Elective" 4-step wizard:**
  1. Choose specialty (6 options with emoji icons)
  2. Choose location + duration slider (1–12 weeks with live price preview)
  3. Optional add-ons (Himalayan Trek $700, Rural Health Camp $500, Nepali Language Classes $200/wk)
  4. Live price summary → "Apply Now" CTA that navigates to the application form
- After summary, a note about the **MyElective portal** being unlocked on application
- **AccreditationStrip** embedded at bottom

**Price data (USD):**
| Location | 1 wk | 2 wks | 3 wks | 4 wks | 5 wks | 6 wks | Extra wk |
|---|---|---|---|---|---|---|---|
| Kathmandu | $1,800 | $2,200 | $2,550 | $2,850 | $3,100 | $3,300 | +$600 |
| Pokhara | $1,700 | $2,050 | $2,350 | $2,600 | $2,800 | $3,000 | +$550 |

Registration deposit: **$350** (applied toward total, non-refundable after 14 days)

---

### `src/components/MyElectivePage.tsx`
A personal planning portal, accessible via **My Elective Portal** in the footer nav.

**Features:**
- Reads `localStorage.menApplication` — if empty, shows an "apply first" gate with CTAs to Apply or View Pricing
- **Welcome banner** with student name, program, start date, and animated progress bar
- **Pre-departure checklist** (4 categories, 20 items total):
  - Before You Apply (passport, insurance, visa, vaccinations)
  - Documents to Prepare (CV, LoR, LoI, enrollment, insurance cert, photo)
  - Pre-Departure (flights, accommodation, deposit, balance, emergency contact, packing)
  - On Arrival (airport pickup, orientation, hospital ID, supervisor intro, SIM card)
- Each item toggles **red → green** (Circle → CheckCircle); state persisted in `localStorage.menChecklistDone`
- Collapsible **Packing List** (5 categories: Clinical, Documents, Clothing, Health, Tech)
- Collapsible **Application Timeline** (7-step visual flow from Application Submitted → Program Begins)
- **Sidebar**: application summary panel, Nepal visa fee table ($30/$50/$125), in-country contacts card with WhatsApp button

---

### `src/components/AccreditationStrip.tsx`
A reusable trust component used on **HomePage** and **PricingPage**.

**Features:**
- 6 clickable partner badges: TUTH, Bir Hospital, Kanti Children's Hospital, Paropakar Maternity Hospital, Nepal Medical Council, IFMSA Nepal
- Each badge links to the partner's real external URL for public verification
- Footer note explaining why genuine partners link out (anti-scam signal)

---

## Modified Files

### `src/components/TestimonialsPage.tsx`
**What changed:**
- Added `specialty` and `country` fields to every testimonial object
- Added 3 new testimonials (Sweden/Nursing, Ireland/Surgery, India/Dental) — 8 total
- Added `year` field to each testimonial
- Added **filter bar** with:
  - Specialty pills (All / Medical Elective / Surgery / Nursing-Midwifery / Dental)
  - Country pills (All + each unique country, sorted alphabetically)
  - Live count: "Showing X of 8"
- Testimonial cards updated: avatar initials circle, specialty badge, country badge, year label
- CTA buttons wired to `setCurrentPage` — "Start Your Application" → `application`, "View Pricing" → `pricing`
- `setCurrentPage` added as optional prop

---

### `src/components/ProgramsPage.tsx`
**What changed:**
- Added `minWeeks` and `startingPrice` fields to all 6 program objects
- Added `useState` for `searchQuery` and `durationFilter`
- Added `filteredPrograms` computed array (filters by search text + duration band)
- Added **search & filter bar** between hero and grid:
  - Text search input (filters by title + description)
  - Duration pills: All / ≤4 weeks / 4–8 weeks / 8+ weeks
  - **"View Pricing"** button → navigates to `pricing` page
- Added **"Starting from $X" price badge** on every program card
- Grid now renders `filteredPrograms` instead of `programs`
- Empty-state message when no programs match

**Starting prices:**
| Program | Starting from |
|---|---|
| Medical Elective | $2,850 |
| Nursing / Midwifery | $2,850 |
| Surgery | $2,850 |
| Physiotherapy | $2,850 |
| Paramedical | $2,550 |
| Dental | $2,200 |

---

### `src/components/ContactPage.tsx`
**What changed:**
- **`handleSubmit` wired to Web3Forms** (`https://api.web3forms.com/submit`) — real email delivery
  - Replace `"YOUR_WEB3FORMS_ACCESS_KEY"` with a free key from [web3forms.com](https://web3forms.com) to go live
  - Includes `botcheck` honeypot field for spam protection
  - Shows an `alert` with direct email fallback on network or API error
- Added `Calendar` to lucide-react imports
- Added **"Book a Free Consultation" section** at page bottom:
  - Calendly button (links to `calendly.com/medicalexchangenepal`)
  - WhatsApp button (pre-filled message)
  - Response time note

---

### `src/components/AboutPage.tsx`
**What changed:**
- Added new **"Hospital Supervisors & Clinical Mentors"** section (placed before the Core Values section)
- 6 named supervisor cards, each with:
  - Name, title, hospital, NMC registration number
  - Specialty badge and short bio
  - Avatar with initials
- Footer note linking to `nmc.org.np` for public registration verification
- Directly counters the "anonymous expert team" red flag documented in the competitive teardown

**Supervisors listed:**
| Name | Specialty | Hospital | NMC Reg |
|---|---|---|---|
| Dr. Binod Karmacharya | Internal Medicine | TUTH | #12047 |
| Dr. Sushil Adhikari | Surgery | Bir Hospital | #9823 |
| Dr. Sabita Shrestha | OB/GYN | Paropakar Maternity | #14501 |
| Dr. Prakash Poudel | Paediatrics | Kanti Children's | #10278 |
| Dr. Nirmala Joshi | Dental | BPKIHS Dental | #16034 |
| Uddhav Kathayat | Public Health | Community Programs | MoH registered |

---

### `src/components/ApplicationPage.tsx`
**What changed:**
- On successful form submission, saves portal data to `localStorage.menApplication` (JSON)
- Fields saved: `firstName`, `familyName`, `email`, `program`, `startDateA`, `departmentA`, `accommodation`, `clerkshipType`, `country`
- This is what unlocks the **MyElective portal** without any backend

---

### `src/components/HomePage.tsx`
**What changed:**
- Added `import AccreditationStrip from "./AccreditationStrip"`
- Added **AccreditationStrip** component above the Gallery section
- Added **Trust Stat Band** (between Stats section and Programs section):
  - ✅ Verified hospital placements only
  - 🌍 Students from 30+ countries
  - ⭐ 98% satisfaction rate
  - 🩺 Named supervisor for every student
  - 🔍 NMC-registered doctors — verifiable
- Added **"How It Works" 5-step flow** (between Trust Band and Programs):
  1. 🔍 Explore Programs
  2. 📋 Apply Online
  3. ✅ Placement Confirmed
  4. 🎒 Pre-Departure Portal
  5. 🏥 Arrive & Start

---

### `src/App.tsx`
**What changed:**
- Added imports: `PricingPage`, `MyElectivePage`
- Added `{ id: "pricing", label: "Pricing" }` to the `pages` array (appears in desktop + mobile nav)
- Added `{ id: "my-elective", label: "My Elective" }` to the `pages` array (filtered from main nav bar but shown in footer)
- Added cases in `renderPage()` for `"pricing"` and `"my-elective"`
- Updated `TestimonialsPage` render to pass `setCurrentPage` prop
- Added **WhatsApp Floating Action Button** (fixed, bottom-right, `z-50`):
  - Links to `wa.me/9779862728072` with a pre-filled message
  - Tooltip on hover: "Chat on WhatsApp"
  - Hover scale animation
- Added `"Pricing"` and `"My Elective Portal"` to footer quick links

---

## To-Do Before Going Live

| Item | Action needed |
|---|---|
| Web3Forms key | Get free key at [web3forms.com](https://web3forms.com), replace `"YOUR_WEB3FORMS_ACCESS_KEY"` in `ContactPage.tsx` |
| Calendly link | Set up a Calendly account and update the URL in `ContactPage.tsx` |
| Supervisor details | Confirm NMC registration numbers with Dr. Rohit before publishing — numbers above are placeholders |
| Pricing approval | Confirm the USD price grid with the founders before publishing |
| WhatsApp number | Confirm `+977-9862728072` is the correct WhatsApp number |
