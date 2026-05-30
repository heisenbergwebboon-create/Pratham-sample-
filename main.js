/**
 * ═══════════════════════════════════════════
 * NOVA STORE — Main JavaScript
 * E-commerce functionality
 * Vanilla ES6+ | No dependencies
 * Version: 1.0.0
 * ═══════════════════════════════════════════
 */

'use strict';


/* ═══════════════════════════════════════════
   APP CONFIGURATION
   ═══════════════════════════════════════════ */

const APP = Object.freeze({
  name: 'NOVA STORE',
  version: '1.0.0',
  storageKeys: {
    cart:     'nova_cart',
    wishlist: 'nova_wishlist',
    user:     'nova_user',
    recent:   'nova_recent'
  },
  currency:          '₹',
  currencyCode:      'INR',
  shipping:          99,
  freeShippingAbove: 999,
  maxQuantity:       10,
  toastDuration:     3000
});


/* ═══════════════════════════════════════════
   PRODUCT DATA
   ═══════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 2499,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 128,
    badge: 'NEW',
    inStock: true,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    features: [
      'Active noise cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable over-ear fit'
    ]
  },
  {
    id: 2,
    name: 'Minimalist Watch',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 1799,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 89,
    badge: 'BESTSELLER',
    inStock: true,
    description: 'Elegant minimalist watch with genuine leather strap. Perfect for any occasion.',
    features: [
      'Genuine leather strap',
      'Water resistant (50m)',
      '2-year warranty',
      'Japanese movement'
    ]
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 599,
    originalPrice: 999,
    rating: 4.3,
    reviews: 256,
    badge: null,
    inStock: true,
    description: 'Premium organic cotton t-shirt. Soft, comfortable and breathable for all-day wear.',
    features: [
      '100% organic cotton',
      'Pre-shrunk fabric',
      'Available in 5 colors',
      'Machine washable'
    ]
  },
  {
    id: 4,
    name: 'Ceramic Coffee Mug',
    category: 'home',
    categoryName: 'Home & Living',
    price: 449,
    originalPrice: 699,
    rating: 4.6,
    reviews: 142,
    badge: null,
    inStock: true,
    description: 'Handcrafted ceramic mug. Perfect for your morning coffee or evening tea ritual.',
    features: [
      'Handcrafted ceramic',
      '350ml capacity',
      'Microwave safe',
      'Dishwasher safe'
    ]
  },
  {
    id: 5,
    name: 'Skincare Set',
    category: 'beauty',
    categoryName: 'Beauty',
    price: 1299,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 312,
    badge: 'SALE',
    inStock: true,
    description: 'Complete skincare routine in one set. Cleanser, toner, serum and moisturizer.',
    features: [
      'Natural ingredients only',
      'Suitable for all skin types',
      'Cruelty-free certified',
      'Made in India'
    ]
  },
  {
    id: 6,
    name: 'Leather Backpack',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 3499,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 87,
    badge: 'PREMIUM',
    inStock: true,
    description: 'Full-grain leather backpack with multiple compartments. Spacious and timeless.',
    features: [
      'Full-grain genuine leather',
      'Laptop compartment (15")',
      'Multiple pockets',
      'Padded adjustable straps'
    ]
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 1899,
    originalPrice: 3499,
    rating: 4.4,
    reviews: 198,
    badge: null,
    inStock: true,
    description: 'Portable Bluetooth speaker with deep bass and 12-hour playtime. Fully waterproof.',
    features: [
      '12-hour battery life',
      'Waterproof IPX7',
      'Deep bass technology',
      'Bluetooth 5.0'
    ]
  },
  {
    id: 8,
    name: 'Yoga Mat',
    category: 'fitness',
    categoryName: 'Fitness',
    price: 899,
    originalPrice: 1499,
    rating: 4.6,
    reviews: 167,
    badge: null,
    inStock: true,
    description: 'Premium non-slip yoga mat. Eco-friendly TPE material, 6mm cushioning.',
    features: [
      'Non-slip textured surface',
      '6mm cushion thickness',
      'Eco-friendly TPE material',
      'Carrying strap included'
    ]
  },
  {
    id: 9,
    name: 'Scented Candle',
    category: 'home',
    categoryName: 'Home & Living',
    price: 399,
    originalPrice: 599,
    rating: 4.5,
    reviews: 89,
    badge: null,
    inStock: true,
    description: 'Hand-poured soy wax candle. Relaxing lavender and vanilla aroma.',
    features: [
      '100% natural soy wax',
      '40-hour burn time',
      'Hand-poured in India',
      'Natural essential oils'
    ]
  },
  {
    id: 10,
    name: 'Notebook Set',
    category: 'stationery',
    categoryName: 'Stationery',
    price: 299,
    originalPrice: 499,
    rating: 4.4,
    reviews: 234,
    badge: null,
    inStock: true,
    description: 'Premium hardcover notebook set. Perfect for journaling, sketching and notes.',
    features: [
      'Set of 3 notebooks',
      '120gsm premium paper',
      'Durable hardcover',
      'Elastic closure band'
    ]
  },
  {
    id: 11,
    name: 'Polarized Sunglasses',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 1199,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 145,
    badge: 'NEW',
    inStock: true,
    description: 'Stylish polarized sunglasses with UV400 protection. Lightweight titanium frame.',
    features: [
      'UV400 protection',
      'Polarized lenses',
      'Lightweight titanium frame',
      'Protective case included'
    ]
  },
  {
    id: 12,
    name: 'Ceramic Plant Pot Set',
    category: 'home',
    categoryName: 'Home & Living',
    price: 799,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 78,
    badge: null,
    inStock: true,
    description: 'Beautiful matte ceramic plant pots. Set of 3 in graduated sizes with drainage.',
    features: [
      'Set of 3 graduated sizes',
      'Drainage holes + trays',
      'Minimalist matte finish',
      'Indoor & outdoor use'
    ]
  }
];


/* ═══════════════════════════════════════════
   UTILITY HELPERS
   ═══════════════════════════════════════════ */

