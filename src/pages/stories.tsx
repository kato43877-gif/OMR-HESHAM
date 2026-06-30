import { pageHero, ctaBanner } from '../layout'
import { img } from '../data'

const bigStories = [
  { img: img('photo-1576765608535-5f04d1e3f289', 700, 500), name: 'محمد · ٧ سنوات', tag: 'علاج', title: 'من فراش المرض إلى ملعب الحياة', text: 'وُلد محمد بعيبٍ خلقي في القلب، وعجزت أسرته عن تكاليف العملية. تكفّلت المؤسسة بالعلاج كاملاً، واليوم يركض ويلعب كأي طفل سليم.' },
  { img: img('photo-1509099836639-18ba1795216d', 700, 500), name: 'سارة أحمد', tag: 'تعليم', title: 'حلمٌ كاد يضيع.. فأصبح طبيبة', text: 'كانت سارة على وشك ترك الجامعة، لكن منحة المؤسسة الدراسية أنقذت مستقبلها. تتخرّج العام القادم طبيبةً تخدم مجتمعها.' },
  { img: img('photo-1469571486292-0ba58a3f068b', 700, 500), name: 'قرية النور', tag: 'مياه', title: 'بئرٌ أعاد الحياة لقرية', text: 'بعد سنواتٍ من معاناة نقص المياه، حفرت المؤسسة بئرًا أروى القرية بأكملها وأصبح صدقةً جارية تنفع المئات يوميًا.' },
]

export const storiesPage = () => pageHero(
  'قصص النجاح',
  'خلف كل رقمٍ إنسانٌ وحياةٌ تغيّرت. هذه بعض القصص التي صنعها عطاؤكم.',
  'قصص النجاح'
) + `
<section class="section">
  <div class="wrap flow" style="gap:3rem">
    ${bigStories.map((s, i) => `
    <article class="news-card reveal" style="background:transparent;box-shadow:none;border:none">
      <div class="split" style="gap:clamp(20px,4vw,50px);${i % 2 ? 'direction:rtl' : ''}">
        <div class="frame" style="${i % 2 ? 'order:2' : ''}">
          <div class="frame-deco ${i % 2 ? 'fd2' : 'fd1'}"></div>
          <img src="${s.img}" alt="${s.title}" loading="lazy">
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;${i % 2 ? 'order:1' : ''}">
          <span class="chip chip-${['blue','gold','emerald'][i % 3]}" style="align-self:flex-start">${s.tag}</span>
          <h2 class="h-lg" style="margin:1rem 0 .6rem">${s.title}</h2>
          <p class="lead">${s.text}</p>
          <div class="who" style="margin-top:1.4rem;display:flex;gap:.8rem;align-items:center">
            <span class="avatar placeholder">${s.name.charAt(0)}</span>
            <b>${s.name}</b>
          </div>
        </div>
      </div>
    </article>`).join('')}
  </div>
</section>

<!-- short testimonials wall -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">كلمات من القلب</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">شهاداتُ <span class="text-grad-emerald">المستفيدين</span></h2>
    </div>
    <div class="grid cols-3">
      ${[
        { n: 'أم خالد', r: 'مستفيدة', t: 'كل شهرٍ تصلنا السلة الغذائية في موعدها. الله يبارك في القائمين عليكم.' },
        { n: 'الحاج سمير', r: 'أب لثلاثة أيتام', t: 'كفالة أبنائي الأيتام رفعت عن كاهلي همًّا ثقيلاً. جزاكم الله كل خير.' },
        { n: 'منى ع.', r: 'متطوّعة وأمّ', t: 'تطوّعتُ معهم فرأيت الأمانة بعيني. أتبرّع وأنا مطمئنة تمامًا.' },
        { n: 'د. أحمد', r: 'طبيب متطوّع', t: 'تنظيمٌ راقٍ وأثرٌ حقيقي. القوافل الطبية تصل لمن لا يصلهم أحد.' },
        { n: 'فاطمة', r: 'طالبة مكفولة', t: 'بفضل المنحة أكملت تعليمي. حلمي أصبح ممكنًا بفضلكم.' },
        { n: 'سعيد م.', r: 'متبرّع دائم', t: 'الشفافية في التقارير جعلتني أزيد تبرّعي كل عام بثقة.' },
      ].map((s, i) => `
      <figure class="testi reveal d${(i % 3) + 1}">
        <span class="quote-mark">”</span>
        <div class="stars" style="margin-bottom:.8rem">${'<i class="fas fa-star"></i>'.repeat(5)}</div>
        <p>${s.t}</p>
        <figcaption class="who"><span class="avatar placeholder">${s.n.charAt(0)}</span><span><b>${s.n}</b><span>${s.r}</span></span></figcaption>
      </figure>`).join('')}
    </div>
  </div>
</section>

${ctaBanner()}
`
