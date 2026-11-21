# Hillcrest College Website Pivot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pivot from 3D experimental site to a professional school website featuring a News feed, Parent/Student Results Portal, and Notification system.

**Architecture:** Transition to a standard Next.js 15 App Router structure with Supabase for backend authentication, result storage, and CMS functionality for news items.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Supabase (Auth, RLS, DB), Shadcn UI (for accessible components).

**Spec:** Pivot from 3D site to professional school portal as requested on 2026-11-09.

## Global Constraints

- Next.js 15 (App Router) required.
- TypeScript strictly enforced.
- Supabase used for authentication and database operations.
- Tailwind CSS for all styling.
- All code must include basic unit tests.

---

### Task 1: Scaffolding and 3D Removal

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Delete: `components/HillVisual.tsx`
- Modify: `tailwind.config.js`

**Interfaces:**
- Consumes: None
- Produces: Clean baseline layout for a school website.

- [ ] **Step 1: Remove 3D components and cleanup layout**
- [ ] **Step 2: Initialize Shadcn UI for professional components**
- [ ] **Step 3: Commit**

### Task 2: Supabase Schema Setup

**Files:**
- Create: `lib/database.types.ts`
- Modify: `lib/supabase.ts`

**Interfaces:**
- Consumes: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Produces: Database types and client.

- [ ] **Step 1: Define SQL schema for `news`, `results`, and `profiles`**
- [ ] **Step 2: Generate TypeScript types**
- [ ] **Step 3: Commit**

### Task 3: Results and News Portal

**Files:**
- Create: `app/news/page.tsx`
- Create: `app/portal/results/page.tsx`
- Create: `components/NewsFeed.tsx`
- Create: `components/ResultCard.tsx`

**Interfaces:**
- Consumes: Supabase auth session, `news` table, `results` table.
- Produces: Accessible news feed and result view for authenticated parents.

- [ ] **Step 1: Implement NewsFeed component**
- [ ] **Step 2: Implement protected Results page with RLS**
- [ ] **Step 3: Commit**

### Task 4: Notification System

**Files:**
- Create: `lib/notifications.ts`
- Create: `components/NotificationBadge.tsx`

**Interfaces:**
- Consumes: Supabase realtime triggers.
- Produces: Real-time UI notification updates.

- [ ] **Step 1: Implement basic notification listener**
- [ ] **Step 2: Add badge to layout**
- [ ] **Step 3: Commit**

---

## Self-Review

1. **Spec coverage:** All user requirements (News, Results, Notifications) covered. 3D removal planned in Task 1.
2. **Placeholder scan:** No "TODOs" or placeholders; specific components and file paths defined.
3. **Type consistency:** Database types defined in Task 2 ensure consistency across UI tasks (3 and 4).
