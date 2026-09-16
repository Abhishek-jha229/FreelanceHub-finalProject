/* ============================================
   PROFILE.JS — Freelancer Profile Scripts
   ============================================ */

// ===== FREELANCERS DATABASE =====
const freelancersDB = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack React Developer",
    avatar: "https://i.pravatar.cc/150?img=3",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    level: "Top Rated",
    isVerified: true,
    isPro: true,
    isOnline: true,
    rating: 4.9,
    reviewCount: 312,
    location: "New York, USA",
    memberSince: "January 2019",
    responseTime: "1 hour",
    minRate: 49,
    bio: `
      <p>Hi! I'm Alex, a passionate full-stack developer with <strong>6+ years of experience</strong> 
      building modern web applications that users love. I specialize in React, Node.js, and 
      cloud-based architectures.</p>
      <p>I've worked with startups, scale-ups, and Fortune 500 companies, helping them transform 
      their digital presence. My approach is simple — <strong>clean code, pixel-perfect design, 
      and on-time delivery</strong>. Every line of code I write is crafted with care.</p>
      <p>When I'm not coding, I'm contributing to open source, writing tech articles, 
      and mentoring junior developers. Let's build something amazing together! 🚀</p>
    `,
    stats: {
      orders: 520,
      rating: 4.9,
      onTime: 99,
      completion: 98,
      response: "1 hour",
    },
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Conversational" },
      { name: "French", level: "Basic" },
    ],
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Next.js",
      "GraphQL",
      "Docker",
      "AWS",
      "Tailwind CSS",
      "Redux",
      "REST APIs",
    ],
    education: [
      {
        degree: "B.Sc Computer Science",
        institution: "MIT — Massachusetts Institute of Technology",
        year: "2014 — 2018",
      },
      {
        degree: "Full Stack Web Development",
        institution: "Coursera — Meta",
        year: "2019",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services · 2023",
      },
      {
        name: "React Advanced Patterns",
        issuer: "Frontend Masters · 2022",
      },
      {
        name: "Google Cloud Professional",
        issuer: "Google · 2021",
      },
    ],
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        period: "2021 — Present",
        desc: "Leading a team of 5 developers to build large-scale React applications. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
      },
      {
        role: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2019 — 2021",
        desc: "Built and maintained multiple SaaS products using React, Node.js, and MongoDB. Improved app performance by 60% through optimization techniques.",
      },
      {
        role: "Junior Web Developer",
        company: "Digital Agency Co.",
        period: "2018 — 2019",
        desc: "Developed responsive websites and web apps for various clients using React and vanilla JavaScript.",
      },
    ],
    portfolio: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Handles 10,000+ daily users.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#",
      },
      {
        title: "Real-Time Dashboard",
        description:
          "Analytics dashboard with real-time data visualization using Chart.js and WebSockets.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: ["React", "Chart.js", "WebSocket", "Redux"],
        link: "#",
      },
      {
        title: "Social Media App",
        description:
          "A full-stack social media application with authentication, posts, likes, and real-time messaging.",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
        tags: ["React", "Firebase", "Socket.io"],
        link: "#",
      },
      {
        title: "SaaS Landing Page",
        description:
          "High-converting SaaS landing page with animations, A/B tested for 35% higher conversion.",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
        tags: ["React", "Framer Motion", "Tailwind"],
        link: "#",
      },
      {
        title: "Task Management App",
        description:
          "Trello-inspired task management app with drag & drop, team collaboration, and deadline tracking.",
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
        tags: ["React", "DnD Kit", "Node.js"],
        link: "#",
      },
      {
        title: "Restaurant Website",
        description:
          "Beautiful restaurant website with online menu, reservations system, and Google Maps integration.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
        tags: ["React", "Next.js", "Tailwind"],
        link: "#",
      },
    ],
    services: [
      {
        id: 1,
        title: "I will build a responsive React website for your business",
        category: "Web Development",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
        price: 49,
        rating: 4.9,
        reviews: 312,
        featured: true,
        deliveryDays: 3,
      },
      {
        id: 9,
        title: "I will create a full stack Node.js and Express REST API",
        category: "Web Development",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
        price: 89,
        rating: 4.8,
        reviews: 145,
        featured: false,
        deliveryDays: 7,
      },
      {
        id: 11,
        title: "I will build a Next.js app with SEO optimization",
        category: "Web Development",
        image:
          "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
        price: 129,
        rating: 4.9,
        reviews: 98,
        featured: false,
        deliveryDays: 10,
      },
    ],
  },
];

