/* ============================================
   HOME.JS — Home Page Scripts
   ============================================ */

// ===== MOCK DATA =====
const servicesData = [
  {
    id: 1,
    title: "I will build a responsive React website for your business",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
    price: 49,
    rating: 4.9,
    reviews: 312,
    featured: true,
    deliveryDays: 3,
    freelancer: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/40?img=3",
      level: "Top Rated"
    }
  },
  {
    id: 2,
    title: "I will design a modern UI/UX for your mobile app",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    price: 79,
    rating: 5.0,
    reviews: 198,
    featured: true,
    deliveryDays: 5,
    freelancer: {
      name: "Sarah Kim",
      avatar: "https://i.pravatar.cc/40?img=5",
      level: "Top Rated"
    }
  },
  {
    id: 3,
    title: "I will write SEO-optimized blog posts and articles",
    category: "Content Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
    price: 25,
    rating: 4.8,
    reviews: 456,
    featured: false,
    deliveryDays: 2,
    freelancer: {
      name: "Emily Carter",
      avatar: "https://i.pravatar.cc/40?img=9",
      level: "Level 2"
    }
  },
  {
    id: 4,
    title: "I will create a professional logo and brand identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&q=80",
    price: 35,
    rating: 4.9,
    reviews: 287,
    featured: true,
    deliveryDays: 4,
    freelancer: {
      name: "Marcus Lee",
      avatar: "https://i.pravatar.cc/40?img=12",
      level: "Top Rated"
    }
  },
  {
    id: 5,
    title: "I will develop a Flutter mobile app for iOS and Android",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    price: 129,
    rating: 4.7,
    reviews: 89,
    featured: false,
    deliveryDays: 14,
    freelancer: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/40?img=20",
      level: "Level 2"
    }
  },
  {
    id: 6,
    title: "I will setup Google Ads and Facebook ad campaigns",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    price: 59,
    rating: 4.8,
    reviews: 173,
    featured: false,
    deliveryDays: 3,
    freelancer: {
      name: "David Park",
      avatar: "https://i.pravatar.cc/40?img=15",
      level: "Top Rated"
    }
  },
  {
    id: 7,
    title: "I will edit your YouTube videos with effects and transitions",
    category: "Video & Animation",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
    price: 45,
    rating: 4.6,
    reviews: 124,
    featured: false,
    deliveryDays: 5,
    freelancer: {
      name: "Lisa Zhang",
      avatar: "https://i.pravatar.cc/40?img=25",
      level: "Level 1"
    }
  },
  {
    id: 8,
    title: "I will build a machine learning model for your dataset",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    price: 149,
    rating: 4.9,
    reviews: 67,
    featured: true,
    deliveryDays: 10,
    freelancer: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/40?img=8",
      level: "Expert"
    }
  }
];

const freelancersData = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/80?img=3",
    rating: 4.9,
    reviews: 312,
    completedJobs: 420,
    skills: ["React", "Node.js", "MongoDB"],
    online: true,
    hourlyRate: 45
  },
  {
    id: 2,
    name: "Sarah Kim",
    title: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5.0,
    reviews: 198,
    completedJobs: 285,
    skills: ["Figma", "Sketch", "Prototyping"],
    online: true,
    hourlyRate: 60
  },
  {
    id: 3,
    name: "Marcus Lee",
    title: "Brand Identity Designer",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 4.8,
    reviews: 287,
    completedJobs: 390,
    skills: ["Illustrator", "Photoshop", "Branding"],
    online: false,
    hourlyRate: 40
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "Mobile App Developer",
    avatar: "https://i.pravatar.cc/80?img=20",
    rating: 4.7,
    reviews: 89,
    completedJobs: 120,
    skills: ["Flutter", "React Native", "Swift"],
    online: true,
    hourlyRate: 55
  }
];

