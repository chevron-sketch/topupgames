// ==========================================
// LOCAL STORAGE KEY NAMES
// ==========================================
const KEY_GAMES = 'nexustopup_games_v3';
const KEY_TRANSACTIONS = 'nexustopup_transactions_v3';
const KEY_VOUCHERS = 'nexustopup_vouchers_v3';
const KEY_USERS = 'nexustopup_users_v3';
const KEY_SESSION = 'nexustopup_session_v3';

// ==========================================
// DEFAULT AUTH / USER SEED DATA
// ==========================================
const DEFAULT_USERS = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

// ==========================================
// DEFAULT SEED DATA
// ==========================================
const DEFAULT_GAMES = [
  {
    id: 'mlbb',
    title: 'Mobile Legends: Bang Bang',
    developer: 'Moonton',
    category: 'Mobile',
    image: 'https://img.utdstc.com/screen/13/mobile-legends-bang-bang-1.jpg',
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    placeholderId: 'User ID (Zone ID) | Contoh: 12345678 (2345)',
    description: 'Top up Diamond Mobile Legends termurah, tercepat, dan terpercaya hanya di NexusTopup.',
    packages: [
      { id: 'ml_86', name: '86 Diamonds', price: 20000 },
      { id: 'ml_172', name: '172 Diamonds', price: 40000 },
      { id: 'ml_257', name: '257 Diamonds', price: 60000 },
      { id: 'ml_706', name: '706 Diamonds', price: 160000 },
      { id: 'ml_wdp', name: 'Weekly Diamond Pass', price: 28000 }
    ]
  },
  {
    id: 'ff',
    title: 'Free Fire',
    developer: 'Garena',
    category: 'Mobile',
    image: 'https://img.utdstc.com/screen/13/garena-free-fire-1.jpg',
    gradient: 'linear-gradient(135deg, #7c2d12, #ea580c)',
    placeholderId: 'Player ID | Contoh: 123456789',
    description: 'Isi Diamond Free Fire instan masuk dalam hitungan detik. Cukup masukkan ID Free Fire Anda.',
    packages: [
      { id: 'ff_50', name: '50 Diamonds', price: 8000 },
      { id: 'ff_100', name: '100 Diamonds', price: 15000 },
      { id: 'ff_355', name: '355 Diamonds', price: 50000 },
      { id: 'ff_720', name: '720 Diamonds', price: 100000 }
    ]
  },
  {
    id: 'valorant',
    title: 'Valorant',
    developer: 'Riot Games',
    category: 'PC',
    image: 'https://images.contentstack.io/v3/assets/blt73543d22f598cc00/blt066a34cdb646c76e/65306dbe8cfd82c21961ee49/Valorant_Vertical_Poster.jpg',
    gradient: 'linear-gradient(135deg, #991b1b, #ef4444)',
    placeholderId: 'Riot ID#Tag | Contoh: NexusAgent#ID1',
    description: 'Top up Valorant Points (VP) murah dengan pembayaran terlengkap: QRIS, DANA, GoPay, OVO.',
    packages: [
      { id: 'val_475', name: '475 Valorant Points', price: 50000 },
      { id: 'val_1000', name: '1000 Valorant Points', price: 100000 },
      { id: 'val_2050', name: '2050 Valorant Points', price: 200000 },
      { id: 'val_5300', name: '5300 Valorant Points', price: 500000 }
    ]
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile',
    developer: 'Level Infinite',
    category: 'Mobile',
    image: 'https://img.utdstc.com/screen/13/pubg-mobile-1.jpg',
    gradient: 'linear-gradient(135deg, #064e3b, #10b981)',
    placeholderId: 'Character ID | Contoh: 5123456789',
    description: 'Dapatkan UC PUBG Mobile Anda dengan harga agen. Proses cepat dan aman.',
    packages: [
      { id: 'pubg_60', name: '60 UC', price: 15000 },
      { id: 'pubg_325', name: '325 UC', price: 75000 },
      { id: 'pubg_660', name: '660 UC', price: 150000 },
      { id: 'pubg_1800', name: '1800 UC', price: 375000 }
    ]
  },
  {
    id: 'roblox',
    title: 'Roblox',
    developer: 'Roblox Corporation',
    category: 'PC',
    image: 'https://i.guim.co.uk/img/media/0ec6113b29c990bc12fb3e75e985b88220ad339b/0_109_2400_1440/master/2400.jpg?width=620&quality=85',
    gradient: 'linear-gradient(135deg, #374151, #1f2937)',
    placeholderId: 'Username Roblox | Contoh: PlayerHebat',
    description: 'Beli Robux Roblox legal, murah, dan aman hanya di NexusTopup.',
    packages: [
      { id: 'rbx_80', name: '80 Robux', price: 15000 },
      { id: 'rbx_400', name: '400 Robux', price: 75000 },
      { id: 'rbx_800', name: '800 Robux', price: 150000 },
      { id: 'rbx_1700', name: '1700 Robux', price: 300000 },
      { id: 'rbx_4500', name: '4500 Robux', price: 750000 }
    ]
  }
];

const DEFAULT_VOUCHERS = [
  { code: 'NEXUSNEW', type: 'percentage', value: 15, maxDiscount: 15000, description: 'Diskon 15% untuk pengguna baru (Maks Rp15.000)' },
  { code: 'PROMO2026', type: 'percentage', value: 20, maxDiscount: 20000, description: 'Promo Spesial Hari Ini - Diskon 20% (Maks Rp20.000)' },
  { code: 'MANTAP', type: 'flat', value: 5000, description: 'Diskon Potongan Langsung Rp5.000' }
];

