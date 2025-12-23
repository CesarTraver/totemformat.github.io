// lang.js
const langBtn = document.getElementById('lang-btn');

// Al cargar la página, revisa si hay idioma guardado
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
    // Muestra contenido en inglés
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });
  } else {
    langBtn.textContent = 'EN';
    document.documentElement.lang = 'es';
    // Muestra contenido en español
    document.querySelectorAll('[data-es]').forEach(el => {
      el.textContent = el.getAttribute('data-es');
    });
  }
}