const Utils = {

  /* Format price with Indian locale */
  formatPrice(amount) {
    return `${APP.currency}${amount.toLocaleString('en-IN')}`;
  },

  /* Calculate discount percentage */
  calcDiscount(original, current) {
    if (!original || original <= current) return 0;
    return Math.round(((original - current) / original) * 100);
  },

  /* Generate star string */
  stars(rating) {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return (
      '★'.repeat(full) +
      (half ? '½' : '') +
      '☆'.repeat(empty)
    );
  },

  /* Debounce function */
  debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  /* Throttle function */
  throttle(fn, limit) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= limit) {
        last = now;
        fn.apply(this, args);
      }
    };
  },

  /* Get URL query param */
  getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },

  /* Safe localStorage read */
  storageGet(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },

  /* Safe localStorage write */
  storageSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      console.warn(`[Nova] Storage write failed for key: ${key}`);
      return false;
    }
  },

  /* Safe localStorage remove */
  storageRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      console.warn(`[Nova] Storage remove failed for key: ${key}`);
    }
  }

};


/* ═══════════════════════════════════════════
   TOAST NOTIFICATIONS
   ═══════════════════════════════════════════ */

const Toast = {
  container: null,

  /* Inject animation styles once */
  _injectStyles() {
    if (document.getElementById('nova-toast-styles')) return;

    const style = document.createElement('style');
    style.id = 'nova-toast-styles';
    style.textContent = `
      @keyframes novaToastIn {
        from { opacity: 0; transform: translateY(14px) scale(0.96); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes novaToastOut {
        from { opacity: 1; transform: translateY(0) scale(1); }
        to   { opacity: 0; transform: translateY(8px) scale(0.96); }
      }
      .nova-toast {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.04em;
        padding: 13px 20px;
        border-radius: 4px;
        box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        pointer-events: auto;
        cursor: pointer;
        max-width: 320px;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: novaToastIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
        transition: box-shadow 0.2s ease;
        user-select: none;
      }
      .nova-toast:hover {
        box-shadow: 0 16px 40px rgba(0,0,0,0.25);
      }
      .nova-toast.leaving {
        animation: novaToastOut 0.3s ease forwards;
      }
      .nova-toast-icon { flex-shrink: 0; font-size: 15px; }
      .nova-toast-msg  { flex: 1; line-height: 1.4; }
      .nova-toast-close {
        flex-shrink: 0;
        opacity: 0.55;
        font-size: 16px;
        line-height: 1;
        padding: 2px;
        transition: opacity 0.15s ease;
      }
      .nova-toast-close:hover { opacity: 1; }
    `;
    document.head.appendChild(style);
  },

  init() {
    if (this.container) return;
    this._injectStyles();

    this.container = document.createElement('div');
    this.container.id = 'nova-toast-container';
    Object.assign(this.container.style, {
      position:       'fixed',
      bottom:         '24px',
      left:           '50%',
      transform:      'translateX(-50%)',
      zIndex:         '9999',
      display:        'flex',
      flexDirection:  'column',
      gap:            '10px',
      alignItems:     'center',
      pointerEvents:  'none',
      width:          'calc(100% - 48px)',
      maxWidth:       '400px'
    });
    document.body.appendChild(this.container);
  },

  show(message, type = 'info', duration = APP.toastDuration) {
    this.init();

    const config = {
      success: { bg: '#1A1A1A', color: '#FFFFFF', icon: '✓', border: '#4CAF50' },
      error:   { bg: '#C62828', color: '#FFFFFF', icon: '✕', border: '#EF9A9A' },
      warning: { bg: '#E65100', color: '#FFFFFF', icon: '!', border: '#FFCC80' },
      info:    { bg: '#1A1A1A', color: '#FFFFFF', icon: 'ℹ', border: 'transparent' }
    };

    const c = config[type] || config.info;

    const toast = document.createElement('div');
    toast.className = 'nova-toast';
    Object.assign(toast.style, {
      background:   c.bg,
      color:        c.color,
      borderLeft:   `3px solid ${c.border !== 'transparent' ? c.border : 'rgba(255,255,255,0.2)'}`
    });

    toast.innerHTML = `
      <span class="nova-toast-icon">${c.icon}</span>
      <span class="nova-toast-msg">${message}</span>
      <span class="nova-toast-close">✕</span>
    `;

    const dismiss = () => {
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 300);
    };

    toast.querySelector('.nova-toast-close').addEventListener('click', dismiss);
    toast.addEventListener('click', dismiss);

    this.container.appendChild(toast);

    const timer = setTimeout(dismiss, duration);

    toast.addEventListener('mouseenter', () => clearTimeout(timer));
    toast.addEventListener('mouseleave', () => setTimeout(dismiss, 1500));
  },

  success(msg, dur) { this.show(msg, 'success', dur); },
  error(msg, dur)   { this.show(msg, 'error',   dur); },
  warning(msg, dur) { this.show(msg, 'warning',  dur); },
  info(msg, dur)    { this.show(msg, 'info',     dur); }

};