const DEFAULT_TRANSACTIONS = [
  {
    id: 'TX-839210',
    userId: '68291038 (2019)',
    gameId: 'mlbb',
    gameTitle: 'Mobile Legends: Bang Bang',
    packageName: '86 Diamonds',
    price: 20000,
    discount: 3000,
    totalPrice: 17000,
    paymentMethod: 'qris',
    status: 'Success',
    createdAt: '2026-07-07T09:12:00.000Z',
    owner: 'user'
  },
  {
    id: 'TX-192837',
    userId: 'NexusAgent#ID1',
    gameId: 'valorant',
    gameTitle: 'Valorant',
    packageName: '1000 Valorant Points',
    price: 100000,
    discount: 20000,
    totalPrice: 80000,
    paymentMethod: 'dana',
    status: 'Success',
    createdAt: '2026-07-07T10:45:00.000Z',
    owner: 'user'
  },
  {
    id: 'TX-482019',
    userId: '921830219',
    gameId: 'ff',
    gameTitle: 'Free Fire',
    packageName: '355 Diamonds',
    price: 50000,
    discount: 0,
    totalPrice: 50000,
    paymentMethod: 'gopay',
    status: 'Pending',
    createdAt: '2026-07-07T11:20:00.000Z',
    owner: 'user'
  }
];

// ==========================================
// APP STATE VARIABLES
// ==========================================
let currentTab = 'games';
let currentAdminSubTab = 'catalog';
let gamesList = [];
let transactionsList = [];
let vouchersList = [];
let usersList = [];
let currentUser = null;
let authMode = 'login'; // 'login' | 'register'

// Filtering catalogs state
let activeCategory = 'Semua';
let searchGameQuery = '';

// Filtering history state
let searchInvoiceQuery = '';

// Checkout form state helpers
let selectedGameForOrder = null;
let selectedPackageForOrder = null;
let selectedPaymentMethod = '';
let appliedVoucherForOrder = null;

// Admin Panel state helpers
let editingGameId = null; // null for creating
let tempPackagesList = [];

// ==========================================
// LIFECYCLE INITIALIZER
// ==========================================
// ==========================================
// LIFECYCLE INITIALIZER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  loadDataFromStorage();
  
  // Set up event listeners that aren't inline
  document.getElementById('search-game-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });
  document.getElementById('search-invoice-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });

  // Check login session
  checkSession();
});

// Storage init
function initStorage() {
  if (!localStorage.getItem(KEY_GAMES)) {
    localStorage.setItem(KEY_GAMES, JSON.stringify(DEFAULT_GAMES));
  }
  if (!localStorage.getItem(KEY_TRANSACTIONS)) {
    localStorage.setItem(KEY_TRANSACTIONS, JSON.stringify(DEFAULT_TRANSACTIONS));
  }
  if (!localStorage.getItem(KEY_VOUCHERS)) {
    localStorage.setItem(KEY_VOUCHERS, JSON.stringify(DEFAULT_VOUCHERS));
  }
  if (!localStorage.getItem(KEY_USERS)) {
    localStorage.setItem(KEY_USERS, JSON.stringify(DEFAULT_USERS));
  }
}

function loadDataFromStorage() {
  gamesList = JSON.parse(localStorage.getItem(KEY_GAMES)) || [];
  transactionsList = JSON.parse(localStorage.getItem(KEY_TRANSACTIONS)) || [];
  vouchersList = JSON.parse(localStorage.getItem(KEY_VOUCHERS)) || [];
  usersList = JSON.parse(localStorage.getItem(KEY_USERS)) || [];
}

function saveDataToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  loadDataFromStorage();
}

