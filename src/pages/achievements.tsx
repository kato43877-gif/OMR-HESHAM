import { pageHero, ctaBanner } from '../layout'

export const achievementsPage = () => pageHero(
  'مسيرة من الإنجاز والعطاء',
  'بفضل الله ثم بفضل شركائنا وداعمينا، نصنع أثراً حقيقياً في حياة الناس.',
  'الإنجازات'
) + `
<!-- Real Stats -->
<section class="section-tight">
  <div class="wrap">
    <div class="stats-strip reveal">
      <div class="grid cols-4">
        <div class="stat-item">
          <i class="fas fa-family"></i>
          <div class="num"><span data-count="50">0</span>+</div>
          <div class="lbl">أسرة مستفيدة</div>
        </div>
        <div class="stat-item">
          <i class="fas fa-sack-dollar"></i>
          <div class="num"><span data-count="60000">0</span></div>
          <div class="lbl">ج.م دعم الأسر</div>
        </div>
        <div class="stat-item">
          <i class="fas fa-hospital"></i>
          <div class="num"><span data-count="20000">0</span></div>
          <div class="lbl">ج.م دعم المرضى</div>
        </div>
        <div class="stat-item">
          <i class="fas fa-hand-holding-heart"></i>
          <div class="num"><span data-count="80000">0</span>+</div>
          <div class="lbl">ج.م إجمالي الدعم</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Spending Report -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">تقرير الصرف</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">الحمد لله <span class="text-grad-gold">تم صرف الدعم</span></h2>
      <p class="lead reveal d2">نسأل الله أن يجعل هذا العمل في ميزان حسنات كل من شارك وساهم. بارك الله في الجميع.</p>
    </div>
    <div class="grid cols-2" style="max-width:800px;margin:0 auto">
      <div class="card reveal d1" style="text-align:center;padding:2.5rem;border-top:4px solid var(--brand-gold)">
        <i class="fas fa-family" style="font-size:3rem;color:var(--brand-gold);margin-bottom:1rem"></i>
        <h3 class="h-lg" style="color:var(--brand-gold)">٦٠,٠٠٠ ج.م</h3>
        <p style="font-size:1.1rem;font-weight:700;margin-top:.5rem">دعم الأسر المحتاجة</p>
        <p style="color:var(--muted);margin-top:.5rem">عدد ٥٠ أسرة بإجمالي مبلغ ٦٠,٠٠٠ جنيه</p>
      </div>
      <div class="card reveal d2" style="text-align:center;padding:2.5rem;border-top:4px solid #2ecc71">
        <i class="fas fa-heart-pulse" style="font-size:3rem;color:#2ecc71;margin-bottom:1rem"></i>
        <h3 class="h-lg" style="color:#2ecc71">٢٠,٠٠٠ ج.م</h3>
        <p style="font-size:1.1rem;font-weight:700;margin-top:.5rem">دعم المرضى</p>
        <p style="color:var(--muted);margin-top:.5rem">دعم مالي وعلاجي لمرضى غير قادرين</p>
      </div>
    </div>
  </div>
</section>

<!-- Health Section -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">صحة أفضل... حياة أكرم</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إنجازاتنا في <span class="text-grad-blue">المجال الصحي</span></h2>
      <p class="lead reveal d2">نؤمن بأن الصحة نعمة عظيمة وحق من حقوق الإنسان، ولذلك نعمل على دعم المرضى وتقديم المساعدات الطبية والعلاجية.</p>
    </div>
    <div class="grid cols-3">
      ${[
        { i: 'fa-stethoscope', t: 'عيادة أنف وأذن وحنجرة', d: 'دعم مستشفى كفر العنانية بعيادة أنف وأذن وحنجرة لدعم المرضى وتوفير الكشف والعلاج المتخصص.', c: 'ic-blue' },
        { i: 'fa-bolt', t: 'تطوير البنية التحتية', d: 'دعم المستشفى بتطوير وتعديل أعمال الكهرباء لتحسين الخدمات وضمان بيئة آمنة للمرضى.', c: 'ic-gold' },
        { i: 'fa-pills', t: 'صرف علاجات شهرية', d: 'توفير الأدوية والعلاجات الشهرية للمرضى غير القادرين بشكل مستمر.', c: 'ic-emerald' },
        { i: 'fa-ribbon', t: 'دعم مرضى السرطان', d: 'مساعدات شهرية لمرضى السرطان لمساندتهم في رحلتهم العلاجية وتخفيف الأعباء عنهم.', c: 'ic-crimson' },
        { i: 'fa-hospital', t: 'عمليات جراحية', d: 'المساهمة في إجراء عمليات جراحية لغير القادرين بالتعاون مع المستشفيات المتخصصة.', c: 'ic-blue' },
      ].map((a, idx) => `
      <article class="card reveal d${(idx % 3) + 1}">
        <div class="card-icon ${a.c}"><i class="fas ${a.i}"></i></div>
        <h3>${a.t}</h3><p>${a.d}</p>
      </article>`).join('')}
    </div>
    <div class="center" style="margin-top:2rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-hero);color:#fff;border-radius:1rem">
        <p style="font-size:1.1rem;line-height:1.8;font-weight:600">﴿ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ﴾</p>
        <p style="opacity:.6;font-size:.85rem;margin-top:.4rem">سورة المائدة — الآية ٣٢</p>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">أجيال متعلمة... مستقبل أفضل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إنجازاتنا في <span class="text-grad-emerald">المجال التعليمي</span></h2>
      <p class="lead reveal d2">نؤمن أن التعليم هو أساس بناء الإنسان والمجتمع. نولي اهتماماً كبيراً بدعم المنظومة التعليمية ومساندة الطلاب في مختلف المراحل.</p>
    </div>
    <div class="grid cols-3">
      ${[
        { i: 'fa-print', t: 'دعم المدارس', d: 'دعم عدد من المدارس في القرى بماكينات تصوير حديثة لتيسير العمل الإداري والتعليمي وخدمة الطلاب والمعلمين.' },
        { i: 'fa-trophy', t: 'تكريم المتفوقين', d: 'تكريم الطلبة المتفوقين في جميع المراحل الدراسية وتحفيزهم على الاستمرار في التفوق والنجاح.' },
        { i: 'fa-graduation-cap', t: 'دفع المصاريف الدراسية', d: 'دفع مصاريف الطلبة غير القادرين لمساعدتهم على استكمال تعليمهم دون انقطاع.' },
        { i: 'fa-bag-shopping', t: 'مستلزمات مدرسية كاملة', d: 'توفير المستلزمات المدرسية كاملة للطلاب: شنط، أدوات كتابية، كتب، زي مدرسي وغيرها.' },
        { i: 'fa-magnifying-glass-chart', t: 'متابعة مستمرة', d: 'متابعة مستمرة للطلاب طوال العام الدراسي للاطمئنان على مستواهم الدراسي وحل أي تحديات تواجههم.' },
        { i: 'fa-house-chimney', t: 'زيارات تكريمية', d: 'تكريم الأوائل بزيارات منزلية من أعضاء المؤسسة لتكريمهم وتقديرهم وتشجيعهم وأسرهم.' },
      ].map((a, idx) => `
      <article class="card reveal d${(idx % 3) + 1}">
        <div class="card-icon ${idx % 2 === 0 ? 'ic-gold' : 'ic-emerald'}"><i class="fas ${a.i}"></i></div>
        <h3>${a.t}</h3><p>${a.d}</p>
      </article>`).join('')}
    </div>
    <div class="center" style="margin-top:2rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-gold);color:#fff;border-radius:1rem">
        <p style="font-size:1.1rem;line-height:1.8;font-weight:600">العلم يبني بيوتاً لا عماد لها 🏛️<br>والجهل يهدم بيوت العز والكرم</p>
      </div>
    </div>
  </div>
</section>

<!-- Quran Section -->
<section class="section bg-aurora">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">غرس اليوم... نور المستقبل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">مشاريعنا في <span class="text-grad-brand">تحفيظ القرآن الكريم</span></h2>
      <p class="lead reveal d2">نؤمن بأن القرآن الكريم هو المنهج الرباني الذي يصلح القلوب ويبني الأجيال ويصنع القادة.</p>
    </div>
    <div class="grid cols-2" style="max-width:850px;margin:0 auto">
      <div class="card reveal d1" style="border-top:4px solid var(--brand-gold)">
        <div class="card-icon ic-gold"><i class="fas fa-trophy"></i></div>
        <h3>مسابقات القرآن الكريم</h3>
        <ul style="list-style:none;padding:0;margin-top:1rem;line-height:2.2">
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> مشاركة واسعة من الأبناء والبنات في مختلف الأعمار</li>
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> حفظ وتلاوة وتجويد في أجواء إيمانية تنافسية مميزة</li>
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> جوائز قيمة للفائزين تشجيعاً للمتميزين وتحفيزاً لمواصلة الطريق</li>
        </ul>
      </div>
      <div class="card reveal d2" style="border-top:4px solid #2ecc71">
        <div class="card-icon ic-emerald"><i class="fas fa-book-open-reader"></i></div>
        <h3>حلقات التحفيظ للأطفال</h3>
        <ul style="list-style:none;padding:0;margin-top:1rem;line-height:2.2">
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> مناهج مبسطة تناسب أعمار الأطفال</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> معلمون مؤهلون في بيئة آمنة ومحفزة</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> متابعة مستمرة ومراجعة دورية لحفظ القرآن الكريم</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> تعليم وتربية لغرس القيم والأخلاق القرآنية</li>
        </ul>
      </div>
    </div>
    <div class="center" style="margin-top:2.5rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-hero);color:#fff;border-radius:1rem">
        <i class="fas fa-book-quran" style="font-size:2rem;color:var(--brand-gold);margin-bottom:.8rem"></i>
        <p style="font-size:1.15rem;line-height:1.8;font-weight:600">«خيركم من تعلّم القرآن وعلّمه»</p>
        <p style="opacity:.6;font-size:.85rem;margin-top:.4rem">صحيح البخاري</p>
      </div>
    </div>
  </div>
</section>

<!-- Food & Family Support -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">الغذاء حق... والتكافل واجب... والعطاء رسالة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">التكافل الغذائي <span class="text-grad-emerald">ودعم الأسر</span></h2>
    </div>
    <div class="grid cols-4">
      ${[
        { i: 'fa-cow', t: 'توزيع اللحوم', d: 'توزيع اللحوم الطازجة على الأسر الأولى بالرعاية في المواسم والأعياد لإدخال الفرحة ومشاركة البركة.' },
        { i: 'fa-box-open', t: 'كراتين رمضان', d: 'توزيع كراتين رمضان داخل القرى والأحياء الأكثر احتياجاً، تحتوي على المواد الغذائية الأساسية التي تكفي الأسرة لمدة شهر كامل.' },
        { i: 'fa-shirt', t: 'ملابس العيد', d: 'توزيع ملابس جديدة على الأطفال والأسر المحتاجة لإدخال السرور عليهم في أيام العيد.' },
        { i: 'fa-utensils', t: 'الوجبات الغذائية', d: 'توزيع وجبات غذائية مطهية بشكل يومي ودوري على الأسر المحتاجة والعمالة غير المنتظمة.' },
      ].map((a, idx) => `
      <article class="card reveal d${idx + 1}" style="text-align:center">
        <div class="card-icon ${idx % 2 === 0 ? 'ic-gold' : 'ic-emerald'}" style="margin-inline:auto"><i class="fas ${a.i}"></i></div>
        <h3>${a.t}</h3><p>${a.d}</p>
      </article>`).join('')}
    </div>
    <p class="center reveal" style="margin-top:2rem;font-size:1.1rem;font-weight:700;color:var(--brand-gold)">بفضل الله ثم دعمكم نرسم البسمة على وجوههم ونصنع الفرق في حياتهم 💛</p>
  </div>
</section>

<!-- Community Initiatives -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">خدمة المجتمع رسالة إنسانية عظيمة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">مبادرات المؤسسة <span class="text-grad-brand">المجتمعية</span></h2>
    </div>
    <div class="grid cols-4">
      ${[
        { i: 'fa-gamepad', t: 'مسابقات في الشوارع', d: 'تنظيم مسابقات ترفيهية وتعليمية في الشوارع لتعزيز روح التكافل والمرح.' },
        { i: 'fa-gift', t: 'هدايا للأطفال', d: 'توزيع هدايا على الأطفال لإدخال الفرحة والسرور على قلوبهم.' },
        { i: 'fa-people-group', t: 'خدمة الأهالي', d: 'خدمة الأهالي وحل المشكلات المجتمعية بالتعاون مع الجهات المعنية.' },
        { i: 'fa-seedling', t: 'مبادرات تنموية', d: 'دعم المبادرات الإنسانية والتنموية، لأن الخير لا يتوقف عند حدود.' },
      ].map((a, idx) => `
      <article class="card reveal d${idx + 1}" style="text-align:center">
        <div class="card-icon ic-blue" style="margin-inline:auto"><i class="fas ${a.i}"></i></div>
        <h3>${a.t}</h3><p>${a.d}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<div class="center" style="padding:3rem 0">
  <p style="font-size:1.2rem;font-weight:800;color:var(--brand-gold)">شكراً لكل من كان سبباً في هذا الخير 💚</p>
</div>

${ctaBanner()}
`
