// ============================================================
// Jasmine Yao Personal Website — Interactivity
// ============================================================

(function () {
  'use strict';

  const root = document.documentElement;
  const body = document.body;

  // ---------- THEME TOGGLE ----------
  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('jy-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);

  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('jy-theme', next);
  });

  // ---------- LANGUAGE TOGGLE ----------
  const langBtn = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('jy-lang') || 'zh';

  function applyLang(lang) {
    document.querySelectorAll('[data-en], [data-zh]').forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text === null || text === undefined) return;
      // 仅替换该元素内部的 HTML，允许 strong/em/a 等内联标签
      el.innerHTML = text;
    });
    body.classList.toggle('zh-mode', lang === 'zh');
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    langBtn.textContent = lang === 'zh' ? 'EN / 中文' : '中文 / EN';
  }
  applyLang(currentLang);

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('jy-lang', currentLang);
    applyLang(currentLang);
  });

  // ---------- NAV BACKGROUND ON SCROLL ----------
  const nav = document.getElementById('topnav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 50 ? 'var(--shadow-sm)' : 'none';
  });

  // ---------- ACTIVE NAV LINK ON SCROLL ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );
  sections.forEach((sec) => observer.observe(sec));

  // ---------- REVEAL ON SCROLL ----------
  const revealEls = document.querySelectorAll(
    '.section, .tl__item, .proj__card, .cap__col, .contact__card, .edu__card'
  );
  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

})();
