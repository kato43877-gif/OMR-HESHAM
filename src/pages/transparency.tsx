import { pageHero, ctaBanner } from '../layout'

export const transparencyPage = () => pageHero(
  'الشفافية المالية',
  'ثقتكم أمانة. نعرض هنا منهج المؤسسة في إدارة التبرعات ومراجعتها إلى أن تُنشر التقارير الرسمية المعتمدة.',
  'الشفافية المالية'
) + `
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">منهج واضح</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">شفافية قبل <span class="text-grad-emerald">الأرقام</span></h2>
      <p class="lead reveal d2">في مرحلة البداية نفضّل عدم عرض مؤشرات رقمية غير مكتملة. نلتزم بدلاً من ذلك بمنهج واضح للتوثيق والمراجعة وحفظ الثقة.</p>
    </div>

    <div class="grid cols-3">
      ${[
        { i: 'fa-receipt', c: 'ic-blue', t: 'توثيق كل تبرع', d: 'كل تبرع يصل للمؤسسة يتم تسجيله ومراجعته داخل لوحة التحكم قبل توجيهه للغرض المناسب.' },
        { i: 'fa-user-check', c: 'ic-emerald', t: 'مراجعة داخلية', d: 'تتم متابعة التبرعات والطلبات من الإدارة لضمان وضوح المصدر ووجهة الصرف.' },
        { i: 'fa-hand-holding-heart', c: 'ic-gold', t: 'صرف مسؤول', d: 'توجيه الدعم يتم حسب الاحتياج الفعلي وبما يراعي الأمانة والخصوصية وكرامة المستفيدين.' },
      ].map((item, i) => `
      <article class="card reveal d${i + 1}" style="text-align:center">
        <div class="card-icon ${item.c}" style="margin-inline:auto"><i class="fas ${item.i}"></i></div>
        <h3>${item.t}</h3>
        <p>${item.d}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section bg-cream">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <div class="panel reveal-x">
        <h3>ما الذي سننشره لاحقًا؟</h3>
        <ul class="feature-list" style="margin-top:1rem">
          <li><span class="fi ic-blue"><i class="fas fa-file-circle-check"></i></span><div><b>تقارير دورية</b><p>ملخصات واضحة عن أوجه الصرف بعد اعتمادها من الإدارة.</p></div></li>
          <li><span class="fi ic-emerald"><i class="fas fa-scale-balanced"></i></span><div><b>سياسات صرف</b><p>شرح مبسط للمعايير التي تحكم توجيه الدعم للحالات والحملات.</p></div></li>
          <li><span class="fi ic-gold"><i class="fas fa-shield-halved"></i></span><div><b>تحديثات موثقة</b><p>عرض الأخبار والإنجازات بعد اكتمال توثيقها بدون مبالغة أو أرقام غير مكتملة.</p></div></li>
        </ul>
      </div>

      <div class="panel reveal d1">
        <h3>وعدنا لكم</h3>
        <p class="lead" style="margin-top:.8rem">لن نعرض رقمًا لمجرد الظهور. عندما تتوفر بيانات مكتملة ومعتمدة، ستُنشر بطريقة واضحة تحترم ثقة المتبرعين وخصوصية المستفيدين.</p>
        <div style="margin-top:1.4rem">
          <a href="/contact" class="btn btn-primary magnetic"><i class="fas fa-envelope"></i> تواصل معنا</a>
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBanner()}
`
