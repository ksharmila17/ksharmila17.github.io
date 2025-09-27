// Contact information (assembled on reveal)
const EMAIL_USER = "k.sharmila17";
const EMAIL_DOMAIN = "gmail.com";
const WA_COUNTRY = "91";
const WA_NUMBER = "9952101495";

// Theme management
class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector('.theme-toggle');
    this.themeIcon = document.querySelector('.theme-icon');
    this.init();
  }

  init() {
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
    
    // Add click listener
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}

// Contact reveal functionality
class ContactRevealer {
  constructor() {
    this.emailButton = document.querySelector('[data-type="email"]');
    this.whatsappButton = document.querySelector('[data-type="whatsapp"]');
    this.init();
  }

  init() {
    if (this.emailButton) {
      this.emailButton.addEventListener('click', () => this.revealEmail());
    }
    
    if (this.whatsappButton) {
      this.whatsappButton.addEventListener('click', () => this.revealWhatsApp());
    }

    // Copy button functionality
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-copy')) {
        this.copyToClipboard(e.target);
      }
    });
  }

  revealEmail() {
    const email = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
    const revealText = this.emailButton.querySelector('.reveal-text');
    const revealedText = this.emailButton.querySelector('.revealed-text');
    const copyButton = document.querySelector('[data-copy="email"]');
    
    // Update button text and make it a mailto link
    revealText.style.display = 'none';
    revealedText.textContent = email;
    revealedText.style.display = 'inline';
    
    // Show copy button
    if (copyButton) {
      copyButton.style.display = 'inline-flex';
    }
    
    // Convert to mailto link
    this.emailButton.href = `mailto:${email}?subject=GenAI%20Consultation%20Inquiry&body=Hi%20Sharmila,%0A%0AI'm%20interested%20in%20discussing%20a%20GenAI%20project.%0A%0AProject%20details:%0A%0AThanks!`;
    this.emailButton.removeAttribute('data-type');
    this.emailButton.classList.remove('contact-reveal');
    
    // Store email for copying
    this.emailButton.dataset.email = email;
  }

  revealWhatsApp() {
    const whatsappNumber = `${WA_COUNTRY}${WA_NUMBER}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Sharmila,%20I'm%20interested%20in%20discussing%20a%20GenAI%20project.`;
    const revealText = this.whatsappButton.querySelector('.reveal-text');
    const revealedText = this.whatsappButton.querySelector('.revealed-text');
    const copyButton = document.querySelector('[data-copy="whatsapp"]');
    
    // Update button text and make it a WhatsApp link
    revealText.style.display = 'none';
    revealedText.textContent = `+${whatsappNumber}`;
    revealedText.style.display = 'inline';
    
    // Show copy button
    if (copyButton) {
      copyButton.style.display = 'inline-flex';
    }
    
    // Convert to WhatsApp link
    this.whatsappButton.href = whatsappUrl;
    this.whatsappButton.target = '_blank';
    this.whatsappButton.rel = 'noopener';
    this.whatsappButton.removeAttribute('data-type');
    this.whatsappButton.classList.remove('contact-reveal');
    
    // Store number for copying
    this.whatsappButton.dataset.whatsapp = `+${whatsappNumber}`;
  }

  async copyToClipboard(button) {
    const type = button.dataset.copy;
    let textToCopy = '';
    
    if (type === 'email') {
      textToCopy = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
    } else if (type === 'whatsapp') {
      textToCopy = `+${WA_COUNTRY}${WA_NUMBER}`;
    }
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      
      // Visual feedback
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      button.style.background = 'var(--accent-primary)';
      button.style.color = 'white';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.style.color = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      this.fallbackCopy(textToCopy);
    }
  }

  fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
  }
}

// Smooth scrolling for navigation links
class SmoothScroller {
  constructor() {
    this.init();
  }

  init() {
    // Handle navigation links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        this.scrollToSection(link.getAttribute('href'));
      }
    });
  }

  scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}

// WhatsApp CTA handler
class WhatsAppCTA {
  constructor() {
    this.whatsappCTA = document.getElementById('whatsapp-cta');
    this.init();
  }

  init() {
    if (this.whatsappCTA) {
      this.whatsappCTA.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToContact();
      });
    }
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = contactSection.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Focus on WhatsApp button after scrolling
      setTimeout(() => {
        const whatsappButton = document.querySelector('[data-type="whatsapp"]');
        if (whatsappButton) {
          whatsappButton.focus();
        }
      }, 500);
    }
  }
}

// Intersection Observer for scroll animations (optional enhancement)
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Only add animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      this.setupAnimations();
    }
  }

  setupAnimations() {
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

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.offer-card, .use-case-card, .project-card, .faq-card, .process-step');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new ContactRevealer();
  new SmoothScroller();
  new WhatsAppCTA();
  new ScrollAnimations();
});

// Handle page visibility changes (optional)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause any animations or timers
  } else {
    // Page is visible again, resume animations
  }
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
});

// Service Worker registration (optional, for future PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service worker is needed
    // navigator.serviceWorker.register('/sw.js');
  });
}