// ==========================================
// NAVIGATION / ROUTER
// ==========================================
function navigateTo(tabName) {
  // Authorization guard
  if (tabName === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
    showToast('Akses ditolak! Halaman ini hanya untuk Administrator.', 'error');
    navigateTo('games');
    return;
  }
  
  currentTab = tabName;
  
  // Update Navbar Links Active State
  const tabs = ['games', 'history', 'admin'];
  tabs.forEach(t => {
    const el = document.getElementById(`nav-btn-${t}`);
    if (el) {
      if (t === tabName || (t === 'games' && tabName === 'order')) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });

  // Toggle View Panels
  const views = ['games', 'order', 'history', 'admin'];
  views.forEach(v => {
    const viewEl = document.getElementById(`view-${v}`);
    if (viewEl) {
      if (v === tabName) {
        viewEl.classList.add('active');
      } else {
        viewEl.classList.remove('active');
      }
    }
  });

  // Refresh tables or structures on entry
  if (tabName === 'history') {
    renderTransactionsTable();
  } else if (tabName === 'admin') {
    renderAdminPanel();
  }
}

// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
function checkSession() {
  const sessionData = localStorage.getItem(KEY_SESSION);
  
  if (sessionData) {
    currentUser = JSON.parse(sessionData);
    
    // Hide login screen, show application layout
    document.getElementById('login-wrapper').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');
    
    // Toggle admin link visibility in navbar based on role
    const adminLink = document.getElementById('nav-btn-admin');
    if (adminLink) {
      if (currentUser.role === 'admin') {
        adminLink.classList.remove('hidden');
      } else {
        adminLink.classList.add('hidden');
      }
    }

    // Load database elements
    renderGamesGrid();
    renderTransactionsTable();
    renderAdminPanel();
  } else {
    currentUser = null;
    
    // Show login screen, hide application layout
    document.getElementById('login-wrapper').classList.remove('hidden');
    document.getElementById('app-layout').classList.add('hidden');
    
    // Reset form fields
    document.getElementById('auth-username').value = '';
    document.getElementById('auth-password').value = '';
    document.getElementById('auth-error-msg').innerText = '';
  }
}

function switchAuthTab(mode) {
  authMode = mode;
  const tabLogin = document.getElementById('auth-tab-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const submitBtn = document.getElementById('auth-submit-btn');
  const subtitle = document.getElementById('login-subtitle');
  const userLabel = document.getElementById('auth-user-label');
  
  document.getElementById('auth-error-msg').innerText = '';

  if (mode === 'login') {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    submitBtn.innerText = 'Masuk ke Akun';
    subtitle.innerText = 'Silakan masuk untuk melanjutkan transaksi';
    userLabel.innerText = 'Username';
  } else {
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
    submitBtn.innerText = 'Daftar Akun Baru';
    subtitle.innerText = 'Daftarkan akun NexusTopup Anda';
    userLabel.innerText = 'Pilih Username';
  }
}

function handleAuth(event) {
  event.preventDefault();
  
  const usernameInput = document.getElementById('auth-username').value.trim();
  const passwordInput = document.getElementById('auth-password').value.trim();
  const errorMsg = document.getElementById('auth-error-msg');

  if (!usernameInput || !passwordInput) {
    errorMsg.innerText = 'Kolom tidak boleh kosong!';
    return;
  }

  if (authMode === 'login') {
    // LOGIN MODE
    const user = usersList.find(u => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);
    if (user) {
      errorMsg.innerText = '';
      localStorage.setItem(KEY_SESSION, JSON.stringify(user));
      showToast(`Selamat datang kembali, ${user.username}!`, 'success');
      checkSession();
      
      if (user.role === 'admin') {
        navigateTo('admin');
      } else {
        navigateTo('games');
      }
    } else {
      errorMsg.innerText = 'Username atau password salah!';
    }
  } else {
    // REGISTER MODE
    const exist = usersList.some(u => u.username.toLowerCase() === usernameInput.toLowerCase());
    if (exist) {
      errorMsg.innerText = 'Username sudah digunakan!';
      return;
    }

    if (usernameInput.toLowerCase() === 'admin') {
      errorMsg.innerText = 'Username "admin" tidak diperbolehkan!';
      return;
    }

    const newUser = {
      username: usernameInput,
      password: passwordInput,
      role: 'user'
    };

    usersList.push(newUser);
    saveDataToStorage(KEY_USERS, usersList);
    
    showToast('Registrasi akun berhasil! Silakan login.', 'success');
    switchAuthTab('login');
    document.getElementById('auth-username').value = usernameInput;
    document.getElementById('auth-password').value = passwordInput;
  }
}

function handleLogout() {
  if (confirm('Apakah Anda yakin ingin keluar dari akun?')) {
    localStorage.removeItem(KEY_SESSION);
    showToast('Anda berhasil keluar.', 'success');
    checkSession();
  }
}

// ==========================================
// TOAST NOTIFICATION UTILITIES
// ==========================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  
  const toastNode = document.createElement('div');
  toastNode.className = `toast toast-${type}`;
  
  const iconMarkup = type === 'error' ? 
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>` :
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>`;

  toastNode.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${iconMarkup}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close" onclick="dismissToast(this.parentNode)">&times;</button>
  `;

  container.appendChild(toastNode);

  // Auto Dismiss after 3s
  setTimeout(() => {
    dismissToast(toastNode);
  }, 3000);
}

function dismissToast(toastNode) {
  if (toastNode && toastNode.parentNode) {
    toastNode.classList.add('fade-out');
    // Wait for slide animation
    setTimeout(() => {
      if (toastNode && toastNode.parentNode) {
        toastNode.parentNode.removeChild(toastNode);
      }
    }, 3000);
  }
}

// ==========================================
// BERANDA / GAME GRID DYNAMICS
// ==========================================
function filterCategory(catName) {
  activeCategory = catName;
  const categories = ['All', 'Mobile', 'PC'];
  categories.forEach(c => {
    const el = document.getElementById(`cat-btn-${c}`);
    if (el) {
      if (c === (catName === 'Semua' ? 'All' : catName)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });
  renderGamesGrid();
}

function handleSearchGame(query) {
  searchGameQuery = query;
  renderGamesGrid();
}

function clearGameSearch() {
  document.getElementById('search-game-input').value = '';
  searchGameQuery = '';
  renderGamesGrid();
}

function renderGamesGrid() {
  const gridContainer = document.getElementById('games-grid-container');
  const emptyState = document.getElementById('empty-catalog-state');
  
  gridContainer.innerHTML = '';
  
  const filtered = gamesList.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchGameQuery.toLowerCase()) || 
                          game.developer.toLowerCase().includes(searchGameQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  
  filtered.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.setProperty('--card-glow-grad', game.gradient);
    card.onclick = () => openOrderForm(game.id);

    card.innerHTML = `
      <div class="game-card-img-wrapper">
        <img src="${game.image}" alt="${game.title}" class="game-card-img" />
        <span class="game-card-badge">${game.category}</span>
      </div>
      <div class="game-card-details">
        <h3 class="game-card-title">${game.title}</h3>
        <p class="game-card-dev">${game.developer}</p>
        <div class="game-card-footer">
          <span class="process-time-indicator">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Proses Instan
          </span>
          <span class="topup-action-btn">Top Up</span>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

// ==========================================
// CHECKOUT ORDER FORM ENGINE
// ==========================================
function openOrderForm(gameId) {
  const game = gamesList.find(g => g.id === gameId);
  if (!game) {
    showToast('Game tidak ditemukan!', 'error');
    return;
  }

  // Reset form selections
  selectedGameForOrder = game;
  selectedPackageForOrder = null;
  selectedPaymentMethod = '';
  appliedVoucherForOrder = null;
  
  // Clear HTML input values
  document.getElementById('input-user-id').value = '';
  document.getElementById('input-zone-id').value = '';
  document.getElementById('voucher-input-code').value = '';
  document.getElementById('voucher-error-log').innerText = '';
  
  // Close active payments selection style
  const paymentItems = document.querySelectorAll('.payment-item-card');
  paymentItems.forEach(p => p.classList.remove('selected'));
  const radioInputs = document.querySelectorAll('input[name="payment_method_radio"]');
  radioInputs.forEach(r => r.checked = false);

  // Setup game details in UI
  document.getElementById('order-game-hero-banner').style.background = game.gradient;
  document.getElementById('order-game-img').src = game.image;
  document.getElementById('order-game-category').innerText = game.category;
  document.getElementById('order-game-title').innerText = game.title;
  document.getElementById('order-game-developer').innerText = game.developer;
  document.getElementById('order-game-description').innerText = game.description || 'Layanan top up game cepat dan instan 24 jam nonstop.';
  
  // Zone ID setup
  const zoneWrapper = document.getElementById('input-zone-id-wrapper');
  const zoneInput = document.getElementById('input-zone-id');
  if (game.id === 'mlbb') {
    zoneWrapper.classList.remove('hidden');
    zoneInput.required = true;
  } else {
    zoneWrapper.classList.add('hidden');
    zoneInput.required = false;
  }
  document.getElementById('label-id-hint').innerText = game.placeholderId || 'Masukkan ID Game Anda dengan benar.';

  // Render nominal packages list
  const pkgGrid = document.getElementById('form-packages-grid');
  pkgGrid.innerHTML = '';
  
  if (game.packages && game.packages.length > 0) {
    game.packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'package-card';
      card.id = `pkg-card-${pkg.id}`;
      card.onclick = () => selectPackage(pkg);
      card.innerHTML = `
        <div class="package-icon">💎</div>
        <div class="package-name">${pkg.name}</div>
        <div class="package-price">Rp ${pkg.price.toLocaleString('id-ID')}</div>
      `;
      pkgGrid.appendChild(card);
    });
  } else {
    pkgGrid.innerHTML = '<p class="no-packages-msg">Tidak ada paket tersedia untuk game ini saat ini.</p>';
  }

  // Bind values to real form change listeners
  document.getElementById('input-user-id').oninput = updateCheckoutSummary;
  if (game.id === 'mlbb') {
    document.getElementById('input-zone-id').oninput = updateCheckoutSummary;
  }

  // Reset coupon banners
  document.getElementById('voucher-banner-applied').classList.add('hidden');
  document.getElementById('voucher-btn-apply').classList.remove('hidden');
  document.getElementById('voucher-btn-remove').classList.add('hidden');
  document.getElementById('voucher-input-code').disabled = false;

  updateCheckoutSummary();
  navigateTo('order');
}

