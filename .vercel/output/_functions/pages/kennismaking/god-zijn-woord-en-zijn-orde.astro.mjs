import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "God, Zijn Woord en Zijn orde \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking">← Terug naar Kennismaking</a> </p> <h1>God, Zijn woord en Zijn orde</h1> <p>
Deze eerste van drie pijlers beschrijft de overtuiging dat God de bron is van leven, dat Zijn woord richting geeft,
    en dat Zijn orde zichtbaar is in alles wat leeft.
</p> <p>
Binnen Benaja Logos vormen God, Zijn woord en Zijn orde geen losse thema’s, maar één samenhangend
    geheel dat voortdurend uitnodigt tot ontdekking.
</p> <p style="margin-top:55px;"> <strong style="color: var(--accent);">
Deze uitnodiging tot ontdekking is verder uitgewerkt in:
</strong> </p> <ul class="feature-list"> <li> <a href="/kennismaking/god-zijn-woord-en-zijn-orde/god"> <strong>God</strong> — Hoe de drie-eenheid helpt te leven vanuit Gods woord.
</a> </li> <li> <a href="/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord"> <strong>Gods woord</strong> — Hoe Gods woord richtlijnen geeft aan Gods orde.
</a> </li> <li> <a href="/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde"> <strong>Gods orde</strong> — Hoe Gods orde leidt tot balans, samenhang en groei.
</a> </li> <li> <a href="/kennismaking/god-zijn-woord-en-zijn-orde/god-en-leven"> <strong>Een relatie met God</strong> — Hoe geloof in God uitgroeit tot een relatie met God.
</a> </li> </ul> <p style="margin-top: 60px;"> <span style="color: var(--accent);">
Wil je dieper verkennen en ontdekken?
</span>
→ <a href="/boeken"><em>lees "Een reis door de Bijbel"</em></a> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/index.astro";
const $$url = "/kennismaking/god-zijn-woord-en-zijn-orde";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
