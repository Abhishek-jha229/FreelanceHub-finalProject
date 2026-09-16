/* ============================================
   SERVICE-DETAIL.JS
   ============================================ */

// ===== FULL SERVICE DATA =====
const servicesDB = [
  {
    id: 1,
    title: "I will build a responsive React website for your business",
    category: "Web Development",
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 312,
    orders: 520,
    tags: ["React", "JavaScript", "Responsive", "Frontend", "Web Design"],
    description: `
      <p>Welcome! Are you looking for a <strong>modern, fast, and fully responsive React website</strong>? 
      You've come to the right place. With over 5 years of experience in web development, 
      I specialize in building high-quality React applications that are both beautiful and performant.</p>
      
      <p>Whether you need a landing page, portfolio, business website, or a complex web application — 
      I've got you covered. Every project I deliver is clean-coded, SEO-friendly, 
      and optimized for all devices including mobile, tablet, and desktop.</p>
      
      <p>I work with the latest technologies including <strong>React 18, Tailwind CSS, 
      Next.js, and REST APIs</strong> to ensure your website is future-proof and scalable.</p>
    `,
    whatYouGet: [
      "Fully responsive design",
      "Clean and well-commented code",
      "SEO-optimized structure",
      "Cross-browser compatible",
      "Fast loading performance",
      "Free revisions included",
      "Source code delivery",
      "30-day support"
    ],
    packages: {
      basic: {
        name: "Basic",
        price: 49,
        description: "Perfect for a simple landing page or portfolio website with up to 3 pages.",
        deliveryDays: 3,
        revisions: 2,
        features: [
          { text: "Up to 3 Pages", included: true },
          { text: "Responsive Design", included: true },
          { text: "Contact Form", included: true },
          { text: "SEO Optimization", included: false },
          { text: "Custom Animations", included: false },
          { text: "CMS Integration", included: false }
        ]
      },
      standard: {
        name: "Standard",
        price: 99,
        description: "Full multi-page website with animations, SEO, and contact integration.",
        deliveryDays: 7,
        revisions: 5,
        features: [
          { text: "Up to 8 Pages", included: true },
          { text: "Responsive Design", included: true },
          { text: "Contact Form", included: true },
          { text: "SEO Optimization", included: true },
          { text: "Custom Animations", included: true },
          { text: "CMS Integration", included: false }
        ]
      },
      premium: {
        name: "Premium",
        price: 199,
        description: "Complete website with CMS, advanced features, and full deployment support.",
        deliveryDays: 14,
        revisions: 999,
        features: [
          { text: "Unlimited Pages", included: true },
          { text: "Responsive Design", included: true },
          { text: "Contact Form", included: true },
          { text: "SEO Optimization", included: true },
          { text: "Custom Animations", included: true },
          { text: "CMS Integration", included: true }
        ]
      }
    },
    freelancer: {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      level: "Top Rated",
      title: "Full Stack React Developer",
      bio: "Hi! I'm Alex, a passionate full-stack developer with 6+ years of experience building modern web applications. I've worked with startups and Fortune 500 companies, delivering pixel-perfect, performant, and scalable solutions. My goal is simple — to turn your vision into reality.",
      location: "New York, USA",
      memberSince: "January 2019",
      language: "English, Spanish",
      responseTime: "1 hour",
      rating: 4.9,
      reviews: 312,
      orders: 520,
      isOnline: true
    },
    faqs: [
      {
        q: "What information do you need to get started?",
        a: "I'll need your design preferences (colors, fonts, style), any reference websites you like, your logo or branding assets, and the content/text for the pages. The more detail you provide, the better the result!"
      },
      {
        q: "Do you provide hosting and domain setup?",
        a: "I don't provide hosting directly, but I can help you set everything up on platforms like Vercel, Netlify, or AWS. I'll guide you through the entire deployment process."
      },
      {
        q: "Can I request changes after delivery?",
        a: "Absolutely! Each package includes a set number of revisions. For the Premium package, I offer unlimited revisions to ensure you're 100% satisfied."
      },
      {
        q: "How do you handle communication during the project?",
        a: "I provide daily updates on project progress and am available via FreelanceHub messaging. You can expect quick responses — usually within 1 hour during business hours."
      }
    ]
  }
];

