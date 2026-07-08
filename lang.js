const langBtn = document.getElementById('lang-btn');

let currentLang = localStorage.getItem('lang') || 'en';
setLanguage(currentLang);

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('lang', currentLang);
  setLanguage(currentLang);
});

function setLanguage(lang) {
  langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  // The CSS rules on html[lang] hide the inactive .lang-* blocks before
  // this script runs; the inline styles below repeat it as a fallback
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
  document.querySelectorAll('.lang-es').forEach(el => {
    el.style.display = lang === 'es' ? '' : 'none';
  });
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    el.textContent = text || el.getAttribute('data-en');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