// ===== REVIEWS DATA =====
const profileReviewsDB = [
  {
    freelancerId: 1,
    reviewer: "Michael Thompson",
    country: "🇺🇸 United States",
    avatar: "https://i.pravatar.cc/50?img=11",
    rating: 5,
    date: "2 weeks ago",
    serviceRef: "React Website Development",
    text: "Alex is an absolute rockstar! He delivered an outstanding website that exceeded all my expectations. The code quality is exceptional, and he communicated clearly throughout the entire project. Will 100% work with him again!",
  },
  {
    freelancerId: 1,
    reviewer: "Sophie Laurent",
    country: "🇫🇷 France",
    avatar: "https://i.pravatar.cc/50?img=44",
    rating: 5,
    date: "1 month ago",
    serviceRef: "Node.js REST API",
    text: "Fantastic experience from start to finish. Alex took time to understand exactly what I needed and delivered a clean, well-documented API. The project was done ahead of schedule and the code is very maintainable.",
  },
  {
    freelancerId: 1,
    reviewer: "Raj Patel",
    country: "🇮🇳 India",
    avatar: "https://i.pravatar.cc/50?img=22",
    rating: 5,
    date: "1 month ago",
    serviceRef: "Next.js SEO App",
    text: "One of the best freelancers I've ever worked with. Alex is professional, talented, and a great communicator. Our website's performance improved dramatically. Highly recommended!",
  },
  {
    freelancerId: 1,
    reviewer: "Emma Wilson",
    country: "🇬🇧 United Kingdom",
    avatar: "https://i.pravatar.cc/50?img=47",
    rating: 4,
    date: "2 months ago",
    serviceRef: "React Website Development",
    text: "Great developer overall. The project required a few rounds of revisions but Alex handled everything patiently and professionally. Very happy with the final result.",
  },
  {
    freelancerId: 1,
    reviewer: "Carlos Mendez",
    country: "🇲🇽 Mexico",
    avatar: "https://i.pravatar.cc/50?img=31",
    rating: 5,
    date: "3 months ago",
    serviceRef: "React Website Development",
    text: "Perfect work! Alex built exactly what I envisioned. Clean code, great design, blazing fast delivery. This is my go-to developer for all future React projects!",
  },
];

// ===== STATE =====
let currentFreelancer = null;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(getUrlParam("id")) || 1;
  currentFreelancer =
    freelancersDB.find((f) => f.id === id) || freelancersDB[0];

  if (currentFreelancer) {
    renderProfileHero();
    renderStatsBar();
    renderSidebar();
    renderOverviewTab();
    renderServicesTab();
    renderPortfolioTab();
    renderReviewsTab();
    updateTabCounts();
    animateStats();
  }
});

// ===== RENDER HERO =====
function renderProfileHero() {
  const f = currentFreelancer;

  // Banner bg
  const bannerBg = document.getElementById("bannerBg");
  if (bannerBg && f.coverImage) {
    bannerBg.style.backgroundImage = `url('${f.coverImage}')`;
  }

  // Avatar
  setImg("profileAvatar", f.avatar, f.name);

  // Online badge
  const onlineBadge = document.getElementById("onlineBadge");
  if (onlineBadge) {
    onlineBadge.style.display = f.isOnline ? "flex" : "none";
  }

  // Name & badges
  setEl("profileName", f.name);

  const badgesEl = document.getElementById("profileBadges");
  if (badgesEl) {
    let badges = "";
    if (f.level === "Top Rated") {
      badges += `<span class="profile-badge badge-top">⭐ Top Rated</span>`;
    }
    if (f.isVerified) {
      badges += `<span class="profile-badge badge-verified"><i class="fa fa-check"></i> Verified</span>`;
    }
    if (f.isPro) {
      badges += `<span class="profile-badge badge-pro">⚡ Pro</span>`;
    }
    badgesEl.innerHTML = badges;
  }

  // Info
  setEl("profileTitle", f.title);
  setEl("profileRating", f.rating.toFixed(1));
  setEl("profileReviewCount", `(${f.reviewCount} reviews)`);
  setEl("profileLocation", f.location);
  setEl("profileMember", f.memberSince);
  setEl("profileResponse", f.responseTime);
  setEl("profileRate", `$${f.minRate}`);

  // Skills row
  const skillsRow = document.getElementById("profileSkills");
  if (skillsRow) {
    skillsRow.innerHTML = f.skills
      .slice(0, 6)
      .map(
        (skill) => `
      <span class="hero-skill-tag">${skill}</span>
    `,
      )
      .join("");
  }
}

