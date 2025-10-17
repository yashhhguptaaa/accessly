# Accessly

A modern React application built with TypeScript and Tailwind CSS.

## Tech Stack

- **React 19.1.1** - Latest version of React
- **TypeScript 5.9.3** - Type safety and better developer experience
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Vite 7.1.7** - Fast build tool and development server
- **PostCSS** - CSS processing with autoprefixer

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   └── Welcome.tsx     # Example TypeScript component
├── assets/             # Static assets
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind directives
```

## Features

- ⚡ **Vite** - Lightning fast development and build
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔷 **TypeScript** - Type safety and IntelliSense
- 📦 **Modern React** - Latest React features and hooks
- 🛠️ **ESLint** - Code linting and formatting
- 🎯 **Hot Module Replacement** - Instant updates during development

## Development

The project uses modern React patterns with TypeScript for type safety. Tailwind CSS provides utility classes for rapid UI development.

### Creating Components

Create new components in the `src/components/` directory:

```tsx
import React from "react";

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default MyComponent;
```

### Styling

Use Tailwind CSS utility classes for styling. The configuration is set up in `tailwind.config.js` and PostCSS processes the styles.

## Build and Deployment

The project builds to static files that can be deployed to any static hosting service:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

This project is private and proprietary.
