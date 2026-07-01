import { Hono } from 'hono'
import { api } from './api'
import { page } from './layout'
import { home } from './pages/home'
import { about } from './pages/about'
import { campaignsPage } from './pages/campaigns'
import { achievementsPage } from './pages/achievements'
import { donatePage } from './pages/donate'
import { volunteersPage } from './pages/volunteers'
import { galleryPage } from './pages/gallery'
import { newsPage } from './pages/news'
import { eventsPage } from './pages/events'
import { contactPage } from './pages/contact'
import { faqPage } from './pages/faq'
import { storiesPage } from './pages/stories'
import { transparencyPage } from './pages/transparency'
import { careersPage } from './pages/careers'
import { dashboardPage } from './pages/dashboard'
import { loginPage, registerPage } from './pages/auth'

const app = new Hono()

// Mount API routes
app.route('/api', api)

app.get('/', (c) => c.html(page({ title: 'الرئيسية', active: 'home', desc: 'مؤسسة الدكتور عمر هشام الخيرية — نزرع الأمل ونصنع حياةً كريمة عبر برامج الإغاثة والصحة والتعليم.' }, home())))
app.get('/about', (c) => c.html(page({ title: 'من نحن', active: 'about' }, about())))
app.get('/campaigns', (c) => c.html(page({ title: 'الحملات', active: 'work' }, campaignsPage())))
app.get('/achievements', (c) => c.html(page({ title: 'الإنجازات', active: 'work' }, achievementsPage())))
app.get('/success-stories', (c) => c.html(page({ title: 'قصص النجاح', active: 'work' }, storiesPage())))
app.get('/events', (c) => c.html(page({ title: 'الفعاليات', active: 'work' }, eventsPage())))
app.get('/gallery', (c) => c.html(page({ title: 'معرض الصور', active: 'work' }, galleryPage())))
app.get('/donate', (c) => c.html(page({ title: 'تبرّع الآن', active: 'join' }, donatePage())))
app.get('/volunteers', (c) => c.html(page({ title: 'التطوّع', active: 'join' }, volunteersPage())))
app.get('/careers', (c) => c.html(page({ title: 'الوظائف', active: 'join' }, careersPage())))
app.get('/news', (c) => c.html(page({ title: 'الأخبار', active: 'news' }, newsPage())))
app.get('/transparency', (c) => c.html(page({ title: 'الشفافية المالية', active: 'more' }, transparencyPage())))
app.get('/faq', (c) => c.html(page({ title: 'الأسئلة الشائعة', active: 'more' }, faqPage())))
app.get('/contact', (c) => c.html(page({ title: 'تواصل معنا', active: 'more' }, contactPage())))

// Standalone-layout pages
app.get('/dashboard', (c) => c.html(dashboardPage()))
app.get('/login', (c) => c.html(loginPage()))
app.get('/register', (c) => c.html(registerPage()))

// 404
app.notFound((c) => c.html(page({ title: 'الصفحة غير موجودة' }, `
<section class="page-hero" style="min-height:70vh;display:grid;place-items:center">
  <div class="hero-bg-grid"></div><div class="hero-glow g1"></div><div class="hero-glow g3"></div>
  <div class="wrap center" style="position:relative;z-index:3">
    <div style="font-size:clamp(5rem,18vw,11rem);font-weight:900;line-height:1;background:var(--grad-gold);-webkit-background-clip:text;background-clip:text;color:transparent">٤٠٤</div>
    <h1 class="h-xl" style="color:#fff;margin-top:1rem">الصفحة غير موجودة</h1>
    <p class="lead" style="color:rgba(255,255,255,.8);margin:1rem auto 2rem;max-width:480px">يبدو أن الصفحة التي تبحث عنها قد انتقلت أو لم تعد متوفرة.</p>
    <a href="/" class="btn btn-gold btn-lg magnetic"><i class="fas fa-house"></i> العودة للرئيسية</a>
  </div>
</section>`)))

export default app
