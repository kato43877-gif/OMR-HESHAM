import { pageHero, ctaBanner } from '../layout'
import { achievements, stats } from '../data'

export const achievementsPage = () => pageHero(
  'مسيرة من الإنجازات',
  'كل عامٍ نقطع خطوةً أقرب نحو رؤيتنا. هذه محطّاتٌ مضيئة في رحلة عطائنا المستمرة.',
  'الإنجازات'
) + `
<section class="section-tight">
  <div class="wrap">
    <div class="stats-strip reveal">
      <div class="grid cols-4">
        ${stats.map(s => `<div class="stat-item"><i class="fas ${s.icon}"></i><div class="num"><span data-count="${s.num}">0</span>${s.suffix}</div><div class="lbl">${s.label}</div></div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">الخط الزمني</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">رحلتنا <span class="text-grad-brand">عامًا بعد عام</span></h2>
    </div>
    <div class="timeline">
      ${achievements.map((a, i) => `
      <div class="tl-item reveal${i % 2 ? '-x' : ''}">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <span class="tl-year">${a.year}</span>
          <h3>${a.title}</h3>
          <p>${a.desc}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Awards -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">تقديرٌ واعتماد</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">جوائز <span class="text-grad-gold">وشهادات</span></h2>
    </div>
    <div class="grid cols-4">
      ${[
        { i: 'fa-award', t: 'جائزة التميّز الإنساني', y: '٢٠٢٤' },
        { i: 'fa-certificate', t: 'اعتماد الشفافية المالية', y: '٢٠٢٣' },
        { i: 'fa-medal', t: 'درع العمل التطوّعي', y: '٢٠٢٢' },
        { i: 'fa-ribbon', t: 'شهادة الجودة المؤسسية', y: '٢٠٢١' },
      ].map((a, idx) => `
      <article class="card reveal d${idx + 1}" style="text-align:center">
        <div class="card-icon ic-gold" style="margin-inline:auto"><i class="fas ${a.i}"></i></div>
        <h3 style="font-size:1.08rem">${a.t}</h3>
        <p style="color:var(--gold-700);font-weight:800">${a.y}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

${ctaBanner()}
`
