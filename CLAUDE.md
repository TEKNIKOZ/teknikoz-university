# Teknikoz Smart Learning - Claude Memory

## Project Overview
Teknikoz Smart Learning is a web application built for an educational platform using modern web technologies.

Every UI pages or components should be desktop and mobile responsive.

## Tech Stack

### Framework & Runtime
- **Nuxt 3** (v3.17.3) - Vue.js meta-framework for full-stack web applications
- **Vue 3** (v3.5.13) - Progressive JavaScript framework
- **Node.js** with ES modules (`"type": "module"`)

### Package Management
- **pnpm** (v10.10.0) - Fast, disk space efficient package manager

### Styling & UI
- Only use TailwindCSS instead of Vaniall css except incase of animations
- **Tailwind CSS** - Utility-first CSS framework via `@nuxtjs/tailwindcss`
- **Color Mode** - Dark/light theme support via `@nuxtjs/color-mode`
- **Nuxt Icon** - Icon component with Iconify integration
- **Nuxt Image** - Optimized image component

### State Management
- **Pinia** - Vue.js state management library
- Store directory: `./stores`

### SEO & Performance
- **Nuxt SEO** - SEO optimization modules
- **Nuxt Robots** - robots.txt generation
- **Nuxt Sitemap** - XML sitemap generation
- **nuxt-og-image** - Open Graph image generation

### Testing
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing
- **Vue Test Utils** - Vue component testing utilities
- **Happy DOM** - DOM implementation for testing

### Development
- **TypeScript** - Static type checking
- **Nuxt DevTools** - Development debugging tools

## Project Structure
- **Source Directory**: `app/` (configured via `srcDir`)
- **Components**: `app/components/`
- **Pages**: `app/pages/`
- **Layouts**: `app/layouts/`
- **Assets**: `app/assets/`
- **Stores**: `app/stores/`
- **Tests**: `tests/`

## Build & Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm test` - Run unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage

## Configuration
- **Base URL**: `http://localhost:3000` (configurable via `NUXT_PUBLIC_BASE_URL`)
- **API URL**: `http://localhost:8080` (configurable via `NUXT_PUBLIC_BASE_URL_API`)
- **Color Mode**: System preference with light fallback
- **Brand Color**: `#15A0E7`
- **Fonts**: Inter (sans-serif), Poppins (headings)

## Notes
- Uses custom Tailwind configuration with brand colors and fonts and always mobile responsive
- Supports dark/light mode themes
- SEO optimized with meta tags and structured data
- Image optimization enabled through Nuxt Image
- TypeScript paths configured for `@/*` and `~/*` aliases pointing to `app/`
- Dont do this as we have already added it in the env var.  I notice the URLs are missing /api/ prefix. Let me fix that and add the  agreement parameter.

## Git Commit Guidelines

### Staging and Commit Rules
- **Stage by logical groups**: Group related files together for commits
- **Commit frequently**: Make small, focused commits rather than large batch commits
- **One feature per commit**: Each commit should represent a single logical change

### Conventional Commit Format
```
<type>(<scope>): <description>
```

- Use imperative mood ("add" not "added")
- Keep under 72 characters
- Use lowercase scope names such as: `auth`, `ui`, `components`, `pages`, `stores`, `repository`, `api`, `seo`, `config`, `deps`, `tests`

| Type     | Description              | Examples                                     |
|----------|--------------------------|----------------------------------------------|
| `feat`   | New feature              | `feat(auth): add Google OAuth`               |
| `fix`    | Bug fix                  | `fix(ui): resolve button hover issue`        |
| `docs`   | Documentation            | `docs(api): update auth endpoints`           |
| `style`  | Code style               | `style: format with prettier`                |
| `refactor` | Code refactoring       | `refactor(repository): optimize course repo` |
| `perf`   | Performance              | `perf(pages): lazy-load hero images`         |
| `test`   | Tests                    | `test(components): add BrochureModal tests`  |
| `chore`  | Maintenance              | `chore(deps): update dependencies`           |

#### Examples (Nuxt 3 / Vue project)
```bash
feat(auth): add Google OAuth integration
fix(ui): resolve mobile header z-index issue
docs(api): document course repository endpoints
refactor(stores): simplify auth store actions
perf(pages): defer loading of homepage carousels
test(components): add FindYourPathQuiz unit tests
chore(deps): update Nuxt to v3.17.3
```

#### Frontend Staging & Commit Examples
```bash
# Components
git add app/components/
git commit -m "feat(components): add email verification component"

# Pages
git add app/pages/login.vue app/pages/signup.vue
git commit -m "refactor(pages): simplify auth pages layout"

# Stores
git add app/stores/auth.stores.ts
git commit -m "feat(stores): add user profile state management"

# Styling / Config
git add app/assets/css/ tailwind.config.js
git commit -m "style(assets): update brand colors and responsive design"
```

### Frontend Best Practices
- ✅ **Component grouping**: Related Vue components committed together
- ✅ **Page-level commits**: Commit page changes with their dependencies
- ✅ **Store isolation**: Pinia store changes as separate commits
- ✅ **Build verification**: Ensure `pnpm build` passes before committing
- ✅ **Type checking**: Run `pnpm typecheck` before committing
- ✅ **Mobile responsive**: Test on mobile before committing UI changes
- ❌ **Avoid mixing concerns**: Don't mix component logic with styling changes
- ❌ **Avoid generic messages**: Don't use "update files" or "fix stuff"

- NOTE:- Dont run the server, i will do it manually.
- **Function-based architecture** - NO classes allowed, use pure functions