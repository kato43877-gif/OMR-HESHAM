import { dashboardLayout } from './layout'

export const dashStories = (stories: any[]) => dashboardLayout(
  'stories',
  'قصص النجاح',
  `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
    <p style="color:var(--muted)">إدارة قصص النجاح وتجارب المستفيدين الملهمة.</p>
    <a href="#addStory" class="btn btn-primary btn-sm" onclick="resetStoryForm()"><i class="fas fa-plus"></i> إضافة قصة</a>
  </div>

  <div class="panel" style="margin-bottom:2rem">
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>الدور/الصفة</th><th>التقييم</th><th>تاريخ الإضافة</th><th>إجراء</th></tr></thead>
        <tbody>
          ${stories.length ? stories.map(s => `
          <tr>
            <td><b>${s.name}</b></td>
            <td>${s.role || '-'}</td>
            <td>${'⭐'.repeat(s.rating || 5)}</td>
            <td style="color:var(--muted)">${new Date(s.created_at).toLocaleDateString('ar-EG')}</td>
            <td>
              <div style="display:flex;gap:.5rem">
                <button class="btn btn-sm btn-ghost" onclick="editStory('${s.id}', \`${s.name.replace(/`/g, "\\`")}\`, '${s.role || ''}', ${s.rating}, '${s.image_url || ''}', \`${s.content.replace(/`/g, "\\`")}\`)" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/stories/delete/${s.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه القصة؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;padding:2rem">لا توجد قصص مسجلة.</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Add/Edit form -->
  <div class="panel" id="addStory">
    <h3 style="margin-bottom:1.5rem" id="formTitle"><i class="fas fa-plus-circle"></i> قصة جديدة</h3>
    <form action="/api/stories/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>اسم صاحب القصة</label><input type="text" name="name" required></div>
        <div class="field"><label>الدور أو الصفة (مثال: متبرع، مستفيد)</label><input type="text" name="role"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>التقييم (1-5)</label><input type="number" name="rating" min="1" max="5" value="5"></div>
        <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      </div>
      <div class="field"><label>القصة أو التجربة</label><textarea name="content" rows="4" required></textarea></div>
      <button type="submit" class="btn btn-primary" id="submitBtn"><i class="fas fa-save"></i> حفظ القصة</button>
    </form>
  </div>

  <script>
    function editStory(id, name, role, rating, image_url, content) {
      document.getElementById('addStory').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addStory form');
      form.action = '/api/stories/edit/' + id;
      
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit"></i> تعديل القصة';
      form.elements['name'].value = name;
      form.elements['role'].value = role;
      form.elements['rating'].value = rating;
      form.elements['image_url'].value = image_url;
      form.elements['content'].value = content;
      
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث القصة';
    }

    function resetStoryForm() {
      const form = document.querySelector('#addStory form');
      form.action = '/api/stories/add';
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-plus-circle"></i> قصة جديدة';
      form.reset();
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> حفظ القصة';
    }
  </script>
  `
)
