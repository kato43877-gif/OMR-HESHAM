import { dashboardLayout } from './layout'

export const dashVolunteers = (volunteers: any[]) => dashboardLayout(
  'volunteers',
  'المتطوّعون',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة المتطوعين وطلبات التطوع الجديدة.</p>
  </div>

  <div class="panel">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>العمر</th><th>المدينة</th><th>الهاتف</th><th>الدور المفضل</th><th>المهارات</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${volunteers.length ? volunteers.map(v => `
          <tr>
            <td><b>${v.full_name}</b></td>
            <td>${v.age || '-'}</td>
            <td>${v.city || '-'}</td>
            <td><a href="tel:${v.phone}" dir="ltr">${v.phone}</a></td>
            <td>${v.preferred_role || '-'}</td>
            <td>${v.skills || '-'}</td>
            <td><span class="badge badge-${v.status === 'approved' ? 'ok' : v.status === 'pending' ? 'pend' : 'info'}">${v.status === 'approved' ? 'مقبول' : v.status === 'pending' ? 'قيد المراجعة' : v.status}</span></td>
            <td style="color:var(--muted)">${new Date(v.created_at).toLocaleDateString('ar-EG')}</td>
            <td>
              <form action="/api/volunteers/status/${v.id}" method="POST" style="display:flex;gap:.3rem">
                ${v.status !== 'approved' ? `<button type="submit" name="status" value="approved" class="btn btn-sm btn-ghost" style="color:var(--ok)" title="قبول"><i class="fas fa-check"></i></button>` : ''}
                ${v.status !== 'rejected' ? `<button type="submit" name="status" value="rejected" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="رفض"><i class="fas fa-times"></i></button>` : ''}
                ${v.status !== 'pending' ? `<button type="submit" name="status" value="pending" class="btn btn-sm btn-ghost" style="color:var(--pend)" title="قيد المراجعة"><i class="fas fa-clock"></i></button>` : ''}
              </form>
            </td>
          </tr>`).join('') : '<tr><td colspan="9" style="text-align:center;padding:2rem">لا يوجد متطوعين مسجلين.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `
)
