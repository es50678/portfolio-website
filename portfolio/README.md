# Ethereal Eduardo Works Portfolio

A minimal, elegant portfolio website showcasing creative development projects with a clean, responsive design.

## 🎨 Overview

This portfolio features:
- **Responsive Design**: Adapts beautifully to all screen sizes
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Minimal Aesthetic**: Clean, distraction-free interface
- **Performance Optimized**: Lightweight and fast-loading
- **Accessible**: Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites

- A web browser
- A local web server (optional, for development)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ethereal-eduardo-works/portfolio.git
   cd portfolio
   ```

2. **Navigate to the generated folder**
   ```bash
   cd generated
   ```

3. **Open the portfolio**
   - **Simple**: Open `index.html` directly in your browser
   - **Local Server** (recommended for development):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **View in browser**
   - Direct file: `file:///path/to/portfolio/generated/index.html`
   - Local server: `http://localhost:8000`

## 📁 Project Structure

```
portfolio/
├── generated/               # Main portfolio files
│   ├── index.html          # Main portfolio page
│   ├── styles.css          # All styling
│   ├── ethereal-portfolio.html     # Alternative design (ethereal theme)
│   └── minimal-ethereal-portfolio.html  # Minimal variant
└── README.md               # This file
```

## 🎯 Development

### Making Changes

1. **Edit Content**: Modify `index.html` to update:
   - Personal information
   - Project descriptions
   - Social links
   - Contact information

2. **Styling**: Update `styles.css` to customize:
   - Colors and themes
   - Layout and spacing
   - Animations and effects
   - Responsive breakpoints

3. **Adding Projects**: In `index.html`, add new project cards:
   ```html
   <a href="#project-name" class="project-card">
       <div class="project-header">
           <div class="project-icon">🎯</div>
           <div class="project-name">Project Name</div>
       </div>
       <div class="project-image">🎯</div>
       <p class="project-description">Your project description</p>
       <div>
           <span class="status-badge status-active">Status</span>
       </div>
   </a>
   ```

### CSS Variables

The design uses CSS custom properties for easy theming:

```css
:root {
    --fore-primary: #1a1a1a;    /* Primary text color */
    --fore-secondary: #666;      /* Secondary text color */
    --fore-light: #999;          /* Light text color */
    --border: #e5e5e5;          /* Border color */
    --bg: #fafafa;              /* Background color */
    --white: #fff;              /* Card background */
    --accent: #6366f1;          /* Primary accent color */
    --accent-light: #8b5cf6;    /* Secondary accent color */
}
```

### Status Badge Classes

- `.status-active` - For active/in-development projects
- `.status-planning` - For planned/upcoming projects
- Add custom status classes as needed

## 🌐 Deployment

### Static Hosting (Recommended)

**AWS S3/Cloudfront (Already Set Up)**
Upload the contents of the `generated` folder to your S3 bucket and clear the cloudfront cache:

```bash
$ aws s3 sync ./generated/ s3://www.ethereal-eduardo.works                                                     
$ aws cloudfront create-invalidation --distribution-id E2HK2L2C328VR --paths "/*"      
```


**GitHub Pages**
1. Go to repository Settings > Pages
2. Select source: Deploy from branch
3. Choose branch and `/generated` folder
4. Access at `https://username.github.io/portfolio`


### Traditional Hosting

Upload the contents of the `generated` folder to your web server's public directory (usually `public_html`, `www`, or similar).

### Custom Domain

1. **Add CNAME file** (for GitHub Pages):
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   - Point your domain to your hosting provider
   - Set up CNAME or A records as required

## 🛠 Customization Guide

### Personal Branding

1. **Update Meta Tags** in `index.html`:
   ```html
   <title>Your Name - Portfolio</title>
   <meta name="description" content="Your description">
   <meta property="og:title" content="Your Name">
   ```

2. **Replace Social Links**:
   ```html
   <a href="https://github.com/yourusername">GitHub</a>
   <a href="https://twitter.com/yourusername">Twitter</a>
   <a href="mailto:your@email.com">Contact</a>
   ```

3. **Update Hero Section**:
   ```html
   <h1>Your Tagline</h1>
   <h2>Your description and what you do</h2>
   ```

### Color Themes

Create custom themes by modifying CSS variables:

```css
/* Dark Purple Theme */
:root {
    --accent: #8b5cf6;
    --accent-light: #a78bfa;
    --bg: #1e1b4b;
    --white: #312e81;
}

/* Ocean Theme */
:root {
    --accent: #0891b2;
    --accent-light: #06b6d4;
    --bg: #ecfeff;
    --white: #ffffff;
}
```

### Adding Animation

The portfolio supports custom animations. Example:

```css
.custom-animation {
    animation: fadeInScale 0.6s ease-out;
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**:
   - Check responsive design on multiple screen sizes
   - Verify dark/light mode compatibility
   - Test all links and interactions
5. **Commit with descriptive messages**:
   ```bash
   git commit -m "Add: New project card animation"
   ```
6. **Push and create pull request**

### Code Style

- Use semantic HTML elements
- Follow BEM naming convention for CSS classes
- Maintain consistent indentation (2 spaces)
- Comment complex CSS rules
- Optimize for performance and accessibility

### Testing Checklist

- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark/light mode compatibility
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Animations perform smoothly
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Cross-browser compatibility

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/ethereal-eduardo-works/portfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ethereal-eduardo-works/portfolio/discussions)
- **Email**: hello@ethereal-eduardo.works

## 🙏 Acknowledgments

- Design inspired by modern minimalist portfolios
- Built with love and attention to detail
- Thanks to the developer community for inspiration and feedback

---

**Happy coding! ✨**
