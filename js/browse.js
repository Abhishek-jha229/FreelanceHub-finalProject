/* ============================================
   BROWSE.JS — Browse & Search Scripts
   ============================================ */

// ===== ALL SERVICES DATA =====
const allServices = [
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
    tags: ["react", "website", "web", "frontend"],
    freelancer: {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/40?img=3",
      level: "Top Rated",
    },
  },
  {
    id: 2,
    title: "I will design a modern UI/UX for your mobile app",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    price: 79,
    rating: 5.0,
    reviews: 198,
    featured: true,
    deliveryDays: 5,
    tags: ["ui", "ux", "design", "mobile", "figma"],
    freelancer: {
      id: 2,
      name: "Sarah Kim",
      avatar: "https://i.pravatar.cc/40?img=5",
      level: "Top Rated",
    },
  },
  {
    id: 3,
    title: "I will write SEO-optimized blog posts and articles",
    category: "Content Writing",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
    price: 25,
    rating: 4.8,
    reviews: 456,
    featured: false,
    deliveryDays: 2,
    tags: ["seo", "writing", "blog", "content", "articles"],
    freelancer: {
      id: 3,
      name: "Emily Carter",
      avatar: "https://i.pravatar.cc/40?img=9",
      level: "Level 2",
    },
  },
  {
    id: 4,
    title: "I will create a professional logo and brand identity",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&q=80",
    price: 35,
    rating: 4.9,
    reviews: 287,
    featured: true,
    deliveryDays: 4,
    tags: ["logo", "branding", "design", "identity"],
    freelancer: {
      id: 4,
      name: "Marcus Lee",
      avatar: "https://i.pravatar.cc/40?img=12",
      level: "Top Rated",
    },
  },
  {
    id: 5,
    title: "I will develop a Flutter mobile app for iOS and Android",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    price: 129,
    rating: 4.7,
    reviews: 89,
    featured: false,
    deliveryDays: 14,
    tags: ["flutter", "mobile", "ios", "android", "app"],
    freelancer: {
      id: 5,
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/40?img=20",
      level: "Level 2",
    },
  },
  {
    id: 6,
    title: "I will setup Google Ads and Facebook ad campaigns",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    price: 59,
    rating: 4.8,
    reviews: 173,
    featured: false,
    deliveryDays: 3,
    tags: ["google ads", "facebook", "marketing", "ads", "campaigns"],
    freelancer: {
      id: 6,
      name: "David Park",
      avatar: "https://i.pravatar.cc/40?img=15",
      level: "Top Rated",
    },
  },
  {
    id: 7,
    title: "I will edit your YouTube videos with effects and transitions",
    category: "Video Animation",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
    price: 45,
    rating: 4.6,
    reviews: 124,
    featured: false,
    deliveryDays: 5,
    tags: ["video", "editing", "youtube", "animation", "effects"],
    freelancer: {
      id: 7,
      name: "Lisa Zhang",
      avatar: "https://i.pravatar.cc/40?img=25",
      level: "Level 1",
    },
  },
  {
    id: 8,
    title: "I will build a machine learning model for your dataset",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    price: 149,
    rating: 4.9,
    reviews: 67,
    featured: true,
    deliveryDays: 10,
    tags: ["machine learning", "data science", "python", "ai", "ml"],
    freelancer: {
      id: 8,
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/40?img=8",
      level: "Expert",
    },
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
    tags: ["nodejs", "api", "backend", "express", "rest"],
    freelancer: {
      id: 9,
      name: "Ryan Chen",
      avatar: "https://i.pravatar.cc/40?img=33",
      level: "Top Rated",
    },
  },
  {
    id: 10,
    title: "I will do professional photo editing and retouching",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
    price: 20,
    rating: 4.7,
    reviews: 389,
    featured: false,
    deliveryDays: 2,
    tags: ["photo editing", "retouching", "photoshop", "photos"],
    freelancer: {
      id: 10,
      name: "Nina Patel",
      avatar: "https://i.pravatar.cc/40?img=47",
      level: "Level 2",
    },
  },
  {
    id: 11,
    title: "I will write Python scripts to automate your tasks",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    price: 65,
    rating: 4.9,
    reviews: 210,
    featured: false,
    deliveryDays: 5,
    tags: ["python", "automation", "scripting", "bots"],
    freelancer: {
      id: 11,
      name: "Tom Baker",
      avatar: "https://i.pravatar.cc/40?img=60",
      level: "Expert",
    },
  },
  {
    id: 12,
    title: "I will create engaging social media content and graphics",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80",
    price: 30,
    rating: 4.6,
    reviews: 267,
    featured: false,
    deliveryDays: 3,
    tags: ["social media", "content", "graphics", "instagram", "marketing"],
    freelancer: {
      id: 12,
      name: "Olivia Brown",
      avatar: "https://i.pravatar.cc/40?img=44",
      level: "Level 2",
    },
  },
];

