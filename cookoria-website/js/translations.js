export const translations = {
  ar: {
    appName: "🍳 Cookoria", home: "الرئيسية", recipes: "الوصفات", login: "دخول", signup: "اشتراك", logout: "تسجيل خروج",
    heroTitle: "اطبخ بخطوات بسيطة بدون تعقيد", heroText: "وصفات مع صور ومؤقتات، وقف واستكمل في أي وقت", startBtn: "ابدأ مجانًا",
    feature1Title: "وقف واستئناف", feature1Text: "احفظ تقدمك وكمل في أي وقت",
    feature2Title: "مؤقتات مدمجة", feature2Text: "مؤقتات أوتوماتيك لكل خطوة",
    feature3Title: "وصفات عربية", feature3Text: "أكلات مصرية وشرق أوسطية",
    loginTitle: "🔐 تسجيل الدخول", email: "البريد الإلكتروني", password: "كلمة المرور", loginBtn: "دخول",
    noAccount: "ليس لديك حساب؟", createAccount: "أنشئ حساب جديد",
    signupTitle: "📝 إنشاء حساب جديد", fullName: "الاسم كامل", createBtn: "إنشاء حساب", haveAccount: "لديك حساب بالفعل؟",
    ourRecipes: "📖 وصفاتنا", cookNow: "اطبخ دلوقتي",
    welcome: "👋 مرحباً بك في Cookoria", recipesCooked: "وصفات طبختها", yourRating: "تقييمك", cookingTime: "وقت الطبخ", upgradePremium: "🚀 رقية للبريميوم",
    errorEmailUsed: "❌ الإيميل مستخدم", errorWeakPassword: "❌ كلمة السر ضعيفة", errorInvalidCred: "❌ الإيميل أو كلمة السر غلط", errorUserNotFound: "❌ الحساب مش موجود",
    successSignup: "✅ تم إنشاء الحساب بنجاح", successLogin: "🎉 مرحباً بك", successLogout: "👋 تم تسجيل الخروج",
    koshari: "كشرى مصري", koshariDesc: "وصفة الكشرى الأصلية", mahshi: "محشى ورق عنب", mahshiDesc: "طريقة عمل المحشى", fatta: "فتة بالخلطة", fattaDesc: "فتة الأضحية", pricingTitle: "🎯 خطط الاشتراك"
  },
  en: {
    appName: "🍳 Cookoria", home: "Home", recipes: "Recipes", login: "Login", signup: "Sign Up", logout: "Logout",
    heroTitle: "Cook with simple, guided steps", heroText: "Recipes with images & timers, pause anytime", startBtn: "Start Free",
    feature1Title: "Pause & Resume", feature1Text: "Save your progress and continue anytime",
    feature2Title: "Built-in Timers", feature2Text: "Automatic timers for each step",
    feature3Title: "Arabic Recipes", feature3Text: "Egyptian & Middle Eastern dishes",
    loginTitle: "🔐 Login", email: "Email", password: "Password", loginBtn: "Login",
    noAccount: "Don't have an account?", createAccount: "Create account",
    signupTitle: "📝 Create Account", fullName: "Full Name", createBtn: "Sign Up", haveAccount: "Already have an account?",
    ourRecipes: "📖 Our Recipes", cookNow: "Cook Now",
    welcome: "👋 Welcome to Cookoria", recipesCooked: "Recipes Cooked", yourRating: "Your Rating", cookingTime: "Cooking Time", upgradePremium: "🚀 Upgrade to Premium",
    errorEmailUsed: "❌ Email already in use", errorWeakPassword: "❌ Weak password", errorInvalidCred: "❌ Invalid credentials", errorUserNotFound: "❌ Account not found",
    successSignup: "✅ Account created", successLogin: "🎉 Welcome back", successLogout: "👋 Logged out",
    koshari: "Egyptian Koshari", koshariDesc: "Original Koshari recipe", mahshi: "Stuffed Grape Leaves", mahshiDesc: "Step by step recipe", fatta: "Egyptian Fatta", fattaDesc: "Traditional Eid Fatta", pricingTitle: "🎯 Pricing Plans"
  }
};
let currentLang = localStorage.getItem('cookoria_lang') || 'ar';
export function setLanguage(lang) { if(lang==='ar'||lang==='en'){ currentLang=lang; localStorage.setItem('cookoria_lang',lang); updatePageLanguage(); updatePageDirection(); } }
export function t(key) { return translations[currentLang][key] || key; }
function updatePageDirection() { document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = currentLang; }
function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => { const key=el.getAttribute('data-i18n'); if(el.tagName==='INPUT'&&el.placeholder) el.placeholder=t(key); else if(el.tagName==='BUTTON') el.innerText=t(key); else el.innerText=t(key); });
  document.querySelectorAll('input[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  if(document.querySelector('title')) document.title = t('appName');
}
export function initLanguage() { updatePageDirection(); updatePageLanguage(); }