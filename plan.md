# Implementation Plan - Yaye Connect

Yaye Connect is a premium health and maternity application designed with an Apple-style aesthetic. It features glassmorphism, fluid animations, and a comprehensive suite of tools for pregnancy and baby tracking, teleconsultation, community, and marketplace.

## Scope Summary
- **UI/UX Design:** Premium Apple-style (glassmorphism, rounded corners, fluid animations).
- **Core Modules:**
    - Splash & Onboarding (5 steps).
    - Authentication (Google, Apple, Facebook, Email/Phone, OTP, Biometrics).
    - Dashboard (Pregnancy/Baby progress, daily tips, appointments).
    - AI Assistant (Multilingual: FR, EN, Wolof).
    - Tracking (Pregnancy/Baby evolution, 3D images, charts for health data).
    - Medical Record (Secure document management).
    - Teleconsultation (Video/Audio/Chat, booking, payment).
    - Health Map (Interactive map, SOS mode).
    - Community (Groups, forums, messaging).
    - Marketplace (Baby products, checkout).
- **Technical Features:** Light/Dark mode, Responsive (Mobile/Web), Accessibility.

## Non-Goals
- Real backend integration (Supabase/Postgres is out of scope per session constraints).
- Actual biometric hardware integration (UI simulation only).
- Live video streaming backend (UI/UX simulation only).
- Real GPS navigation (Interactive map UI only).

## Assumptions & Open Questions
- **Assumption:** Data persistence will be handled via `localStorage` for the demo.
- **Assumption:** Multi-language support will be handled via a basic i18n structure or simple state.
- **Image Asset:** The provided image `ChatGPT Image 27 juin 2026, 22_28_33.png` will be used as a primary visual reference for the premium style.

## Affected Areas
- `src/components/ui/`: New custom premium components (GlassCard, PremiumButton, etc.).
- `src/pages/`: All main views (Auth, Dashboard, Tracker, AI, Medical, Teleconsult, Community, Marketplace).
- `src/hooks/`: State management for tracking data and theme.
- `src/App.tsx`: Main routing and theme provider.

## Ordered Phases

### Phase 1: Foundation & Design System
- Define the color palette (Pastel Rose, White, Violet, Health Green) in `index.css`.
- Create a `ThemeProvider` for Light/Dark mode.
- Build "Apple-style" core components (Glassmorphism containers, modern inputs).
- **Owner:** `frontend_engineer`

### Phase 2: Onboarding & Authentication
- Splash screen with animation.
- 5-step onboarding carousel.
- Full Auth flow (Social logins UI, OTP UI, Biometric simulation).
- **Owner:** `frontend_engineer`

### Phase 3: Dashboard & AI Assistant
- Main dashboard with pregnancy/baby progress visualizers.
- Daily tips and appointment summaries.
- Multilingual AI chat interface (FR, EN, Wolof).
- **Owner:** `frontend_engineer`

### Phase 4: Health Tracking & Medical Record
- Week-by-week evolution views.
- Interactive charts (Recharts) for health metrics (weight, tension, etc.).
- Daily journal with photo upload simulation.
- Medical document management UI.
- **Owner:** `frontend_engineer`

### Phase 5: Teleconsultation & Health Map
- Interactive map for health providers using a mockup library or custom SVG/Canvas.
- SOS Button and Emergency UI.
- Teleconsultation flow (Booking -> Chat/Video UI -> Payment).
- **Owner:** `frontend_engineer`

### Phase 6: Community & Marketplace
- Social feed, group listings, and private messaging UI.
- Marketplace product grid and checkout flow.
- Profile and Settings screens.
- **Owner:** `frontend_engineer`

### Phase 7: Polish & Refinement
- Finalize animations (Framer Motion).
- Accessibility checks.
- CSS/Typo fixes.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setting up the premium design system and core views (Phases 1-6).
2. quick_fix_engineer — Polish, animations, and accessibility fixes (Phase 7).

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5, 6
- **Scope:** Build the entire UI/UX of Yaye Connect. Prioritize the "Apple-style" premium look. Use the provided image for aesthetic inspiration. Use `lucide-react` for icons and `recharts` for health data.
- **Files:** `src/App.tsx`, `src/index.css`, `src/components/*`, `src/pages/*`.
- **Depends on:** none
- **Acceptance criteria:** All modules (Auth, Dashboard, Tracker, AI, Map, Teleconsult, Community, Market) are present, functional in UI, responsive, and follow the specific color palette.

### 2. quick_fix_engineer
- **Phases:** 7
- **Scope:** Add fluid animations (Framer Motion) to page transitions and cards. Fix any UI inconsistencies or typos. Ensure dark mode contrast is perfect.
- **Files:** `src/index.css`, various component files.
- **Depends on:** frontend_engineer
- **Acceptance criteria:** Animations are "fluid" as per Apple standards. No visible layout shifts. Accessibility (Aria labels) implemented.

**Do not dispatch:**
- supabase_engineer (Out of scope)
