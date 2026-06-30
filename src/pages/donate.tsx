import { pageHero } from '../layout'
import { campaigns } from '../data'

export const donatePage = () => pageHero(
  'تبرّع الآن',
  'عطاؤك أمانةٌ تصل بشفافية. اختر مبلغك وحملتك، وكن سببًا في إسعاد قلبٍ محتاج.',
  'تبرّع'
) + `
<section class="section">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <!-- Donation form -->
      <div class="form-card reveal-x">
        <h2 class="h-lg" style="margin-bottom:.4rem">أكمِل تبرّعك</h2>
        <p style="color:var(--muted);margin-bottom:1.6rem">معاملةٌ آمنة ومشفّرة بالكامل <i class="fas fa-lock" style="color:var(--emerald-700)"></i></p>

        <form id="donateForm" data-toast="جزاك الله خيرًا 💚 تم استلام تبرّعك بنجاح">
          <div class="field">
            <label>نوع التبرّع</label>
            <div class="tabs" style="display:flex" id="donateType">
              <button type="button" class="tab active" data-type="once" style="flex:1">مرة واحدة</button>
              <button type="button" class="tab" data-type="monthly" style="flex:1">شهري</button>
            </div>
          </div>

          <div class="field">
            <label>اختر المبلغ (ج.م) <span class="req">*</span></label>
            <div class="amount-grid" id="amountGrid">
              ${[100, 250, 500, 1000].map((a, i) => `<button type="button" class="amount-opt${i === 1 ? ' active' : ''}" data-amt="${a}">${a.toLocaleString('ar-EG')}</button>`).join('')}
            </div>
          </div>

          <div class="field">
            <label for="customAmt">أو مبلغ آخر</label>
            <input type="number" id="customAmt" placeholder="أدخل المبلغ" min="10">
          </div>

          <div class="field">
            <label for="campSel">وجّه تبرّعك إلى</label>
            <select id="campSel">
              <option value="">الصندوق العام (الأكثر احتياجًا)</option>
              ${campaigns.map(c => `<option>${c.title}</option>`).join('')}
            </select>
          </div>

          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label for="dn">الاسم <span class="req">*</span></label><input id="dn" required placeholder="اسمك الكريم"></div>
            <div class="field"><label for="dp">الجوال <span class="req">*</span></label><input id="dp" required placeholder="01xxxxxxxxx"></div>
          </div>
          <div class="field"><label for="de">البريد الإلكتروني</label><input type="email" id="de" placeholder="email@example.com"></div>

          <div class="field">
            <label>طريقة الدفع</label>
            <div class="grid cols-3" style="gap:.7rem">
              <label class="amount-opt active" style="display:flex;gap:.5rem;align-items:center;justify-content:center"><i class="fas fa-credit-card"></i> بطاقة</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center"><i class="fas fa-building-columns"></i> تحويل</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center"><i class="fas fa-wallet"></i> محفظة</label>
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-block btn-lg magnetic" style="margin-top:1rem"><i class="fas fa-hand-holding-heart"></i> تبرّع بـ <span id="sumAmt">٢٥٠</span> ج.م</button>
          <p class="center" style="margin-top:1rem;color:var(--muted);font-size:.85rem"><i class="fas fa-shield-halved" style="color:var(--emerald-700)"></i> يصلك إيصال رسمي فور إتمام التبرّع</p>
        </form>
      </div>

      <!-- Side info -->
      <div class="reveal d1">
        <div class="card" style="margin-bottom:1.4rem">
          <h3 style="margin-bottom:1.2rem"><i class="fas fa-circle-info" style="color:var(--blue-600)"></i> أين يذهب تبرّعك؟</h3>
          ${[
            { l: 'برامج الإغاثة والغذاء', p: 40, c: 'var(--grad-emerald)' },
            { l: 'الرعاية الصحية', p: 28, c: 'var(--grad-blue)' },
            { l: 'التعليم والمنح', p: 20, c: 'var(--grad-gold)' },
            { l: 'التشغيل والإدارة', p: 12, c: 'linear-gradient(135deg,#90a4ae,#546e7a)' },
          ].map(m => `
          <div class="metric-row" style="display:block;border:none;padding:.5rem 0">
            <div style="display:flex;justify-content:space-between"><b>${m.l}</b><b>${m.p}%</b></div>
            <div class="bar-track"><div class="bar-fill" style="width:${m.p}%;background:${m.c}"></div></div>
          </div>`).join('')}
        </div>
        <div class="glass-card" style="background:var(--grad-hero);color:#fff">
          <div class="card-icon ic-gold" style="margin-bottom:1rem"><i class="fas fa-seedling"></i></div>
          <h3 style="color:#fff">الصدقة الجارية</h3>
          <p style="color:rgba(255,255,255,.8);margin-top:.5rem">اجعل عطاءك مستمرًا عبر التبرّع الشهري في مشاريع كالآبار وكفالة الأيتام، أجرٌ لا ينقطع بإذن الله.</p>
        </div>
        <div class="card" style="margin-top:1.4rem;display:flex;gap:1rem;align-items:center">
          <div class="card-icon ic-emerald" style="margin:0;flex-shrink:0"><i class="fas fa-headset"></i></div>
          <div><b>هل تحتاج مساعدة؟</b><p style="color:var(--muted);font-size:.9rem">تواصل مع فريق خدمة المتبرّعين: <a href="tel:+201000000000" style="color:var(--blue-700);font-weight:800">‎+20 100 000 0000</a></p></div>
        </div>
      </div>
    </div>
  </div>
</section>
`
