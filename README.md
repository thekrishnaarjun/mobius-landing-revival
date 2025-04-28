
# MobiusEngine.ai Landing Page

This repository contains a recreation of the MobiusEngine.ai landing page built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Project Structure

```
mobiusengine-landing-page/
│
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   └── MobileNav.tsx
│   ├── pages/
│   │   └── Index.tsx
│   └── styles/
│       └── main.css
├── index.html
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mobiusengine-landing-page
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

1. Create a production build:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Deployment

This project can be easily deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply connect your repository to any of these platforms and follow their deployment instructions.

## License

All rights reserved.

