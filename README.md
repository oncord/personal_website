# CS Portfolio Website

A modern, responsive portfolio website showcasing your Computer Science undergraduate journey and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Project Showcase**: Dedicated sections for your projects with technology tags
- **Skills Visualization**: Animated skill bars showing your technical proficiency
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

1. **Hero Section** (lines 35-45):
   - Update the title and subtitle
   - Modify the code animation if desired

2. **About Section** (lines 55-85):
   - Update your personal description
   - Modify education details
   - Adjust statistics (projects, technologies, years)

3. **Projects Section** (lines 95-200):
   - Replace project cards with your actual projects
   - Update project descriptions and technology tags
   - Add links to your project repositories or demos

4. **Skills Section** (lines 210-280):
   - Adjust skill levels by modifying the `width` percentage in the skill bars
   - Add or remove skills as needed
   - Update skill categories

5. **Contact Section** (lines 290-330):
   - Replace placeholder contact information with your actual details
   - Update email, LinkedIn, and GitHub links

### Styling Customization

In `styles.css`, you can customize:

- **Colors**: Update the color scheme by changing CSS variables
- **Fonts**: Modify font families and sizes
- **Layout**: Adjust spacing, padding, and grid layouts
- **Animations**: Customize transition effects and timing

### Adding New Projects

To add a new project, copy this template and paste it in the projects grid:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and what it does.</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
        <div class="project-links">
            <a href="your-link" class="project-link">View Details</a>
        </div>
    </div>
</div>
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You'll get a custom URL like `https://your-site-name.netlify.app`

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Deploy with one click

## 🛠️ Local Development

To run the website locally:

1. **Simple Method**: Double-click `index.html` to open in your browser
2. **Using Python**: Run `python -m http.server 8000` in the project directory
3. **Using Node.js**: Install `live-server` with `npm install -g live-server` and run `live-server`

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Responsive design for mobile-first indexing
- Fast loading times
- Accessible navigation

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you need help customizing your portfolio, feel free to reach out or check the comments in the code for guidance.

---

**Happy coding! 🎉** 