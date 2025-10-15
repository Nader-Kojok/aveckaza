# Kaza Sénégal

Site web moderne et responsive pour Kaza, plateforme de services à domicile au Sénégal.

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: TailwindCSS v4 (avec plugin Vite)
- **Icons**: Lucide React
- **Fonts**: Figtree & Bricolage Grotesque (Google Fonts)
- **Utilities**: clsx + tailwind-merge

## Palette de Couleurs Kaza

Basée sur le logo Kaza:
- **Orange Principal**: `#FF6B35` (primary)
- **Cyan/Turquoise**: `#57E2E5` (secondary)
- **Jaune**: `#FFB627` (accent)
- **Bleu Foncé**: `#1A5F7A` (blue)
- **Crème**: `#FFF8F0`

## Features

- Fully responsive design
- Modern UI components
- Clean, accessible markup
- Optimized performance
- Type-safe with TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── FindHelp.tsx
│   ├── AppPromo.tsx
│   └── Testimonials.tsx
├── lib/             # Utility functions
│   └── utils.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Caractéristiques du Site

Site entièrement en **français** pour le marché sénégalais avec:
- **Section Hero** avec icônes de services
- **Cartes de fonctionnalités** avec effets hover
- **Témoignages** de clients sénégalais (Fatou, Moussa, Awa)
- **FAQ** avec accordéon interactif
- **Section Carrières** pour recruter des professionnels
- **Badges de confiance** (Orange, Wave, Sonatel, etc.)
- **Blog** avec articles localisés
- **Footer complet** avec liens et informations de contact Dakar
- Navigation mobile responsive

## Localisation Sénégal

- Quartiers de Dakar: Almadies, Mermoz, etc.
- Partenaires locaux: Orange Money, Wave
- Témoignages avec noms sénégalais
- Contact: +221 33 XXX XX XX
- 🇸🇳 Dakar, Sénégal

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
