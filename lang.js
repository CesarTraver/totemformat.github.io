const langBtn = document.getElementById('lang-btn');

let currentLang = localStorage.getItem('lang') || 'en';
setLanguage(currentLang);

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('lang', currentLang);
  setLanguage(currentLang);
});

function setLanguage(lang) {
  if (lang === 'en') {
    langBtn.textContent = 'ES';
    document.documentElement.lang = 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });
  } else {
    langBtn.textContent = 'EN';
    document.documentElement.lang = 'es';
    document.querySelectorAll('[data-es]').forEach(el => {
      el.textContent = el.getAttribute('data-es');
    });
  }
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