// ===== RENDER STATS BAR =====
function renderStatsBar() {
  const s = currentFreelancer.stats;
  setEl("statOrders", s.orders.toLocaleString());
  setEl("statRating", `⭐ ${s.rating}`);
  setEl("statOnTime", `${s.onTime}%`);
  setEl("statReorder", `${s.completion}%`);
  setEl("statResponse", s.response);
}

// ===== RENDER SIDEBAR =====
function renderSidebar() {
  const f = currentFreelancer;

  // Languages
  const langEl = document.getElementById("languagesList");
  if (langEl) {
    langEl.innerHTML = f.languages
      .map(
        (lang) => `
      <div class="language-item">
        <span class="lang-name">${lang.name}</span>
        <span class="lang-level">${lang.level}</span>
      </div>
    `,
      )
      .join("");
  }

  // Skills
  const skillsEl = document.getElementById("skillsList");
  if (skillsEl) {
    skillsEl.innerHTML = f.skills
      .map(
        (skill) => `
      <span class="skill-pill">${skill}</span>
    `,
      )
      .join("");
  }

  // Education
  const eduEl = document.getElementById("educationList");
  if (eduEl) {
    eduEl.innerHTML = f.education
      .map(
        (edu) => `
      <div class="edu-item">
        <div class="edu-icon">
          <i class="fa fa-graduation-cap"></i>
        </div>
        <div class="edu-info">
          <strong>${edu.degree}</strong>
          <span>${edu.institution}</span><br/>
          <span>${edu.year}</span>
        </div>
      </div>
    `,
      )
      .join("");
  }

  // Certifications
  const certsEl = document.getElementById("certsList");
  if (certsEl) {
    certsEl.innerHTML = f.certifications
      .map(
        (cert) => `
      <div class="cert-item">
        <div class="cert-icon">
          <i class="fa fa-certificate"></i>
        </div>
        <div class="cert-info">
          <strong>${cert.name}</strong>
          <span>${cert.issuer}</span>
        </div>
      </div>
    `,
      )
      .join("");
  }
}

