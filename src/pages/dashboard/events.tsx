import { dashboardLayout } from './layout'

export const dashEvents = (events: any[]) => dashboardLayout(
  'events',
  'الفعاليات والأنشطة',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة الفعاليات والأحداث التفاعلية القادمة والسابقة.</p>
    <a href="#addEvent" class="btn btn-primary btn-sm" onclick="resetEventForm()"><i class="fas fa-plus"></i> إضافة فعالية</a>
  </div>

  <div class="panel" style="margin-bottom:2rem">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>عنوان الفعالية</th><th>النوع</th><th>المكان</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${events.length ? events.map(e => `
          <tr>
            <td><b>${e.title}</b></td>
            <td>${e.type || '-'}</td>
            <td>${e.place || '-'}</td>
            <td style="color:var(--muted)">${new Date(e.event_date).toLocaleString('ar-EG')}</td>
            <td>
              <div style="display:flex;gap:.5rem">
                <button class="btn btn-sm btn-ghost" onclick="editEvent('${e.id}', \`${e.title.replace(/`/g, "\\`")}\`, '${e.type || ''}', '${e.place || ''}', '${e.event_date ? new Date(e.event_date).toISOString().slice(0, 16) : ''}', \`${(e.description || '').replace(/`/g, "\\`")}\`, '${e.image_url || ''}')" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/events/delete/${e.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه الفعالية؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;padding:2rem">لا توجد فعاليات مسجلة.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Add/Edit form -->
  <div class="panel" id="addEvent">
    <h3 style="margin-bottom:1.5rem" id="formTitle"><i class="fas fa-plus-circle"></i> فعالية جديدة</h3>
    <form action="/api/events/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>عنوان الفعالية</label><input type="text" name="title" required></div>
        <div class="field"><label>النوع (مثال: ميداني، رقمي)</label><input type="text" name="type"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>المكان</label><input type="text" name="place"></div>
        <div class="field"><label>تاريخ الفعالية</label><input type="datetime-local" name="event_date" required></div>
      </div>
      <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      <div class="field"><label>وصف الفعالية</label><textarea name="description" rows="4" required></textarea></div>
      <button type="submit" class="btn btn-primary" id="submitBtn"><i class="fas fa-save"></i> حفظ الفعالية</button>
    </form>
  </div>

  <script>
    function editEvent(id, title, type, place, event_date, description, image_url) {
      document.getElementById('addEvent').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addEvent form');
      form.action = '/api/events/edit/' + id;
      
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit"></i> تعديل الفعالية';
      form.elements['title'].value = title;
      form.elements['type'].value = type;
      form.elements['place'].value = place;
      form.elements['event_date'].value = event_date;
      form.elements['image_url'].value = image_url;
      form.elements['description'].value = description;
      
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث الفعالية';
    }

    function resetEventForm() {
      const form = document.querySelector('#addEvent form');
      form.action = '/api/events/add';
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-plus-circle"></i> فعالية جديدة';
      form.reset();
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> حفظ الفعالية';
    }
  </script>
  `
)