// ===== REVIEWS DATA =====
const reviewsDB = [
  {
    serviceId: 1,
    reviewer: "Michael Thompson",
    country: "🇺🇸 United States",
    avatar: "https://i.pravatar.cc/50?img=11",
    rating: 5,
    date: "2 weeks ago",
    text: "Alex delivered an absolutely stunning website! The code quality is exceptional and the design exceeded my expectations. Communication was top-notch throughout the project. Will definitely work with him again!"
  },
  {
    serviceId: 1,
    reviewer: "Sophie Laurent",
    country: "🇫🇷 France",
    avatar: "https://i.pravatar.cc/50?img=44",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding work! Alex understood my requirements perfectly and delivered on time. The website is fast, responsive, and beautifully designed. I'm very happy with the result."
  },
  {
    serviceId: 1,
    reviewer: "Raj Patel",
    country: "🇮🇳 India",
    avatar: "https://i.pravatar.cc/50?img=22",
    rating: 5,
    date: "1 month ago",
    text: "Professional, talented, and a great communicator. The project was completed ahead of schedule. Alex went above and beyond to make sure everything was perfect. Highly recommended!"
  },
  {
    serviceId: 1,
    reviewer: "Emma Wilson",
    country: "🇬🇧 United Kingdom",
    avatar: "https://i.pravatar.cc/50?img=47",
    rating: 4,
    date: "2 months ago",
    text: "Really happy with the final result. There were a few small revisions needed but Alex handled them quickly and professionally. Great experience overall."
  },
  {
    serviceId: 1,
    reviewer: "Carlos Mendez",
    country: "🇲🇽 Mexico",
    avatar: "https://i.pravatar.cc/50?img=31",
    rating: 5,
    date: "2 months ago",
    text: "Perfect experience! Alex built exactly what I needed. Clean code, perfect design, fast delivery. This is my go-to developer for all future projects."
  }
];

// ===== RELATED SERVICES =====
const relatedServices = [
  {
    id: 2,
    title: "I will design a modern UI/UX for your app",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80",
    rating: 5.0,
    price: 79
  },
  {
    id: 9,
    title: "I will create a Node.js REST API backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80",
    rating: 4.8,
    price: 89
  },
  {
    id: 5,
    title: "I will develop a Flutter mobile app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=80",
    rating: 4.7,
    price: 129
  }
];

// ===== STATE =====
let currentService   = null;
let currentPackage   = 'basic';
let currentImageIdx  = 0;
let reviewsShown     = 3;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(getUrlParam('id')) || 1;
  currentService = servicesDB.find(s => s.id === id) || servicesDB[0];

  if (currentService) {
    renderServiceDetail();
    renderPackage('basic');
    renderReviews();
    renderFAQ();
    renderRelatedServices();
    renderSellerInfo();
  }
});

// ===== RENDER FULL DETAIL =====
function renderServiceDetail() {
  const s = currentService;
  const f = s.freelancer;

  // Breadcrumb
  setEl('bcCategory', s.category);
  setEl('bcTitle', truncate(s.title, 40));

  // Title block
  setEl('serviceTitle', s.title);
  setEl('serviceCategory', `<i class="fa fa-code"></i> ${s.category}`);
  setEl('serviceRating', s.rating.toFixed(1));
  setEl('serviceReviews', `(${s.reviews} reviews)`);
  setEl('serviceOrders', `${s.orders}+ orders`);

  // Author
  setImg('authorAvatar', f.avatar, f.name);
  setEl('authorName', f.name);
  setEl('authorLevel', f.level);
  const onlineDot = document.getElementById('authorOnline');
  if (onlineDot) onlineDot.style.display = f.isOnline ? 'block' : 'none';

  // Gallery
  renderGallery(s.images);

  // Description
  setEl('serviceDescription', s.description);

  // What you get
  const wyg = document.getElementById('whatYouGet');
  if (wyg) {
    wyg.innerHTML = s.whatYouGet.map(item => `<li>${item}</li>`).join('');
  }

  // Tags
  const tagsEl = document.getElementById('serviceTags');
  if (tagsEl) {
    tagsEl.innerHTML = s.tags.map(tag => `
      <span class="tag-item" onclick="window.location.href='browse.html?search=${tag}'">${tag}</span>
    `).join('');
  }

  // Review tab count
  setEl('reviewTabCount', s.reviews);

  // Seller quick card
  setImg('sqcAvatar', f.avatar, f.name);
  setEl('sqcName', f.name);
  setEl('sqcTitle', f.title);
  setEl('sqcRating', `⭐ ${f.rating}`);
  setEl('sqcOrders', `${f.orders}+`);
  setEl('sqcResponse', f.responseTime);
  const sqcOnline = document.getElementById('sqcOnline');
  if (sqcOnline) sqcOnline.style.display = f.isOnline ? 'block' : 'none';
}