// ===== STATE =====
let state = {
  filtered: [...allServices],
  currentPage: 1,
  perPage: 6,
  view: "grid",
  filters: {
    search: "",
    category: "",
    budget: "",
    delivery: "",
    rating: "",
    sort: "relevant",
  },
};

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  readURLParams();
  setupFilterListeners();
  renderSkeletons();
  setTimeout(() => {
    applyFilters();
  }, 600);
});

// ===== READ URL PARAMS =====
function readURLParams() {
  const search = getUrlParam("search") || "";
  const category = getUrlParam("category") || "";

  if (search) {
    state.filters.search = search;
    const input = document.getElementById("browseSearchInput");
    if (input) input.value = search;
    updateBrowseHeader(
      `Results for "${search}"`,
      `Showing results for your search`,
    );
  }

  if (category) {
    state.filters.category = category;
    updateBrowseHeader(category, `Browse all ${category} services`);

    // Check matching radio
    const radios = document.querySelectorAll('input[name="category"]');
    radios.forEach((r) => {
      if (r.value === category) r.checked = true;
    });

    document.getElementById("breadcrumbCategory").textContent = category;
  }
}

function updateBrowseHeader(title, subtitle) {
  const titleEl = document.getElementById("browseTitle");
  const subtitleEl = document.getElementById("browseSubtitle");
  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = subtitle;
}

// ===== SETUP FILTER LISTENERS =====
function setupFilterListeners() {
  // Category
  document.querySelectorAll('input[name="category"]').forEach((radio) => {
    radio.addEventListener("change", applyFilters);
  });
  // Budget
  document.querySelectorAll('input[name="budget"]').forEach((radio) => {
    radio.addEventListener("change", applyFilters);
  });
  // Delivery
  document.querySelectorAll('input[name="delivery"]').forEach((radio) => {
    radio.addEventListener("change", applyFilters);
  });
  // Rating
  document.querySelectorAll('input[name="rating"]').forEach((radio) => {
    radio.addEventListener("change", applyFilters);
  });

  // Search input
  const searchInput = document.getElementById("browseSearchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") applySearch();
    });
  }
}

// ===== APPLY SEARCH =====
function applySearch() {
  const input = document.getElementById("browseSearchInput");
  state.filters.search = input ? input.value.trim().toLowerCase() : "";
  state.currentPage = 1;
  applyFilters();
}

// ===== APPLY ALL FILTERS =====
function applyFilters() {
  // Get filter values
  const catRadio = document.querySelector('input[name="category"]:checked');
  const budgetRadio = document.querySelector('input[name="budget"]:checked');
  const deliveryRadio = document.querySelector(
    'input[name="delivery"]:checked',
  );
  const ratingRadio = document.querySelector('input[name="rating"]:checked');
  const sortSelect = document.getElementById("sortSelect");

  state.filters.category = catRadio ? catRadio.value : "";
  state.filters.budget = budgetRadio ? budgetRadio.value : "";
  state.filters.delivery = deliveryRadio ? deliveryRadio.value : "";
  state.filters.rating = ratingRadio ? ratingRadio.value : "";
  state.filters.sort = sortSelect ? sortSelect.value : "relevant";

  // Filter data
  let result = [...allServices];

  // Search
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    result = result.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.includes(q)) ||
        s.freelancer.name.toLowerCase().includes(q),
    );
  }

  // Category
  if (state.filters.category) {
    result = result.filter((s) => s.category === state.filters.category);
  }

  // Budget
  if (state.filters.budget) {
    if (state.filters.budget === "200+") {
      result = result.filter((s) => s.price >= 200);
    } else {
      const [min, max] = state.filters.budget.split("-").map(Number);
      result = result.filter((s) => s.price >= min && s.price <= max);
    }
  }

  // Delivery
  if (state.filters.delivery) {
    result = result.filter(
      (s) => s.deliveryDays <= parseInt(state.filters.delivery),
    );
  }

  // Rating
  if (state.filters.rating) {
    result = result.filter((s) => s.rating >= parseFloat(state.filters.rating));
  }

  // Sort
  switch (state.filters.sort) {
    case "price_low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price_high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "popular":
      result.sort((a, b) => b.reviews - a.reviews);
      break;
    case "newest":
      result.sort((a, b) => b.id - a.id);
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  state.filtered = result;
  state.currentPage = 1;

  renderActiveFilters();
  renderServices();
  renderPagination();
}

