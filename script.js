// ===== INICIALIZAR LENIS SMOOTH SCROLL =====
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===== PARTÍCULAS ANIMADAS NO HERO =====
(function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.8 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#7c3aed' : '#06b6d4';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.02;
        this.vx += dx * force;
        this.vy += dy * force;
      }

      // Damping
      this.vx *= 0.99;
      this.vy *= 0.99;

      // Wrap around
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(Math.floor((width * height) / 8000), 120);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    const maxDist = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('resize', () => {
    init();
  });

  init();
  animate();
})();

// ===== DADOS DOS PRODUTOS =====
// EDITE ESTE ARRAY PARA ADICIONAR NOVOS PRODUTOS
const products = [
  {
    id: 1,
    title: "NerveGear",
    description: "Apresentação do melhor produto de Realidade Virtual já criado.",
    image: "https://media.istockphoto.com/id/1913776322/pt/foto/virtual-reality-headset-isolated.jpg?s=2048x2048&w=is&k=20&c=WUnI90Hc4eg4Uriwt_jKcFcQ8ZB0URDzij-9kGj_dNg=",
    studentName: "Eric Fabiano",
    websiteUrl: "https://mister-ef.github.io/Projeto-Produto-Tuba/",
    githubUrl: "https://github.com/Mister-EF/Projeto-Produto-Tuba"
  },
  // ADICIONE NOVOS PRODUTOS AQUI
  // Exemplo:
  {
    id: 2,
    title: "Landing Page de Startup",
    description: "Página de apresentação moderna com animações e call-to-action para captação de leads.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    studentName: "Maria Santos",
    websiteUrl: "https://maria-startup.com",
    githubUrl: "https://github.com/mariasantos/startup-landing"
  },
];

// Slots vazios (6 no total)
const emptySlots = [
  { id: 'empty-2', isEmpty: true },
  { id: 'empty-3', isEmpty: true },
  { id: 'empty-4', isEmpty: true },
  { id: 'empty-5', isEmpty: true },
  { id: 'empty-6', isEmpty: true },
  { id: 'empty-7', isEmpty: true },
];

// ===== FUNÇÕES =====

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22300%22><rect fill=%22%23111118%22 width=%22500%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2218%22 fill=%22%237c3aed%22>Projeto</text></svg>'">
    </div>
    <div class="product-content">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.description}</p>
      <div class="student-badge">
        ${product.studentName}
      </div>
      <div class="product-links">
        <a href="${product.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-website">
          <span>🌐</span> Ver Site
        </a>
        <a href="${product.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-github">
          <span>💻</span> GitHub
        </a>
      </div>
    </div>
  `;

  return card;
}

function createEmptySlot(index) {
  const slot = document.createElement('div');
  slot.className = 'empty-slot';
  slot.style.animationDelay = `${index * 0.1}s`;

  slot.innerHTML = `
    <div class="empty-slot-icon">✦</div>
    <div class="empty-slot-text">Seu projeto aqui</div>
    <div class="empty-slot-sub">Adicione ao script.js</div>
  `;

  return slot;
}

function renderProducts(filteredProducts) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const productsCount = document.getElementById('productsCount');

  grid.innerHTML = '';

  if (filteredProducts.length === 0) {
    noResults.style.display = 'block';
    productsCount.textContent = '0';
    return;
  }

  noResults.style.display = 'none';
  productsCount.textContent = filteredProducts.length;

  filteredProducts.forEach((product, index) => {
    grid.appendChild(createProductCard(product, index));
  });

  // Adicionar slots vazios
  emptySlots.forEach((slot, index) => {
    grid.appendChild(createEmptySlot(index + filteredProducts.length));
  });
}

function filterProducts(searchTerm) {
  if (!searchTerm) return products;

  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(term) ||
    product.studentName.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
}

// ===== EVENT LISTENERS =====

const searchInput = document.getElementById('searchInput');
let debounceTimer;

searchInput.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const filtered = filterProducts(e.target.value);
    renderProducts(filtered);
  }, 200);
});

// ===== INICIALIZAÇÃO =====
renderProducts(products);
