import { pageHero, ctaBanner } from '../layout'
import { campaigns } from '../data'

const pct = (r: number, g: number) => Math.min(100, Math.round((r / g) * 100))
const money = (n: number) => n.toLocaleString('ar-EG')

export const campaignsPage = () => pageHero(
  'حملاتنا الإنسانية',
  'اختر القضية التي تُلامس قلبك، وكن سببًا في تغيير حياة. كل حملة موثّقة وكل تبرّع يصل بأمانة.',
  'الحملات'
) + `
<section class="section">
  <div class="wrap">
    <!-- filter tabs -->
    <div class="center" style="margin-bottom:2.6rem">
      <div class="tabs" id="campFilter" role="tablist">
        <button class="tab active" data-filter="all">الكل</button>
        <button class="tab" data-filter="صحة">صحة</button>
        <button class="tab" data-filter="غذاء">غذاء</button>
        <button class="tab" data-filter="تعليم">تعليم</button>
        <button class="tab" data-filter="مياه">مياه</button>
        <button class="tab" data-filter="كساء">كساء</button>
        <button class="tab" data-filter="إسكان">إسكان</button>
      </div>
    </div>

    <div class="grid cols-3" id="campGrid">
      ${campaigns.map((c, i) => `
      <article class="campaign reveal d${(i % 3) + 1}" data-cat="${c.cat}">
        <div class="campaign-media">
          <img src="${c.img}" alt="${c.title}" loading="lazy">
          <span class="chip chip-blue tag">${c.cat}</span>
          ${c.urgent ? '<span class="urgency"><i class="fas fa-bolt"></i> عاجلة</span>' : ''}
        </div>
        <div class="campaign-body">
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="progress"><span style="width:${pct(c.raised, c.goal)}%"></span></div>
          <div class="campaign-meta">
            <span class="raised">جُمع ${money(c.raised)} ج.م</span>
            <span class="goal">الهدف ${money(c.goal)}</span>
          </div>
          <div class="campaign-foot">
            <span class="pct">${pct(c.raised, c.goal)}%</span>
            <a href="/donate" class="btn btn-primary btn-sm"><i class="fas fa-heart"></i> تبرّع</a>
          </div>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>
${ctaBanner()}
`
