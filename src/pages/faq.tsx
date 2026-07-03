import { pageHero } from '../layout'
import { faqs } from '../data'

export const faqPage = () => pageHero(
  'الأسئلة الشائعة',
  'جمعنا لك إجابات أكثر الأسئلة تكرارًا. لم تجد ما تبحث عنه؟ تواصل معنا مباشرة.',
  'الأسئلة الشائعة'
) + `
<section class="section">
  <div class="wrap">
    <div class="accordion" id="faqAcc">
      ${faqs.map((f, i) => `
      <div class="acc-item reveal d${(i % 4) + 1}${i === 0 ? ' open' : ''}">
        <button class="acc-head">${f.q} <i class="fas fa-chevron-down"></i></button>
        <div class="acc-body"${i === 0 ? ' style="max-height:300px"' : ''}>
          <div class="acc-body-inner">${f.a}</div>
        </div>
      </div>`).join('')}
    </div>

    <div class="cta-banner reveal-scale" style="margin-top:3.5rem">
      <h2 class="h-lg">لم تجد إجابتك؟</h2>
      <p class="lead" style="margin:.8rem auto 0;max-width:520px">فريق خدمة المتبرّعين جاهزٌ للإجابة على كل استفساراتك.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-gold btn-lg magnetic"><i class="fas fa-envelope"></i> تواصل معنا</a>
        <a href="/contact" class="btn btn-outline-light btn-lg"><i class="fas fa-message"></i> أرسل رسالة</a>
      </div>
    </div>
  </div>
</section>
`