// ===== RENDER SERVICE CARDS =====
function renderServiceCard(service) {
  return `
    <div class="service-card" onclick="window.location.href='service-detail.html?id=${service.id}'">
      <div class="service-card-img">
        <img src="${service.image}" alt="${service.title}" loading="lazy" />
        ${service.featured ? `<div class="service-card-badge"><span class="badge badge-warning">⭐ Featured</span></div>` : ''}
        <button class="wishlist-btn" onclick="toggleWishlist(event, this, ${service.id})">
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
          <span class="rating-val">${service.rating}</span>
          <span>(${service.reviews})</span>
          <span style="margin-left:8px; color: var(--gray-300)">|</span>
          <span style="margin-left:8px;"><i class="fa fa-clock" style="font-size:11px;"></i> ${service.deliveryDays}d delivery</span>
        </div>
        <div class="service-card-footer">
          <span>Starting at</span>
          <div class="price">$${service.price}</div>
        </div>
      </div>
    </div>
  `;
}

// ===== RENDER FREELANCER CARDS =====
function renderFreelancerCard(freelancer) {
  const stars = generateStars(freelancer.rating);
  const skillsHTML = freelancer.skills
    .map(s => `<span class="skill-tag">${s}</span>`)
    .join('');

  return `
    <div class="freelancer-card" onclick="window.location.href='freelancer-profile.html?id=${freelancer.id}'">
      <div class="f-avatar-wrap">
        <img src="${freelancer.avatar}" alt="${freelancer.name}" />
        ${freelancer.online ? '<div class="f-online"></div>' : ''}
      </div>
      <div class="f-name">${freelancer.name}</div>
      <div class="f-title">${freelancer.title}</div>
      <div class="f-skills">${skillsHTML}</div>
      <div class="f-stats">
        <div class="f-stat">
          <strong>${freelancer.rating}</strong>
          <span>Rating</span>
        </div>
        <div class="f-stat">
          <strong>${freelancer.reviews}+</strong>
          <span>Reviews</span>
        </div>
        <div class="f-stat">
          <strong>$${freelancer.hourlyRate}/hr</strong>
          <span>Rate</span>
        </div>
      </div>
    </div>
  `;
}

// ===== GENERATE STARS =====
function generateStars(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= Math.round(rating) ? '' : 'empty'}">★</span>`;
  }
  return starsHTML;
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateNumber(el, target) {
  let current = 0;
  const increment = target / 80;
  const duration = 1500;
  const stepTime = duration / 80;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, stepTime);
}

// ===== HERO SEARCH =====
function handleSearch() {
  const query = document.getElementById('heroSearch').value.trim();
  if (query) {
    window.location.href = `browse.html?search=${encodeURIComponent(query)}`;
  }
}

// ===== WISHLIST TOGGLE =====
function toggleWishlist(event, btn, serviceId) {
  event.stopPropagation();
  btn.classList.toggle('active');
  const isAdded = btn.classList.contains('active');
  btn.innerHTML = `<i class="fa fa-heart${isAdded ? '' : '-o'}" style="font-size:14px"></i>`;
  showToast(isAdded ? 'Added to wishlist! ❤️' : 'Removed from wishlist', isAdded ? 'success' : 'info');
}

// ===== INITIALIZE HOME PAGE =====
document.addEventListener('DOMContentLoaded', () => {
  // Render featured services
  const servicesContainer = document.getElementById('featuredServices');
  if (servicesContainer) {
    servicesContainer.innerHTML = servicesData
      .map(s => renderServiceCard(s))
      .join('');
  }

  // Render top freelancers
  const freelancersContainer = document.getElementById('topFreelancers');
  if (freelancersContainer) {
    freelancersContainer.innerHTML = freelancersData
      .map(f => renderFreelancerCard(f))
      .join('');
  }

  // Counter animation
  animateCounters();

  // Hero search enter key
  const heroSearch = document.getElementById('heroSearch');
  if (heroSearch) {
    heroSearch.addEventListener('keypress', e => {
      if (e.key === 'Enter') handleSearch();
    });
  }
});