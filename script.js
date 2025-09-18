// Navigation functionality
class WebsiteNavigation {
    constructor() {
        this.currentPage = 'home';
        this.initializeNavigation();
        this.initializeFormValidation();
        this.initializeAccessibilityFeatures();
        this.initializeScrollEffects();
        this.initializeAnimations();
    }

    initializeNavigation() {
        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                const isExpanded = navMenu.classList.contains('active');
                navMenu.classList.toggle('active');
                mobileToggle.setAttribute('aria-expanded', !isExpanded);
                
                // Update icon
                const icon = mobileToggle.querySelector('i');
                icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            });
        }

        // Page navigation
        document.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-page')) {
                e.preventDefault();
                this.navigateToPage(e.target.getAttribute('data-page'));
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container') && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
                mobileToggle.focus();
            }
        });
    }

    navigateToPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update navigation state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeNavLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeNavLink) {
            activeNavLink.classList.add('active');
        }

        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.querySelector('i').className = 'fas fa-bars';
        }

        // Scroll to top with smooth behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update page title
        this.updatePageTitle(pageId);

        // Announce page change to screen readers
        this.announcePageChange(pageId);

        this.currentPage = pageId;
    }

    updatePageTitle(pageId) {
        const titles = {
            'home': 'Calvin Mwenda Co & Advocates - Premier Legal Services in Kenya',
            'about': 'About Us - Calvin Mwenda Co & Advocates',
            'services': 'Our Legal Services - Calvin Mwenda Co & Advocates',
            'contact': 'Contact Us - Calvin Mwenda Co & Advocates'
        };
        document.title = titles[pageId] || titles.home;
    }

    announcePageChange(pageId) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            const announcements = {
                'home': 'Navigated to Home page',
                'about': 'Navigated to About Us page',
                'services': 'Navigated to Services page',
                'contact': 'Navigated to Contact page'
            };
            liveRegion.textContent = announcements[pageId] || 'Page changed';
        }
    }

    initializeFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const validators = {
            fullName: (value) => {
                if (!value.trim()) return 'Full name is required';
                if (value.trim().length < 2) return 'Please enter a valid name';
                if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name should only contain letters and spaces';
                return null;
            },
            email: (value) => {
                if (!value.trim()) return 'Email address is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return null;
            },
            phone: (value) => {
                if (value && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)) {
                    return 'Please enter a valid phone number';
                }
                return null;
            },
            legalArea: (value) => {
                if (!value) return 'Please select a legal area of interest';
                return null;
            },
            message: (value) => {
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Please provide more details about your legal matter (minimum 10 characters)';
                if (value.trim().length > 1000) return 'Message is too long (maximum 1000 characters)';
                return null;
            }
        };

        // Real-time validation
        Object.keys(validators).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                field.addEventListener('blur', () => this.validateField(field, validators[fieldName]));
                field.addEventListener('input', () => this.clearError(field));
            }
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const formData = {};

            Object.keys(validators).forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (field) {
                    const error = this.validateField(field, validators[fieldName]);
                    if (error) isValid = false;
                    formData[fieldName] = field.value;
                }
            });

            if (isValid) {
                this.submitForm(formData);
            } else {
                // Focus first error field
                const firstError = form.querySelector('.error-message[style*="block"]');
                if (firstError) {
                    const fieldId = firstError.id.replace('-error', '');
                    const errorField = document.getElementById(fieldId);
                    if (errorField) {
                        errorField.focus();
                    }
                }
                
                // Announce validation errors to screen readers
                const liveRegion = document.getElementById('live-region');
                if (liveRegion) {
                    liveRegion.textContent = 'Please fix the errors in the form before submitting';
                }
            }
        });
    }

    validateField(field, validator) {
        const error = validator(field.value);
        const errorElement = document.getElementById(`${field.id}-error`);
        
        if (error) {
            field.setAttribute('aria-invalid', 'true');
            errorElement.textContent = error;
            errorElement.style.display = 'block';
            field.style.borderColor = '#dc2626';
            field.setAttribute('aria-describedby', `${field.id}-error`);
        } else {
            field.setAttribute('aria-invalid', 'false');
            errorElement.style.display = 'none';
            field.style.borderColor = '#e2e8f0';
            field.removeAttribute('aria-describedby');
        }
        
        return error;
    }

    clearError(field) {
        const errorElement = document.getElementById(`${field.id}-error`);
        if (errorElement && errorElement.style.display === 'block') {
            errorElement.style.display = 'none';
            field.style.borderColor = '#e2e8f0';
            field.setAttribute('aria-invalid', 'false');
            field.removeAttribute('aria-describedby');
        }
    }

    submitForm(formData) {
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending Message...';
        submitBtn.disabled = true;
        submitBtn.style.background = '#64748b';
        submitBtn.setAttribute('aria-busy', 'true');

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Success message
            this.showSuccessMessage();
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'var(--royal-blue)';
            submitBtn.setAttribute('aria-busy', 'false');
            
            // Announce success to screen readers
            const liveRegion = document.getElementById('live-region');
            if (liveRegion) {
                liveRegion.textContent = 'Message sent successfully! We will get back to you within 24 hours.';
            }
        }, 2000);
    }

    showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        successMessage.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
                <span>Thank you! We'll get back to you within 24 hours.</span>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        // Animate in
        setTimeout(() => {
            successMessage.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            successMessage.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 5000);
    }

    initializeAccessibilityFeatures() {
        // High contrast mode detection
        if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
            document.body.classList.add('high-contrast');
        }

        // Reduced motion detection
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
        }

        // Focus management for modals and dropdowns
        this.setupFocusTrapping();

        // Announce page changes to screen readers
        this.setupLiveRegion();

        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    setupFocusTrapping() {
        // Ensure focus stays within navigation menu when open
        const navMenu = document.getElementById('nav-menu');
        const focusableElements = 'a[href], button, textarea, input[type="text"], input[type="email"], input[type="tel"], input[type="radio"], input[type="checkbox"], select';
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && navMenu && navMenu.classList.contains('active')) {
                const focusable = navMenu.querySelectorAll(focusableElements);
                const firstFocusable = focusable[0];
                const lastFocusable = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    setupLiveRegion() {
        // Check if live region already exists
        let liveRegion = document.getElementById('live-region');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.id = 'live-region';
            document.body.appendChild(liveRegion);
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + Number keys for navigation
            if (e.altKey && !e.ctrlKey && !e.shiftKey) {
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        this.navigateToPage('home');
                        break;
                    case '2':
                        e.preventDefault();
                        this.navigateToPage('about');
                        break;
                    case '3':
                        e.preventDefault();
                        this.navigateToPage('services');
                        break;
                    case '4':
                        e.preventDefault();
                        this.navigateToPage('contact');
                        break;
                }
            }
        });
    }

    initializeScrollEffects() {
        const header = document.getElementById('header');
        let lastScrollTop = 0;
        let ticking = false;

        const updateHeader = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for styling
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Animate service cards and other elements
        document.querySelectorAll('.service-card, .stat-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Counter animation for stats
        this.animateCounters();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3');
        const speed = 200; // The lower the number, the faster the animation

        counters.forEach(counter => {
            const animate = () => {
                const value = parseInt(counter.getAttribute('aria-label').match(/\d+/)[0]);
                const data = parseInt(counter.innerText);

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time) + (value >= 1000 ? '+' : '');
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value + (value >= 1000 ? '+' : '');
                }
            };

            // Use Intersection Observer to trigger animation when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });
    }
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        new WebsiteNavigation();
    } catch (error) {
        console.error('Error initializing website:', error);
    }
});