function selectPackage(pkg) {
  selectedPackageForOrder = pkg;
  
  // Update UI selection classes
  const cards = document.querySelectorAll('.packages-grid .package-card');
  cards.forEach(c => c.classList.remove('selected'));
  
  const selectedCard = document.getElementById(`pkg-card-${pkg.id}`);
  if (selectedCard) selectedCard.classList.add('selected');

  // Reset Applied Voucher on Package Change to force recheck
  handleRemoveVoucher();
  updateCheckoutSummary();
}

function selectPayment(paymentId) {
  selectedPaymentMethod = paymentId;

  // Toggle selection classes
  const paymentItems = document.querySelectorAll('.payment-item-card');
  paymentItems.forEach(p => {
    if (p.getAttribute('onclick').includes(paymentId)) {
      p.classList.add('selected');
    } else {
      p.classList.remove('selected');
    }
  });

  const radio = document.getElementById(`pay-${paymentId}`);
  if (radio) radio.checked = true;

  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const userId = document.getElementById('input-user-id').value;
  const zoneId = document.getElementById('input-zone-id').value;
  
  // Game title
  document.getElementById('summary-game-title').innerText = selectedGameForOrder ? selectedGameForOrder.title : '-';
  
  // Package nominal
  document.getElementById('summary-package-name').innerText = selectedPackageForOrder ? selectedPackageForOrder.name : '-';
  
  // User Account Info
  let fullUserStr = '-';
  if (userId) {
    fullUserStr = selectedGameForOrder.id === 'mlbb' && zoneId ? `${userId} (${zoneId})` : userId;
  }
  document.getElementById('summary-user-id').innerText = fullUserStr;

  // Payment Method
  document.getElementById('summary-payment-method').innerText = selectedPaymentMethod ? selectedPaymentMethod.toUpperCase() : '-';

  // Math variables
  const originalPrice = selectedPackageForOrder ? selectedPackageForOrder.price : 0;
  const discount = appliedVoucherForOrder ? appliedVoucherForOrder.discount : 0;
  const totalPrice = Math.max(0, originalPrice - discount);

  // Set prices text
  document.getElementById('summary-price-normal').innerText = `Rp ${originalPrice.toLocaleString('id-ID')}`;
  document.getElementById('summary-price-discount').innerText = `-Rp ${discount.toLocaleString('id-ID')}`;
  document.getElementById('summary-price-total').innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;

  // Update prices showing inside payments method list dynamically
  const priceLabels = document.querySelectorAll('.payment-pricing-summary .price-val');
  priceLabels.forEach(label => {
    if (selectedPackageForOrder) {
      label.innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;
      label.classList.remove('price-placeholder');
      label.className = 'price-tag';
    } else {
      label.innerText = 'Pilih paket';
      label.className = 'price-placeholder';
    }
  });

  // Enable/Disable submit button
  const submitBtn = document.getElementById('checkout-submit-btn');
  if (userId && selectedPackageForOrder && selectedPaymentMethod) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
}

