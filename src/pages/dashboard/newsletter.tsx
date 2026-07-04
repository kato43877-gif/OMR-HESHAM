import { dashboardLayout } from './layout'

export const dashNewsletter = (subscribers: any[]) => dashboardLayout(
  'newsletter',
  'النشرة البريدية',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة مشتركي النشرة البريدية.</p>
  </div>

  <div class="panel">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>البريد الإلكتروني</th><th>الحالة</th><th>تاريخ الاشتراك</th><th>إجراء</th></tr></thead>
        <tbody>
          ${subscribers.length ? subscribers.map(s => `
          <tr>
            <td><b>${s.email}</b></td>
            <td><span class="badge badge-${s.status === 'subscribed' || s.status === 'active' ? 'ok' : 'info'}">${s.status === 'subscribed' || s.status === 'active' ? 'نشط' : s.status}</span></td>
            <td style="color:var(--muted)">${new Date(s.created_at).toLocaleDateString('ar-EG')}</td>
            <td>
              <div style="display:flex;gap:.5rem">
                <form action="/api/newsletter/status/${s.id}" method="POST" style="display:inline">
                  <input type="hidden" name="status" value="${s.status === 'subscribed' || s.status === 'active' ? 'unsubscribed' : 'active'}">
                  <button type="submit" class="btn btn-sm ${s.status === 'subscribed' || s.status === 'active' ? 'btn-ghost' : 'btn-primary'}" title="تغيير الحالة">
                    <i class="fas ${s.status === 'subscribed' || s.status === 'active' ? 'fa-ban' : 'fa-check'}"></i>
                  </button>
                </form>
                <form action="/api/newsletter/delete/${s.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذا المشترك؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join('') : '<tr><td colspan="4" style="text-align:center;padding:2rem">لا يوجد مشتركون في النشرة.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `
)