/* ═══════════════════════════════════════════
   CART MANAGEMENT
   ═══════════════════════════════════════════ */

const Cart = {

  /* ── Read / Write ── */

  get() {
    return Utils.storageGet(APP.storageKeys.cart, []);
  },

  save(cart) {
    Utils.storageSet(APP.storageKeys.cart, cart);
    this.updateBadge();
    this._emitChange(cart);
  },

  /* Dispatch custom event so cart sidebar can react */
  _emitChange(cart) {
    window.dispatchEvent(new CustomEvent('nova:cart:change', { detail: { cart } }));
  },


  /* ── Core Operations ── */

  add(productId, quantity = 1, options = {}) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      Toast.error('Product not found');
      return null;
    }

    if (!product.inStock) {
      Toast.warning('This product is out of stock');
      return null;
    }

    const cart     = this.get();
    const key      = options.size ? `${productId}-${options.size}` : String(productId);
    const existing = cart.find(item => item.key === key);

    if (existing) {
      const newQty = existing.quantity + quantity;
      existing.quantity = Math.min(newQty, APP.maxQuantity);
      if (newQty > APP.maxQuantity) {
        Toast.warning(`Maximum ${APP.maxQuantity} units per item`);
      }
    } else {
      cart.push({
        key,
        id:           productId,
        name:         product.name,
        category:     product.category,
        categoryName: product.categoryName,
        price:        product.price,
        originalPrice:product.originalPrice,
        quantity:     Math.min(quantity, APP.maxQuantity),
        size:         options.size || null,
        color:        options.color || null,
        addedAt:      Date.now()
      });
    }

    this.save(cart);
    Toast.success('Added to cart ✓');
    return cart;
  },

  remove(productId, key = null) {
    const removeKey = key || String(productId);
    const cart = this.get().filter(item => item.key !== removeKey);
    this.save(cart);
    Toast.info('Removed from cart');
    return cart;
  },

  updateQuantity(key, quantity) {
    const cart = this.get();
    const item = cart.find(i => i.key === key);

    if (!item) return cart;

    const newQty = Math.max(1, Math.min(parseInt(quantity) || 1, APP.maxQuantity));

    if (parseInt(quantity) < 1) {
      return this.remove(null, key);
    }

    item.quantity = newQty;
    this.save(cart);
    return cart;
  },

  increment(key) {
    const item = this.get().find(i => i.key === key);
    if (item) this.updateQuantity(key, item.quantity + 1);
  },

  decrement(key) {
    const item = this.get().find(i => i.key === key);
    if (!item) return;
    if (item.quantity <= 1) {
      if (confirm('Remove this item from cart?')) this.remove(null, key);
    } else {
      this.updateQuantity(key, item.quantity - 1);
    }
  },

  clear() {
    Utils.storageRemove(APP.storageKeys.cart);
    this.updateBadge();
    this._emitChange([]);
    Toast.info('Cart cleared');
  },


  /* ── Computed Values ── */

  getCount() {
    return this.get().reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    return this.get().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getSavings() {
    return this.get().reduce((sum, item) => {
      const orig = item.originalPrice || item.price;
      return sum + ((orig - item.price) * item.quantity);
    }, 0);
  },

  getShipping() {
    const subtotal = this.getSubtotal();
    return subtotal >= APP.freeShippingAbove ? 0 : APP.shipping;
  },

  getTotal() {
    return this.getSubtotal() + this.getShipping();
  },

  isEmpty() {
    return this.get().length === 0;
  },


  /* ── UI Updates ── */

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent    = count > 99 ? '99+' : count;
      el.style.display  = count > 0 ? 'flex' : 'none';
    });
  },


  /* ── Cart Sidebar Render ── */

  renderSidebar() {
    const sidebar = document.querySelector('.cart-items');
    if (!sidebar) return;

    const cart = this.get();

    if (cart.length === 0) {
      sidebar.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
          text-align: center;
          color: #757575;
        ">
          <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.4;">🛒</div>
          <p style="font-size: 15px; font-weight: 500; color: #1A1A1A; margin-bottom: 8px;">Your cart is empty</p>
          <p style="font-size: 13px;">Add items to get started</p>
        </div>
      `;
    } else {
      sidebar.innerHTML = cart.map(item => `
        <div class="cart-item" data-key="${item.key}">
          <div class="cart-item-image">
            <div style="
              width: 100%;
              height: 100%;
              background: #F5F5F5;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
            ">📦</div>
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-variant">
              ${[item.size, item.color].filter(Boolean).join(' · ') || item.categoryName}
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
              <div class="cart-item-price">${Utils.formatPrice(item.price * item.quantity)}</div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <button
                  onclick="Cart.decrement('${item.key}')"
                  style="
                    width: 28px; height: 28px; border: 1px solid #E0E0E0;
                    background: #FAFAFA; cursor: pointer; font-size: 16px;
                    display: flex; align-items: center; justify-content: center;
                    line-height: 1; border-radius: 0;
                  "
                  aria-label="Decrease quantity"
                >−</button>
                <span style="font-size: 13px; font-weight: 600; min-width: 20px; text-align: center;">
                  ${item.quantity}
                </span>
                <button
                  onclick="Cart.increment('${item.key}')"
                  style="
                    width: 28px; height: 28px; border: 1px solid #E0E0E0;
                    background: #FAFAFA; cursor: pointer; font-size: 16px;
                    display: flex; align-items: center; justify-content: center;
                    line-height: 1; border-radius: 0;
                  "
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>
            <button
              class="cart-item-remove"
              onclick="Cart.remove(null, '${item.key}')"
              style="margin-top: 8px;"
            >Remove</button>
          </div>
        </div>
      `).join('');
    }

    /* Update footer totals */
    const subtotalEl  = document.querySelector('.cart-subtotal-value');
    const shippingEl  = document.querySelector('.cart-shipping-value');
    const savingsEl   = document.querySelector('.cart-savings-value');
    const totalEl     = document.querySelector('.cart-total-value');
    const checkoutBtn = document.querySelector('.cart-checkout-btn');

    if (subtotalEl) subtotalEl.textContent = Utils.formatPrice(this.getSubtotal());
    if (shippingEl) shippingEl.textContent = this.getShipping() === 0
      ? 'FREE'
      : Utils.formatPrice(this.getShipping());
    if (savingsEl && this.getSavings() > 0) {
      savingsEl.textContent = `You save ${Utils.formatPrice(this.getSavings())}`;
      savingsEl.parentElement.style.display = 'block';
    }
    if (totalEl) totalEl.textContent = Utils.formatPrice(this.getTotal());
    if (checkoutBtn) checkoutBtn.disabled = this.isEmpty();
  }

};


/* ═══════════════════════════════════════════
   WISHLIST
   ═══════════════════════════════════════════ */

const Wishlist = {

  get() {
    return Utils.storageGet(APP.storageKeys.wishlist, []);
  },

  save(list) {
    Utils.storageSet(APP.storageKeys.wishlist, list);
    this.updateButtons();
  },

  toggle(productId) {
    const list  = this.get();
    const index = list.indexOf(productId);

    if (index > -1) {
      list.splice(index, 1);
      Toast.info('Removed from wishlist');
    } else {
      list.push(productId);
      Toast.success('Added to wishlist ♥');
    }

    this.save(list);
    return list;
  },

  has(productId) {
    return this.get().includes(productId);
  },

  getCount() {
    return this.get().length;
  },

  clear() {
    Utils.storageRemove(APP.storageKeys.wishlist);
    this.updateButtons();
  },

  /* Sync all wishlist button states on page */
  updateButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id  = parseInt(btn.dataset.wishlistId);
      const has = this.has(id);
      btn.classList.toggle('active', has);
      btn.setAttribute('aria-pressed', String(has));
      btn.innerHTML = has ? '❤️' : '🤍';
    });
  }

};


/* ═══════════════════════════════════════════
   SIDE MENU
   ═══════════════════════════════════════════ */

const SideMenu = {
  menu:      null,
  overlay:   null,
  hamburger: null,
  closeBtn:  null,
  isOpen:    false,

  init() {
    this.menu      = document.querySelector('.side-menu');
    this.overlay   = document.querySelector('.menu-overlay');
    this.hamburger = document.querySelector('.hamburger');
    this.closeBtn  = document.querySelector('.side-menu-close');

    if (!this.menu) return;

    this.hamburger?.addEventListener('click', () => this.open());
    this.closeBtn?.addEventListener('click',  () => this.close());
    this.overlay?.addEventListener('click',   () => this.close());

    document.querySelectorAll('.side-menu-link').forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
  },

  open() {
    if (!this.menu) return;
    this.menu.classList.add('open');
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
    this.closeBtn?.focus();
  },

  close() {
    if (!this.menu) return;
    this.menu.classList.remove('open');
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
    this.hamburger?.focus();
  },

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

};


/* ═══════════════════════════════════════════
   CART SIDEBAR
   ═══════════════════════════════════════════ */

const CartSidebar = {
  sidebar:  null,
  overlay:  null,
  isOpen:   false,

  init() {
    this.sidebar = document.querySelector('.cart-sidebar');
    this.overlay = document.querySelector('.cart-overlay');

    if (!this.sidebar) return;

    /* Open on cart icon click */
    document.querySelectorAll('.open-cart').forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    /* Close button */
    this.sidebar.querySelector('.cart-close')?.addEventListener('click', () => this.close());
    this.overlay?.addEventListener('click', () => this.close());

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    /* Re-render when cart changes */
    window.addEventListener('nova:cart:change', () => {
      if (this.isOpen) Cart.renderSidebar();
    });
  },

  open() {
    if (!this.sidebar) return;
    Cart.renderSidebar();
    this.sidebar.classList.add('open');
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
  },

  close() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove('open');
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
  }

};


/* ═══════════════════════════════════════════
   NAVBAR SCROLL BEHAVIOR
   ═══════════════════════════════════════════ */

const Navbar = {
  el:   null,
  last: 0,

  init() {
    this.el = document.querySelector('.navbar');
    if (!this.el) return;

    window.addEventListener('scroll',
      Utils.throttle(() => this.handleScroll(), 80),
      { passive: true }
    );
  },

  handleScroll() {
    const scrollY = window.scrollY;
    this.el.classList.toggle('scrolled', scrollY > 60);
    this.last = scrollY;
  }

};


/* ═══════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════ */

const ScrollReveal = {
  observer: null,

  init() {
    if (!('IntersectionObserver' in window)) {
      /* Fallback: show all */
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:  0.1,
        rootMargin: '0px 0px -48px 0px'
      }
    );

    this.observe();
  },

  observe() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
      this.observer?.observe(el);
    });
  },

  /* Call after dynamic content added */
  refresh() {
    if (this.observer) this.observe();
  }

};


/* ═══════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════ */

const SmoothScroll = {

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navH = document.querySelector('.navbar')?.offsetHeight || 80;
          const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
      });
    });
  }

};


/* ═══════════════════════════════════════════
   PRODUCT RENDERER
   ═══════════════════════════════════════════ */

const ProductRenderer = {

  renderCard(product) {
    const discount  = Utils.calcDiscount(product.originalPrice, product.price);
    const hasDiscount = discount > 0;
    const stars     = Utils.stars(product.rating);
    const inWishlist = Wishlist.has(product.id);

    return `
      <div class="product-card" data-id="${product.id}" data-category="${product.category}">

        <div class="product-image">
          <div class="product-image-placeholder">
            <span style="font-size: 48px; opacity: 0.35;">📦</span>
          </div>

          ${product.badge ? `
            <span class="product-badge ${product.badge === 'SALE' ? 'sale' : ''}">
              ${product.badge}
            </span>
          ` : ''}

          <button
            class="product-wishlist ${inWishlist ? 'active' : ''}"
            data-wishlist-id="${product.id}"
            onclick="event.stopPropagation(); Wishlist.toggle(${product.id})"
            aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}"
            aria-pressed="${inWishlist}"
          >${inWishlist ? '❤️' : '🤍'}</button>

          <div
            class="product-quick-add"
            onclick="event.stopPropagation(); Cart.add(${product.id})"
          >Add to Cart</div>
        </div>

        <div class="product-info" onclick="NovaStore.openProduct(${product.id})" style="cursor:pointer;">
          <div class="product-category">${product.categoryName}</div>
          <div class="product-name">${product.name}</div>

          <div class="product-rating">
            <span class="stars" style="font-size:12px; letter-spacing:1px;">${stars}</span>
            <span style="font-size:12px; color:#757575; margin-left:4px;">(${product.reviews})</span>
          </div>

          <div class="product-price">
            <span class="price-current">${Utils.formatPrice(product.price)}</span>
            ${hasDiscount ? `
              <span class="price-original">${Utils.formatPrice(product.originalPrice)}</span>
              <span class="price-discount">${discount}% OFF</span>
            ` : ''}
          </div>
        </div>

      </div>
    `;
  },

  renderGrid(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!products || products.length === 0) {
      container.innerHTML = `
        <div style="
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 20px;
          color: #757575;
        ">
          <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.35;">🔍</div>
          <p style="font-size: 16px; font-weight: 500; color: #1A1A1A; margin-bottom: 8px;">
            No products found
          </p>
          <p style="font-size: 14px;">Try adjusting your filters or search query</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(p => this.renderCard(p)).join('');
    Wishlist.updateButtons();
    ScrollReveal.refresh();
  },

  renderFeatured(limit = 8, containerId = 'productsGrid') {
    const featured = [...PRODUCTS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
    this.renderGrid(featured, containerId);
  }

};