// ===== RENDER OVERVIEW TAB =====
function renderOverviewTab() {
  const f = currentFreelancer;

  // About
  setEl("aboutText", f.bio);

  // Experience
  const expEl = document.getElementById("experienceList");
  if (expEl) {
    expEl.innerHTML = f.experience
      .map(
        (exp, i) => `
      <div class="exp-item">
        <div class="exp-dot-col">
          <div class="exp-dot"></div>
          ${i < f.experience.length - 1 ? '<div class="exp-line"></div>' : ""}
        </div>
        <div class="exp-info">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-company">${exp.company}</div>
          <div class="exp-period">
            <i class="fa fa-calendar" style="font-size:10px;"></i> ${exp.period}
          </div>
          <p class="exp-desc">${exp.desc}</p>
        </div>
      </div>
    `,
      )
      .join("");
  }

  // Featured service
  const featuredEl = document.getElementById("featuredServiceCard");
  if (featuredEl && f.services.length > 0) {
    const s = f.services[0];
    featuredEl.innerHTML = `
      <div class="featured-service-wrap"
           onclick="window.location.href='service-detail.html?id=${s.id}'">
        <div class="fsc-img">
          <img src="${s.image}" alt="${s.title}" />
        </div>
        <div class="fsc-body">
          <div class="fsc-category">${s.category}</div>
          <div class="fsc-title">${s.title}</div>
          <div class="fsc-meta">
            <span class="star">★</span>
            <strong>${s.rating}</strong>
            <span>(${s.reviews} reviews)</span>
            <span>·</span>
            <i class="fa fa-clock" style="font-size:11px;"></i>
            <span>${s.deliveryDays} days delivery</span>
          </div>
          <div class="fsc-footer">
            <div class="fsc-price">
              <small>Starting at </small>$${s.price}
            </div>
            <button class="btn btn-primary btn-sm">
              View Service <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// ===== RENDER SERVICES TAB =====
function renderServicesTab() {
  const f = currentFreelancer;
  const el = document.getElementById("profileServicesGrid");
  if (!el) return;

  el.innerHTML = f.services
    .map(
      (s) => `
    <div class="ps-card"
         onclick="window.location.href='service-detail.html?id=${s.id}'">
      <div class="ps-img">
        <img src="${s.image}" alt="${s.title}" loading="lazy" />
        ${
          s.featured
            ? `<div class="ps-badge">
               <span class="badge badge-warning">⭐ Featured</span>
             </div>`
            : ""
        }
      </div>
      <div class="ps-body">
        <div class="ps-title">${s.title}</div>
        <div class="ps-meta">
          <span class="star">★</span>
          <strong>${s.rating.toFixed(1)}</strong>
          <span style="color:var(--gray-300);">(${s.reviews})</span>
          <span style="margin:0 6px; color:var(--gray-200);">|</span>
          <i class="fa fa-clock" style="font-size:10px;"></i>
          <span>&nbsp;${s.deliveryDays}d delivery</span>
        </div>
        <div class="ps-footer">
          <span>Starting at</span>
          <div class="ps-price">$${s.price}</div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ===== RENDER PORTFOLIO TAB =====
function renderPortfolioTab() {
  const f = currentFreelancer;
  const el = document.getElementById("portfolioGrid");
  if (!el) return;

  el.innerHTML = f.portfolio
    .map(
      (item, i) => `
    <div class="portfolio-item" onclick="openPortfolioLightbox(${i})">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="portfolio-overlay">
        <div class="po-title">${item.title}</div>
        <div class="po-tags">
          ${item.tags
            .slice(0, 3)
            .map(
              (tag) => `
            <span class="po-tag">${tag}</span>
          `,
            )
            .join("")}
        </div>
        <button class="po-view-btn">
          <i class="fa fa-eye"></i> View Details
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}

// ===== RENDER REVIEWS TAB =====
function renderReviewsTab() {
  const f = currentFreelancer;
  const reviews = profileReviewsDB.filter((r) => r.freelancerId === f.id);

  // Summary numbers
  setEl("prsRating", f.rating.toFixed(1));
  setEl("prsStars", generateStars(f.rating));
  setEl("prsCount", `${f.reviewCount} reviews`);

  // Rating bars
  const barsEl = document.getElementById("prsBars");
  if (barsEl) {
    const dist = { 5: 74, 4: 16, 3: 6, 2: 2, 1: 2 };
    barsEl.innerHTML = [5, 4, 3, 2, 1]
      .map(
        (star) => `
      <div class="prs-bar-row">
        <div class="prs-bar-label">
          <span>★</span> ${star}
        </div>
        <div class="prs-bar-track">
          <div class="prs-bar-fill" style="width:${dist[star]}%"></div>
        </div>
        <span class="prs-bar-pct">${dist[star]}%</span>
      </div>
    `,
      )
      .join("");
  }

  // Category ratings
  const catEl = document.getElementById("prsCategories");
  if (catEl) {
    const cats = [
      { name: "Communication", rating: 5.0 },
      { name: "Service Quality", rating: 4.9 },
      { name: "Delivery Speed", rating: 4.8 },
      { name: "Value for Money", rating: 4.9 },
    ];
    catEl.innerHTML = cats
      .map(
        (cat) => `
      <div class="prs-cat-item">
        <span class="prs-cat-name">${cat.name}</span>
        <div class="prs-cat-stars">
          ${generateStarIcons(cat.rating)}
        </div>
      </div>
    `,
      )
      .join("");
  }

  // Review cards
  const listEl = document.getElementById("profileReviewsList");
  if (listEl) {
    listEl.innerHTML = reviews
      .map(
        (r) => `
      <div class="pr-card">
        <div class="pr-header">
          <div class="pr-reviewer">
            <img src="${r.avatar}" alt="${r.reviewer}" />
            <div>
              <div class="pr-reviewer-name">${r.reviewer}</div>
              <div class="pr-reviewer-meta">
                ${r.country}
                <span>·</span>
                <span class="pr-service-ref">${r.serviceRef}</span>
              </div>
            </div>
          </div>
          <div class="pr-rating-side">
            <div class="pr-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
            <div class="pr-date">${r.date}</div>
          </div>
        </div>
        <p class="pr-text">${r.text}</p>
      </div>
    `,
      )
      .join("");
  }
}

// ===== UPDATE TAB COUNTS =====
function updateTabCounts() {
  const f = currentFreelancer;
  setEl("servicesTabCount", f.services.length);
  setEl("portfolioTabCount", f.portfolio.length);
  setEl("reviewsTabCount", f.reviewCount);
}

// ===== ANIMATE STATS =====
function animateStats() {
  const s = currentFreelancer.stats;
  animateValue("statOrders", 0, s.orders, 1400);
}

function animateValue(id, start, end, duration) {
  const el = document.getElementById(id);
  if (!el) return;

  let startTime = null;
  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * (end - start) + start).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== SWITCH PROFILE TAB =====
function switchProfileTab(tabId, btn) {
  document
    .querySelectorAll(".ptab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".ptab-content")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  const tab = document.getElementById(`ptab-${tabId}`);
  if (tab) tab.classList.add("active");
}

// ===== PORTFOLIO LIGHTBOX =====
function openPortfolioLightbox(index) {
  const item = currentFreelancer.portfolio[index];
  const lightbox = document.getElementById("portfolioLightbox");

  setImg("plbImage", item.image, item.title);
  setEl("plbTitle", item.title);
  setEl("plbDesc", item.description);

  const tagsEl = document.getElementById("plbTags");
  if (tagsEl) {
    tagsEl.innerHTML = item.tags
      .map(
        (tag) => `
      <span class="plb-tag">${tag}</span>
    `,
      )
      .join("");
  }

  const linkEl = document.getElementById("plbLink");
  if (linkEl) linkEl.href = item.link || "#";

  if (lightbox) {
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closePortfolioLightbox() {
  const lightbox = document.getElementById("portfolioLightbox");
  if (lightbox) {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ===== CONTACT MODAL =====
function openContactModal() {
  const f = currentFreelancer;
  const el = document.getElementById("contactModalSeller");

  if (el) {
    el.innerHTML = `
      <img src="${f.avatar}" alt="${f.name}" />
      <div>
        <strong>${f.name}</strong>
        <span>${f.title}</span>
      </div>
    `;
  }

  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function sendContactMessage() {
  const subject = document.getElementById("msgSubject").value.trim();
  const body = document.getElementById("msgBody").value.trim();

  if (!subject) {
    showToast("Please add a subject!", "error");
    return;
  }
  if (!body) {
    showToast("Please write your message!", "error");
    return;
  }

  closeContactModal();
  showToast(`✉️ Message sent to ${currentFreelancer.name}!`, "success");

  document.getElementById("msgSubject").value = "";
  document.getElementById("msgBody").value = "";
}

// ===== FOLLOW TOGGLE =====
function toggleFollow(btn) {
  const isFollowing = btn.classList.contains("following");

  if (isFollowing) {
    btn.classList.remove("following");
    btn.innerHTML = '<i class="fa fa-heart"></i> Follow';
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
    showToast("Unfollowed", "info");
  } else {
    btn.classList.add("following");
    btn.innerHTML = '<i class="fa fa-heart"></i> Following';
    btn.classList.remove("btn-outline");
    btn.classList.add("btn-primary");
    showToast(`❤️ Following ${currentFreelancer.name}!`, "success");
  }
}

// ===== SHARE PROFILE =====
function shareProfile(platform) {
  const url = window.location.href;
  const name = currentFreelancer.name;
  const urls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=Check out ${name} on FreelanceHub!&url=${encodeURIComponent(url)}`,
  };
  if (urls[platform]) {
    window.open(urls[platform], "_blank", "width=600,height=400");
  }
}

function copyProfileLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => showToast("Profile link copied! 🔗", "success"))
    .catch(() => showToast("Could not copy link", "error"));
}

// ===== HELPERS =====
function setEl(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function setImg(id, src, alt) {
  const el = document.getElementById(id);
  if (el) {
    el.src = src;
    el.alt = alt || "";
  }
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return "★".repeat(full) + "☆".repeat(empty);
}

function generateStarIcons(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="prs-cat-star ${i <= Math.round(rating) ? "" : "empty"}">★</span>`;
  }
  return html;
}

// Close modals on overlay click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    closeContactModal();
  }
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeContactModal();
    closePortfolioLightbox();
  }
});
