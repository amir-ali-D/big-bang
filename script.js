const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const glow = document.querySelector('.cursor-glow');
const langToggle = document.getElementById('langToggle');
const flagFA = langToggle ? langToggle.querySelector('.flag-fa') : null;
const flagUS = langToggle ? langToggle.querySelector('.flag-us') : null;

const translations = {
  en: {
    title: "BIG BANG — Create What's Next",
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_kicker: 'THE NEXT CHAPTER STARTS NOW', hero_title: "We create<br><em>what's next.</em>",
    hero_text: 'BIG BANG combines technology, creativity and bold ideas to build digital experiences that move businesses forward.',
    hero_btn1: 'Explore BIG BANG', hero_btn2: 'View projects', meta_tech:'TECHNOLOGY', meta_creative:'CREATIVITY', meta_innovation:'INNOVATION',
    vision:'01 / VISION', est:'EST.', scroll:'Scroll to explore', who:'WHO WE ARE', about_title:'Small spark.<br><em>Big impact.</em>',
    about_lead:'We are a forward-thinking company focused on turning ambitious ideas into useful, beautiful and memorable digital products.',
    about_side:'We believe great digital work lives where <strong>clear thinking</strong>, <strong>technology</strong> and <strong>imagination</strong> meet.',
    start_chat:'Start a conversation', stat_projects:'Projects', stat_years:'Years experience', stat_minds:'Creative minds', stat_sat:'% satisfaction',
    what:'WHAT WE DO', services_title:'Ideas into<br><em>reality.</em>',
    svc_tech_title:'Technology', svc_creative_title:'Creative', svc_digital_title:'Digital', svc_innovation_title:'Innovation',
    svc_tech_text:'Smart software, modern websites and digital solutions designed around real needs.',
    svc_creative_text:'Brand identities and visual experiences that make ideas impossible to ignore.',
    svc_digital_text:'Digital strategies that connect brands with people and turn attention into action.',
    svc_innovation_text:'Experimental thinking for ambitious products, concepts and new opportunities.', discover:'Discover',
    selected:'SELECTED WORK', projects_title:'Built to<br><em>stand out.</em>',
    proj_a_type:'01 / DIGITAL EXPERIENCE', proj_a_title:'Project Alpha', proj_a_meta:'Branding · UX · Development',
    proj_b_type:'02 / SMART TECHNOLOGY', proj_b_title:'Project Nova', proj_b_meta:'Strategy · Product · Technology',
    proj_c_type:'03 / CREATIVE PLATFORM', proj_c_title:'Project Orbit', proj_c_meta:'Identity · Design · Digital', view_concept:'View concept',
    philosophy:'OUR PHILOSOPHY', quote:'“Don\'t follow the future.<br><em>Create it.</em>”', lets_talk:'LET\'S TALK',
    contact_title:'Have an idea?<br><em>Let\'s make it happen.</em>', contact_text:"Tell us what you're imagining. The first step is simply starting the conversation.",
    form_name_label:'Name', form_name_placeholder:'Your name', form_email_label:'Email', form_message_label:'Message', form_message_placeholder:'Tell us about your idea...', send:'Send message',
    back_top:'Back to top ↑', footer_tag:'Ideas that change everything.', footer_copy:'© <span id="year"></span> BIG BANG. All rights reserved.'
  },
  fa: {
    title: 'بیگ بنگ — آینده را خلق می‌کنیم',
    nav_home:'خانه', nav_about:'درباره ما', nav_services:'خدمات', nav_projects:'پروژه‌ها', nav_contact:'تماس با ما',
    hero_kicker:'فصل بعدی همین حالا شروع می‌شود', hero_title:'ما آینده را<br><em>خلق می‌کنیم.</em>',
    hero_text:'BIG BANG فناوری، خلاقیت و ایده‌های جسورانه را ترکیب می‌کند تا تجربه‌های دیجیتالی بسازد که کسب‌وکارها را رو به جلو می‌برند.',
    hero_btn1:'آشنایی با BIG BANG', hero_btn2:'مشاهده پروژه‌ها', meta_tech:'فناوری', meta_creative:'خلاقیت', meta_innovation:'نوآوری',
    vision:'۰۱ / چشم‌انداز', est:'تأسیس', scroll:'برای کشف بیشتر اسکرول کنید', who:'ما چه کسانی هستیم', about_title:'جرقه‌ای کوچک.<br><em>تأثیری بزرگ.</em>',
    about_lead:'ما شرکتی آینده‌نگر هستیم که روی تبدیل ایده‌های بزرگ به محصولات دیجیتالی کاربردی، زیبا و ماندگار تمرکز دارد.',
    about_side:'ما باور داریم بهترین کارهای دیجیتال جایی شکل می‌گیرند که <strong>تفکر شفاف</strong>، <strong>فناوری</strong> و <strong>تخیل</strong> به هم می‌رسند.',
    start_chat:'شروع یک گفت‌وگو', stat_projects:'پروژه', stat_years:'سال تجربه', stat_minds:'ذهن خلاق', stat_sat:'٪ رضایت',
    what:'چه کار می‌کنیم', services_title:'ایده‌ها را به<br><em>واقعیت تبدیل می‌کنیم.</em>',
    svc_tech_title:'فناوری', svc_creative_title:'خلاقیت', svc_digital_title:'دیجیتال', svc_innovation_title:'نوآوری',
    svc_tech_text:'نرم‌افزارهای هوشمند، وب‌سایت‌های مدرن و راهکارهای دیجیتال متناسب با نیازهای واقعی.',
    svc_creative_text:'هویت‌های برند و تجربه‌های بصری که باعث می‌شوند ایده‌ها دیده و به‌یادماندنی شوند.',
    svc_digital_text:'استراتژی‌های دیجیتال برای ارتباط برندها با مردم و تبدیل توجه به نتیجه.',
    svc_innovation_text:'تفکر تجربی برای محصولات بلندپروازانه، ایده‌های تازه و فرصت‌های جدید.', discover:'بیشتر بدانید',
    selected:'پروژه‌های منتخب', projects_title:'ساخته شده برای<br><em>متفاوت بودن.</em>',
    proj_a_type:'۰۱ / تجربه دیجیتال', proj_a_title:'پروژه آلفا', proj_a_meta:'برندینگ · تجربه کاربری · توسعه',
    proj_b_type:'۰۲ / فناوری هوشمند', proj_b_title:'پروژه نوا', proj_b_meta:'استراتژی · محصول · فناوری',
    proj_c_type:'۰۳ / پلتفرم خلاق', proj_c_title:'پروژه اوربیت', proj_c_meta:'هویت · طراحی · دیجیتال', view_concept:'مشاهده ایده',
    philosophy:'فلسفه ما', quote:'«آینده را دنبال نکن.<br><em>آن را خلق کن.</em>»', lets_talk:'بیایید صحبت کنیم',
    contact_title:'ایده‌ای داری؟<br><em>بیایید آن را عملی کنیم.</em>', contact_text:'ایده‌ات را برای ما بنویس. اولین قدم، فقط شروع یک گفت‌وگوست.',
    form_name_label:'نام', form_name_placeholder:'نام شما', form_email_label:'ایمیل', form_message_label:'پیام', form_message_placeholder:'ایده‌تان را برای ما بنویسید...', send:'ارسال پیام',
    back_top:'بازگشت به بالا ↑', footer_tag:'ایده‌هایی که همه‌چیز را تغییر می‌دهند.', footer_copy:'© <span id="year"></span> BIG BANG. تمامی حقوق محفوظ است.'
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-fa', lang === 'fa');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = lang === 'fa' ? 'بیگ بنگ — فناوری، خلاقیت و نوآوری.' : 'BIG BANG — Technology, creativity and innovation.';

  if (langToggle) {
    const isFa = lang === 'fa';
    if (flagFA) flagFA.hidden = isFa;
    if (flagUS) flagUS.hidden = !isFa;
    langToggle.setAttribute('aria-label', isFa ? 'Switch to English language' : 'Switch to Persian language');
    langToggle.setAttribute('title', isFa ? 'English' : 'فارسی');
  }
  localStorage.setItem('bigbang-language', lang);
}

const savedLang = localStorage.getItem('bigbang-language') || 'en';
setLanguage(savedLang);
if (langToggle) {
  langToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLanguage(document.documentElement.lang === 'fa' ? 'en' : 'fa');
  });
}

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

window.addEventListener('pointermove', (event) => {
  if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }
}, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuToggle.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
  }));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.delay || 0);
    entry.target.style.transitionDelay = `${delay}ms`;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, index) => { el.dataset.delay = Math.min((index % 5) * 70, 280); revealObserver.observe(el); });

const stats = document.querySelectorAll('[data-count]');
const statObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target, target = Number(el.dataset.count), duration = 1100, start = performance.now();
    const tick = now => { const progress=Math.min((now-start)/duration,1), eased=1-Math.pow(1-progress,3); el.textContent=Math.round(target*eased); if(progress<1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); observer.unobserve(el);
  });
}, { threshold: 0.7 });
stats.forEach(el => statObserver.observe(el));

const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const status = contactForm.querySelector('.form-status');
  status.textContent = document.documentElement.lang === 'fa' ? 'ممنون! پیام شما آماده است — این فرم آزمایشی هنوز ایمیل ارسال نمی‌کند.' : 'Thanks! Your message is ready — this demo form does not send emails yet.';
  contactForm.reset();
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
