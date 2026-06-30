// Authentication pages — login & register (split layout, own shell)
const LOGO = '/static/img/logo.png'

const shell = (title: string, body: string) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} · مؤسسة الدكتور عمر هشام الخيرية</title>
  <link rel="icon" type="image/png" href="${LOGO}">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body>
  <div class="auth">
    <div class="auth-side">
      <div class="hero-bg-grid"></div>
      <div class="hero-glow g3"></div>
      <div class="auth-side-inner">
        <a href="/" class="brand" style="margin-bottom:2rem">
          <img src="${LOGO}" style="width:60px;height:60px">
          <span class="brand-txt"><b style="color:#fff;font-size:1.1rem">مؤسسة د. عمر هشام</b><span style="color:var(--gold-400)">الخيرية</span></span>
        </a>
        <h2 class="h-xl" style="color:#fff">العطاء بإيمان<br>والإحسان <span style="color:var(--gold-400)">للجميع</span></h2>
        <p class="lead" style="color:rgba(255,255,255,.8);margin-top:1rem">انضمّ إلى منصّتنا وكن جزءًا من رحلة الأثر الإنساني. تابع تبرّعاتك، وأنشطتك التطوّعية، وأثرك في مكانٍ واحد.</p>
        <div style="display:flex;gap:2rem;margin-top:2.4rem">
          <div><b style="display:block;font-size:1.8rem;color:#fff">٤٨ ألف+</b><span style="color:rgba(255,255,255,.65);font-size:.85rem">مستفيد</span></div>
          <div><b style="display:block;font-size:1.8rem;color:#fff">١.٨ ألف+</b><span style="color:rgba(255,255,255,.65);font-size:.85rem">متطوّع</span></div>
        </div>
      </div>
    </div>
    <div class="auth-form-wrap">
      <div class="auth-card">${body}</div>
    </div>
  </div>
  <script src="/static/app.js"></script>
</body>
</html>`

export const loginPage = () => shell('تسجيل الدخول', `
  <h1 class="h-lg" style="margin-bottom:.4rem">أهلاً بعودتك 👋</h1>
  <p style="color:var(--muted);margin-bottom:2rem">سجّل دخولك لمتابعة حسابك وأثرك.</p>
  <form data-redirect="/dashboard">
    <div class="field"><label>البريد الإلكتروني</label><input type="email" required placeholder="email@example.com"></div>
    <div class="field"><label>كلمة المرور</label><input type="password" required placeholder="••••••••"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.4rem">
      <label style="display:flex;gap:.5rem;align-items:center;font-size:.9rem;font-weight:600"><input type="checkbox" style="width:auto"> تذكّرني</label>
      <a href="#" style="color:var(--blue-700);font-weight:700;font-size:.9rem">نسيت كلمة المرور؟</a>
    </div>
    <button type="submit" class="btn btn-primary btn-block btn-lg magnetic"><i class="fas fa-right-to-bracket"></i> تسجيل الدخول</button>
  </form>
  <div style="display:flex;align-items:center;gap:1rem;margin:1.6rem 0;color:var(--muted)"><span style="flex:1;height:1px;background:var(--ink-100)"></span> أو <span style="flex:1;height:1px;background:var(--ink-100)"></span></div>
  <div class="grid cols-2" style="gap:.7rem">
    <button class="btn btn-ghost"><i class="fab fa-google"></i> Google</button>
    <button class="btn btn-ghost"><i class="fab fa-facebook-f"></i> Facebook</button>
  </div>
  <p class="center" style="margin-top:1.8rem;color:var(--muted)">ليس لديك حساب؟ <a href="/register" style="color:var(--blue-700);font-weight:800">أنشئ حسابًا</a></p>
`)

export const registerPage = () => shell('إنشاء حساب', `
  <h1 class="h-lg" style="margin-bottom:.4rem">أنشئ حسابك ✨</h1>
  <p style="color:var(--muted);margin-bottom:2rem">انضمّ إلى مجتمع العطاء في دقائق.</p>
  <form data-redirect="/dashboard">
    <div class="field"><label>الاسم الكامل</label><input required placeholder="اسمك الكريم"></div>
    <div class="field"><label>البريد الإلكتروني</label><input type="email" required placeholder="email@example.com"></div>
    <div class="grid cols-2" style="gap:0 1rem">
      <div class="field"><label>الجوال</label><input required placeholder="01xxxxxxxxx"></div>
      <div class="field"><label>كلمة المرور</label><input type="password" required placeholder="••••••••"></div>
    </div>
    <label style="display:flex;gap:.5rem;align-items:flex-start;font-size:.88rem;font-weight:600;margin-bottom:1.4rem"><input type="checkbox" required style="width:auto;margin-top:.3rem"> أوافق على <a href="/transparency" style="color:var(--blue-700)">الشروط والأحكام</a> وسياسة الخصوصية</label>
    <button type="submit" class="btn btn-primary btn-block btn-lg magnetic"><i class="fas fa-user-plus"></i> إنشاء الحساب</button>
  </form>
  <p class="center" style="margin-top:1.8rem;color:var(--muted)">لديك حساب بالفعل؟ <a href="/login" style="color:var(--blue-700);font-weight:800">سجّل الدخول</a></p>
`)
