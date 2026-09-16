/* ============================================
   MAIN.JS — Global Scripts
   ============================================ */

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open');
  });
}

// ===== NAV SEARCH REDIRECT =====
const navSearch = document.getElementById('navSearch');
if (navSearch) {
  navSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && navSearch.value.trim()) {
      window.location.href = `browse.html?search=${encodeURIComponent(navSearch.value.trim())}`;
    }
  });
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '✅'}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  document.body.appendChild(toast);

  // Auto styles
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1',
    color: 'white',
    padding: '14px 20px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'Inter, sans-serif',
    zIndex: '9999',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    animation: 'slideInToast 0.4s ease',
    maxWidth: '340px'
  });

  setTimeout(() => {
    toast.style.animation = 'slideOutToast 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Toast animation styles
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  @keyframes slideInToast {
    from { transform: translateX(100%); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }
  @keyframes slideOutToast {
    from { transform: translateX(0);    opacity: 1; }
    to   { transform: translateX(100%); opacity: 0; }
  }
  .toast-close {
    background: none; border: none; color: white;
    cursor: pointer; font-size: 14px; margin-left: auto;
    opacity: 0.7; padding: 0 4px;
  }
  .toast-close:hover { opacity: 1; }

  /* Mobile Nav */
  @media (max-width: 768px) {
    .nav-links.mobile-open {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0; right: 0;
      background: white;
      padding: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      border-top: 1px solid #e5e7eb;
      gap: 4px;
      z-index: 999;
    }
  }
`;
document.head.appendChild(toastStyle);

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// ===== LAZY LOAD IMAGES =====
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
}

// ===== UTILITY: FORMAT NUMBER =====
function formatNumber(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

// ===== UTILITY: GET URL PARAM =====
function getUrlParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  lazyLoadImages();
});