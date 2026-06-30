// Dashboard / CMS — standalone layout (own shell, no public nav)
const LOGO = '/static/img/logo.png'

const dashNav = (active: string) => `
<aside class="dash-side" id="dashSide">
  <a href="/" class="brand"><img src="${LOGO}" style="width:42px;height:42px"><span class="brand-txt"><b>د. عمر هشام</b><span>لوحة التحكم</span></span></a>
  <nav class="dash-nav">
    <a href="/dashboard" class="${active === 'overview' ? 'active' : ''}"><i class="fas fa-gauge-high"></i> النظرة العامة</a>
    <a href="#" class="${active === 'donations' ? 'active' : ''}"><i class="fas fa-hand-holding-dollar"></i> التبرّعات</a>
    <a href="#"><i class="fas fa-bullhorn"></i> الحملات</a>
    <a href="#"><i class="fas fa-hands-helping"></i> المتطوّعون</a>
    <a href="#"><i class="fas fa-users"></i> المستفيدون</a>
    <a href="#"><i class="fas fa-newspaper"></i> المحتوى (CMS)</a>
    <a href="#"><i class="fas fa-images"></i> معرض الصور</a>
    <a href="#"><i class="fas fa-calendar-star"></i> الفعاليات</a>
    <a href="#"><i class="fas fa-chart-pie"></i> التقارير المالية</a>
    <a href="#"><i class="fas fa-gear"></i> الإعدادات</a>
    <a href="/login" style="margin-top:1.5rem;color:#ff8a80"><i class="fas fa-right-from-bracket"></i> تسجيل الخروج</a>
  </nav>
</aside>`

export const dashboardPage = () => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>لوحة التحكم · مؤسسة الدكتور عمر هشام الخيرية</title>
  <link rel="icon" type="image/png" href="${LOGO}">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body>
  <div class="dash">
    ${dashNav('overview')}
    <div class="dash-main">
      <div class="dash-topbar">
        <div style="display:flex;align-items:center;gap:1rem">
          <button class="burger" id="dashBurger" style="display:none"><span></span></button>
          <div><h1 class="h-lg">مرحبًا، د. عمر 👋</h1><p style="color:var(--muted)">إليك ملخّص أداء المؤسسة اليوم.</p></div>
        </div>
        <div style="display:flex;gap:.8rem;align-items:center">
          <button class="lang-btn"><i class="fas fa-bell"></i></button>
          <a href="/donate" class="btn btn-gold btn-sm"><i class="fas fa-plus"></i> حملة جديدة</a>
          <span class="avatar placeholder" style="width:44px;height:44px">ع</span>
        </div>
      </div>

      <!-- KPIs -->
      <div class="grid cols-4" style="margin-bottom:1.6rem">
        ${[
          { i: 'fa-sack-dollar', c: 'ic-emerald', n: '٤٢.٨م', l: 'إجمالي التبرّعات', t: '+12%', up: true },
          { i: 'fa-users', c: 'ic-blue', n: '٤٨,٢٥٠', l: 'المستفيدون', t: '+8%', up: true },
          { i: 'fa-bullhorn', c: 'ic-gold', n: '٢٤', l: 'حملات نشطة', t: '+3', up: true },
          { i: 'fa-hands-helping', c: 'ic-crimson', n: '١,٨٥٠', l: 'متطوّع نشط', t: '-2%', up: false },
        ].map(k => `
        <div class="kpi">
          <div class="kpi-top">
            <div class="kpi-ic ${k.c}"><i class="fas ${k.i}"></i></div>
            <span class="kpi-trend ${k.up ? 'trend-up' : 'trend-down'}"><i class="fas fa-arrow-${k.up ? 'up' : 'down'}"></i> ${k.t}</span>
          </div>
          <div class="kpi-num">${k.n}</div>
          <div class="kpi-lbl">${k.l}</div>
        </div>`).join('')}
      </div>

      <!-- charts -->
      <div class="grid" style="grid-template-columns:1.6fr 1fr;margin-bottom:1.6rem">
        <div class="panel"><h3>التبرّعات الشهرية (ألف ج.م)</h3><canvas id="dashDonations" height="120"></canvas></div>
        <div class="panel"><h3>مصادر التبرّع</h3><canvas id="dashSources" height="120"></canvas></div>
      </div>

      <!-- recent donations table -->
      <div class="panel">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem">
          <h3 style="margin:0">أحدث التبرّعات</h3>
          <a href="#" class="card-link">عرض الكل <i class="fas fa-arrow-left"></i></a>
        </div>
        <div style="overflow-x:auto">
        <table class="dtable">
          <thead><tr><th>المتبرّع</th><th>الحملة</th><th>المبلغ</th><th>الطريقة</th><th>الحالة</th><th>التاريخ</th></tr></thead>
          <tbody>
            ${[
              { n: 'أحمد م.', c: 'علاج الأطفال', a: '٢,٥٠٠', m: 'بطاقة', s: 'ok', sl: 'مكتمل', d: 'اليوم' },
              { n: 'سارة ع.', c: 'كسوة الشتاء', a: '٥٠٠', m: 'محفظة', s: 'ok', sl: 'مكتمل', d: 'اليوم' },
              { n: 'متبرّع مجهول', c: 'الصندوق العام', a: '١٠,٠٠٠', m: 'تحويل', s: 'pend', sl: 'قيد المراجعة', d: 'أمس' },
              { n: 'خالد ف.', c: 'سقيا الماء', a: '١,٢٠٠', m: 'بطاقة', s: 'ok', sl: 'مكتمل', d: 'أمس' },
              { n: 'منى س.', c: 'كفالة يتيم', a: '٣٠٠', m: 'بطاقة', s: 'info', sl: 'شهري', d: '٣ أيام' },
            ].map(r => `
            <tr>
              <td>${r.n}</td><td>${r.c}</td><td><b>${r.a} ج.م</b></td><td>${r.m}</td>
              <td><span class="badge badge-${r.s === 'ok' ? 'ok' : r.s === 'pend' ? 'pend' : 'info'}">${r.sl}</span></td><td style="color:var(--muted)">${r.d}</td>
            </tr>`).join('')}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script src="/static/app.js"></script>
</body>
</html>`