// Voucher codes
function handleApplyVoucher() {
  const errorLog = document.getElementById('voucher-error-log');
  
  if (!selectedPackageForOrder) {
    errorLog.innerText = 'Pilih paket nominal terlebih dahulu!';
    return;
  }

  const codeInput = document.getElementById('voucher-input-code').value.trim().toUpperCase();
  if (!codeInput) {
    errorLog.innerText = 'Masukkan kode voucher!';
    return;
  }

  // Find coupon
  const voucher = vouchersList.find(v => v.code === codeInput);
  if (!voucher) {
    errorLog.innerText = 'Voucher tidak ditemukan!';
    appliedVoucherForOrder = null;
    return;
  }

  errorLog.innerText = '';
  
  let discount = 0;
  const originalPrice = selectedPackageForOrder.price;
  
  if (voucher.type === 'percentage') {
    discount = (originalPrice * voucher.value) / 100;
    if (voucher.maxDiscount && discount > voucher.maxDiscount) {
      discount = voucher.maxDiscount;
    }
  } else if (voucher.type === 'flat') {
    discount = voucher.value;
  }

  discount = Math.min(discount, originalPrice);

  appliedVoucherForOrder = {
    code: voucher.code,
    discount: discount,
    description: voucher.description
  };

  // UI elements updates
  document.getElementById('voucher-input-code').disabled = true;
  document.getElementById('voucher-btn-apply').classList.add('hidden');
  document.getElementById('voucher-btn-remove').classList.remove('hidden');
  
  const banner = document.getElementById('voucher-banner-applied');
  banner.classList.remove('hidden');
  document.getElementById('applied-voucher-title').innerText = `${voucher.code} Terpasang`;
  document.getElementById('applied-voucher-desc').innerText = `Hemat Rp ${discount.toLocaleString('id-ID')} (${voucher.description})`;

  showToast(`Voucher ${voucher.code} berhasil digunakan!`, 'success');
  updateCheckoutSummary();
}

function handleRemoveVoucher() {
  appliedVoucherForOrder = null;
  document.getElementById('voucher-input-code').value = '';
  document.getElementById('voucher-input-code').disabled = false;
  document.getElementById('voucher-btn-apply').classList.remove('hidden');
  document.getElementById('voucher-btn-remove').classList.add('hidden');
  document.getElementById('voucher-banner-applied').classList.add('hidden');
  document.getElementById('voucher-error-log').innerText = '';
  
  updateCheckoutSummary();
}

// Checkout Submit
function handlePlaceOrder(event) {
  event.preventDefault();

  const userId = document.getElementById('input-user-id').value;
  const zoneId = document.getElementById('input-zone-id').value;

  if (!userId || !selectedPackageForOrder || !selectedPaymentMethod) {
    showToast('Harap isi semua kolom wajib!', 'error');
    return;
  }

  const fullUserVal = selectedGameForOrder.id === 'mlbb' && zoneId ? `${userId} (${zoneId})` : userId;
  const originalPrice = selectedPackageForOrder.price;
  const discount = appliedVoucherForOrder ? appliedVoucherForOrder.discount : 0;
  const totalPrice = originalPrice - discount;

  const invoiceId = 'TX-' + Math.floor(100000 + Math.random() * 900000);

  const newTx = {
    id: invoiceId,
    userId: fullUserVal,
    gameId: selectedGameForOrder.id,
    gameTitle: selectedGameForOrder.title,
    packageName: selectedPackageForOrder.name,
    price: originalPrice,
    discount: discount,
    totalPrice: totalPrice,
    paymentMethod: selectedPaymentMethod,
    status: 'Pending',
    createdAt: new Date().toISOString(),
    owner: currentUser ? currentUser.username : 'user'
  };

  transactionsList.unshift(newTx);
  saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
  
  showToast(`Pemesanan ${invoiceId} berhasil dibuat! Selesaikan pembayaran.`, 'success');
  
  // Go to transaction history
  navigateTo('history');
}

// ==========================================
// TRANSACTIONS LOG / HISTORY TAB
// ==========================================
function handleSearchInvoice(query) {
  searchInvoiceQuery = query;
  renderTransactionsTable();
}

function clearInvoiceSearch() {
  document.getElementById('search-invoice-input').value = '';
  searchInvoiceQuery = '';
  renderTransactionsTable();
}

