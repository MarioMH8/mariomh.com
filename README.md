<h1 align="center">
  mariomh.com
</h1>

<p align="center">
  The personal site of MarioMH: portfolio, services and blog.
</p>

<p align="center">
  <a href="https://mariomh.com"><img src="https://img.shields.io/badge/live-mariomh.com-blue?style=flat-square" alt="Live site"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-PolyForm%20Noncommercial%201.0.0-lightgrey?style=flat-square" alt="License"></a>
  <a href="CONTENT-LICENSE.md"><img src="https://img.shields.io/badge/content-CC%20BY--NC--ND%204.0-lightgrey?style=flat-square" alt="Content license"></a>
</p>

![mariomh.com](public/og.webp)

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Running locally](#running-locally)
- [Commands](#commands)
- [Content](#content)
- [Package authentication](#package-authentication)
- [Deploying the site](#deploying-the-site)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

This is the source of <https://mariomh.com>, a Spanish-language portfolio built with Astro. It presents the author, the services offered, the projects and the blog, and it consumes the design system and the CV from the `@mariomh8` packages.

The repository is public so the code and the articles can be read and audited. The `@mariomh8/*` packages stay private in GitHub Packages.

## Features

- 🏠 Hero, about, services and project portfolio.
- 🗂️ Project cards driven by a content collection.
- 📝 Blog with a landing page, article pages and recent posts on the home page.
- 📱 Responsive layout with light and dark themes.
- ♿ Accessible navigation, focus states and semantic headings.
- 🧩 Built with the `@mariomh8` design system instead of ad-hoc components.

## Tech stack

- **Runtime and package manager** - [Bun](https://bun.sh) 1.4.4
- **Framework** - [Astro](https://astro.build) 7
- **Styling** - [Tailwind CSS](https://tailwindcss.com) 4 and the `@mariomh8/tailwind` theme
- **Carousel** - [Embla Carousel](https://www.embla-carousel.com)
- **Design system** - `@mariomh8/*` from [brand.mariomh.com](https://brand.mariomh.com)
- **CV data** - `@mariomh8/resume` from [resume.mariomh.com](https://resume.mariomh.com)
- **Language** - [TypeScript](https://www.typescriptlang.org)
- **Deployment** - [Cloudflare Pages](https://pages.cloudflare.com)

## Requirements

- Bun 1.4.4
- Git
- A GitHub personal access token with `read:packages` to install the private packages

## Running locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/MarioMH8/mariomh.com.git
cd mariomh.com
bun install
```

Start the development server:

```bash
bun run dev
```

## Commands

| Task | Command |
| --- | --- |
| Run the development server | `bun run dev` |
| Build the site | `bun run build` |
| Preview the build | `bun run start` |
| Type-check | `bun run typecheck` |
| Type-check the Astro sources | `bun run typecheck:astro` |
| Lint without writing changes | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |

## Content

The site content lives in two Astro content collections, in Spanish:

- `src/content/post/` for the blog. Each post declares `title`, `tags`, `image`, `imageAlt` and an optional `resume`.
- `src/content/project/` for the portfolio. Each project declares `title`, `category` (`portfolio`, `app` or `lib`), `href`, `image`, `imageAlt` and `resume`.

Images live in `src/assets/posts/` and `src/assets/projects/`, and Astro optimizes them at build time. The collections are defined in `src/content.config.ts`.

The articles and the images are licensed under CC BY-NC-ND 4.0. Read [CONTENT-LICENSE.md](CONTENT-LICENSE.md) before reusing them.

## Package authentication

The site installs the `@mariomh8/*` packages from GitHub Packages. The repository `.npmrc` only declares the scope; it never contains a token.

Add the scope and your token to your user-level npm configuration:

```ini
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` with a classic GitHub personal access token that has the `read:packages` permission. In CI the check workflow uses the `PACKAGES_TOKEN` Actions secret, and Renovate uses `RENOVATE_PACKAGES_TOKEN`.

## Deploying the site

The site deploys automatically after the `Continuous integration` workflow succeeds on `main`. You can also run the [Deploy](https://github.com/MarioMH8/mariomh.com/actions/workflows/deploy.yml) workflow manually with `workflow_dispatch`. The build is published to Cloudflare Pages in the `mariomh` project.

## Project structure

```text
src/
  assets/          Post and project images
  content/         Blog posts and projects (Spanish)
  features/        Hero, about, services, portfolio, blog and navigation
  icons/           Local brand icons
  layouts/         Base layout and global CSS
  pages/           Home, blog landing, article pages and 404
public/            Static files and social images
docs/              Architecture, conventions and decision records
.github/           Workflows, issue templates and CODEOWNERS
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or a pull request. The project follows an issue-first workflow, Conventional Commits and GitFlow with `develop` as the integration branch and `main` for stable releases.

- [AGENTS.md](AGENTS.md): entry point for the repository guides.
- [docs/agents/](docs/agents/): architecture, conventions, development, releases, pull requests and branches.

## Security

Do not report vulnerabilities in a public issue. Follow [SECURITY.md](SECURITY.md) and use GitHub's private vulnerability reporting.

## License

The source code is licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE). You may read, use, modify and share it for noncommercial purposes, with the required notice.

The articles, project write-ups and images are licensed under [CC BY-NC-ND 4.0](CONTENT-LICENSE.md): share them with attribution, without modifications and without commercial use. The personal data, the CV and the brand identity are **all rights reserved**.
