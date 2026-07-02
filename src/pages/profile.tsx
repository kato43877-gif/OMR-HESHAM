import { pageHero } from '../layout'

export const profilePage = (user: any, donations: any[], volunteerData: any) => {
  const totalDonations = donations.reduce((sum, d) => sum + Number(d.amount), 0)
  
  return `
  ${pageHero('حسابي الشخصي', 'مرحباً بك في مساحتك الخاصة لمتابعة أثرك الإنساني.', 'حسابي')}

  <section class="section" style="padding-top:2rem; background:var(--bg-muted)">
    <div class="wrap">
      <div style="display:grid;grid-template-columns:300px 1fr;gap:2rem;align-items:start">
        
        <!-- Sidebar / User Card -->
        <div class="card" style="position:sticky;top:6rem;text-align:center;padding:2.5rem 1.5rem">
          <div style="width:120px;height:120px;margin:0 auto 1.5rem;border-radius:50%;overflow:hidden;border:4px solid var(--brand-gold);box-shadow:0 10px 30px rgba(212,175,55,0.2)">
            <img src="${user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name)}" alt="${user.name}" style="width:100%;height:100%;object-fit:cover">
          </div>
          <h2 class="h-md" style="margin-bottom:.5rem">${user.name}</h2>
          <p style="color:var(--muted);margin-bottom:1.5rem;word-break:break-all">${user.email}</p>
          
          <div style="display:flex;flex-direction:column;gap:1rem">
            ${user.role === 'admin' ? `<a href="/dashboard" class="btn btn-gold btn-block"><i class="fas fa-gauge-high"></i> لوحة التحكم</a>` : ''}
            <a href="/api/auth/logout" class="btn btn-outline-light btn-block"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
          </div>
        </div>

        <!-- Main Content -->
        <div style="display:flex;flex-direction:column;gap:2rem">
          
          <!-- Quick Stats -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1.5rem">
            <div class="card" style="padding:1.5rem;display:flex;align-items:center;gap:1.5rem">
              <div style="width:60px;height:60px;border-radius:1rem;background:rgba(212,175,55,0.1);color:var(--brand-gold);display:grid;place-items:center;font-size:1.8rem">
                <i class="fas fa-hand-holding-heart"></i>
              </div>
              <div>
                <div style="font-size:1.8rem;font-weight:800;color:var(--ink-400)">${totalDonations}</div>
                <div style="color:var(--muted);font-size:.9rem">إجمالي التبرعات (ج.م)</div>
              </div>
            </div>
            
            <div class="card" style="padding:1.5rem;display:flex;align-items:center;gap:1.5rem">
              <div style="width:60px;height:60px;border-radius:1rem;background:rgba(46,204,113,0.1);color:#2ecc71;display:grid;place-items:center;font-size:1.8rem">
                <i class="fas fa-hands-helping"></i>
              </div>
              <div>
                <div style="font-size:1.5rem;font-weight:800;color:var(--ink-400)">${volunteerData ? 'نشط' : 'غير مسجل'}</div>
                <div style="color:var(--muted);font-size:.9rem">حالة التطوع</div>
              </div>
            </div>
          </div>

          <!-- Donation History -->
          <div class="card">
            <h3 class="h-sm" style="margin-bottom:1.5rem;display:flex;align-items:center;gap:.8rem">
              <i class="fas fa-history" style="color:var(--brand-gold)"></i> سجل التبرعات
            </h3>
            
            ${donations.length === 0 ? `
              <div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
                <i class="fas fa-box-open" style="font-size:3rem;opacity:0.2;margin-bottom:1rem"></i>
                <p>لم تقم بأي تبرعات بعد. عطاؤك يصنع فرقاً كبيراً!</p>
                <a href="/donate" class="btn btn-primary" style="margin-top:1rem">تبرع الآن</a>
              </div>
            ` : `
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>التاريخ</th>
                      <th>نوع التبرع</th>
                      <th>وسيلة الدفع</th>
                      <th>المبلغ</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${donations.map(d => `
                      <tr>
                        <td>${new Date(d.created_at).toLocaleDateString('ar-EG')}</td>
                        <td><span class="chip chip-gold">${d.donation_type === 'monthly' ? 'شهري' : 'مرة واحدة'}</span></td>
                        <td>${d.payment_method === 'card' ? 'بطاقة ائتمانية' : d.payment_method === 'instapay' ? 'إنستاباي' : 'فودافون كاش'}</td>
                        <td style="font-weight:700">${d.amount} ج.م</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `}
          </div>

          <!-- Volunteer Section -->
          ${volunteerData ? `
          <div class="card" style="border-right: 4px solid #2ecc71">
            <h3 class="h-sm" style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
              <i class="fas fa-user-astronaut" style="color:#2ecc71"></i> بيانات التطوع
            </h3>
            <p><strong>الدور المفضل:</strong> ${volunteerData.preferred_role}</p>
            <p style="margin-top:.5rem"><strong>المهارات:</strong> ${volunteerData.skills}</p>
            <p style="margin-top:.5rem"><strong>تاريخ الانضمام:</strong> ${new Date(volunteerData.created_at).toLocaleDateString('ar-EG')}</p>
          </div>
          ` : `
          <div class="card" style="background: linear-gradient(135deg, rgba(212,175,55,0.05), transparent); border: 1px dashed var(--brand-gold)">
            <h3 class="h-sm" style="margin-bottom:.5rem">انضم لفريق المتطوعين</h3>
            <p style="color:var(--muted);margin-bottom:1rem">هل ترغب في المساهمة بوقتك ومهاراتك في أعمالنا الخيرية؟</p>
            <a href="/volunteers" class="btn btn-outline-gold"><i class="fas fa-arrow-left"></i> سجل كمتطوع</a>
          </div>
          `}
          
        </div>
      </div>
    </div>
  </section>
  `
}
