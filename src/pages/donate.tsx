import { pageHero } from '../layout'

export const donatePage = () => pageHero(
  'تبرّع الآن',
  'عطاؤك يصل بأمانة وخصوصية إلى مستحقيه. اختر الطريقة الأنسب لك، وسجّل بياناتك ليتم توثيق التبرع ومتابعته داخل المؤسسة.',
  'تبرّع'
) + `
<section class="section">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <div class="form-card reveal-x">
        <h2 class="h-lg" style="margin-bottom:.4rem">بيانات التبرع</h2>
        <p style="color:var(--muted);margin-bottom:1.6rem">املأ البيانات الأساسية بعد إتمام التحويل أو قبل التنسيق مع الفريق، حتى يتم تسجيل التبرع ومراجعته.</p>

        <form id="donateForm" method="POST" action="/api/donations/add">
          <input type="hidden" name="donation_type" value="once">
          <input type="hidden" name="payment_method" id="paymentInput" value="instapay_bank">

          <div class="field">
            <label for="amount">المبلغ المراد التبرع به <span class="req">*</span></label>
            <input type="number" id="amount" name="amount" required placeholder="اكتب المبلغ المناسب">
          </div>

          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label for="dn">الاسم <span class="req">*</span></label><input id="dn" name="donor_name" required placeholder="اسمك الكريم"></div>
            <div class="field"><label for="dp">وسيلة التواصل <span class="req">*</span></label><input id="dp" name="donor_phone" required placeholder="رقم الهاتف أو وسيلة التواصل"></div>
          </div>
          <div class="field"><label for="de">البريد الإلكتروني</label><input type="email" id="de" name="donor_email" placeholder="بريدك الإلكتروني"></div>

          <div class="field">
            <label>طريقة التبرع</label>
            <div class="grid cols-3" style="gap:.7rem">
              <label class="amount-opt active" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='instapay_bank';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-building-columns"></i> إنستاباي</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='vodafone_cash';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-wallet"></i> فودافون كاش</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='cash';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-money-bill-wave"></i> نقدي</label>
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-block btn-lg magnetic" style="margin-top:1rem"><i class="fas fa-hand-holding-heart"></i> إرسال بيانات التبرع</button>
          <p class="center" style="margin-top:1rem;color:var(--muted);font-size:.85rem"><i class="fas fa-shield-halved" style="color:var(--emerald-700)"></i> بياناتك محفوظة ولا تُستخدم إلا لتأكيد التبرع.</p>
        </form>
      </div>

      <div class="reveal d1">
        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--brand-gold)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-building-columns" style="color:var(--brand-gold)"></i> إنستاباي / تحويل بنكي
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">افتح تطبيق إنستاباي، اختر تحويل بنكي، ثم البنك الزراعي المصري، وأدخل رقم الحساب التالي:</p>
          <button type="button" class="copy-box" onclick="navigator.clipboard.writeText('10010397596901014');if(window.__toast) window.__toast('تم نسخ رقم الحساب')">10010397596901014</button>
          <p style="color:var(--muted);font-size:.88rem;margin-top:.6rem">بعد التحويل، أرسل بياناتك من النموذج لتوثيق التبرع.</p>
        </div>

        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--emerald-600)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-mobile-screen-button" style="color:var(--emerald-600)"></i> إنستاباي أو فودافون كاش
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">يمكن التبرع عبر رقم المؤسسة المخصص للتحويلات الإلكترونية:</p>
          <button type="button" class="copy-box" onclick="navigator.clipboard.writeText('01060920249');if(window.__toast) window.__toast('تم نسخ رقم التحويل')">01060920249</button>
          <p style="color:var(--muted);font-size:.88rem;margin-top:.6rem">الرقم يعمل على إنستاباي وفودافون كاش.</p>
        </div>

        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--blue-600)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-handshake" style="color:var(--blue-600)"></i> الدفع المباشر
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">للتبرع النقدي المباشر، يتم التنسيق مع الأستاذ جمال عبد الخالق لتأكيد الاستلام والتوثيق.</p>
        </div>

        <div class="glass-card" style="background:var(--grad-hero);color:#fff">
          <div class="card-icon ic-gold" style="margin-bottom:1rem"><i class="fas fa-hand-holding-heart"></i></div>
          <h3 style="color:#fff">صكوك الأضاحي</h3>
          <p style="color:rgba(255,255,255,.85);margin-top:.5rem;font-size:1rem">شارك فرحة العيد، واجعل أضحيتك أجرًا لك وفرحة لهم.</p>
          <div class="grid cols-2" style="gap:1rem;margin-top:1.2rem">
            <div style="background:rgba(255,255,255,.12);padding:1rem;border-radius:.8rem;text-align:center">
              <div style="font-size:1.35rem;font-weight:900;color:#fff">٥٠٠ جنيه</div>
              <div style="opacity:.75;font-size:.86rem">صك الصدقة</div>
            </div>
            <div style="background:rgba(255,255,255,.15);padding:1rem;border-radius:.8rem;text-align:center;border:1px solid rgba(255,202,95,.42)">
              <div style="font-size:1.35rem;font-weight:900;color:var(--gold-400)">١١,٠٠٠ جنيه</div>
              <div style="opacity:.75;font-size:.86rem">صك الأضحية الكامل</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
(function(){
  const p = new URLSearchParams(window.location.search);
  if(p.get('success')==='1') {
    setTimeout(function(){ if(window.__toast) window.__toast('جزاك الله خيرًا، تم استلام بيانات التبرع بنجاح'); }, 600);
    history.replaceState(null,'','/donate');
  }
  if(p.get('error')) {
    setTimeout(function(){ if(window.__toast) window.__toast('حدث خطأ، يرجى المحاولة مرة أخرى'); }, 600);
    history.replaceState(null,'','/donate');
  }
})();
</script>
`
