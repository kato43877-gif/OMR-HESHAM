import { pageHero } from '../layout'
import { news, img } from '../data'

const more = [
  { img: img('photo-1469571486292-0ba58a3f068b', 700, 420), cat: 'مياه', date: '١٥ مايو ٢٠٢٥', title: 'إتمام حفر البئر العاشر هذا العام', excerpt: 'وصلنا إلى عشرة آبار جديدة تخدم آلاف الأسر في القرى النائية.' },
  { img: img('photo-1488521787991-ed7bbaae773c', 700, 420), cat: 'إغاثة', date: '٣ مايو ٢٠٢٥', title: 'استجابة عاجلة لأسر تضرّرت من السيول', excerpt: 'فرق المؤسسة تصل خلال ساعات لتقديم المأوى والغذاء العاجل.' },
  { img: img('photo-1593113630400-ea4288922497', 700, 420), cat: 'شراكات', date: '٢١ أبريل ٢٠٢٥', title: 'توقيع شراكة مع مستشفى متخصص', excerpt: 'اتفاقية تتيح علاجًا مجانيًا للحالات الحرجة من مستفيدي المؤسسة.' },
]

export const newsPage = () => pageHero(
  'أخبار المؤسسة',
  'تابع آخر مستجدّات حملاتنا وفعالياتنا وأثرنا الإنساني على أرض الواقع.',
  'الأخبار'
) + `
<section class="section">
  <div class="wrap">
    <!-- featured -->
    <article class="news-card reveal" style="margin-bottom:3rem">
      <div class="split" style="gap:0;align-items:stretch">
        <div class="news-media" style="aspect-ratio:auto"><img src="${news[0].img}" alt="${news[0].title}" style="height:100%;min-height:320px"></div>
        <div style="padding:clamp(1.6rem,3vw,2.6rem);display:flex;flex-direction:column;justify-content:center">
          <span class="chip chip-gold" style="align-self:flex-start;margin-bottom:1rem">خبر مميّز · ${news[0].cat}</span>
          <h2 class="h-lg">${news[0].title}</h2>
          <p class="lead" style="margin:1rem 0">${news[0].excerpt} انطلقت الفرق الميدانية بحماسٍ كبير لتوصيل الدعم إلى أكبر عددٍ من الأسر قبل اشتداد البرد.</p>
          <div class="news-date" style="margin-bottom:1rem"><span><i class="fas fa-calendar"></i> ${news[0].date}</span><span><i class="fas fa-user"></i> فريق التحرير</span></div>
          <a href="#" class="btn btn-primary magnetic" style="align-self:flex-start"><i class="fas fa-book-open"></i> اقرأ المقال كاملاً</a>
        </div>
      </div>
    </article>

    <div class="grid cols-3">
      ${[...news.slice(1), ...more].map((n, i) => `
      <article class="news-card reveal d${(i % 3) + 1}">
        <div class="news-media"><img src="${n.img}" alt="${n.title}" loading="lazy"><span class="chip chip-blue" style="position:absolute;top:1rem;inset-inline-start:1rem">${n.cat}</span></div>
        <div class="news-body">
          <div class="news-date"><span><i class="fas fa-calendar"></i> ${n.date}</span></div>
          <h3>${n.title}</h3>
          <p style="color:var(--muted);font-size:.92rem">${n.excerpt}</p>
          <a href="#" class="card-link">اقرأ المزيد <i class="fas fa-arrow-left"></i></a>
        </div>
      </article>`).join('')}
    </div>

    <div class="center" style="margin-top:3rem">
      <button class="btn btn-ghost btn-lg">تحميل المزيد <i class="fas fa-rotate"></i></button>
    </div>
  </div>
</section>
`
