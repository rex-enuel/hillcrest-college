# Reverse Engineered Analysis: Nigerian Top School Websites
## Source: REA Skill - reverse-engineer-anything

**Analysis Date:** Nov 9, 2026  
**Author:** Agent working on TikTok/YouTube content automation pipeline

---

## 1. GRANGE SCHOOL (grangeschool.com)

### Technology Stack
- **Platform:** WordPress 7.1.4
- **Theme:** XStore (parent) + XStore Child Theme
- **Page Builder:** Elementor 4.2.4
- **CSS Architecture:** Custom CSS + Elementor widgets

### Core Libraries & Dependencies
```
Elementor Frontend v4.2.4
Elementor Pro v3.35.0
XStore Theme v1.0
ElementsKit Lite v3.7.9
ElementsKit Pro v4.4.5
Premium Addons for Elementor v4.11.69
Contact Form 7 v6.1.4
Responsive Menu Pro v4.0.0
Events Calendar Pro v7.7.14
```

### Navigation Structure
**Primary Header Menu:**
- Parent Portal → grange.educare.school/login
- Student Portal → grangeng.libraryreserve.com
- Staff Portal → grange.educare.school/login
- About Us (dropdown with 5 sub-items)
- Admissions (dropdown with 8 sub-items)
- EYFS (dropdown with 2 sub-items: Nursery, Reception)
- Primary (dropdown with nested Academics)
- Secondary (dropdown with nested Academics)
- Careers (dropdown with 5 sub-items)

**Mobile Menu:** ElementsKit Vertical Menu with dropdown-on-icon behavior

### Design Patterns
- **Colors:** Deep Navy (#000C54), Teal Surface (#C0D8C4), Light Blue (#C8DFF3)
- **Fonts:** 
  - Primary: Poppins, Quicksand, Roboto
  - Icons: Dashicons, Material Icons, Font Awesome 5.13.0
- **Layout:** Hero section with animated gradient overlay
- **Animations:** GSAP 3.12.5 for wobble animation on search form
- **Hero:** 60vh height with animated gradient background (45deg linear gradient sweep)

### Contact Information (from Footer)
- Phone 1: +234 909 884 6332
- Phone 2: +234 708 950 0515 (Pry)
- Phone 3: +234 707 688 5663 (Sec)
- Email: info@grangeschool.com
- Recruitment: recruitment@grangeschool.com
- Address: 2 Harold Shodipo Crescent, GRA Ikeja, Lagos

---

## 2. CORONA SCHOOLS (coronaschool.org) [RESEARCH SUMMARY]

### Technology Stack
- **Platform:** WordPress (assumed)
- **Curriculum:** Hybrid Nigerian/British/International (IPC-aligned)

### Key Features
- Multiple campus locations: Gbagada, Apapa, Victoria Island, Lekki, Agbara
- Co-educational day and boarding
- Integrated curriculum blending multiple systems

### Design Patterns
- Student-focused imagery
- Blue/white color scheme
- Quick links section above fold
- Campus map integration

---

## 3. GREENSPRINGS SCHOOL (greensprings.edu) [RESEARCH SUMMARY]

### Technology Stack
- **Platform:** WordPress (assumed)
- **Curriculum:** British, IPC, Cambridge IGCSE, IB Diploma

### Key Features
- 3 Campuses: Anthony, Lekki, Ikoyi
- 2,500+ pupils
- Montessori to post-secondary

### Design Patterns
- Green and white branding
- Campus tour videos
- Student achievement showcase
- Parent portal integration

---

## 4. CHRISLAND INTERNATIONAL SCHOOLS (chrislandschools.com) [RESEARCH SUMMARY]

### Technology Stack
- **Established:** 1966
- **Curriculum:** British/Nigerian standards

### Key Features
- Early Years to Secondary
- Consistent color branding (red/white)
- Timeline scroll feature

---

## Key Findings: "REA Skill" Reference Implementation

### Common Patterns Across All Sites:

| Component | Best Practice Pattern |
|-----------|----------------------|
| **Header Navigation** | Logo left-aligned, horizontal nav right, sticky on scroll |
| **Mobile Menu** | Hamburger icon → slide-in panel with vertical navigation |
| **Hero Section** | Large background image or gradient overlay, clear headline, 1-2 CTA buttons |
| **Quick Links** | Icon + text cards above fold, 3-6 items |
| **Curriculum Section** | Grade-level or subject cards with icons |
| **Testimonial/Achievement** | Carousel/slider showing awards/results |
| **Contact Section** | Icon boxes (phone, email, address) side-by-side |
| **Social Icons** | Footer row: Facebook, Instagram, Twitter, YouTube |

### Technical Recommendations for Hillcrest College:

1. **Navigation Structure**
   - Primary: Home, About, Admissions, Academics, Resources, Contact
   - Dropdown levels: 2-3 maximum for usability
   - Include login shortcuts: Parent Portal, Student Portal

2. **Color System**
   - Primary: Deep blue/navy for trust (#000C54 Grange example)
   - Secondary: Teal for modern feel (#A8C9C8)
   - Accent: Coral for calls-to-action (#F45B5B)
   - Use CSS variables for easy theming

3. **Fonts**
   - Display: Lobster or similar for hero headlines
   - Heading: Cormorant Garamond or Poppins for personality
   - Body: Outfit or Roboto for readability

4. **Icon System**
   - Use Feather Icons or Font Awesome for consistency
   - Maximum 24px for body, 48px for hero

5. **Animation**
   - Subtle hover transitions (200ms ease)
   - Fade-in sections on scroll
   - Avoid excessive motion - keep professional

6. **Responsive Breakpoints**
   - Mobile: < 768px
   - Tablet: 768-1024px
   - Desktop: > 1024px

7. **Performance Optimizations**
   - Preload critical fonts (Google Fonts)
   - Lazy-load images below fold
   - Minimize CSS bundle size

8. **Accessibility**
   - Ensure color contrast ratios > 4.5:1
   - Add aria-labels to icon buttons
   - Maintain keyboard navigation

---

### Files Analyzed:
- `/rea-websites/grange.html` (892,493 bytes, 5022 lines)
- Search results from edusko.com, legit.ng, nigeriaprivateschools.com

### Missing Data (Network Restrictions):
- Could not fetch Corona, Greensprings, Chrisland live HTML due to bot protection
- JavaScript bundles remain unreverse-engineered (requires local file or browser capture)

### Next Steps:
1. Download remaining school websites when network access permits
2. Extract and analyze JavaScript bundles from WordPress sites
3. Create comparative dashboard of all 4+ school websites

---

## Summary Table

| School | Year Founded | Curriculum | Key Tools |
|--------|--------------|------------|-----------|
| Grange | 1958 | British National | Elementor, XStore Theme |
| Corona | 1955 | Hybrid (Nigerian/British/IPC) | WordPress unknown |
| Greensprings | 1985 | British, IPC, IGCSE, IB | WordPress unknown |
| Chrisland | 1966 | British/Nigerian | WordPress unknown |