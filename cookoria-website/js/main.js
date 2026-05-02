import { initLanguage, setLanguage, t } from './translations.js';
initLanguage();
window.switchLanguage = function(lang) { setLanguage(lang); location.reload(); };
console.log("✅ Cookoria Website is ready!");