/* ═══════════════════════════════════════════
   PRODUCT FILTERING & SORTING
   ═══════════════════════════════════════════ */

const ProductFilter = {
  activeCategory: 'all',
  activeSort:     'default',
  searchQuery:    '',
  priceMin:       0,
  priceMax:       Infinity,

  init() {
    /* Category filter buttons */
    document.querySelectorAll('[data-category]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.category;
        document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.apply();
      });
    });

    /* Alternatively: .filter-category class buttons */
    document.querySelectorAll('.filter-category').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.filter || btn.dataset.category || 'all';
        document.querySelectorAll('.filter-category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.apply();
      });
    });

    /* Sort select */
    const sortEl = document.getElementById('sortSelect');
    if (sortEl) {
      sortEl.addEventListener('change', () => {
        this.activeSort = sortEl.value;
        this.apply();
      });
    }

    /* Search input */
    const searchEl = document.getElementById('searchInput');
    if (searchEl) {
      searchEl.addEventListener('input', Utils.debounce(e => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.apply();
      }, 300));
    }

    /* Navbar search */
    const navSearch = document.querySelector('.nav-search-input');
    if (navSearch) {
      navSearch.addEventListener('input', Utils.debounce(e => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.apply();
      }, 300));
    }

    /* Price range */
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');

    if (priceMin) {
      priceMin.addEventListener('input', Utils.debounce(e => {
        this.priceMin = parseInt(e.target.value) || 0;
        this.apply();
      }, 300));
    }

    if (priceMax) {
      priceMax.addEventListener('input', Utils.debounce(e => {
        this.priceMax = parseInt(e.target.value) || Infinity;
        this.apply();
      }, 300));
    }
  },

  apply() {
    let results = [...PRODUCTS];

    /* Category */
    if (this.activeCategory && this.activeCategory !== 'all') {
      results = results.filter(p => p.category === this.activeCategory);
    }

    /* Search */
    if (this.searchQuery) {
      const q = this.searchQuery;
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }

    /* Price range */
    if (this.priceMin > 0 || this.priceMax < Infinity) {
      results = results.filter(p =>
        p.price >= this.priceMin && p.price <= this.priceMax
      );
    }

    /* Sort */
    switch (this.activeSort) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        results.sort((a, b) => b.id - a.id);
        break;
      case 'discount':
        results.sort((a, b) => {
          const dA = Utils.calcDiscount(a.originalPrice, a.price);
          const dB = Utils.calcDiscount(b.originalPrice, b.price);
          return dB - dA;
        });
        break;
      default:
        /* Keep original order */
        break;
    }

    /* Update result count display */
    const countEl = document.querySelector('.results-count');
    if (countEl) {
      countEl.textContent = `${results.length} product${results.length !== 1 ? 's' : ''}`;
    }

    ProductRenderer.renderGrid(results, 'productsGrid');
  },

  reset() {
    this.activeCategory = 'all';
    this.activeSort     = 'default';
    this.searchQuery    = '';
    this.priceMin       = 0;
    this.priceMax       = Infinity;

    document.querySelectorAll('[data-category], .filter-category').forEach(b => {
      b.classList.toggle('active', b.dataset.category === 'all' || b.dataset.filter === 'all');
    });

    const sortEl = document.getElementById('sortSelect');
    if (sortEl) sortEl.value = 'default';

    const searchEls = [
      document.getElementById('searchInput'),
      document.querySelector('.nav-search-input')
    ];
    searchEls.forEach(el => { if (el) el.value = ''; });

    this.apply();
  }

};