// ===== RENDER ACTIVE FILTER TAGS =====
function renderActiveFilters() {
  const container = document.getElementById("activeFilters");
  if (!container) return;

  const tags = [];

  if (state.filters.search) {
    tags.push({ label: `"${state.filters.search}"`, key: "search" });
  }
  if (state.filters.category) {
    tags.push({ label: state.filters.category, key: "category" });
  }
  if (state.filters.budget) {
    const labels = {
      "0-25": "Under $25",
      "25-50": "$25-$50",
      "50-100": "$50-$100",
      "100-200": "$100-$200",
      "200+": "$200+",
    };
    tags.push({
      label: labels[state.filters.budget] || state.filters.budget,
      key: "budget",
    });
  }
  if (state.filters.delivery) {
    tags.push({ label: `≤ ${state.filters.delivery} days`, key: "delivery" });
  }
  if (state.filters.rating) {
    tags.push({ label: `★ ${state.filters.rating}+`, key: "rating" });
  }

  container.innerHTML = tags
    .map(
      (tag) => `
    <span class="filter-tag">
      ${tag.label}
      <button onclick="removeFilter('${tag.key}')">✕</button>
    </span>
  `,
    )
    .join("");
}

// ===== REMOVE SINGLE FILTER =====
function removeFilter(key) {
  state.filters[key] = "";

  // Uncheck radio
  if (["category", "budget", "delivery", "rating"].includes(key)) {
    const firstRadio = document.querySelector(`input[name="${key}"]`);
    if (firstRadio) firstRadio.checked = true;
  }

  if (key === "search") {
    const input = document.getElementById("browseSearchInput");
    if (input) input.value = "";
  }

  applyFilters();
}

// ===== RESET ALL FILTERS =====
function resetFilters() {
  state.filters = {
    search: "",
    category: "",
    budget: "",
    delivery: "",
    rating: "",
    sort: "relevant",
  };

  // Reset all radios to first option
  ["category", "budget", "delivery", "rating"].forEach((name) => {
    const firstRadio = document.querySelector(`input[name="${name}"]`);
    if (firstRadio) firstRadio.checked = true;
  });

  const searchInput = document.getElementById("browseSearchInput");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "relevant";

  applyFilters();
  showToast("Filters cleared!", "info");
}

// ===== RENDER SERVICES =====
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl = document.getElementById("resultsCount");

  if (!grid) return;

  const start = (state.currentPage - 1) * state.perPage;
  const end = start + state.perPage;
  const pageData = state.filtered.slice(start, end);

  // Update count
  if (countEl) {
    countEl.innerHTML = `Showing <strong>${state.filtered.length}</strong> result${state.filtered.length !== 1 ? "s" : ""}`;
  }

  // Empty state
  if (state.filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    const pagination = document.getElementById("pagination");
    if (pagination) pagination.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  const pagination = document.getElementById("pagination");
  if (pagination) pagination.style.display = "flex";

  // Render cards
  grid.innerHTML = pageData
    .map((service) => renderServiceCard(service))
    .join("");
}

