// ===== TRANSLATIONS =====
const translations = {
  en: {
    navAbout: "About", navMenu: "Menu", navReviews: "Reviews", navContact: "Contact",
    navCta: "Book a Table",
    heroBadge: "4.7 / 5 on Google",
    heroTitle: 'Bamboo <span class="accent">Garden</span><br>Restaurant & Bar',
    heroSub: "Where nature meets flavor — authentic Nepali cuisine, craft cocktails & a cozy bamboo-inspired atmosphere.",
    heroLoc: "Burtibang Bazar, Ward 1, near Laxmikunda Pul, Nepal",
    heroBtn1: "Book a Table", heroBtn2: "View Menu",
    heroHours: "Open Daily · 7:00 AM – 9:00 PM",
    aboutTag: "Our Story",
    aboutTitle: "A Cozy Escape in the Heart of Burtibang",
    aboutP1: "Nestled along the serene banks near Laxmikunda Pul, Bamboo Garden Restaurant & Bar is Burtibang's premier dining destination. Our bamboo-themed interiors and warm ambient lighting create the perfect setting for memorable meals.",
    aboutP2: "From traditional Nepali thalis to signature cocktails, every dish is crafted with local ingredients and served with heartfelt hospitality.",
    feat1: "Bamboo Interiors", feat2: "Local Cuisine", feat3: "Craft Cocktails", feat4: "Garden Seating",
    menuTag: "Our Menu", menuTitle: "Taste the Best of Burtibang",
    menuSub: "Hand-crafted dishes with locally sourced ingredients, paired with refreshing cocktails and beverages.",
    tabAll: "All", tabApp: "Appetizers", tabMain: "Main Course", tabBar: "Bar Specials",
    m1: "Crispy Momos", m1d: "Fried dumplings stuffed with seasoned chicken, served with spicy tomato achar.",
    m2: "Bamboo Shoot Salad", m2d: "Fresh tama (bamboo shoot) tossed with mustard oil, chilies & local herbs.",
    m3: "Sekuwa Platter", m3d: "Smoky grilled meat skewers marinated in traditional Nepali spices.",
    m4: "Dal Bhat Thali", m4d: "Classic Nepali thali with dal, rice, seasonal vegetables, achar & papad.",
    m5: "Grilled Trout Fish", m5d: "Locally caught river trout grilled with herbs and lemon butter sauce.",
    m6: "Chicken Chhoila", m6d: "Spiced grilled chicken, Newari style, with mustard oil and roasted spices.",
    m7: "Bamboo Mojito", m7d: "Rum, fresh mint, lime & our secret bamboo-infused syrup. Refreshingly unique.",
    m8: "Himalayan Sunset", m8d: "Vodka blended with passion fruit, grenadine & a splash of mountain citrus.",
    m9: "Local Craft Beer", m9d: "Rotating selection of Nepal's finest craft brews. Ask for today's pick!",
    revTag: "Testimonials", revTitle: "What Our Guests Say", revSub: "Real experiences from our wonderful visitors.",
    r1: "Nice place to hangout with great vibes. The ambiance is incredible and the food is always fresh and flavorful.",
    r2: "Best cocktails in town! The Bamboo Mojito is a must-try. Perfect spot for an evening with friends.",
    r3: "Friendly service and the best Dal Bhat thali I've ever had. Feels like home away from home!",
    revGoogleBtn: "See All Reviews on Google Maps ↗",
    conTag: "Get in Touch", conTitle: "Visit Us or Book a Table", conSub: "We'd love to hear from you. Drop by or send us a message!",
    conLoc: "Location", conLocVal: "Burtibang Bazar, Ward 1,<br>Near Laxmikunda Pul, Burtibang, Nepal",
    conPhone: "Phone", conHours: "Hours", conHoursVal: "Open Daily: 7:00 AM – 9:00 PM",
    conMapBtn: "Open in Maps",
    formName: "Full Name", formEmail: "Email Address", formPhone: "Phone Number", formMsg: "Message",
    formPh1: "Your name", formPh2: "you@example.com", formPh3: "+977-XXXXXXXXXX",
    formPh4: "Book a table, ask about our menu, or just say hello...",
    formBtn: "Send Message", formSuccess: "Message Sent! ✓",
    footerCopy: "© 2026 Bamboo Garden Restaurant & Bar. All Rights Reserved."
  },
  ne: {
    navAbout: "हाम्रो बारेमा", navMenu: "मेनु", navReviews: "समीक्षा", navContact: "सम्पर्क",
    navCta: "टेबल बुक गर्नुहोस्",
    heroBadge: "गुगलमा ४.७ / ५",
    heroTitle: 'Bamboo <span class="accent">Garden</span><br>Restaurant & Bar',
    heroSub: "जहाँ प्रकृति र स्वादको संगम हुन्छ — प्रामाणिक नेपाली खाना, क्राफ्ट कक्टेल र आरामदायी बाँसको माहोल।",
    heroLoc: "बुर्तिबाङ बजार, वडा नं. १, लक्ष्मीकुण्ड पुल नजिक, नेपाल",
    heroBtn1: "टेबल बुक गर्नुहोस्", heroBtn2: "मेनु हेर्नुहोस्",
    heroHours: "दैनिक खुला · बिहान ७:०० – बेलुका ९:०० बजे",
    aboutTag: "हाम्रो कथा",
    aboutTitle: "बुर्तिबाङको मुटुमा एक आरामदायी ठाउँ",
    aboutP1: "लक्ष्मीकुण्ड पुल नजिक शान्त वातावरणमा अवस्थित, Bamboo Garden Restaurant & Bar बुर्तिबाङको प्रमुख खानपान गन्तव्य हो। हाम्रो बाँसको थीम भएको भित्री सजावट र न्यानो वातावरणले यादगार भोजनको लागि उत्तम सेटिङ बनाउँछ।",
    aboutP2: "परम्परागत नेपाली थालीदेखि सिग्नेचर कक्टेलसम्म, हरेक परिकार स्थानीय सामग्रीबाट बनाइन्छ र हार्दिक आतिथ्यसहित पेश गरिन्छ।",
    feat1: "बाँसको सजावट", feat2: "स्थानीय खाना", feat3: "क्राफ्ट कक्टेल", feat4: "बगैचा बैठक",
    menuTag: "हाम्रो मेनु", menuTitle: "बुर्तिबाङको उत्कृष्ट स्वाद",
    menuSub: "स्थानीय सामग्रीबाट बनेका हस्तनिर्मित परिकार, ताजा कक्टेल र पेय पदार्थसहित।",
    tabAll: "सबै", tabApp: "स्नाक्स", tabMain: "मुख्य", tabBar: "बार स्पेशल",
    m1: "क्रिस्पी मोमो", m1d: "मसालेदार चिकनले भरिएको तलेको मोमो, टमाटरको अचारसहित।",
    m2: "तामाको सलाद", m2d: "ताजा तामा (बाँसको मुन्टा) तोरीको तेल, खुर्सानी र स्थानीय जडिबुटीसहित।",
    m3: "सेकुवा प्लेटर", m3d: "परम्परागत नेपाली मसलामा मरिनेट गरिएको धुँवामय ग्रिल्ड मासुको सिक।",
    m4: "दालभात थाली", m4d: "क्लासिक नेपाली थाली — दाल, भात, मौसमी तरकारी, अचार र पापड।",
    m5: "ग्रिल्ड ट्राउट माछा", m5d: "स्थानीय खोलाको ट्राउट माछा जडिबुटी र लेमन बटर ससमा ग्रिल गरिएको।",
    m6: "चिकन छोइला", m6d: "नेवारी शैलीमा बनेको मसालेदार ग्रिल्ड चिकन, तोरीको तेल र भुटेको मसलासहित।",
    m7: "बाँस मोजिटो", m7d: "रम, ताजा पुदिना, कागती र हाम्रो गोप्य बाँसको सिरप। अद्वितीय ताजगी।",
    m8: "हिमालयन सनसेट", m8d: "भोडका, प्यासन फ्रुट, ग्रेनाडिन र पहाडी सिट्रसको मिश्रण।",
    m9: "स्थानीय क्राफ्ट बियर", m9d: "नेपालको उत्कृष्ट क्राफ्ट ब्रुको चयन। आजको पिकको लागि सोध्नुहोस्!",
    revTag: "प्रशंसापत्र", revTitle: "हाम्रा पाहुनाहरू के भन्छन्", revSub: "हाम्रा अतिथिहरूको वास्तविक अनुभव।",
    r1: "राम्रो भाइब भएको घुम्ने ठाउँ। वातावरण अविश्वसनीय छ र खाना सधैं ताजा र स्वादिलो हुन्छ।",
    r2: "शहरको सबैभन्दा राम्रो कक्टेल! बाँस मोजिटो अवश्य पिउनुहोस्। साथीहरूसँग साँझको लागि उत्तम ठाउँ।",
    r3: "मिलनसार सेवा र मैले खाएको सबैभन्दा राम्रो दालभात थाली। घरजस्तो लाग्छ!",
    revGoogleBtn: "Google Maps मा सबै समीक्षा हेर्नुहोस् ↗",
    conTag: "सम्पर्कमा रहनुहोस्", conTitle: "हामीलाई भेट्नुहोस् वा टेबल बुक गर्नुहोस्", conSub: "हामी तपाईंबाट सुन्न चाहन्छौं। भेट्न आउनुहोस् वा सन्देश पठाउनुहोस्!",
    conLoc: "ठेगाना", conLocVal: "बुर्तिबाङ बजार, वडा नं. १,<br>लक्ष्मीकुण्ड पुल नजिक, बुर्तिबाङ, नेपाल",
    conPhone: "फोन", conHours: "समय", conHoursVal: "दैनिक खुला: बिहान ७:०० – बेलुका ९:०० बजे",
    conMapBtn: "नक्सामा खोल्नुहोस्",
    formName: "पूरा नाम", formEmail: "इमेल ठेगाना", formPhone: "फोन नम्बर", formMsg: "सन्देश",
    formPh1: "तपाईंको नाम", formPh2: "you@example.com", formPh3: "+९७७-XXXXXXXXXX",
    formPh4: "टेबल बुक गर्नुहोस्, मेनुको बारेमा सोध्नुहोस्, वा नमस्ते भन्नुहोस्...",
    formBtn: "सन्देश पठाउनुहोस्", formSuccess: "सन्देश पठाइयो! ✓",
    footerCopy: "© २०२६ Bamboo Garden Restaurant & Bar। सर्वाधिकार सुरक्षित।"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
      else el.innerHTML = t[key];
    }
  });
  document.querySelector('.lang-toggle').textContent = lang === 'en' ? 'ने' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'ne';
}

// ===== THEME TOGGLE =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('themeToggle');
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);
  document.getElementById('themeToggle').addEventListener('click', () => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Language
  document.querySelector('.lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ne' : 'en');
  });

  // Sticky nav
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('active'); navLinks.classList.remove('open');
  }));

  // Scroll top
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('visible', window.scrollY > 400));
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Fade-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 80); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Menu tabs
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      document.querySelectorAll('.menu-card').forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = ''; setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const t = translations[currentLang];
    btn.textContent = t.formSuccess; btn.style.background = '#4ade80';
    setTimeout(() => { btn.textContent = t.formBtn; btn.style.background = ''; form.reset(); }, 2500);
  });
});