/* ═══════════════════════════════════════════
   QUANTITY INPUT CONTROLS
   ═══════════════════════════════════════════ */

const QuantityInput = {

  init() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-qty]');
      if (!btn) return;

      const action  = btn.dataset.qty;
      const wrapper = btn.closest('.quantity-input');
      if (!wrapper) return;

      const input = wrapper.querySelector('.quantity-field');
      if (!input) return;

      let val = parseInt(input.value) || 1;

      if (action === 'inc') val = Math.min(val + 1, APP.maxQuantity);
      if (action === 'dec') val = Math.max(val - 1, 1);

      input.value = val;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    document.addEventListener('change', e => {
      const input = e.target.closest('.quantity-field');
      if (!input) return;

      let val = parseInt(input.value) || 1;
      val = Math.max(1, Math.min(val, APP.maxQuantity));
      input.value = val;
    });
  }

};


/* ═══════════════════════════════════════════
   FORM VALIDATION
   ═══════════════════════════════════════════ */

const FormValidator = {

  rules: {
    required: (v) => !!v.trim() || 'This field is required',
    email:    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email',
    phone:    (v) => /^[0-9+\s\-()]{8,15}$/.test(v.trim()) || 'Enter a valid phone number',
    minLen:   (n) => (v) => v.trim().length >= n || `Minimum ${n} characters required`,
    maxLen:   (n) => (v) => v.trim().length <= n || `Maximum ${n} characters allowed`,
    pin:      (v) => /^[0-9]{6}$/.test(v.trim()) || 'Enter a valid 6-digit PIN'
  },

  validate(form) {
    let valid = true;
    this.clearErrors(form);

    form.querySelectorAll('[data-validate]').forEach(field => {
      const ruleNames = field.dataset.validate.split(',').map(r => r.trim());
      const value     = field.value;
      let fieldValid  = true;

      for (const ruleName of ruleNames) {
        let ruleFn;
        let param;

        if (ruleName.startsWith('minLen:')) {
          param  = parseInt(ruleName.split(':')[1]);
          ruleFn = this.rules.minLen(param);
        } else if (ruleName.startsWith('maxLen:')) {
          param  = parseInt(ruleName.split(':')[1]);
          ruleFn = this.rules.maxLen(param);
        } else {
          ruleFn = this.rules[ruleName];
        }

        if (!ruleFn) continue;

        const result = ruleFn(value);
        if (result !== true) {
          this.showError(field, result);
          fieldValid = false;
          valid      = false;
          break;
        }
      }

      if (fieldValid) {
        field.classList.remove('error');
      }
    });

    return valid;
  },

  showError(field, message) {
    field.classList.add('error');

    let errorEl = field.parentElement.querySelector('.field-error-msg');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error-msg';
      Object.assign(errorEl.style, {
        display:    'block',
        fontSize:   '11px',
        color:      '#C62828',
        marginTop:  '4px',
        fontFamily: "'Inter', sans-serif"
      });
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
  },

  clearErrors(form) {
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.field-error-msg').forEach(el => el.remove());
  },

  /* Auto-clear error on input */
  autoClean(form) {
    form.querySelectorAll('[data-validate]').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        const msg = field.parentElement.querySelector('.field-error-msg');
        if (msg) msg.remove();
      });
    });
  },

  /* Init all forms on page */
  init() {
    document.querySelectorAll('form[data-nova-form]').forEach(form => {
      this.autoClean(form);
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (this.validate(form)) {
          form.dispatchEvent(new CustomEvent('nova:form:valid', {
            bubbles: true,
            detail:  { data: Object.fromEntries(new FormData(form)) }
          }));
        }
      });
    });
  }

};


