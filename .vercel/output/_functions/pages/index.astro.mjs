import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="margin-top:48px;">Benaja Logos</h1> <p>
Een gezond, rechtvaardig en duurzaam leven begint waar betekenis, richting en samenhang
    voortkomen uit één basisgedachte.
</p> <p>
Deze denkwijze is ontstaan vanuit de overtuiging dat leven niet willekeurig is, maar een
    dragende ordening als fundament heeft, en gebeurtenissen vanuit deze orde ontstaan.
</p> <p> <strong>
Binnen Benaja Logos vormt Gods woord het fundament van deze denkwijze.
</strong> </p> <p>
Alles wat Benaja Logos doet komt voort uit liefde voor God en de overtuiging dat
    Zijn woord de orde beschrijft die een mens helpt in balans met de omgeving te leven.
</p> <p>
Op deze site vind je informatie over het ontstaan van deze overtuiging. De boeken die via deze
    site te koop zijn, bieden handvatten om de orde te vinden die bij je past.
</p> <div class="grid grid-2" style="margin-top:58px; margin-bottom:54px;"> <div> <a class="btn" href="/boeken">Ontdek de boeken</a> </div> <div> <a class="btn" href="/downloads">Gratis downloads</a> </div> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
