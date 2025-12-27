# Project Architecture

## Overview

Pragya.AI is built using **Next.js 14 App Router**, following a scalable, feature-first architecture.

### Directory Structure

```
src/
├── app/
│   ├── (auth)/                  # Authentication routes (Clerk)
│   ├── api/                     # Backend API routes
│   ├── _components/             # Private components folder (not routed)
│   │   ├── chat/                # Chat feature components
│   │   ├── layout/              # Layout components (Header, Navbar)
│   │   └── ui/                  # Reusable UI components
│   └── page.tsx                 # Main application page
├── lib/
│   ├── config/                  # Configuration (Supabase, etc.)
│   ├── types/                   # TypeScript definitions
│   ├── utils/                   # Helper functions
│   ├── hooks/                   # Custom React hooks
│   └── constants/               # Static constants
└── middleware.ts                # Auth middleware
```

### Key Design Patterns

- **Route Groups**: `(auth)` separates auth pages without affecting URLs.
- **Private Folders**: `_components` logic is co-located but excluded from routing.
- **Barrel Exports**: Simplified imports via `index.ts` files.
- **Absolute Imports**: Usage of `@/components`, `@/lib`, etc.
- **Separation of Concerns**: UI, logic, and data are distinct.

### Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules / Global CSS
- **Auth**: Clerk
- **Database**: Supabase
- **AI**: OpenRouter