/* ═══════════════════════════════════════════
   RECENTLY VIEWED
   ═══════════════════════════════════════════ */

const RecentlyViewed = {
  max: 8,

  get() {
    return Utils.storageGet(APP.storageKeys.recent, []);
  },

  track(productId) {
    let ids = this.get().filter(id => id !== productId);
    ids.unshift(productId);
    if (ids.length > this.max) ids = ids.slice(0, this.max);
    Utils.storageSet(APP.storageKeys.recent, ids);
  },

  getProducts() {
    return this.get()
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
  }

};


/* ═══════════════════════════════════════════
   PRODUCT DETAIL PAGE
   ═══════════════════════════════════════════ */

const ProductDetail = {

  current: null,

  init() {
    const id = Utils.getParam('id');
    if (!id) return;

    const product = PRODUCTS.find(p => p.id === parseInt(id));
    if (!product) {
      Toast.error('Product not found');
      return;
    }

    this.current = product;
    RecentlyViewed.track(product.id);
    this.render(product);
  },

  render(product) {
    const nameEl  = document.querySelector('.product-detail-name');
    const priceEl = document.querySelector('.product-detail-price');
    const descEl  = document.querySelector('.product-detail-desc');
    const ratingEl = document.querySelector('.product-detail-rating');

    if (nameEl)  nameEl.textContent = product.name;

    if (priceEl) {
      const discount = Utils.calcDiscount(product.originalPrice, product.price);
      priceEl.innerHTML = `
        ${Utils.formatPrice(product.price)}
        ${discount > 0 ? `
          <span class="price-original" style="font-size:1rem;">
            ${Utils.formatPrice(product.originalPrice)}
          </span>
          <span class="price-discount" style="font-size:0.875rem;">
            ${discount}% OFF
          </span>
        ` : ''}
      `;
    }

    if (descEl)  descEl.textContent = product.description || '';

    if (ratingEl) {
      ratingEl.innerHTML = `
        <span style="color: #FFA000;">${Utils.stars(product.rating)}</span>
        <span style="font-size: 13px; color: #757575; margin-left: 6px;">
          ${product.rating} (${product.reviews} reviews)
        </span>
      `;
    }

    /* Features list */
    const featuresEl = document.querySelector('.product-features');
    if (featuresEl && product.features) {
      featuresEl.innerHTML = product.features
        .map(f => `<li style="padding: 8px 0; border-bottom: 1px solid #EEEEEE; font-size: 14px; color: #424242;">${f}</li>`)
        .join('');
    }

    /* Page title */
    document.title = `${product.name} | ${APP.name}`;

    /* Add to cart button */
    const addBtn = document.querySelector('[data-add-to-cart]');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const qty  = parseInt(document.querySelector('.quantity-field')?.value) || 1;
        const size = document.querySelector('.size-option.active')?.dataset.size;
        Cart.add(product.id, qty, { size });
      });
    }

    /* Wishlist button */
    const wishBtn = document.querySelector('[data-wishlist-btn]');
    if (wishBtn) {
      wishBtn.dataset.wishlistId = product.id;
      wishBtn.innerHTML = Wishlist.has(product.id) ? '❤️' : '🤍';
      wishBtn.addEventListener('click', () => {
        Wishlist.toggle(product.id);
        wishBtn.innerHTML = Wishlist.has(product.id) ? '❤️' : '🤍';
      });
    }

    /* Size options */
    document.querySelectorAll('.size-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
      });
    });
  }

};


