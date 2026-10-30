(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);

  const welcomeModal = $('#welcomeModal');
  const enterSiteBtn = $('#enterSiteBtn');
  const themeToggleBtn = $('#themeToggleBtn');
  const themeIcon = $('#themeIcon');

  // إغلاق نافذة الترحيب
  enterSiteBtn?.addEventListener('click', () => {
    welcomeModal?.classList.add('hidden');
  });

  // التبديل بين الوضع النهاري والليلي
  themeToggleBtn?.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('theme-light');
    if (themeIcon) {
      themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  });
})();
