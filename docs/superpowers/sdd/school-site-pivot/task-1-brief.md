# Task 1: Scaffolding and 3D Removal

**Goal:** Remove 3D experimental components and prepare the codebase for a professional school website.

**Files:**
- Delete: `components/HillVisual.tsx`
- Modify: `app/page.tsx` (remove reference to HillVisual, add static hero)
- Modify: `app/layout.tsx` (clean up layout)
- Modify: `tailwind.config.js` (remove 3D-specific configs if any)

**Instructions:**
1. Remove all references to `HillVisual` from `app/page.tsx` and delete `components/HillVisual.tsx`.
2. Replace with a static hero section suitable for a school website.
3. Clean up `tailwind.config.js` to ensure no 3D-specific plugins (like Three.js-related styles) remain.
4. Ensure no broken imports exist.