/* ═══════════════════════════════════════════
   ANNOUNCEMENT BANNER
   ═══════════════════════════════════════════ */

const AnnouncementBanner = {

  init() {
    const closeBtn = document.querySelector('.navbar-top-close');
    const banner   = document.querySelector('.navbar-top');
    if (!closeBtn || !banner) return;

    /* Remember dismissed state */
    const dismissed = sessionStorage.getItem('nova_banner_dismissed');
    if (dismissed) {
      banner.style.display = 'none';
      return;
    }

    closeBtn.addEventListener('click', () => {
      banner.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
      banner.style.maxHeight  = '0';
      banner.style.opacity    = '0';
      banner.style.overflow   = 'hidden';
      setTimeout(() => { banner.style.display = 'none'; }, 320);
      sessionStorage.setItem('nova_banner_dismissed', '1');
    });
  }

};


/* ═══════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════ */

const BackToTop = {

  btn: null,

  init() {
    /* Create button if not in HTML */
    if (!document.querySelector('.back-to-top')) {
      this.btn = document.createElement('button');
      this.btn.className     = 'back-to-top';
      this.btn.textContent   = '↑';
      this.btn.ariaLabel     = 'Back to top';
      Object.assign(this.btn.style, {
        position:       'fixed',
        bottom:         '80px',
        right:          '24px',
        width:          '44px',
        height:         '44px',
        background:     '#000000',
        color:          '#FFFFFF',
        border:         'none',
        borderRadius:   '0',
        fontSize:       '18px',
        cursor:         'pointer',
        opacity:        '0',
        visibility:     'hidden',
        transition:     'opacity 0.3s ease, visibility 0.3s ease',
        zIndex:         '500',
        fontFamily:     "'Inter', sans-serif"
      });
      document.body.appendChild(this.btn);
    } else {
      this.btn = document.querySelector('.back-to-top');
    }

    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll',
      Utils.throttle(() => {
        const show = window.scrollY > 500;
        this.btn.style.opacity    = show ? '1' : '0';
        this.btn.style.visibility = show ? 'visible' : 'hidden';
      }, 100),
      { passive: true }
    );
  }

};


