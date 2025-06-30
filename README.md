# Next.js Admin Dashboard Template

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, production-ready admin dashboard template built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and ShadCN UI. Perfect foundation for building professional admin interfaces with enterprise-grade architecture.

## ✨ Features

- 🚀 **Next.js 15** with App Router & React 19
- 🎨 **ShadCN UI** - Beautiful, accessible components
- 🎭 **Tailwind CSS v4** - Modern utility-first styling
- 🌗 **Dark/Light theme** with system preference
- 📱 **Fully responsive** mobile-first design
- 🔐 **Auth layouts** ready for integration
- 🍞 **Toast notifications** with Sonner
- 🎯 **TypeScript** for type safety
- ⚡ **Turbopack** for fast development

## 🚀 Quick Start

### Installation

```bash
# Using create-next-app (Recommended)
npx create-next-app@latest --example "https://github.com/rashidmp/next-admin-template"

# Or clone repository
git clone https://github.com/rashidmp/next-admin-template.git [your-project-name]
cd [your-project-name] && npm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/          # Authentication routes
│   ├── (sidebar)/       # Dashboard routes
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── ui/              # ShadCN UI components
│   ├── sidebar/         # Navigation components
│   └── common/          # Shared components
├── config/              # App configuration
├── constants/           # Navigation & constants
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
└── types/               # TypeScript definitions
```

## 🧩 Adding New Pages

### Complete Workflow Example

**1. Create Page Component**

```bash
mkdir src/app/(sidebar)/products
touch src/app/(sidebar)/products/page.tsx
```

**2. Add Navigation Entry**

```typescript
// src/constants/navigation.ts
import { IconShoppingCart } from "@tabler/icons-react";

export const SIDEBAR_DATA: SidebarData = {
  navMain: [
    // ... existing items
    {
      title: "Products",
      url: "/products",
      icon: IconShoppingCart,
    },
  ],
};
```

**3. Page Template**

```typescript
// src/app/(sidebar)/products/page.tsx
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Products</h1>
              <p className="text-muted-foreground">Manage your inventory</p>
            </div>
            <Button>Add Product</Button>
          </div>
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}
```

### Component Types

| Type              | Location             | Purpose                      |
| ----------------- | -------------------- | ---------------------------- |
| **Pages**         | `src/app/(sidebar)/` | Dashboard pages with sidebar |
| **Auth Pages**    | `src/app/(auth)/`    | Login, signup, etc.          |
| **API Routes**    | `src/app/api/`       | Backend endpoints            |
| **UI Components** | `src/components/ui/` | Reusable UI elements         |
| **Custom Hooks**  | `src/hooks/`         | Shared logic                 |

## 🎨 Customization

### Theme Configuration

```typescript
// src/config/app.ts
export const APP_CONFIG = {
  name: "Your Admin",
  description: "Your description",
  // ... customize settings
};
```

### Adding ShadCN Components

```bash
npx shadcn@latest add button card dialog table
```

### Navigation Update Checklist

- ✅ Create page in `src/app/(sidebar)/`
- ✅ Add route to `SIDEBAR_DATA`
- ✅ Import icon from `@tabler/icons-react`
- ✅ Test navigation flow
- ✅ Add TypeScript types if needed

## 📦 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code linting
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect repository to Vercel
# Automatic deployments on push
```

### Other Platforms

- **Netlify** - Zero config deployment
- **AWS Amplify** - Full-stack hosting
- **Railway** - Simple deployments
- **Self-hosted** - Docker ready

## 🔌 Integrations

### Authentication

Choose your preferred authentication solution:

| Option          | Best For               | Installation                      |
| --------------- | ---------------------- | --------------------------------- |
| **Better Auth** | Modern, type-safe auth | `npm install better-auth`         |
| **NextAuth.js** | Popular, full-featured | `npm install next-auth`           |
| **Clerk**       | Easy setup, great UX   | `npm install @clerk/nextjs`       |
| **Auth0**       | Enterprise-grade       | `npm install @auth0/nextjs-auth0` |

### Database

Pick your database solution:

| Option       | Best For             | Installation                        |
| ------------ | -------------------- | ----------------------------------- |
| **Prisma**   | Type-safe ORM        | `npm install prisma @prisma/client` |
| **Drizzle**  | Lightweight, fast    | `npm install drizzle-orm`           |
| **Supabase** | Backend-as-a-Service | `npm install @supabase/supabase-js` |

### State Management

Select based on your app complexity:

| Option             | Best For            | Installation                               |
| ------------------ | ------------------- | ------------------------------------------ |
| **Zustand**        | Simple, lightweight | `npm install zustand`                      |
| **Redux Toolkit**  | Complex state logic | `npm install @reduxjs/toolkit react-redux` |
| **Built-in State** | Small apps          | No installation needed                     |

## 🐛 Troubleshooting

| Issue                | Solution                                 |
| -------------------- | ---------------------------------------- |
| **Hydration errors** | Use `'use client'` for browser-only code |
| **Import errors**    | Check `tsconfig.json` path mappings      |
| **Styling issues**   | Verify Tailwind configuration            |

## 📚 Resources

- [📖 Next.js Documentation](https://nextjs.org/docs)
- [🎨 ShadCN UI Components](https://ui.shadcn.com)
- [🎭 Tailwind CSS](https://tailwindcss.com/docs)
- [🔧 TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org)** - React framework
- **[ShadCN](https://ui.shadcn.com)** - UI component system
- **[Tailwind CSS](https://tailwindcss.com)** - CSS framework
- **[Radix UI](https://radix-ui.com)** - Accessible primitives

---

<div align="center">

**[⭐ Star this repository](https://github.com/rashidmp/next-admin-template)** if it helped you!

Built with ❤️ by **[Rashid MP](https://github.com/rashidmp)**

</div>
