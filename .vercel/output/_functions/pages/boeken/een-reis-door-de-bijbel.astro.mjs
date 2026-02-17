import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Een reis door de Bijbel \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/boeken">← Terug naar Boeken</a> </p> <h1>Een reis door de Bijbel</h1> <p>
Een toegankelijk boek waarin je wordt meegenomen door het verhaal in de Bijbel en op een overzichtelijke wijze inzicht krijgt in de kracht en wijsheid van Psalmen en Spreuken.
</p> <h2 class="section-title">Wat je in dit boek ontdekt</h2> <ul class="feature-list"> <li> <strong>De rode lijn van Genesis tot Openbaring</strong><br>
Het grote verhaal als één samenhangend geheel, niet als losse fragmenten.
</li> <li> <strong>De innerlijke verdieping via Psalmen</strong><br>
Hoe geloof van binnen vorm krijgt: worsteling, vertrouwen, aanbidding, herstel.
</li> <li> <strong>De praktische wijsheid van Spreuken</strong><br>
Hoe Gods orde zichtbaar wordt in dagelijkse keuzes, relaties en handelen.
</li> </ul> <div class="grid grid-2" style="margin-top:50px;"> <div> <a class="btn" href="/downloads">Bekijk gratis downloads</a> </div> <div> <a class="btn" href="/boeken">Bekijk andere boeken</a> </div> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/een-reis-door-de-bijbel/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/een-reis-door-de-bijbel/index.astro";
const $$url = "/boeken/een-reis-door-de-bijbel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
