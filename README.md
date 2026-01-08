# Portfolio Website - Modern Developer Portfolio

Welcome to my **Portfolio Website**, a modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as a full-stack developer.

## ✨ Features

### 🎨 Modern Design
- **Beautiful UI/UX**: Built with Tailwind CSS and shadcn/ui components
- **Dark Mode**: Seamless dark/light theme support
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Animations**: Smooth transitions using Framer Motion
- **Interactive Elements**: Engaging user interactions

### 📱 Portfolio Sections
- **Home**: Hero section with introduction and key stats
- **About**: Personal information and background
- **Projects**: Showcase of development projects with live demos
- **Skills**: Technical skills with proficiency levels
- **Experience**: Professional experience and education
- **Contact**: Contact form and social media links
- **Blog**: Technical articles and insights

### 🛠️ Technical Features
- **TypeScript**: Type-safe code with modern TypeScript features
- **React 18**: Latest React features and concurrent rendering
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool and development server
- **PWA Support**: Progressive Web App capabilities
- **SEO Optimized**: Built-in SEO components and meta tags

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Pnpm** (v8 or higher)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. **Navigate to project directory**:
   ```sh
   cd portfolio-website
   ```

3. **Install dependencies**:
   ```sh
   pnpm install
   ```

4. **Set up environment variables**:
   ```sh
   cp .env.example .env.local
   ```

5. **Start development server**:
   ```sh
   pnpm dev
   ```

## 🏗️ Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI components
│   │   ├── custom-ui/    # Custom UI components
│   │   └── partials/     # Layout components
│   ├── pages/            # Page components
│   │   ├── home.tsx      # Landing page
│   │   ├── about.tsx     # About page
│   │   ├── projects.tsx  # Projects showcase
│   │   ├── skills.tsx    # Skills & technologies
│   │   ├── experience.tsx # Work experience
│   │   ├── contact.tsx   # Contact form
│   │   └── blog.tsx      # Blog posts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── .env.example          # Environment variables example
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎯 Portfolio Sections

### Home Page
- Hero section with personal introduction
- Key statistics and achievements
- Call-to-action buttons
- Social media links

### Projects Showcase
- Featured projects with descriptions
- Technology stack for each project
- Live demo and source code links
- Project screenshots and details

### Skills & Technologies
- Technical skills with proficiency levels
- Programming languages and frameworks
- Tools and technologies
- Interactive skill bars

### Professional Experience
- Work history and achievements
- Educational background
- Timeline format
- Detailed descriptions

### Contact & Social
- Contact form with validation
- Social media integration
- Professional links
- Location and availability

## 🤝 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit the content in each page component
2. **Add Your Projects**: Update the projects array in `projects.tsx`
3. **Modify Skills**: Update the skills data in `skills.tsx`
4. **Update Experience**: Add your work history in `experience.tsx`
5. **Customize Styling**: Modify Tailwind classes and theme colors
6. **Add Your Images**: Replace placeholder images with your own

## 📚 Documentation

### Component Structure
- Each page is a separate component
- Reusable UI components in `/components/ui/`
- Custom components in `/components/custom-ui/`
- Layout components in `/components/partials/`

### Styling Guide
- Tailwind CSS for styling
- Dark mode support
- Responsive design patterns
- Animation with Framer Motion

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the build tool

## 📞 Support

For support, email your-email@example.com or connect with me on [LinkedIn](#).

---

Built with ❤️ by [Your Name].
