import { pageHero, ctaBanner } from '../layout'
import { events, img } from '../data'

export const eventsPage = () => pageHero(
  'الفعاليات والمناسبات',
  'انضمّ إلينا في فعالياتنا القادمة — قوافل، ملتقيات، وحفلات خيرية تصنع الفرق معًا.',
  'الفعاليات'
) + `
<section class="section">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <!-- featured event -->
      <div class="reveal-x">
        <article class="campaign">
          <div class="campaign-media"><img src="${img('photo-1511795409834-ef04bbd61622', 800, 500)}" alt="الفعالية الرئيسية"><span class="chip chip-gold tag">فعالية مميّزة</span></div>
          <div class="campaign-body">
            <h3 class="h-lg">الحفل السنوي الخيري الكبير</h3>
            <p>أمسيةٌ استثنائية تجمع المحسنين والداعمين لدعم برامج المؤسسة، تتخللها فقرات وعرض لأبرز الإنجازات ومزاد خيري.</p>
            <div style="display:flex;gap:1.4rem;flex-wrap:wrap;margin:.6rem 0">
              <span class="chip chip-blue"><i class="fas fa-calendar"></i> ٣٠ سبتمبر ٢٠٢٥</span>
              <span class="chip chip-emerald"><i class="fas fa-clock"></i> ٧:٠٠ مساءً</span>
              <span class="chip"><i class="fas fa-location-dot"></i> فندق سميراميس · القاهرة</span>
            </div>
            <a href="#" class="btn btn-primary magnetic"><i class="fas fa-ticket"></i> احجز مقعدك</a>
          </div>
        </article>
      </div>

      <!-- upcoming list -->
      <div class="reveal d1">
        <h2 class="h-lg" style="margin-bottom:1.4rem">الفعاليات القادمة</h2>
        <div class="flow">
          ${events.map(e => `
          <div class="event-row">
            <div class="event-date"><div class="d">${e.d}</div><div class="m">${e.m}</div></div>
            <div style="flex:1">
              <span class="chip chip-blue" style="margin-bottom:.4rem">${e.type}</span>
              <h3 style="font-size:1.08rem">${e.title}</h3>
              <p style="color:var(--muted);font-size:.88rem"><i class="fas fa-location-dot"></i> ${e.place}</p>
            </div>
            <a href="#" class="btn btn-ghost btn-sm">التفاصيل</a>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- past events -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">من أرشيف فعالياتنا</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">لحظاتٌ <span class="text-grad-emerald">لا تُنسى</span></h2>
    </div>
    <div class="grid cols-3">
      ${[
        { id: 'photo-1511795409834-ef04bbd61622', t: 'ملتقى المتطوّعين ٢٠٢٤', n: '٤٠٠ متطوّع' },
        { id: 'photo-1593113598332-cd288d649433', t: 'القافلة الطبية الكبرى', n: '٣٠٠٠ مريض' },
        { id: 'photo-1509099836639-18ba1795216d', t: 'حفل تكريم المتفوقين', n: '١٥٠ طالبًا' },
      ].map((p, i) => `
      <article class="news-card reveal d${i + 1}">
        <div class="news-media"><img src="${img(p.id, 700, 420)}" alt="${p.t}" loading="lazy"></div>
        <div class="news-body"><h3>${p.t}</h3><span class="chip chip-emerald" style="align-self:flex-start"><i class="fas fa-users"></i> ${p.n}</span></div>
      </article>`).join('')}
    </div>
  </div>
</section>

${ctaBanner()}
`
