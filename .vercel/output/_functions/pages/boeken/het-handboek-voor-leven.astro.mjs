import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Het handboek voor leven \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/boeken">← Terug naar Boeken</a> </p> <h1>Het handboek voor leven</h1> <p>
Een praktisch boek waarin je wordt meegenomen door het leefproces en op een overzichtelijke wijze inzicht krijgt in wat bijdraagt aan een gezond, rechtvaardig en duurzaam leven.
</p> <h2 class="section-title">Wat je in dit boek ontdekt</h2> <ul class="feature-list"> <li> <strong>Een leefmodel voor bewuste keuzes vanuit richting</strong><br>
Handvatten voor een leven dat past bij wie je bent en wat je nodig hebt.
</li> <li> <strong>Het begrijpen van draagkracht en draaglast</strong><br>
Inzicht in hoe wat je aankunt en de druk die je ervaart in balans blijven.
</li> <li> <strong>Afstemming op Gods orde</strong><br>
Hoe je leven rustiger en stabieler wordt wanneer je het toetst aan Gods orde.
</li> </ul> <div class="grid grid-2" style="margin-top:50px;"> <div> <a class="btn" href="/downloads">Bekijk gratis downloads</a> </div> <div> <a class="btn" href="/boeken">Bekijk andere boeken</a> </div> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/het-handboek-voor-leven/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/het-handboek-voor-leven/index.astro";
const $$url = "/boeken/het-handboek-voor-leven";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
