# Calvin Mwenda Co & Advocates - Law Firm Website

A professional, responsive website for Calvin Mwenda Co & Advocates, a leading law firm in Kenya. This multipage website demonstrates modern web development skills using HTML5, CSS3, and JavaScript.

## 🌟 Features

### 📱 **Responsive Design**
- Mobile-first approach with seamless adaptation across all devices
- Optimized for tablets, smartphones, and desktop computers
- Fluid typography and flexible grid layouts

### ♿ **Accessibility Features**
- WCAG 2.1 AA compliant
- Screen reader compatible with proper ARIA labels
- Keyboard navigation support
- High contrast mode compatibility
- Skip navigation links
- Focus indicators and management
- Reduced motion preferences support

### 🎨 **Modern Design**
- **Royal blue** color scheme as requested
- Professional legal imagery from Unsplash
- Smooth animations and micro-interactions
- Glassmorphism effects and modern UI elements
- Custom CSS properties for consistent theming

### 🔧 **Interactive Features**
- **Image slider** with automatic rotation and manual controls
- **Form validation** with real-time feedback
- Mobile hamburger menu with smooth animations
- Animated statistics counters
- Smooth scrolling navigation
- Loading states and success messages

## 📁 Project Structure

```
calvin-mwenda-website/
├── index.html              # Home page
├── about.html              # About page  
├── services.html           # Services page
├── contact.html            # Contact page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # Main JavaScript file
├── images/                # Image assets (if using local images)
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── team/
├── README.md              # Project documentation
└── deploy-instructions.md # Deployment guide
```

## 🛠️ Technologies Used

### **HTML5**
- Semantic markup for better SEO and accessibility
- Schema.org structured data
- Meta tags for social sharing
- Proper document outline and headings

### **CSS3**
- CSS Custom Properties (variables)
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- Media queries for responsive design
- CSS filters and backdrop-filter effects

### **JavaScript (Vanilla)**
- ES6+ modern syntax
- DOM manipulation and event handling
- Form validation and submission
- Image slider functionality
- Intersection Observer API for animations
- Local storage for user preferences (if needed)

## 🎯 Page Details

### **Home Page (index.html)**
- Hero section with rotating image slider
- Key benefits and value propositions
- Quick contact section with call-to-action
- Professional introduction to the firm

### **About Page (about.html)**
- Firm history and background
- Core values and mission
- Leadership team profiles with photos
- Animated statistics and achievements
- Professional credentials and expertise

### **Services Page (services.html)**
- Comprehensive list of legal services:
  - Corporate Law
  - Real Estate Law
  - Family Law
  - Criminal Defense
  - Employment Law
  - Contract Law
- Detailed service descriptions
- Legal process explanation
- Call-to-action for consultations

### **Contact Page (contact.html)**
- Multiple contact methods (phone, email, location)
- Interactive contact form with validation
- Business hours and location details
- Map integration placeholder
- Consultation booking functionality

## 🔧 Key JavaScript Features

### **Image Slider**
- Automatic rotation every 5 seconds
- Manual navigation with prev/next buttons
- Dot indicators for direct slide access
- Keyboard navigation (arrow keys)
- Pause on hover/focus for accessibility
- Touch/swipe support (mobile-friendly)

### **Form Validation**
- Real-time validation on field blur
- Comprehensive error messaging
- Email and phone number format validation
- Required field validation
- Accessibility-compliant error handling
- Success/failure feedback with animations

### **Mobile Menu**
- Smooth slide-in animation
- Focus trap for accessibility
- Close on escape key or outside click
- Hamburger to X icon transformation
- ARIA attributes for screen readers

### **Scroll Effects**
- Dynamic header background on scroll
- Smooth scroll for anchor links
- Intersection Observer for element animations
- Parallax effects (subtle and performance-friendly)

## 🎨 Design Specifications

### **Color Palette**
- **Primary**: Royal Blue (#1e3a8a)
- **Secondary**: Gold (#f59e0b)
- **Accent**: Light Blue (#3b82f6)
- **Text**: Dark Gray (#1f2937)
- **Background**: White (#ffffff)
- **Light Gray**: (#f8fafc)

### **Typography**
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, readable)
- **Font Weights**: 300, 400, 500, 600, 700

### **Layout**
- Max-width: 1200px for main content
- Consistent spacing using rem units
- Grid-based layouts with fallbacks
- Card-based components with subtle shadows

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
- Base: 320px+ (Mobile)
- Small: 480px+ (Large Mobile)  
- Medium: 768px+ (Tablet)
- Large: 1024px+ (Desktop)
- XLarge: 1200px+ (Large Desktop)
```

## 🚀 Deployment Instructions

### **Option 1: GitHub Pages**
1. Create a new GitHub repository
2. Upload all project files
3. Enable GitHub Pages in repository settings
4. Select main branch as source
5. Access your site at: `https://username.github.io/repository-name`

### **Option 2: Netlify**
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop project folder to deploy
3. Or connect GitHub repository for automatic deployments
4. Custom domain setup available
5. HTTPS enabled by default

### **Option 3: Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts
4. Automatic deployments from Git repositories
5. Edge network for optimal performance

### **Option 4: Traditional Web Hosting**
1. Upload files to your web hosting provider
2. Ensure index.html is in the root directory
3. Verify all file paths are correct
4. Test all functionality after deployment

## ✅ Testing Checklist

### **Functionality Testing**
- [ ] All navigation links work correctly
- [ ] Image slider functions on all devices
- [ ] Contact form validation works
- [ ] Form submission provides feedback
- [ ] Mobile menu opens/closes properly
- [ ] All external links open in new tabs

### **Responsive Testing**
- [ ] Layout works on mobile (320px+)
- [ ] Tablet view is optimized (768px+)
- [ ] Desktop layout is proper (1024px+)
- [ ] Images scale appropriately
- [ ] Text remains readable at all sizes

### **Accessibility Testing**
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Color contrast meets WCAG standards

### **Performance Testing**
- [ ] Fast loading times (<3 seconds)
- [ ] Images are optimized
- [ ] CSS and JS are minified (for production)
- [ ] No console errors
- [ ] Smooth animations and transitions

### **Browser Compatibility**
- [ ] Chrome (latest)
- [ ] Firefox (latest)  
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Browser Support

- **Modern Browsers**: Full support for Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **CSS Grid/Flexbox**: Supported in all target browsers
- **JavaScript ES6+**: Transpilation not required for modern browsers
- **CSS Custom Properties**: Native support in all modern browsers

## 📈 SEO Optimization

- Semantic HTML5 markup
- Proper meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup (JSON-LD)
- Optimized images with alt text
- Clean URLs and proper heading hierarchy
- Fast loading times and mobile optimization

## 🔐 Security Considerations

- Form validation (client-side and server-side recommended)
- XSS protection through proper input sanitization
- HTTPS enforcement (handled by hosting platform)
- No sensitive data in client-side code
- Content Security Policy headers (server configuration)

## 📞 Contact Information

**Calvin Mwenda Co & Advocates**
- **Address**: Westlands Square, 2nd Floor, Westlands Road, Nairobi, Kenya
- **Phone**: +254 20 123 4567
- **Email**: info@calvinmwenda.co.ke
- **Website**: [Live Demo URL when deployed]

## 👥 Credits

- **Design & Development**: Custom implementation
- **Images**: Unsplash.com (professional stock photos)
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Playfair Display, Inter)
