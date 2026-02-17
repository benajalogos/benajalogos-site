import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Verlangen naar begrip \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/persoonlijke-zoektocht">← Terug naar Persoonlijke zoektocht</a> </p> <h1>Verlangen naar begrip</h1> <p>
Mijn zoektocht begon niet met grote verwachtingen, maar met vele kleine vragen.
</p> <p>
Die vragen kwamen niet voort uit ontevredenheid, maar uit onzekerheid.
    Niet om het leven te beheersen, maar om het te begrijpen.
</p> <p>
Onbegrip vanuit onzekerheid bepaalde lange tijd mijn leven.
    Telkens dacht ik te weten wat er van mij werd verwacht en wat ik van mijn omgeving kon verwachten.
</p> <p>
Keer op keer bleek dat achteraf niet zo te zijn.
    Daardoor begon ik het gedrag van anderen te kopiëren, zonder werkelijk te begrijpen waarom ik deed wat ik deed.
</p> <p>
Hoewel ik steeds minder negatieve reacties kreeg op mijn gedrag,
    ervaarde ik mijn leven niet als prettig. Ik leefde een leven dat niet van mij was.
</p> <p> <strong style="color: var(--accent);">Die innerlijke leegte werd een stille drijfveer die me bleef
      voortstuwen om te zoeken naar wat werkelijk klopte met wat ik van binnen voelde.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip/index.astro";
const $$url = "/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
