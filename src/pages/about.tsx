import { pageHero, ctaBanner } from '../layout'
import { values, img } from '../data'

export const about = (stats: any = { total_donors: 0, total_campaigns: 0, total_volunteers: 0 }) => pageHero(
  'عطاء مستمر... لتنمية الإنسان والمجتمع',
  'تعرّف على مؤسسة الدكتور عمر هشام الخيرية — رؤيتها، رسالتها، وقيمها التي تقود كل ما نفعله.',
  'من نحن'
) + `
<!-- Founder split -->
<section class="section">
  <div class="wrap">
    <div class="split">
      <div class="reveal-x">
        <div class="frame">
          <div class="frame-deco fd1"></div>
          <div class="frame-deco fd2"></div>
          <img src="/static/img/omar-portrait.png" alt="الدكتور عمر هشام رحمه الله">
        </div>
        <p style="text-align:center;margin-top:1rem;color:var(--muted);font-style:italic">المرحوم الدكتور عمر هشام (رحمه الله)</p>
      </div>
      <div class="reveal d1">
        <span class="eyebrow">قصة الأثر والوفاء</span>
        <h2 class="h-xl" style="margin:.8rem 0 1rem">تأسيس <span class="text-grad-blue">وفاءً لذكراه</span></h2>
        <p class="lead">«لم يكن عمر مجرد ابن، بل كان طالباً متميزاً في كلية الطب، يحمل في قلبه حلم مداواة الناس والتخفيف عنهم. بعد أن اختاره الله إلى جواره، أردت أن يمتد حلمه وألا ينقطع أثره الطيب عن الدنيا.»</p>
        <p style="margin-top:1rem;color:var(--muted)">أسستُ هذه المؤسسة الخيرية كصدقة جارية لتكون يداً ممتدة لكل مريض ومحتاج، ولتستمر رسالة ابني الحبيب في نشر الخير والرحمة والإحسان بين الناس.</p>
        <div style="margin-top:1.6rem;display:flex;gap:1rem;align-items:center">
          <span class="avatar placeholder" style="width:56px;height:56px">هـ</span>
          <div><b style="font-size:1.05rem">المهندس هشام صبري</b><br><span style="color:var(--muted);font-size:.9rem">مؤسس المؤسسة ورئيس مجلس الإدارة</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Chairman's Message -->
<section class="section bg-cream" style="border-top: 1px solid rgba(12,26,43,.05); border-bottom: 1px solid rgba(12,26,43,.05);">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">كلمة رئيس مجلس الإدارة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">عطاء مستمر <span class="text-grad-gold">لإنسان أفضل ومجتمع أبقى</span></h2>
    </div>
    
    <div class="card reveal" style="max-width:900px;margin:0 auto;padding:2.5rem;line-height:2.2;font-size:1.08rem;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:var(--grad-gold);opacity:0.06;border-radius:0 0 0 100%"></div>
      <i class="fas fa-quote-right" style="position:absolute;top:1.5rem;right:1.5rem;font-size:3rem;opacity:0.06;color:var(--brand-gold)"></i>
      
      <p style="margin-bottom:1.2rem;font-weight:700;color:var(--brand-gold)">بسم الله الرحمن الرحيم</p>
      <p style="margin-bottom:1rem">الحمد لله رب العالمين والصلاة والسلام على سيدنا محمد وعلى آله وصحبه أجمعين.</p>
      <p style="margin-bottom:1rem">أعزائي القراء الكرام، شركاء الخير والداعمين لمسيرة العطاء...</p>
      <p style="margin-bottom:1rem">منذ انطلاقتها، كانت رؤيتنا واضحة ورسالتنا نبيلة. نؤمن أن العمل الخيري ليس مجرد مساعدات مادية، بل هو <strong>استثمار في الإنسان</strong> وتمكين له ليكون فاعلاً ومنتجاً في مجتمعه.</p>
      <p style="margin-bottom:1rem">ومن هذا المنطلق نعمل في المؤسسة على مجالات متعددة: <strong>الدعم الصحي، وإطعام الطعام، ودعم التعليم والقرآن الكريم، والمشاريع الإنتاجية، ومصارف الزكاة والصدقات، والمشاريع المجتمعية.</strong></p>
      <p style="margin-bottom:1rem">كل مشروع ننفذه وكل يد نمدها هو ثمرة ثقة منحتمونا إياها وتوفيق من الله عز وجل. ولم يكن هذا الإنجاز ليتحقق لولا جهود فريق العمل المتفاني ودعم شركائنا الدائم وتكاتف أهل الخير الذين نذروا أموالهم لبناء مستقبل أفضل لأبنائنا ومجتمعنا.</p>
      <p style="margin-bottom:1rem">وفي هذه المنصة نأخذكم في جولة داخل أنشطتنا ومشاريعنا، ونستعرض قصصاً واقعية لأرواح تغيرت وحياة تحسنت بفضل الله ثم بفضلكم.</p>
      <p style="margin-bottom:1rem;font-weight:700;color:var(--ink-700)">ختاماً... نسأل الله عز وجل أن يجعل ما نقدمه خالصاً لوجهه الكريم، وأن يتقبله منا ويجعله في ميزان حسناتنا وحسناتكم.</p>
      <p style="font-weight:800;color:var(--brand-gold);font-size:1.2rem;margin-top:1.5rem">معاً نصنع الأمل 🤝</p>
      
      <div style="margin-top:2rem;display:flex;gap:1rem;align-items:center;border-top:1px solid var(--ink-100);padding-top:1.5rem">
        <span class="avatar placeholder" style="width:56px;height:56px;background:var(--grad-gold);color:#fff">هـ</span>
        <div><b style="font-size:1.05rem">المهندس هشام صبري</b><br><span style="color:var(--muted);font-size:.9rem">رئيس مجلس الإدارة</span></div>
      </div>
    </div>

    <div class="card reveal d1" style="max-width:900px;margin:2rem auto 0;padding:2rem;text-align:center;background:var(--grad-hero);color:#fff;border-radius:1.2rem">
      <i class="fas fa-book-quran" style="font-size:2rem;margin-bottom:1rem;color:var(--brand-gold)"></i>
      <p style="font-size:1.15rem;line-height:2;font-weight:600">﴿ مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ ﴾</p>
      <p style="opacity:.7;margin-top:.5rem;font-size:.9rem">سورة البقرة — الآية ٢٦١</p>
    </div>
  </div>
</section>

<!-- Prayers and Remembrance -->
<section class="section" style="border-top: 1px solid rgba(12,26,43,.05); border-bottom: 1px solid rgba(12,26,43,.05);">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">دعاء وصدقة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">أدعية وأذكار <span class="text-grad-emerald">للدكتور عمر هشام</span></h2>
      <p class="lead" style="margin-top:1rem">شاركنا بالدعاء لفقيدنا الشاب الدكتور عمر هشام، نسأل الله أن يتقبله في الصالحين ويجعل هذا العمل شفيعاً له.</p>
    </div>
    
    <div class="grid cols-3">
      <article class="card reveal d1" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-blue" style="margin-inline:auto"><i class="fas fa-hands-praying"></i></div>
        <h3>دعاء للمتوفى</h3>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--ink-700); margin-top:1rem">«اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس.»</p>
      </article>
      
      <article class="card reveal d2" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-gold" style="margin-inline:auto"><i class="fas fa-book-quran"></i></div>
        <h3>سورة الفاتحة</h3>
        <p style="font-size:1.1rem; line-height:2; font-weight:700; color:var(--blue-900); margin-top:1rem" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾
        </p>
      </article>

      <article class="card reveal d3" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-emerald" style="margin-inline:auto"><i class="fas fa-heart-pulse"></i></div>
        <h3>دعاء الأثر والقبول</h3>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--ink-700); margin-top:1rem">«اللهم اجعل كل عمل خيري وعلاج لمريض ومساعدة لمحتاج تقوم بها هذه المؤسسة صدقة جارية في ميزان حسنات عمر، واجعله شفيعاً له ومقراً لعينيه في جنات النعيم.»</p>
      </article>
    </div>

    <div class="center" style="margin-top:3rem">
      <button onclick="if(window.__toast) window.__toast('جزاك الله خيراً، وتقبل الله دعاءك ورحم فقيدنا وغفر له وجعل مثواه الجنة.')" class="btn btn-primary btn-lg magnetic">
        <i class="fas fa-circle-check"></i> قرأت الفاتحة وتمنيت له الرحمة
      </button>
    </div>
  </div>
</section>

<!-- Mission / Vision -->
<section class="section bg-aurora">
  <div class="wrap">
    <div class="grid cols-2">
      <div class="glass-card reveal-x">
        <div class="card-icon ic-blue"><i class="fas fa-eye"></i></div>
        <h3 class="h-lg">رؤيتنا</h3>
        <p class="lead" style="margin-top:.6rem">مجتمعٌ متكافلٌ ومتماسك، لا يُترك فيه إنسانٌ دون رعاية. نؤمن أن خدمة الإنسان واجب ومسؤولية، وأن التكافل والتراحم هما أساس بناء مجتمع قوي.</p>
      </div>
      <div class="glass-card reveal d1">
        <div class="card-icon ic-emerald"><i class="fas fa-flag"></i></div>
        <h3 class="h-lg">رسالتنا</h3>
        <p class="lead" style="margin-top:.6rem">عطاء مستمر لتنمية الإنسان والمجتمع. نعمل عبر برامجنا ومبادراتنا على تقديم الدعم المباشر للأسر المحتاجة، والوقوف بجانب المرضى، ومساعدة كل من يحتاج إلى عون.</p>
      </div>
    </div>
  </div>
</section>

<!-- Goals -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">نحو مجتمع أفضل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">أهدافنا في <span class="text-grad-emerald">الدعم المجتمعي</span></h2>
    </div>
    <div class="grid cols-4">
      ${[
        { i: 'fa-scale-balanced', t: 'الاستقرار الاجتماعي', d: 'المساهمة في تحقيق الاستقرار الاجتماعي للأسر المحتاجة.', c: 'ic-blue' },
        { i: 'fa-heart-circle-check', t: 'روح التكافل', d: 'تعزيز روح التكافل والمحبة في المجتمع.', c: 'ic-crimson' },
        { i: 'fa-hospital', t: 'مساعدة المرضى', d: 'مساعدة المرضى وتوفير الاحتياجات الأساسية لهم.', c: 'ic-emerald' },
        { i: 'fa-hand-holding-heart', t: 'تخفيف الأعباء', d: 'تخفيف الأعباء عن الأسر المحتاجة والمتعففة.', c: 'ic-gold' },
      ].map((g, idx) => `
      <article class="card reveal d${idx + 1}" style="text-align:center">
        <div class="card-icon ${g.c}" style="margin-inline:auto"><i class="fas ${g.i}"></i></div>
        <h3>${g.t}</h3><p>${g.d}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- Values -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">قيمنا التي نؤمن بها</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">قيمٌ نعيشها <span class="text-grad-gold">قبل أن نقولها</span></h2>
    </div>
    <div class="grid cols-3" style="max-width:960px;margin:0 auto">
      ${values.map((v, i) => `
      <article class="card reveal d${(i % 3) + 1}" style="text-align:center">
        <div class="card-icon ${v.cls}" style="margin-inline:auto"><i class="fas ${v.icon}"></i></div>
        <h3>${v.title}</h3><p>${v.desc}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- Team -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">مجلس الإدارة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إدارة <span class="text-grad-emerald">المؤسسة</span></h2>
    </div>
    <div class="grid cols-2" style="max-width:700px;margin:0 auto">
      ${[
        { n: 'المهندس هشام صبري', r: 'المؤسس ورئيس مجلس الإدارة', i: 'fa-user-tie' },
        { n: 'الأستاذ جمال عبد الخالق', r: 'مسؤول التبرعات النقدية', i: 'fa-hand-holding-dollar' },
      ].map((m, idx) => `
      <article class="card reveal d${idx + 1}" style="text-align:center">
        <div class="card-icon ic-blue" style="margin-inline:auto;width:84px;height:84px;border-radius:50%;font-size:2rem"><i class="fas ${m.i}"></i></div>
        <h3 style="font-size:1.1rem">${m.n}</h3>
        <p style="color:var(--blue-700);font-weight:700">${m.r}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

${ctaBanner()}
`
