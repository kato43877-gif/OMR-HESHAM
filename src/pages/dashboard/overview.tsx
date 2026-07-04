import { dashboardLayout } from './layout'

export const dashOverview = (stats: any, recentDonations: any[]) => dashboardLayout(
  'overview',
  'لوحة التحكم · النظرة العامة',
  `
  <!-- KPIs -->
  <div class="grid cols-4" style="margin-bottom:2rem">
    ${[
      { i: 'fa-sack-dollar', c: 'ic-emerald', n: (stats.total_donations || 0).toLocaleString('ar-EG'), l: 'إجمالي التبرّعات (ج.م)' },
      { i: 'fa-bullhorn', c: 'ic-gold', n: (stats.total_campaigns || 0).toLocaleString('ar-EG'), l: 'حملات نشطة' },
      { i: 'fa-users', c: 'ic-blue', n: (stats.total_donors || 0).toLocaleString('ar-EG'), l: 'متبرع' },
      { i: 'fa-hands-helping', c: 'ic-crimson', n: (stats.total_volunteers || 0).toLocaleString('ar-EG'), l: 'متطوّع مسجل' },
    ].map(k => `
    <div class="kpi">
      <div class="kpi-top">
        <div class="kpi-ic ${k.c}"><i class="fas ${k.i}"></i></div>
      </div>
      <div class="kpi-num">${k.n}</div>
      <div class="kpi-lbl">${k.l}</div>
    </div>`).join('')}
  </div>

  <!-- Charts Section -->
  <div class="grid" style="grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
    <div class="panel" style="display: flex; flex-direction: column;">
      <h3 style="margin-bottom: 1rem;"><i class="fas fa-chart-line" style="color: var(--emerald-700); margin-left: 0.5rem;"></i>معدل التبرعات الشهري</h3>
      <div style="flex: 1; min-height: 250px; position: relative;">
        <canvas id="dashDonations" style="width: 100%; height: 100%;"></canvas>
      </div>
    </div>
    <div class="panel" style="display: flex; flex-direction: column;">
      <h3 style="margin-bottom: 1rem;"><i class="fas fa-chart-pie" style="color: var(--blue-700); margin-left: 0.5rem;"></i>مصادر التبرعات</h3>
      <div style="flex: 1; min-height: 250px; position: relative; display: flex; align-items: center; justify-content: center;">
        <canvas id="dashSources" style="max-height: 230px;"></canvas>
      </div>
    </div>
  </div>

  <!-- recent donations table -->
  <div class="panel">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
      <h3 style="margin:0"><i class="fas fa-history" style="color:var(--brand-gold); margin-left: 0.5rem;"></i>أحدث التبرّعات الواردة</h3>
      <a href="/dashboard/donations" class="card-link" style="color: var(--blue-700); font-weight: 700;">عرض سجل التبرعات <i class="fas fa-arrow-left"></i></a>
    </div>
    <div style="overflow-x:auto">
    <table class="dtable">
      <thead><tr><th>المتبرّع</th><th>المبلغ</th><th>الطريقة</th><th>الحالة</th><th>التاريخ</th></tr></thead>
      <tbody>
        ${recentDonations.length ? recentDonations.map(r => `
        <tr>
          <td><b>${r.donor_name}</b></td>
          <td><b style="color: var(--emerald-800);">${Number(r.amount).toLocaleString('ar-EG')} ج.م</b></td>
          <td>${r.payment_method === 'card' ? 'بطاقة' : r.payment_method === 'transfer' ? 'تحويل بنكي' : r.payment_method === 'wallet' ? 'محفظة إلكترونية' : r.payment_method || 'غير محدد'}</td>
          <td><span class="badge badge-${r.status === 'completed' ? 'ok' : r.status === 'pending' ? 'pend' : 'info'}">${r.status === 'completed' ? 'مكتمل' : r.status === 'pending' ? 'قيد الانتظار' : r.status}</span></td>
          <td style="color:var(--muted)">${new Date(r.created_at).toLocaleDateString('ar-EG')}</td>
        </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;padding:2rem">لا توجد تبرعات حديثة.</td></tr>'}
      </tbody>
    </table>
    </div>
  </div>
  `
)
