import { dashboardLayout } from './layout'

export const dashUsers = (users: any[]) => dashboardLayout(
  'users',
  'المسجلين',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة المستخدمين المسجلين وصلاحياتهم، ومتابعة المتواجدين حالياً.</p>
  </div>

  <div class="panel" style="margin-bottom:2rem;border:1px solid rgba(46,204,113,.2);background:rgba(46,204,113,.02)">
    <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.5rem"><i class="fas fa-circle" style="color:#2ecc71;font-size:.6rem;animation:pulse 2s infinite"></i> المتواجدون الآن</h3>
    <div id="onlineUsersList" style="display:flex;gap:1rem;flex-wrap:wrap">
      <p style="color:var(--muted)">جاري جلب بيانات المتواجدين...</p>
    </div>
  </div>

  <div class="panel">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>المستخدم</th><th>البريد الإلكتروني</th><th>الصلاحية</th><th>تاريخ التسجيل</th><th>إجراء</th></tr></thead>
        <tbody>
          ${users.length ? users.map(u => `
          <tr>
            <td style="display:flex;align-items:center;gap:.7rem">
              ${u.avatar_url ? `<img src="${u.avatar_url}" alt="" style="width:36px;height:36px;border-radius:50%;object-fit:cover">` : '<span class="avatar placeholder" style="width:36px;height:36px;font-size:.8rem">👤</span>'}
              <b>${u.full_name || 'بدون اسم'}</b>
            </td>
            <td style="direction:ltr;text-align:right">${u.email || '-'}</td>
            <td>
              <span style="display:inline-flex;align-items:center;gap:.4rem;padding:.3rem .8rem;border-radius:2rem;font-size:.82rem;font-weight:700;${u.role === 'admin' ? 'background:rgba(46,204,113,.15);color:#27ae60' : 'background:rgba(52,152,219,.1);color:#2980b9'}">
                <i class="fas ${u.role === 'admin' ? 'fa-shield-halved' : 'fa-user'}"></i> ${u.role === 'admin' ? 'مدير' : 'مستخدم'}
              </span>
            </td>
            <td style="color:var(--muted)">${new Date(u.created_at).toLocaleDateString('ar-EG')}</td>
            <td>
              <form action="/api/users/${u.id}/role" method="POST" style="display:inline">
                <input type="hidden" name="role" value="${u.role === 'admin' ? 'user' : 'admin'}">
                <button type="submit" class="btn btn-sm ${u.role === 'admin' ? 'btn-ghost' : 'btn-primary'}" style="font-size:.8rem">
                  <i class="fas ${u.role === 'admin' ? 'fa-user-minus' : 'fa-user-shield'}"></i>
                  ${u.role === 'admin' ? 'إزالة الإدارة' : 'ترقية لمدير'}
                </button>
              </form>
            </td>
          </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;padding:2rem">لا يوجد مستخدمون مسجلون.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  <script>
    window.addEventListener('onlineUsersSync', (e) => {
      const users = e.detail;
      const list = document.getElementById('onlineUsersList');
      if (!list) return;
      if (!users || users.length === 0) {
        list.innerHTML = '<p style="color:var(--muted)">لا يوجد مستخدمون متواجدون الآن.</p>';
        return;
      }
      
      list.innerHTML = users.map(u => {
        const avatarHtml = u.avatar 
          ? '<img src="' + u.avatar + '" alt="" style="width:28px;height:28px;border-radius:50%;object-fit:cover">' 
          : '<span class="avatar placeholder" style="width:28px;height:28px;font-size:.7rem">' + (u.name ? u.name.charAt(0) : 'U') + '</span>';
        
        return '<div style="display:flex;align-items:center;gap:.6rem;background:#fff;padding:.5rem 1rem;border-radius:2rem;box-shadow:0 2px 8px rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.04)">' +
                 avatarHtml +
                 '<div>' +
                   '<div style="font-weight:700;font-size:.85rem">' + (u.name || 'بدون اسم') + '</div>' +
                   '<div style="font-size:.7rem;color:var(--muted)">' + (u.role === 'admin' ? 'مدير' : 'مستخدم') + '</div>' +
                 '</div>' +
               '</div>';
      }).join('');
    });
  </script>
  `
)
