# Hillcrest College Digital Transformation Project

**Factory Flow Pattern Applied:** Perfume Store Foundation → School Application

## Project Overview

A digital transformation project for Hillcrest College Calabar featuring:
- **Virtual Hill Tour** - 3DWebGL experience showcasing the iconic hilltop campus
- **Parent Portal** - Multi-role communication hub (parent/teacher/admin)
- **Heritage Storytelling** - Interactive timeline of 40+ years history
- **Daily Schedule** - Dynamic calendar integrating religious/cultural activities
- **STEM Partnership Showcase** - Imperial College London collaboration

## Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D | React Three Fiber + Drei |
| Animations | Framer Motion |
| Auth | Supabase |
| Deployment | Vercel |

## Key Modules

### 1. Virtual Hill Tour (`components/HillVisual.tsx`)
- Interactive 3D terrain modeling the hilltop campus
- Animated sun positioning (symbolizing rising new day)
- Building clusters representing classroom blocks
- Stars field background (heritage gold color)

### 2. Heritage Timeline (`components/Timeline.tsx`)
- 4 key moments: 1983 origin → 1998 secondary → 2013 college → 2024 STEM
- Vertical timeline with event dots and content cards
- Scroll-triggered animations

### 3. Daily Schedule (`components/DailySchedule.tsx`)
- Monday-Friday rhythm with assembly/tutor periods
- Table layout optimized for mobile viewing
- 9:50 AM start time emphasis

### 4. Parent Portal Preview (`components/ParentPortalPreview.tsx`)
- 4 feature blocks: Results, Schedule, Attendance, Messaging
- WhatsApp integration badge
- Secure messaging interface concept

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Run development server
npm run dev

# 4. Build for production
npm run build
npm start
```

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Factory Flow Mapping

| Perfume Store Pattern | Hillcrest Application |
|----------------------|----------------------|
| Product Display | Academic Showcase |
| Customer Portal | Parent Communication |
| Inventory System | Event/Program Management |
| Virtual Try-On | 3D Campus Tour |
| Checkout | WhatsApp Integration |

## Project Status

- [x] Architecture defined
- [x] Core components scaffolded
- [ ] 3D Hill Visual completed
- [ ] Supabase integration
- [ ] WhatsApp linking
- [ ] CMS for dynamic content

## Next Steps

1. Complete 3D hill visualization with actual campus photos
2. Implement parent/teacher authentication
3. Add blog module for heritage storytelling
4. Integrate WhatsApp Business API for notifications