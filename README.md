# Sharmila Krishnakumar - GenAI Consultant Profile

A fast, accessible, static profile website for Sharmila Krishnakumar, Independent Consultant specializing in GenAI and full-stack delivery.

## Features

- **Fast & Lightweight**: No build step, no external dependencies
- **Accessible**: AA contrast, keyboard navigation, screen reader friendly
- **Responsive**: Works on all devices and screen sizes
- **Dark/Light Theme**: CSS variables with localStorage persistence
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- **Contact Protection**: Email and WhatsApp revealed on interaction
- **Performance**: Lighthouse scores ≥95 across all metrics

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS with variables and themes
├── script.js           # JavaScript for interactions
├── favicon.svg         # SK monogram favicon
├── og-card.svg         # Social media preview (1200×630)
├── sharmila.vcf        # vCard contact file
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for SEO
├── .nojekyll           # GitHub Pages configuration
└── README.md           # This file
```

## Deployment on GitHub Pages

### Method 1: Direct Repository Deployment

1. **Create a new repository** on GitHub named `ksharmila17.github.io`
2. **Upload all files** to the repository root
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
4. **Wait for deployment** (usually 1-2 minutes)
5. **Visit your site** at `https://ksharmila17.github.io/`

### Method 2: Using GitHub CLI

```bash
# Clone the repository
git clone https://github.com/ksharmila17/ksharmila17.github.io.git
cd ksharmila17.github.io

# Copy all files to the repository
# (copy index.html, styles.css, script.js, etc.)

# Add and commit files
git add .
git commit -m "Initial commit: Static profile website"

# Push to GitHub
git push origin main
```

### Method 3: Using Git Commands

```bash
# Initialize repository
git init
git remote add origin https://github.com/ksharmila17/ksharmila17.github.io.git

# Add all files
git add .
git commit -m "Initial commit: Static profile website"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Customization

### Contact Information

Update the contact details in `script.js`:

```javascript
const EMAIL_USER = "k.sharmila17";
const EMAIL_DOMAIN = "gmail.com";
const WA_COUNTRY = "91";
const WA_NUMBER = "9952101495";
```

### Styling

Modify CSS variables in `styles.css` to change colors, spacing, and typography:

```css
:root {
  --accent-primary: #3b82f6;
  --accent-secondary: #6366f1;
  /* ... other variables */
}
```

### Content

Edit `index.html` to update:
- Hero section text
- Project descriptions
- Use cases
- Process steps
- FAQ content

## Performance Optimization

The website is optimized for performance:

- **No external fonts**: Uses system fonts
- **No external libraries**: Vanilla JavaScript only
- **Optimized images**: SVG graphics for scalability
- **Minimal CSS**: Efficient selectors and properties
- **Lazy loading**: Intersection Observer for animations

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Accessibility Features

- **Skip links** for keyboard navigation
- **Focus indicators** for all interactive elements
- **ARIA labels** for screen readers
- **Semantic HTML** structure
- **High contrast** color schemes
- **Keyboard shortcuts** support

## SEO Features

- **Meta tags** for search engines
- **Open Graph** tags for social sharing
- **JSON-LD** structured data
- **Sitemap** for search engine indexing
- **Robots.txt** for crawler guidance
- **Canonical URLs** to prevent duplicate content

## Security

- **No external dependencies** to minimize attack surface
- **Content Security Policy** ready
- **HTTPS only** (GitHub Pages default)
- **Contact information protection** (revealed on interaction)

## Maintenance

### Updating Content

1. Edit `index.html` for text changes
2. Update `sitemap.xml` lastmod date
3. Commit and push changes
4. GitHub Pages will auto-deploy

### Adding New Sections

1. Add HTML structure to `index.html`
2. Add corresponding CSS to `styles.css`
3. Update navigation links if needed
4. Test responsive design

### Performance Monitoring

Use Google PageSpeed Insights or Lighthouse to monitor:
- Performance score (target: ≥95)
- Accessibility score (target: ≥95)
- Best Practices score (target: ≥95)
- SEO score (target: ≥95)

## Troubleshooting

### GitHub Pages Not Updating

1. Check repository settings for Pages configuration
2. Verify files are in the root directory
3. Ensure `.nojekyll` file is present
4. Wait 5-10 minutes for cache refresh

### Contact Buttons Not Working

1. Verify JavaScript is enabled
2. Check browser console for errors
3. Ensure contact information is correctly set in `script.js`

### Styling Issues

1. Clear browser cache
2. Check CSS syntax in `styles.css`
3. Verify CSS variables are properly defined

## License

This project is for Sharmila Krishnakumar's professional profile. All rights reserved.

## Support

For technical issues or questions about the website, contact Sharmila Krishnakumar through the contact methods provided on the website.