// ===== RENDER SERVICE CARD =====
function renderServiceCard(service) {
  return `
    <div class="service-card" onclick="window.location.href='service-detail.html?id=${service.id}'">
      <div class="service-card-img">
        <img src="${service.image}" alt="${service.title}" loading="lazy" />
        ${
          service.featured
            ? `<div class="service-card-badge">
               <span class="badge badge-warning">⭐ Featured</span>
             </div>`
            : ""
        }
        <button
          class="wishlist-btn"
          onclick="toggleWishlist(event, this, ${service.id})"
          title="Save to wishlist"
        >
          <i class="fa fa-heart"></i>
        </button>
      </div>

      <div class="service-card-body">
        <div class="freelancer-mini">
          <img src="${service.freelancer.avatar}" alt="${service.freelancer.name}" />
          <div>
            <div class="f-name">${service.freelancer.name}</div>
            <div class="f-level">${service.freelancer.level}</div>
          </div>
        </div>

        <div class="service-card-title">${service.title}</div>

        <div class="service-card-meta">
          <span class="rating-star">★</span>
          <span class="rating-val">${service.rating.toFixed(1)}</span>
          <span style="color:var(--gray-300);">(${service.reviews})</span>
          <span style="margin: 0 6px; color:var(--gray-200);">|</span>
          <i class="fa fa-clock" style="font-size:10px;"></i>
          <span>&nbsp;${service.deliveryDays}d</span>
        </div>

        <div class="service-card-footer">
          <span>Starting at</span>
          <div class="price">$${service.price}</div>
        </div>
      </div>
    </div>
  `;
}

// ===== SKELETON LOADING =====
function renderSkeletons() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = Array(6)
    .fill("")
    .map(
      () => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton-body">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <div class="skeleton skeleton-line" style="width:28px; height:28px; border-radius:50%;"></div>
          <div class="skeleton skeleton-line" style="width:100px;"></div>
        </div>
        <div class="skeleton skeleton-line" style="width:100%;"></div>
        <div class="skeleton skeleton-line" style="width:80%;"></div>
        <div class="skeleton skeleton-line" style="width:60%; margin-top:8px;"></div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ===== PAGINATION =====
function renderPagination() {
  const totalPages = Math.ceil(state.filtered.length / state.perPage);
  const pageNums = document.getElementById("pageNumbers");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!pageNums) return;

  prevBtn.disabled = state.currentPage === 1;
  nextBtn.disabled = state.currentPage === totalPages || totalPages === 0;

  let pagesHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= state.currentPage - 1 && i <= state.currentPage + 1)
    ) {
      pagesHTML += `
        <button
          class="page-num ${i === state.currentPage ? "active" : ""}"
          onclick="goToPage(${i})"
        >${i}</button>
      `;
    } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
      pagesHTML += `<span style="color:var(--gray-400); align-self:center;">...</span>`;
    }
  }

  pageNums.innerHTML = pagesHTML;
}

function changePage(direction) {
  const totalPages = Math.ceil(state.filtered.length / state.perPage);
  const newPage = state.currentPage + direction;
  if (newPage >= 1 && newPage <= totalPages) {
    state.currentPage = newPage;
    renderServices();
    renderPagination();
    window.scrollTo({ top: 300, behavior: "smooth" });
  }
}

function goToPage(page) {
  state.currentPage = page;
  renderServices();
  renderPagination();
  window.scrollTo({ top: 300, behavior: "smooth" });
}

// ===== VIEW TOGGLE =====
function setView(view) {
  state.view = view;
  const grid = document.getElementById("servicesGrid");
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");

  if (view === "list") {
    grid.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  } else {
    grid.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  }
}

// ===== FILTER ACCORDION =====
function toggleFilter(header) {
  const body = header.nextElementSibling;
  header.classList.toggle("collapsed");
  body.classList.toggle("hidden");
}

// ===== MOBILE SIDEBAR =====
function toggleSidebar() {
  const sidebar = document.getElementById("filterSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.style.overflow = sidebar.classList.contains("open")
    ? "hidden"
    : "";
}

// ===== WISHLIST TOGGLE =====
function toggleWishlist(event, btn, serviceId) {
  event.stopPropagation();
  btn.classList.toggle("active");
  const isAdded = btn.classList.contains("active");
  btn.innerHTML = `<i class="fa fa-heart" style="font-size:13px"></i>`;
  btn.style.color = isAdded ? "#ef4444" : "";
  showToast(
    isAdded ? "Saved to wishlist! ❤️" : "Removed from wishlist",
    isAdded ? "success" : "info",
  );
}