function renderTransactionsTable() {
  const tbody = document.getElementById('transactions-table-body');
  const emptyState = document.getElementById('empty-history-state');
  
  tbody.innerHTML = '';

  const userTransactions = transactionsList.filter(t => 
    currentUser && (currentUser.role === 'admin' || t.owner === currentUser.username)
  );

  const filtered = userTransactions.filter(t => 
    t.id.toLowerCase().includes(searchInvoiceQuery.toLowerCase()) ||
    t.userId.toLowerCase().includes(searchInvoiceQuery.toLowerCase()) ||
    t.gameTitle.toLowerCase().includes(searchInvoiceQuery.toLowerCase())
  );

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  filtered.forEach(tx => {
    const tr = document.createElement('tr');
    
    // Status text
    let statusText = 'Pending';
    if (tx.status === 'Success') statusText = 'Berhasil';
    if (tx.status === 'Cancelled') statusText = 'Dibatalkan';

    // Actions items depending on status
    let actionButtons = `
      <button class="action-icon-btn view" title="Detail Invoice" onclick="openInvoiceModal('${tx.id}')">👁</button>
    `;

    if (tx.status === 'Pending') {
      actionButtons += `
        <button class="action-icon-btn pay" title="Simulasi Bayar" onclick="triggerSimulatePayment('${tx.id}')">💸</button>
        <button class="action-icon-btn cancel" title="Batalkan Pesanan" onclick="cancelTransaction('${tx.id}')">❌</button>
      `;
    } else {
      actionButtons += `
        <button class="action-icon-btn delete" title="Hapus Riwayat" onclick="deleteTransactionFromUI('${tx.id}')">🗑️</button>
      `;
    }

    const formattedDate = new Date(tx.createdAt).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    tr.innerHTML = `
      <td class="tx-id-cell" onclick="openInvoiceModal('${tx.id}')">${tx.id}</td>
      <td>${formattedDate}</td>
      <td class="tx-game-cell"><span class="game-badge-dot"></span>${tx.gameTitle}</td>
      <td>${tx.packageName}</td>
      <td class="tx-price-cell">Rp ${tx.totalPrice.toLocaleString('id-ID')}</td>
      <td class="uppercase">${tx.paymentMethod}</td>
      <td><span class="status-badge ${tx.status.toLowerCase()}">${statusText}</span></td>
      <td><div class="action-buttons-cell">${actionButtons}</div></td>
    `;
    tbody.appendChild(tr);
  });
}

function cancelTransaction(txId) {
  if (confirm(`Apakah Anda yakin ingin membatalkan transaksi ${txId}?`)) {
    const txIndex = transactionsList.findIndex(t => t.id === txId);
    if (txIndex !== -1) {
      transactionsList[txIndex].status = 'Cancelled';
      saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
      showToast(`Transaksi ${txId} berhasil dibatalkan.`, 'success');
      renderTransactionsTable();
      renderAdminPanel();
    }
  }
}

function deleteTransactionFromUI(txId) {
  if (confirm(`Hapus permanen riwayat transaksi ${txId} dari browser Anda?`)) {
    transactionsList = transactionsList.filter(t => t.id !== txId);
    saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
    showToast(`Riwayat transaksi ${txId} dihapus.`, 'success');
    renderTransactionsTable();
    renderAdminPanel();
  }
}

// Payment simulator core
let activeSimulatingTxId = null;

function triggerSimulatePayment(txId) {
  activeSimulatingTxId = txId;
  const payBtn = document.querySelector(`.action-icon-btn.pay[onclick*="${txId}"]`);
  if (payBtn) {
    payBtn.innerText = '⌛';
    payBtn.disabled = true;
  }

  showToast(`Menghubungkan ke gateway pembayaran ${txId}...`, 'info');

  setTimeout(() => {
    const txIndex = transactionsList.findIndex(t => t.id === txId);
    if (txIndex !== -1 && transactionsList[txIndex].status === 'Pending') {
      transactionsList[txIndex].status = 'Success';
      saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
      showToast(`Pembayaran Rp ${transactionsList[txIndex].totalPrice.toLocaleString('id-ID')} Berhasil!`, 'success');
      renderTransactionsTable();
      renderAdminPanel();
    }
    activeSimulatingTxId = null;
  }, 1500);
}

// ==========================================
// MODAL DIALOGS: INVOICE LOG DETAILS
// ==========================================
let modalActiveTx = null;

function openInvoiceModal(txId) {
  const tx = transactionsList.find(t => t.id === txId);
  if (!tx) return;

  modalActiveTx = tx;

  // Render values
  document.getElementById('modal-invoice-id').innerText = `Rincian Invoice: ${tx.id}`;
  
  // Status banner
  const badge = document.getElementById('modal-status-badge');
  const bannerInstruction = document.getElementById('modal-status-instruction');
  const payBtn = document.getElementById('modal-pay-btn');
  
  badge.className = `status-text ${tx.status.toLowerCase()}`;
  if (tx.status === 'Pending') {
    badge.innerText = 'MENUNGGU PEMBAYARAN';
    bannerInstruction.classList.remove('hidden');
    payBtn.classList.remove('hidden');
  } else if (tx.status === 'Success') {
    badge.innerText = 'TRANSAKSI BERHASIL';
    bannerInstruction.classList.add('hidden');
    payBtn.classList.add('hidden');
  } else {
    badge.innerText = 'TRANSAKSI DIBATALKAN';
    bannerInstruction.classList.add('hidden');
    payBtn.classList.add('hidden');
  }

  document.getElementById('modal-game-title').innerText = tx.gameTitle;
  document.getElementById('modal-user-id').innerText = tx.userId;
  document.getElementById('modal-package-name').innerText = tx.packageName;
  document.getElementById('modal-payment-method').innerText = tx.paymentMethod;
  
  const formattedDate = new Date(tx.createdAt).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('modal-created-at').innerText = formattedDate;

  // Breakdown values
  document.getElementById('modal-price-normal').innerText = `Rp ${tx.price.toLocaleString('id-ID')}`;
  document.getElementById('modal-price-discount').innerText = `-Rp ${tx.discount.toLocaleString('id-ID')}`;
  document.getElementById('modal-price-total').innerText = `Rp ${tx.totalPrice.toLocaleString('id-ID')}`;

  // Open overlay
  document.getElementById('invoice-modal').classList.remove('hidden');
}

function closeInvoiceModal() {
  document.getElementById('invoice-modal').classList.add('hidden');
  modalActiveTx = null;
}

function executeSimulatePaymentFromModal() {
  if (modalActiveTx && modalActiveTx.status === 'Pending') {
    const txId = modalActiveTx.id;
    closeInvoiceModal();
    triggerSimulatePayment(txId);
  }
}

