# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed
- Restructured entire project to follow Next.js 14 App Router best practices.
- Created `src/` directory for cleaner root structure.
- Implemented Route Groups `(auth)` for authentication pages.
- Organized components by feature (`chat`, `layout`, `ui`) in `_components` private folder.
- Configured absolute imports with `@/*` aliases.
- Added barrel exports for cleaner import statements.
- Centralized type definitions in `lib/types`.

### Added
- `docs/` directory for project documentation.
- `.env.example` for environment variable template.
- `lib/types`, `lib/hooks`, `lib/constants`, `lib/utils` folders for better separation of concerns.

## [1.0.0] - Initial Release
- Complete UI for Pragya.AI.
- AI-powered chat system using OpenRouter.
- Saved chats system with Supabase.
- Light/Dark mode support.