/* ═══════════════════════════════════════════
   IMAGE LAZY LOADING
   ═══════════════════════════════════════════ */

const LazyImages = {

  init() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }

};


/* ═══════════════════════════════════════════
   GLOBAL HELPER FUNCTIONS
   (Accessible from inline HTML events)
   ═══════════════════════════════════════════ */

function addToCart(productId, qty = 1, options = {}) {
  return Cart.add(productId, qty, options);
}

function removeFromCart(key) {
  return Cart.remove(null, key);
}

function toggleWishlist(productId, btn) {
  Wishlist.toggle(productId);
  if (btn) {
    btn.innerHTML     = Wishlist.has(productId) ? '❤️' : '🤍';
    btn.ariaPressed   = String(Wishlist.has(productId));
    btn.classList.toggle('active', Wishlist.has(productId));
  }
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getUrlParam(name) {
  return Utils.getParam(name);
}


/* ═══════════════════════════════════════════
   INITIALISATION
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Core systems ── */
  Navbar.init();
  SideMenu.init();
  CartSidebar.init();
  ScrollReveal.init();
  SmoothScroll.init();
  QuantityInput.init();
  FormValidator.init();
  AnnouncementBanner.init();
  BackToTop.init();
  LazyImages.init();

  /* ── Cart state ── */
  Cart.updateBadge();

  /* ── Product grid (if present) ── */
  if (document.getElementById('productsGrid')) {
    ProductRenderer.renderFeatured(12);
    ProductFilter.init();
  }

  /* ── Product detail (if present) ── */
  if (document.querySelector('.product-detail-grid')) {
    ProductDetail.init();
  }

  /* ── Global keyboard shortcuts ── */
  document.addEventListener('keydown', e => {
    /* / or Ctrl+K → focus search */
    if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !e.target.matches('input, textarea')) {
      e.preventDefault();
      const search = document.querySelector('.nav-search-input');
      if (search) search.focus();
    }
  });

  /* ── Dev log ── */
  console.log(
    '%c✨ NOVA STORE',
    'color: #000; font-size: 14px; font-weight: 800; letter-spacing: 2px;'
  );
  console.log(
    '%cMinimalist E-commerce | v' + APP.version,
    'color: #757575; font-size: 12px;'
  );

});


/* ═══════════════════════════════════════════
   GLOBAL ERROR HANDLER
   ═══════════════════════════════════════════ */

window.addEventListener('error', e => {
  console.warn('[Nova] Runtime error:', e.message);
});

window.addEventListener('unhandledrejection', e => {
  console.warn('[Nova] Unhandled promise rejection:', e.reason);
});


/* ═══════════════════════════════════════════
   PUBLIC API — window.NovaStore
   ═══════════════════════════════════════════ */

window.NovaStore = {
  /* Data */
  APP,
  PRODUCTS,

  /* Modules */
  Cart,
  Wishlist,
  Toast,
  ProductRenderer,
  ProductFilter,
  ProductDetail,
  RecentlyViewed,
  FormValidator,
  ScrollReveal,
  Utils,

  /* Quick actions */
  openProduct(id) {
    window.location.href = `product.html?id=${id}`;
  },

  getProduct(id) {
    return PRODUCTS.find(p => p.id === parseInt(id)) || null;
  },

  searchProducts(query) {
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
    );
  },

  getByCategory(category) {
    return category === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === category);
  },

  getCategories() {
    const seen = new Set();
    return PRODUCTS
      .filter(p => {
        if (seen.has(p.category)) return false;
        seen.add(p.category);
        return true;
      })
      .map(p => ({ id: p.category, name: p.categoryName }));
  }
};