// ==========================================
// ADMIN DASHBOARD & PANEL CRUD
// ==========================================
function switchAdminSubTab(subTabName) {
  currentAdminSubTab = subTabName;
  
  const btnCatalog = document.getElementById('admin-subtab-btn-catalog');
  const btnTransactions = document.getElementById('admin-subtab-btn-transactions');
  const secCatalog = document.getElementById('admin-catalog-section');
  const secTransactions = document.getElementById('admin-transactions-section');

  if (subTabName === 'catalog') {
    btnCatalog.classList.add('active');
    btnTransactions.classList.remove('active');
    secCatalog.classList.remove('hidden');
    secTransactions.classList.add('hidden');
  } else {
    btnCatalog.classList.remove('active');
    btnTransactions.classList.add('active');
    secCatalog.classList.add('hidden');
    secTransactions.classList.remove('hidden');
  }

  renderAdminPanel();
}

function renderAdminPanel() {
  // Update Counts labels
  document.getElementById('admin-catalog-count').innerText = `Katalog Game Aktif (${gamesList.length})`;
  document.getElementById('admin-transactions-count').innerText = `Monitoring Invoice Pengguna (${transactionsList.length})`;

  // Render Catalog Table
  const catalogBody = document.getElementById('admin-games-table-body');
  catalogBody.innerHTML = '';

  gamesList.forEach(game => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${game.image}" alt="${game.title}" class="admin-game-thumbnail" /></td>
      <td><strong>${game.title}</strong></td>
      <td>${game.developer}</td>
      <td><span class="category-tag ${game.category.toLowerCase()}">${game.category}</span></td>
      <td>${game.packages ? game.packages.length : 0} Item</td>
      <td>
        <div class="admin-actions-buttons">
          <button class="admin-action-btn edit" onclick="openEditGameForm('${game.id}')">✏️ Edit</button>
          <button class="admin-action-btn delete" onclick="deleteGameFromCatalog('${game.id}', '${game.title}')">🗑️ Hapus</button>
        </div>
      </td>
    `;
    catalogBody.appendChild(tr);
  });

  // Render Transactions Table
  const transactionsBody = document.getElementById('admin-transactions-table-body');
  transactionsBody.innerHTML = '';

  if (transactionsList.length === 0) {
    transactionsBody.innerHTML = `<tr><td colspan="8" class="text-center-placeholder">Belum ada transaksi di platform.</td></tr>`;
    return;
  }

  transactionsList.forEach(tx => {
    const tr = document.createElement('tr');
    
    let adminButtons = '';
    if (tx.status === 'Pending') {
      adminButtons += `<button class="admin-tx-btn success" onclick="adminChangeTxStatus('${tx.id}', 'Success')">Selesaikan</button>`;
    }
    if (tx.status !== 'Cancelled') {
      adminButtons += `<button class="admin-tx-btn cancel" onclick="adminChangeTxStatus('${tx.id}', 'Cancelled')">Batalkan</button>`;
    }
    adminButtons += `<button class="admin-tx-btn delete" onclick="adminDeleteTx('${tx.id}')">Hapus</button>`;

    let statusText = 'Pending';
    if (tx.status === 'Success') statusText = 'Berhasil';
    if (tx.status === 'Cancelled') statusText = 'Dibatalkan';

    tr.innerHTML = `
      <td class="font-mono"><strong>${tx.id}</strong></td>
      <td class="font-mono">${tx.userId}</td>
      <td>${tx.gameTitle}</td>
      <td>${tx.packageName}</td>
      <td class="tx-price-cell">Rp ${tx.totalPrice.toLocaleString('id-ID')}</td>
      <td class="uppercase">${tx.paymentMethod}</td>
      <td><span class="status-badge ${tx.status.toLowerCase()}">${statusText}</span></td>
      <td><div class="admin-tx-controls">${adminButtons}</div></td>
    `;
    transactionsBody.appendChild(tr);
  });
}

// Admin transactions modifiers
function adminChangeTxStatus(txId, status) {
  const index = transactionsList.findIndex(t => t.id === txId);
  if (index !== -1) {
    transactionsList[index].status = status;
    saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
    showToast(`Status transaksi ${txId} diubah menjadi "${status === 'Success' ? 'Berhasil' : 'Dibatalkan'}".`, 'success');
    renderAdminPanel();
    renderTransactionsTable();
  }
}

function adminDeleteTx(txId) {
  if (confirm(`Hapus transaksi ${txId} secara permanen dari sistem?`)) {
    transactionsList = transactionsList.filter(t => t.id !== txId);
    saveDataToStorage(KEY_TRANSACTIONS, transactionsList);
    showToast(`Transaksi ${txId} telah dihapus.`, 'success');
    renderAdminPanel();
    renderTransactionsTable();
  }
}

// ==========================================
// ADMIN MODAL: GAME CREATION & EDITS (CRUD)
// ==========================================
function openAddGameForm() {
  editingGameId = null;
  tempPackagesList = [
    { id: 'pkg_1', name: '50 Diamonds', price: 10000 },
    { id: 'pkg_2', name: '100 Diamonds', price: 20000 }
  ];

  document.getElementById('admin-modal-title').innerText = 'Tambah Game Baru ke Toko';
  
  // Clear inputs
  document.getElementById('admin-form-title').value = '';
  document.getElementById('admin-form-developer').value = '';
  document.getElementById('admin-form-category').value = 'Mobile';
  document.getElementById('admin-form-image').value = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300&auto=format&fit=crop';
  document.getElementById('admin-form-gradient').value = 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
  document.getElementById('admin-form-placeholder').value = 'User ID | Contoh: 12345678';
  document.getElementById('admin-form-description').value = '';
  
  // Clear add pkg fields
  document.getElementById('admin-form-pkg-name').value = '';
  document.getElementById('admin-form-pkg-price').value = '';

  renderFormPackagesList();
  document.getElementById('admin-game-modal').classList.remove('hidden');
}

function openEditGameForm(gameId) {
  const game = gamesList.find(g => g.id === gameId);
  if (!game) return;

  editingGameId = gameId;
  tempPackagesList = [...game.packages];

  document.getElementById('admin-modal-title').innerText = `Edit Game: ${game.title}`;

  // Populate inputs
  document.getElementById('admin-form-title').value = game.title;
  document.getElementById('admin-form-developer').value = game.developer;
  document.getElementById('admin-form-category').value = game.category;
  document.getElementById('admin-form-image').value = game.image;
  document.getElementById('admin-form-gradient').value = game.gradient || 'linear-gradient(135deg, #1f2937, #111827)';
  document.getElementById('admin-form-placeholder').value = game.placeholderId || 'Masukkan ID Akun';
  document.getElementById('admin-form-description').value = game.description || '';

  // Clear package addition helpers
  document.getElementById('admin-form-pkg-name').value = '';
  document.getElementById('admin-form-pkg-price').value = '';

  renderFormPackagesList();
  document.getElementById('admin-game-modal').classList.remove('hidden');
}

function closeAdminGameModal() {
  document.getElementById('admin-game-modal').classList.add('hidden');
  editingGameId = null;
}

// Package modifier builder inside modal
function renderFormPackagesList() {
  const container = document.getElementById('admin-form-packages-list');
  container.innerHTML = '';

  if (tempPackagesList.length === 0) {
    container.innerHTML = '<p class="no-packages-alert">Belum ada paket nominal ditambahkan. Game tidak dapat disimpan tanpa paket!</p>';
    return;
  }

  tempPackagesList.forEach(pkg => {
    const item = document.createElement('div');
    item.className = 'admin-package-item';
    item.innerHTML = `
      <span>💎 <strong>${pkg.name}</strong> - Rp ${pkg.price.toLocaleString('id-ID')}</span>
      <button type="button" class="remove-pkg-btn" onclick="handleRemovePackageFromForm('${pkg.id}')">Hapus</button>
    `;
    container.appendChild(item);
  });
}

function handleAddPackageToForm() {
  const nameInput = document.getElementById('admin-form-pkg-name');
  const priceInput = document.getElementById('admin-form-pkg-price');

  const name = nameInput.value.trim();
  const priceVal = priceInput.value.trim();

  if (!name || !priceVal) {
    showToast('Isi nama paket dan harga nominal!', 'error');
    return;
  }

  const pkg = {
    id: 'pkg_' + Math.random().toString(36).substr(2, 9),
    name: name,
    price: parseInt(priceVal)
  };

  tempPackagesList.push(pkg);
  
  // Clear inputs
  nameInput.value = '';
  priceInput.value = '';

  renderFormPackagesList();
}

function handleRemovePackageFromForm(pkgId) {
  tempPackagesList = tempPackagesList.filter(p => p.id !== pkgId);
  renderFormPackagesList();
}

// Form Submit: Save Game catalog (Create/Update)
function handleSaveGame(event) {
  event.preventDefault();

  const title = document.getElementById('admin-form-title').value.trim();
  const developer = document.getElementById('admin-form-developer').value.trim();
  const category = document.getElementById('admin-form-category').value;
  const image = document.getElementById('admin-form-image').value.trim();
  const gradient = document.getElementById('admin-form-gradient').value.trim() || 'linear-gradient(135deg, #1f2937, #111827)';
  const placeholderId = document.getElementById('admin-form-placeholder').value.trim();
  const description = document.getElementById('admin-form-description').value.trim();

  if (!title || !developer) {
    showToast('Judul game dan developer wajib diisi!', 'error');
    return;
  }

  if (tempPackagesList.length === 0) {
    showToast('Harap tambahkan minimal 1 paket nominal!', 'error');
    return;
  }

  if (editingGameId === null) {
    // CREATE OPERATION
    const newId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newGame = {
      id: newId,
      title: title,
      developer: developer,
      category: category,
      image: image,
      gradient: gradient,
      placeholderId: placeholderId,
      description: description,
      packages: tempPackagesList
    };

    gamesList.push(newGame);
    showToast(`Game "${title}" berhasil ditambahkan ke katalog!`, 'success');
  } else {
    // UPDATE OPERATION
    const idx = gamesList.findIndex(g => g.id === editingGameId);
    if (idx !== -1) {
      gamesList[idx] = {
        ...gamesList[idx],
        title: title,
        developer: developer,
        category: category,
        image: image,
        gradient: gradient,
        placeholderId: placeholderId,
        description: description,
        packages: tempPackagesList
      };
      showToast(`Katalog game "${title}" diperbarui!`, 'success');
    }
  }

  saveDataToStorage(KEY_GAMES, gamesList);
  closeAdminGameModal();
  
  // Refresh grids and tables
  renderGamesGrid();
  renderAdminPanel();
}

// DELETE game listing
function deleteGameFromCatalog(gameId, title) {
  if (confirm(`Apakah Anda yakin ingin menghapus game "${title}" dari katalog?`)) {
    gamesList = gamesList.filter(g => g.id !== gameId);
    saveDataToStorage(KEY_GAMES, gamesList);
    showToast(`Game "${title}" telah dihapus dari katalog.`, 'success');
    renderGamesGrid();
    renderAdminPanel();
  }
}
