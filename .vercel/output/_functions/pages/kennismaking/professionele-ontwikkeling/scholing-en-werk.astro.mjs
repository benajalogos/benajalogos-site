import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Scholing en werk \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/professionele-ontwikkeling">← Terug naar Professionele ontwikkeling</a> </p> <h1>Scholing en werk</h1> <p>
Mijn zoektocht om de wereld om mij heen te begrijpen, verbreedde ik door scholing.
</p> <p>
Ik deed dit naast mijn werk, omdat ik me verantwoordelijk voelde voor mijn eigen inkomsten.
    Ik richtte me op communicatie en menselijk gedrag binnen organisaties.
</p> <p>
Dit gaf me woorden voor wat ik zelf beleefde en dacht te zien. Hierdoor kon ik mijn vragen
    duidelijker stellen, wat ten goede kwam aan het leerproces.
</p> <p>
Stap voor stap werd helder dat gedrag nooit op zichzelf staat, maar ontstaat uit een combinatie
    van omstandigheden, verwachtingen en onderlinge verhoudingen.
</p> <p>
De functies in mijn werk groeiden mee. Daardoor kon ik mijn verkregen inzichten in de praktijk
    toepassen en de effecten ervan op grotere schaal waarnemen.
</p> <p> <strong style="color: var(--accent);">
Wat begon als een persoonlijke zoektocht naar begrip, groeide uit tot een professioneel fundament waarin inzicht, analyse en toepassing samenkomen.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/scholing-en-werk/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/scholing-en-werk/index.astro";
const $$url = "/kennismaking/professionele-ontwikkeling/scholing-en-werk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
