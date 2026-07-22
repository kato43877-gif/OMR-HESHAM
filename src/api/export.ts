import { Hono } from 'hono'
import { getFirestore } from '../lib/firebase-admin'
import { adminMiddleware } from './middleware'

export const exportApi = new Hono()

exportApi.use('*', adminMiddleware)

type ColumnDef = {
  key: string
  label: string
  format?: (value: any, row: any) => string
}

type ConfigDef = {
  title: string
  columns: ColumnDef[]
}

const collectionConfigs: Record<string, ConfigDef> = {
  donations: {
    title: 'سجل التبرعات والمساهمات المالية',
    columns: [
      { key: 'donor_name', label: 'اسم المتبرع' },
      { key: 'donor_phone', label: 'رقم الهاتف' },
      { key: 'donor_email', label: 'البريد الإلكتروني' },
      { key: 'amount', label: 'المبلغ (ج.م)', format: (v) => Number(v || 0).toLocaleString('ar-EG') + ' ج.م' },
      { key: 'campaign_title', label: 'الحملة المستهدفة', format: (v) => v || 'الصندوق العام' },
      { key: 'payment_method', label: 'طريقة التحويل', format: (v) => v === 'instapay' ? 'إنستاباي / تحويل بنكي' : v === 'vodafone' ? 'فودافون كاش' : 'دفع نقدي مباشر' },
      { key: 'status', label: 'حالة التبرع', format: (v) => v === 'completed' ? 'مكتمل' : 'قيد المراجعة' },
      { key: 'created_at', label: 'تاريخ التحويل', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  treasury_income: {
    title: 'سجل إيرادات الخزنة المالية',
    columns: [
      { key: 'amount', label: 'المبلغ (ج.م)', format: (v) => Number(v || 0).toLocaleString('ar-EG') + ' ج.م' },
      { key: 'source', label: 'مصدر الإيراد' },
      { key: 'donor_name', label: 'اسم المتبرع/المصدر', format: (v) => v || 'فاعل خير' },
      { key: 'donor_phone', label: 'رقم الهاتف', format: (v) => v || '-' },
      { key: 'campaign_title', label: 'الحملة المستهدفة', format: (v) => v || 'الصندوق العام' },
      { key: 'description', label: 'التفاصيل والملاحظات', format: (v) => v || '-' },
      { key: 'date', label: 'تاريخ الاستلام' },
      { key: 'recorded_by', label: 'تم التسجيل بواسطة (الأدمن)' },
      { key: 'created_at', label: 'تاريخ الإدخال النظامي', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  treasury_expenses: {
    title: 'سجل مصروفات الخزنة المالية',
    columns: [
      { key: 'amount', label: 'المبلغ المصروف (ج.م)', format: (v) => Number(v || 0).toLocaleString('ar-EG') + ' ج.م' },
      { key: 'category', label: 'بند الصرف' },
      { key: 'beneficiary', label: 'الجهة / المستفيد' },
      { key: 'campaign_title', label: 'الحملة المرتبطة', format: (v) => v || 'عام' },
      { key: 'description', label: 'وصف المصروف' },
      { key: 'date', label: 'تاريخ الصرف' },
      { key: 'recorded_by', label: 'تم الصرف بواسطة (الأدمن)' },
      { key: 'created_at', label: 'تاريخ الإدخال النظامي', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  volunteers: {
    title: 'سجل طلبات التطوع والمبادرات',
    columns: [
      { key: 'full_name', label: 'اسم المتطوع' },
      { key: 'phone', label: 'رقم الهاتف' },
      { key: 'city', label: 'المدينة / المحافظة' },
      { key: 'preferred_role', label: 'المجال المفضل' },
      { key: 'skills', label: 'المهارات والخبرات' },
      { key: 'status', label: 'حالة الطلب', format: (v) => v === 'approved' ? 'مقبول' : v === 'rejected' ? 'مرفوض' : 'قيد المراجعة' },
      { key: 'created_at', label: 'تاريخ التقديم', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  users: {
    title: 'سجل مستخدمي وأعضاء المنصة',
    columns: [
      { key: 'full_name', label: 'الاسم الكامل' },
      { key: 'email', label: 'البريد الإلكتروني' },
      { key: 'phone', label: 'رقم الهاتف', format: (v) => v || '-' },
      { key: 'role', label: 'الصلاحية / الدور', format: (v) => v === 'admin' ? 'مشرف (Admin)' : 'عضو (Donor)' },
      { key: 'created_at', label: 'تاريخ الانضمام', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  profiles: {
    title: 'سجل مستخدمي وأعضاء المنصة',
    columns: [
      { key: 'full_name', label: 'الاسم الكامل' },
      { key: 'email', label: 'البريد الإلكتروني' },
      { key: 'phone', label: 'رقم الهاتف', format: (v) => v || '-' },
      { key: 'role', label: 'الصلاحية / الدور', format: (v) => v === 'admin' ? 'مشرف (Admin)' : 'عضو (Donor)' },
      { key: 'created_at', label: 'تاريخ الانضمام', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  contacts: {
    title: 'سجل رسائل واستفسارات تواصل معنا',
    columns: [
      { key: 'name', label: 'اسم المرسل' },
      { key: 'email', label: 'البريد الإلكتروني' },
      { key: 'phone', label: 'رقم الهاتف', format: (v) => v || '-' },
      { key: 'subject', label: 'الموضوع' },
      { key: 'message', label: 'مضمون الرسالة' },
      { key: 'status', label: 'حالة الرسالة', format: (v) => v === 'read' ? 'مقروءة' : 'جديدة' },
      { key: 'created_at', label: 'تاريخ الرسالة', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  job_applications: {
    title: 'سجل طلبات التوظيف الواردة',
    columns: [
      { key: 'full_name', label: 'اسم المتقدم' },
      { key: 'email', label: 'البريد الإلكتروني' },
      { key: 'phone', label: 'رقم الهاتف' },
      { key: 'job_title', label: 'الوظيفة المستهدفة', format: (v) => v || 'عام' },
      { key: 'cv_url', label: 'رابط السيرة الذاتية' },
      { key: 'bio', label: 'نبذة عن الخبرات' },
      { key: 'created_at', label: 'تاريخ التقديم', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  newsletter_subscribers: {
    title: 'سجل مشتركي النشرة البريدية',
    columns: [
      { key: 'email', label: 'البريد الإلكتروني' },
      { key: 'status', label: 'حالة الاشتراك', format: (v) => v === 'subscribed' ? 'نشط' : 'ملغى' },
      { key: 'created_at', label: 'تاريخ الاشتراك', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  campaigns: {
    title: 'سجل الحملات والمشاريع الخيرية',
    columns: [
      { key: 'title', label: 'عنوان الحملة' },
      { key: 'category', label: 'القسم' },
      { key: 'goal', label: 'الهدف التمويلي', format: (v) => Number(v || 0).toLocaleString('ar-EG') + ' ج.م' },
      { key: 'raised', label: 'المبلغ المجمع', format: (v) => Number(v || 0).toLocaleString('ar-EG') + ' ج.م' },
      { key: 'is_urgent', label: 'عاجلة؟', format: (v) => v ? 'نعم' : 'لا' },
      { key: 'description', label: 'الوصف' },
      { key: 'created_at', label: 'تاريخ الإنشاء', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  },
  news: {
    title: 'سجل الأخبار والفعاليات المنشورة',
    columns: [
      { key: 'title', label: 'عنوان الخبر' },
      { key: 'category', label: 'القسم' },
      { key: 'excerpt', label: 'الموجز' },
      { key: 'publish_date', label: 'تاريخ النشر', format: (v) => v ? new Date(v).toLocaleDateString('ar-EG') : '-' }
    ]
  },
  events: {
    title: 'سجل الفعاليات والمؤتمرات',
    columns: [
      { key: 'title', label: 'عنوان الفعالية' },
      { key: 'type', label: 'النوع' },
      { key: 'place', label: 'المكان' },
      { key: 'event_date', label: 'تاريخ الفعالية', format: (v) => v ? new Date(v).toLocaleString('ar-EG') : '-' }
    ]
  }
}

exportApi.get('/:collection', async (c) => {
  const collectionName = c.req.param('collection')
  const config = collectionConfigs[collectionName]

  if (!config) {
    return c.text('المجموعة غير مسموح بها للتصدير', 400)
  }

  try {
    const db = getFirestore(c)
    const snap = await db.collection(collectionName === 'users' ? 'profiles' : collectionName).get()
    const docs = snap.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))

    const dateStr = new Date().toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })

    // Generate Styled Excel HTML Spreadsheet
    const tableHeaderRows = config.columns.map(col => `<th style="background-color:#0c4a3f; color:#ffffff; font-weight:bold; font-size:11pt; border:1px solid #072d27; padding:12px 10px; text-align:right;">${col.label}</th>`).join('')

    const tableBodyRows = docs.length === 0
      ? `<tr><td colspan="${config.columns.length}" style="text-align:center; padding:20px; color:#888;">لا توجد بيانات مسجلة في هذا القسم حتى الآن.</td></tr>`
      : docs.map((doc, idx) => {
        const bg = idx % 2 === 0 ? '#ffffff' : '#fcfaf5'
        const cells = config.columns.map(col => {
          const rawVal = doc[col.key]
          const formattedVal = col.format ? col.format(rawVal, doc) : (rawVal ?? '-')
          const safeText = String(formattedVal).replace(/</g, '&lt;').replace(/>/g, '&gt;')
          return `<td style="border:1px solid #e2d9c8; padding:10px; font-size:10pt; text-align:right; color:#222; background-color:${bg};">${safeText}</td>`
        }).join('')
        return `<tr>${cells}</tr>`
      }).join('\n')

    const excelHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!--[if gte mso 9]>
<xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>
   <x:ExcelWorksheet>
    <x:Name>${config.title.slice(0, 30)}</x:Name>
    <x:WorksheetOptions>
     <x:DisplayRightToLeft/>
    </x:WorksheetOptions>
   </x:ExcelWorksheet>
  </x:ExcelWorksheets>
 </x:ExcelWorkbook>
</xml>
<![endif]-->
<style>
  body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; }
  table { border-collapse: collapse; width: 100%; margin-top: 10px; }
</style>
</head>
<body>
  <table>
    <tr>
      <td colspan="${config.columns.length}" style="background-color:#0c4a3f; color:#ffffff; text-align:center; font-size:18pt; font-weight:bold; padding:16px 10px;">
        مؤسسة الدكتور عمر هشام للخدمات المجتمعية والخيرية
      </td>
    </tr>
    <tr>
      <td colspan="${config.columns.length}" style="background-color:#d6a64b; color:#0c4a3f; text-align:center; font-size:13pt; font-weight:bold; padding:8px 10px;">
        ${config.title}
      </td>
    </tr>
    <tr>
      <td colspan="${config.columns.length}" style="background-color:#f4efe6; color:#555555; text-align:right; font-size:10pt; padding:8px 12px; border-bottom:2px solid #d6a64b;">
        <b>تاريخ الاستخراج:</b> ${dateStr} &nbsp; | &nbsp; <b>إجمالي السجلات:</b> ${docs.length} سجل
      </td>
    </tr>
    <tr><td colspan="${config.columns.length}" style="height:10px;"></td></tr>
    <thead>
      <tr>${tableHeaderRows}</tr>
    </thead>
    <tbody>
      ${tableBodyRows}
    </tbody>
  </table>
</body>
</html>`

    return c.body('\uFEFF' + excelHtml, 200, {
      'Content-Type': 'application/vnd.ms-excel; charset=utf-8',
      'Content-Disposition': `attachment; filename="${collectionName}_export_${Date.now()}.xls"`
    })
  } catch (e: any) {
    console.error('[Export Error]', e)
    return c.text(`خطأ في تصدير البيانات: ${e.message}`, 500)
  }
})