// ===== RENDER GALLERY =====
function renderGallery(images) {
  const mainImg = document.getElementById('mainImage');
  const thumbsEl = document.getElementById('galleryThumbs');

  if (mainImg) mainImg.src = images[0];
  currentImageIdx = 0;

  if (thumbsEl) {
    thumbsEl.innerHTML = images.map((img, i) => `
      <div
        class="thumb-item ${i === 0 ? 'active' : ''}"
        onclick="changeImage(${i}, '${img}')"
      >
        <img src="${img}" alt="Preview ${i + 1}" loading="lazy" />
      </div>
    `).join('');
  }
}

function changeImage(index, src) {
  const mainImg  = document.getElementById('mainImage');
  const thumbs   = document.querySelectorAll('.thumb-item');

  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 200);
  }

  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  currentImageIdx = index;
}

// ===== RENDER PACKAGE =====
function renderPackage(type) {
  currentPackage = type;
  const pkg = currentService.packages[type];
  const el  = document.getElementById('packageContent');
  if (!el) return;

  const revisionsText = pkg.revisions === 999 ? 'Unlimited' : pkg.revisions;

  el.innerHTML = `
    <div class="pkg-header">
      <div>
        <div class="pkg-name">${pkg.name} Package</div>
        <div class="pkg-price">$${pkg.price}</div>
      </div>
    </div>
    <p class="pkg-desc">${pkg.description}</p>
    <div class="pkg-meta">
      <div class="pkg-meta-item">
        <i class="fa fa-clock"></i>
        <div>
          <strong>${pkg.deliveryDays} Days</strong>
          <span style="font-size:11px; color:var(--gray-400);">Delivery</span>
        </div>
      </div>
      <div class="pkg-meta-item">
        <i class="fa fa-rotate-left"></i>
        <div>
          <strong>${revisionsText}</strong>
          <span style="font-size:11px; color:var(--gray-400);">Revisions</span>
        </div>
      </div>
    </div>
    <div class="pkg-features">
      ${pkg.features.map(f => `
        <div class="pkg-feature ${f.included ? '' : 'disabled'}">
          <i class="fa ${f.included ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
          <span>${f.text}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function selectPackage(type, btn) {
  document.querySelectorAll('.pkg-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderPackage(type);
}

// ===== RENDER SELLER INFO (About Tab) =====
function renderSellerInfo() {
  const f = currentService.freelancer;

  setImg('aboutAvatar', f.avatar, f.name);
  setEl('aboutName', f.name);
  setEl('aboutTitle', f.title);
  setEl('aboutRating', f.rating.toFixed(1));
  setEl('aboutReviews', `(${f.reviews} reviews)`);
  setEl('aboutBio', f.bio);
  setEl('aboutLocation', f.location);
  setEl('aboutMember', f.memberSince);
  setEl('aboutLanguage', f.language);
  setEl('aboutResponse', f.responseTime);
}

// ===== RENDER REVIEWS =====
function renderReviews() {
  const s       = currentService;
  const reviews = reviewsDB.filter(r => r.serviceId === s.id);

  // Big rating
  setEl('ratingBig', s.rating.toFixed(1));
  setEl('ratingBigStars', generateStars(s.rating));
  setEl('ratingBigCount', `${s.reviews} reviews`);

  // Breakdown
  const breakdown = document.getElementById('ratingBreakdown');
  if (breakdown) {
    const dist = { 5: 72, 4: 18, 3: 6, 2: 2, 1: 2 };
    breakdown.innerHTML = [5, 4, 3, 2, 1].map(star => `
      <div class="breakdown-row">
        <div class="breakdown-label">
          <span class="star">★</span> ${star}
        </div>
        <div class="breakdown-bar-wrap">
          <div
            class="breakdown-bar"
            style="width: ${dist[star]}%;"
          ></div>
        </div>
        <span class="breakdown-pct">${dist[star]}%</span>
      </div>
    `).join('');
  }

  // Review cards
  renderReviewCards(reviews.slice(0, reviewsShown));

  // Load more button
  const loadMore = document.getElementById('loadMoreBtn');
  if (loadMore) {
    loadMore.style.display = reviews.length > reviewsShown ? 'flex' : 'none';
  }
}

function renderReviewCards(reviews) {
  const list = document.getElementById('reviewsList');
  if (!list) return;

  list.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="reviewer-info">
          <img src="${r.avatar}" alt="${r.reviewer}" />
          <div>
            <div class="reviewer-name">${r.reviewer}</div>
            <div class="reviewer-country">${r.country}</div>
          </div>
        </div>
        <div class="review-rating-date">
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>
  `).join('');
}

function loadMoreReviews() {
  const reviews = reviewsDB.filter(r => r.serviceId === currentService.id);
  reviewsShown = reviews.length;
  renderReviewCards(reviews);
  const loadMore = document.getElementById('loadMoreBtn');
  if (loadMore) loadMore.style.display = 'none';
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  list.innerHTML = currentService.faqs.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" onclick="toggleFAQ(${i})">
        <h4>${faq.q}</h4>
        <i class="fa fa-chevron-down"></i>
      </div>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-${index}`);
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== RENDER RELATED SERVICES =====
function renderRelatedServices() {
  const list = document.getElementById('relatedServices');
  if (!list) return;

  list.innerHTML = relatedServices.map(s => `
    <div class="related-card" onclick="window.location.href='service-detail.html?id=${s.id}'">
      <img src="${s.image}" alt="${s.title}" class="related-img" loading="lazy" />
      <div class="related-info">
        <h5>${s.title}</h5>
        <div class="related-meta">
          <div class="related-rating">
            <span class="star">★</span> ${s.rating}
          </div>
          <div class="related-price">$${s.price}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== TABS =====
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const tab = document.getElementById(`tab-${tabId}`);
  if (tab) tab.classList.add('active');
}

// ===== LIGHTBOX =====
function openLightbox() {
  const mainImg  = document.getElementById('mainImage');
  const lbImg    = document.getElementById('lightboxImg');
  const lightbox = document.getElementById('lightbox');
  if (lbImg && mainImg) lbImg.src = mainImg.src;
  if (lightbox) {
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===== MODALS =====
function handleOrder() {
  const pkg   = currentService.packages[currentPackage];
  const info  = document.getElementById('modalPackageInfo');
  if (info) {
    info.innerHTML = `
      <div>
        <div class="pkg-label">${pkg.name} Package</div>
        <div class="pkg-details">
          ${pkg.deliveryDays} Days Delivery &nbsp;·&nbsp;
          ${pkg.revisions === 999 ? 'Unlimited' : pkg.revisions} Revisions
        </div>
      </div>
      <div class="pkg-modal-price">$${pkg.price}</div>
    `;
  }
  openModal('orderModal');
}

function handleContact() {
  const f = currentService.freelancer;
  const info = document.getElementById('contactSellerInfo');
  if (info) {
    info.innerHTML = `
      <img src="${f.avatar}" alt="${f.name}" />
      <div>
        <strong>${f.name}</strong>
        <span>${f.title}</span>
      </div>
    `;
  }
  openModal('contactModal');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function confirmOrder() {
  const requirements = document.getElementById('orderRequirements').value.trim();
  if (!requirements) {
    showToast('Please describe your requirements first!', 'error');
    return;
  }
  closeModal('orderModal');
  showToast('🎉 Order placed successfully! The seller will contact you soon.', 'success');
}

function sendMessage() {
  const message = document.getElementById('contactMessage').value.trim();
  if (!message) {
    showToast('Please write a message first!', 'error');
    return;
  }
  closeModal('contactModal');
  showToast('✉️ Message sent! The seller will reply shortly.', 'success');
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// ===== HELPER FUNCTIONS =====
function setEl(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function setImg(id, src, alt) {
  const el = document.getElementById(id);
  if (el) { el.src = src; el.alt = alt || ''; }
}

function truncate(str, len) {
  return str.length > len ? str.substring(0, len) + '...' : str;
}

function generateStars(rating) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return '★'.repeat(full) + '☆'.repeat(empty);
}