// Service worker for offline functionality (basic PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // For deployment, you would register an actual service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    // You can implement history state management here if needed
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        // Log performance metrics for optimization
        if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.fetchStart, 'ms');
        }
    });
});

// Only observe if supported
if (typeof PerformanceObserver !== 'undefined') {
    performanceObserver.observe({ entryTypes: ['navigation', 'resource'] });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// Utility functions for form enhancement
const FormUtils = {
    // Format phone number as user types
    formatPhoneNumber: (input) => {
        const value = input.value.replace(/\D/g, '');
        const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        input.value = formattedValue;
    },

    // Real-time character count for textarea
    addCharacterCount: (textareaId, maxLength = 1000) => {
        const textarea = document.getElementById(textareaId);
        if (!textarea) return;

        const countElement = document.createElement('div');
        countElement.className = 'character-count';
        countElement.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: var(--gray);
            margin-top: 0.25rem;
        `;
        
        textarea.parentNode.appendChild(countElement);

        const updateCount = () => {
            const remaining = maxLength - textarea.value.length;
            countElement.textContent = `${textarea.value.length}/${maxLength} characters`;
            
            if (remaining < 50) {
                countElement.style.color = remaining < 0 ? '#dc2626' : '#f59e0b';
            } else {
                countElement.style.color = 'var(--gray)';
            }
        };

        textarea.addEventListener('input', updateCount);
        updateCount();
    }
};

// Initialize form enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add character count to message textarea
    FormUtils.addCharacterCount('message', 1000);
    
    // Add phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', () => FormUtils.formatPhoneNumber(phoneInput));
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const startPosition = window.pageYOffset;
                    const targetPosition = targetElement.offsetTop - 80; // Account for header
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;

                    const animation = (currentTime) => {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    };

                    const ease = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    };

                    requestAnimationFrame(animation);
                }
            });
        });
    };

    smoothScrollPolyfill();
}