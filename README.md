# Alex Johnson - Portfolio Website

A modern, responsive portfolio website built with Vite, React, JavaScript, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with gradient text effects and call-to-action buttons
- **About Section**: Detailed introduction about journey and expertise as a full-stack developer
- **Skills Section**: Visual representation of technical skills with proficiency bars
- **Projects Section**: Showcase of 4 demo projects with descriptions and technology stacks
- **Experience Section**: Professional work history timeline
- **Contact Section**: Contact information and quick action buttons
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling between sections

## Technologies Used

- **Vite**: Fast build tool and development server
- **React 18**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful icon library
- **ESLint**: JavaScript linting utility

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles with Tailwind
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Customization

### Personal Information

To customize the portfolio with your own information:

1. Update the personal details in `src/App.jsx`:
   - Name and title
   - Contact information
   - About section content
   - Skills and proficiency levels
   - Projects and descriptions
   - Work experience

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles by modifying Tailwind classes in `src/App.jsx`
- Global styles in `src/index.css`

### Adding New Sections

To add new sections to the portfolio:

1. Add the section HTML structure in `src/App.jsx`
2. Add the corresponding navigation item to the `navItems` array
3. Update the smooth scrolling functionality if needed

## Deployment

The project can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Surge.sh

Simply build the project and deploy the `dist` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Vite, React, and Tailwind CSS