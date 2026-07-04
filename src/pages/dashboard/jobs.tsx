import { dashboardLayout } from './layout'

export const dashJobs = (jobs: any[], applications: any[]) => dashboardLayout(
  'jobs',
  'الوظائف والتوظيف',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة الشواغر الوظيفية ومراجعة طلبات التقديم.</p>
    <a href="#addJob" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> إضافة وظيفة</a>
  </div>

  <div class="grid" style="grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem">
    <div class="panel">
      <h3 style="margin-bottom:1rem">الوظائف الحالية</h3>
      <div style="overflow-x:auto">
        <table class="dtable">
          <thead><tr><th>المسمى</th><th>القسم</th><th>النوع</th><th>الحالة</th><th>إجراء</th></tr></thead>
          <tbody>
            ${jobs.length ? jobs.map(j => `
            <tr>
              <td><b>${j.title}</b></td>
              <td>${j.department || '-'}</td>
              <td>${j.job_type || '-'}</td>
              <td>${j.is_active ? '<span class="badge badge-ok">نشط</span>' : '<span class="badge badge-info">مغلق</span>'}</td>
              <td>
                <div style="display:flex;gap:.5rem">
                  <button class="btn btn-sm btn-ghost" onclick="editJob('${j.id}', \`${j.title.replace(/`/g, "\\`")}\`, '${j.department || ''}', '${j.job_type || ''}', '${j.location || ''}', \`${(j.description || '').replace(/`/g, "\\`")}\`, ${j.is_active})" title="تعديل"><i class="fas fa-edit"></i></button>
                  <form action="/api/jobs/delete/${j.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه الوظيفة؟')">
                    <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                  </form>
                </div>
              </td>
            </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;padding:1rem">لا توجد وظائف.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="panel">
      <h3 style="margin-bottom:1rem">أحدث طلبات التقديم</h3>
      <div style="overflow-x:auto">
        <table class="dtable">
          <thead><tr><th>المتقدم</th><th>رقم الهاتف</th><th>الحالة</th></tr></thead>
          <tbody>
            ${applications.length ? applications.map(a => `
            <tr>
              <td><b>${a.full_name}</b></td>
              <td><a href="tel:${a.phone}" dir="ltr">${a.phone}</a></td>
              <td><span class="badge badge-${a.status === 'pending' ? 'pend' : 'info'}">${a.status}</span></td>
            </tr>`).join('') : '<tr><td colspan="3" style="text-align:center;padding:1rem">لا توجد طلبات حديثة.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Add form -->
  <div class="panel" id="addJob">
    <h3 style="margin-bottom:1.5rem"><i class="fas fa-plus-circle"></i> وظيفة جديدة</h3>
    <form action="/api/jobs/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>المسمى الوظيفي</label><input type="text" name="title" required></div>
        <div class="field"><label>القسم</label><input type="text" name="department" placeholder="مثال: الإدارة، العمليات"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>نوع الدوام</label>
          <select name="job_type">
            <option value="دوام كامل">دوام كامل</option>
            <option value="دوام جزئي">دوام جزئي</option>
            <option value="تعاقد">تعاقد حر</option>
            <option value="تطوع">تطوع</option>
          </select>
        </div>
        <div class="field"><label>المكان</label><input type="text" name="location" placeholder="مثال: القاهرة، أو عن بعد"></div>
      </div>
      <div class="field"><label>الوصف الوظيفي والمتطلبات</label><textarea name="description" rows="4"></textarea></div>
      <div class="field">
        <label><input type="checkbox" name="is_active" value="true" checked> الوظيفة متاحة للتقديم حالياً</label>
      </div>
      <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> حفظ الوظيفة</button>
    </form>
  </div>
  
  <script>
    function editJob(id, title, department, job_type, location, description, is_active) {
      document.getElementById('addJob').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addJob form');
      form.action = '/api/jobs/edit/' + id;
      form.querySelector('h3') ? form.querySelector('h3').innerHTML = '<i class="fas fa-edit"></i> تعديل الوظيفة' : null;
      form.elements['title'].value = title;
      form.elements['department'].value = department;
      form.elements['job_type'].value = job_type;
      form.elements['location'].value = location;
      form.elements['description'].value = description;
      form.elements['is_active'].checked = is_active;
      
      const btn = form.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-save"></i> تحديث الوظيفة';
      
      const titleEl = document.querySelector('#addJob h3');
      if (titleEl) titleEl.innerHTML = '<i class="fas fa-edit"></i> تعديل الوظيفة';
    }
  </script>
  `
)
