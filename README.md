# Md Sumon — Portfolio

Personal portfolio website built with React, Vite, and Framer Motion.

🔗 **Live Preview:** [https://portfolio-sumon.vercel.app](https://portfolio-sumon.vercel.app) <!-- TODO: confirm/replace with the actual deployed URL -->

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Sass](https://sass-lang.com/) — styling
- [EmailJS](https://www.emailjs.com/) — contact form email delivery

## Features

- Animated hero, parallax, services, portfolio, about, and contact sections
- Responsive layout with a mobile navigation sidebar
- Contact form wired to EmailJS
- Custom animated cursor

## Getting Started

### Prerequisites

- Node.js 18+
- An [EmailJS](https://www.emailjs.com/) account (for the contact form)

### Installation

```bash
git clone https://github.com/Sumonahmed69/Portfolio.git
cd Portfolio
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in your own EmailJS credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

## Deployment

This project is configured for [Vercel](https://vercel.com/) (see `vercel.json`).

## License

Personal project — all rights reserved.
