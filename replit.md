# AutoFlow - CI/CD Platform

## Overview

AutoFlow is a student-friendly CI/CD automation platform that simplifies GitHub Actions and deployment processes. The application enables users to connect their GitHub repositories and deploy projects effortlessly with automated pipelines. Built as a full-stack TypeScript application, it features a React frontend with Express.js backend and PostgreSQL database.

## System Architecture

The application follows a monorepo structure with clear separation of concerns:

- **Frontend**: React SPA with TypeScript, built using Vite
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state

### Directory Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared types and schemas
├── migrations/      # Database migrations
└── dist/            # Production build output
```

## Key Components

### Frontend Architecture
- **React Router**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack Query for API data fetching and caching
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Backend Architecture
- **API Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Authentication**: GitHub OAuth integration (mock implementation)
- **Session Management**: Express sessions with PostgreSQL store

### Database Schema
- **Users**: GitHub user information and authentication tokens
- **Projects**: Repository connections and deployment configurations
- **Deployments**: Build and deployment history with logs
- **Activities**: User activity feed and notifications

### External Dependencies
- **Neon Database**: Serverless PostgreSQL hosting
- **GitHub API**: Repository access and OAuth authentication
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family

## Data Flow

1. **Authentication**: Users authenticate via GitHub OAuth
2. **Repository Selection**: Users connect GitHub repositories through the onboarding flow
3. **Project Creation**: Selected repositories become projects with deployment configurations
4. **Deployment Pipeline**: Projects can be deployed with automatic build processes
5. **Activity Tracking**: All user actions and deployment events are logged

The frontend communicates with the backend through a REST API, with TanStack Query handling data fetching, caching, and synchronization.

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **react-hook-form**: Form state management
- **zod**: Schema validation

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **drizzle-kit**: Database migration tools

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: Hot reload with Vite dev server and Express API
- **Production**: Static frontend build served by Express with API routes
- **Database**: Neon PostgreSQL with connection pooling
- **Environment**: Node.js ESM modules with TypeScript compilation

Build process:
1. Frontend assets compiled with Vite to `dist/public`
2. Backend compiled with esbuild to `dist/index.js`
3. Single production server serves both static files and API

## Changelog
- June 28, 2025: Initial setup and complete implementation
  - Full database schema with PostgreSQL backend
  - Complete dashboard interface with project management
  - GitHub repository integration (mock implementation)
  - Real-time deployment simulation with status tracking
  - Activity feed and user statistics
  - Responsive UI with shadcn/ui components

## Recent Changes
- **Real GitHub Integration**: Implemented OAuth authentication and repository access
- **GitHub Actions Workflows**: Automatic creation and triggering of CI/CD pipelines
- **Webhook Integration**: Real-time deployment status updates from GitHub Actions
- **Production Ready**: Complete deployment guide with Vercel, Railway, and Supabase
- **Security**: Added authentication middleware, CORS, rate limiting, and session management

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Status
✓ Complete CI/CD platform ready for Final Year Project demonstration
✓ All core features implemented and functional
✓ Database populated with realistic sample data
✓ Ready for GitHub OAuth integration when API keys are provided