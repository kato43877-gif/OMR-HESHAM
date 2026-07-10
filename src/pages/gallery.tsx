import { pageHero, ctaBanner } from '../layout'
import { img } from '../data'

const photos = [
  { src: '/static/img/gallery-1.jpg', t: 'مشروع الأضاحي وتوزيع اللحوم', cat: 'ميدان' },
  { src: '/static/img/gallery-2.jpg', t: 'توزيع الكراتين والمساعدات الغذائية', cat: 'غذاء' },
  { src: '/static/img/gallery-3.jpg', t: 'دعم عيادة الأنف والأذن والحنجرة', cat: 'صحة' },
  { src: '/static/img/gallery-4.jpg', t: 'تكريم المتفوقين ودعم التعليم', cat: 'تعليم' },
  { src: '/static/img/gallery-5.jpg', t: 'حلقات تحفيظ القرآن الكريم للأطفال', cat: 'تعليم' },
  { src: '/static/img/gallery-6.jpg', t: 'أنشطة وفعاليات تطوعية مع الشباب', cat: 'ميدان' },
  { src: '/static/img/gallery-7.jpg', t: 'زيارات المرضى وتوفير الدعم الصحي', cat: 'صحة' },
  { src: '/static/img/gallery-8.jpg', t: 'المبادرات الرمضانية وتوزيع الوجبات', cat: 'غذاء' },
]

export const galleryPage = () => pageHero(
  'معرض الصور',
  'لحظاتٌ من الميدان توثّق رحلة العطاء، وتروي قصص الأمل التي صنعناها معًا.',
  'معرض الصور'
) + `
<section class="section">
  <div class="wrap">
    <div class="center" style="margin-bottom:2.4rem">
      <div class="tabs" id="galFilter">
        <button class="tab active" data-filter="all">الكل</button>
        <button class="tab" data-filter="صحة">صحة</button>
        <button class="tab" data-filter="غذاء">غذاء</button>
        <button class="tab" data-filter="تعليم">تعليم</button>
        <button class="tab" data-filter="ميدان">ميدان</button>
      </div>
    </div>
    <div class="masonry reveal">
      ${photos.map((p, i) => `
      <div class="g-item" data-cat="${p.cat}">
        <img src="${p.src}" alt="${p.t}" loading="lazy">
        <div class="g-overlay"><span><i class="fas fa-camera"></i> ${p.t}</span></div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- video block -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="split">
      <div class="reveal-x">
        <span class="eyebrow">شاهد قصتنا</span>
        <h2 class="h-xl" style="margin:.8rem 0 1rem">رحلةٌ من <span class="text-grad-blue">العطاء</span> بالصورة والصوت</h2>
        <p class="lead">شاهد كيف يتحوّل تبرّعك إلى ابتسامةٍ على وجه طفل، وإلى أملٍ في قلب أسرة. وثائقيٌّ قصير من قلب الميدان.</p>
        <a href="/campaigns" class="btn btn-primary magnetic" style="margin-top:1.4rem"><i class="fas fa-heart"></i> ادعم حملاتنا</a>
      </div>
      <div class="reveal d1 frame" style="aspect-ratio:16/9;display:grid;place-items:center;background:var(--grad-hero);cursor:pointer">
        <button class="lang-btn" style="width:84px;height:84px;font-size:1.8rem;background:rgba(255,255,255,.95);color:var(--blue-700)"><i class="fas fa-play"></i></button>
      </div>
    </div>
  </div>
</section>

${ctaBanner()}
`
