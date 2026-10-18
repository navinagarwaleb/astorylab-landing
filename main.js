/**
 * A Story Lab - Main Application Logic
 * Premium, lightweight, accessible client-side logic.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initEtsyLinks();
  initAnalytics();
});

/**
 * 1. Mobile Navigation & Accessibility
 */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header');

  if (!navToggle || !navMenu) return;

  // Toggle Menu
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Toggle aria-label for accessibility screen readers
    navToggle.setAttribute('aria-label', isExpanded ? 'Open Navigation Menu' : 'Close Navigation Menu');
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open Navigation Menu');
      navMenu.classList.remove('active');
    });
  });

  // Scroll Event for sticky header shrinking
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Handle escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open Navigation Menu');
      navMenu.classList.remove('active');
      navToggle.focus();
    }
  });
}

/**
 * 2. Back to Top Button & Scroll Reveal Animations (IntersectionObserver)
 */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTop');
  
  // Back to top click handler
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Premium subtle scroll animations for sections and cards
  const animElements = document.querySelectorAll('.book-card, .step-card, .pillar-card, .review-card, .founder-wrapper');
  
  if ('IntersectionObserver' in window && animElements.length > 0) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animElements.forEach(el => {
      // Set initial styles in JS to degrade gracefully if JS is disabled
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
      animationObserver.observe(el);
    });
  }
}

/**
 * 3. Google Analytics 4 (GA4) Implementation
 * Securely loaded and initialized if tracking ID exists.
 */
function initAnalytics() {
  // Configured with GA4 ID from environment/configuration
  const gaId = import.meta.env?.VITE_GA_MEASUREMENT_ID || null;
  
  if (gaId && gaId !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId, { 'anonymize_ip': true }); // GDPR Compliance
    
    console.log('Analytics loaded responsibly.');
  }
}

/**
 * 4. Dynamic Etsy Link Injection (from environment variables)
 */
function initEtsyLinks() {
  const etsyUrl = import.meta.env?.VITE_ETSY_SHOP_URL || 'https://www.etsy.com/shop/AStoryLab';
  const etsyLinks = document.querySelectorAll('.etsy-link');
  etsyLinks.forEach(link => {
    link.href = etsyUrl;
  });

  // Individual books
  const book1Url = import.meta.env?.VITE_ETSY_BOOK1_URL || 'https://astorylab.etsy.com/ca/listing/4498859424/personalized-krishna-storybook-your';
  const book1Links = document.querySelectorAll('.etsy-book1-link');
  book1Links.forEach(link => {
    link.href = book1Url;
  });

  const book2Url = import.meta.env?.VITE_ETSY_BOOK2_URL || 'https://astorylab.etsy.com/ca/listing/4506186804/personalized-hanuman-storybook-your';
  const book2Links = document.querySelectorAll('.etsy-book2-link');
  book2Links.forEach(link => {
    link.href = book2Url;
  });

  const book3Url = import.meta.env?.VITE_ETSY_BOOK3_URL || 'https://astorylab.etsy.com/ca/listing/4506323612/personalized-ganesha-storybook-your';
  const book3Links = document.querySelectorAll('.etsy-book3-link');
  book3Links.forEach(link => {
    link.href = book3Url;
  });
}
