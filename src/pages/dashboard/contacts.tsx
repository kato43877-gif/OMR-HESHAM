import { dashboardLayout } from './layout'

export const dashContacts = (messages: any[]) => dashboardLayout(
  'contacts',
  'رسائل التواصل',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">متابعة الرسائل والاستفسارات الواردة من صفحة اتصل بنا.</p>
  </div>

  <div class="panel">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>البريد الإلكتروني</th><th>الموضوع</th><th>الرسالة</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${messages.length ? messages.map(m => `
          <tr>
            <td><b>${m.name}</b></td>
            <td><a href="mailto:${m.email}" dir="ltr">${m.email}</a></td>
            <td>${m.subject || '-'}</td>
            <td style="max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${m.message}">${m.message}</td>
            <td><span class="badge badge-${m.status === 'unread' ? 'pend' : 'ok'}">${m.status === 'unread' ? 'غير مقروءة' : m.status}</span></td>
            <td style="color:var(--muted)">${new Date(m.created_at).toLocaleDateString('ar-EG')}</td>
            <td>
              <form action="/api/contacts/status/${m.id}" method="POST" style="display:flex;gap:.3rem">
                ${m.status === 'unread' ? `<button type="submit" name="status" value="read" class="btn btn-sm btn-ghost" style="color:var(--info)" title="تحديد كمقروءة"><i class="fas fa-eye"></i> مقروءة</button>` : ''}
                ${m.status !== 'replied' ? `<button type="submit" name="status" value="replied" class="btn btn-sm btn-ghost" style="color:var(--ok)" title="تم الرد"><i class="fas fa-reply"></i> تم الرد</button>` : ''}
              </form>
            </td>
          </tr>`).join('') : '<tr><td colspan="7" style="text-align:center;padding:2rem">لا توجد رسائل واردة.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `
)
