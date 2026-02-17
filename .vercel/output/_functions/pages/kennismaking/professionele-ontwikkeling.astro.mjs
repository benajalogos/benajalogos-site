import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Professionele ontwikkeling \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking">← Terug naar Kennismaking</a> </p> <h1>Professionele ontwikkeling</h1> <p>
Deze derde pijler beschrijft hoe mijn persoonlijke zoektocht zich vertaalde naar scholing,
  toepassing, specialisatie en integratie met Gods woord.
</p> <p>
Binnen Benaja Logos is deze professionele ontwikkeling geen carrièrepad, maar een beweging
  naar meer inzicht in menselijk functioneren, gericht op welzijn.
</p> <p style="margin-top:55px;"> <strong style="color: var(--accent);">
Deze beweging is verder uitgewerkt in:
</strong> </p> <ul class="feature-list"> <li> <a href="/kennismaking/professionele-ontwikkeling/scholing-en-werk"> <strong>Scholing en werk</strong> — Hoe studie en ervaring leerde mens en gedrag te begrijpen.
</a> </li> <li> <a href="/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking"> <strong>Ontdekking van informatieverwerking</strong> — Hoe ontwikkeling leidde tot specialisatie.
</a> </li> <li> <a href="/kennismaking/professionele-ontwikkeling/begeleiding-en-advies"> <strong>Begeleiding en advies</strong> — Hoe vaste patronen zorgen voor afname van problemen.
</a> </li> <li> <a href="/kennismaking/professionele-ontwikkeling/waarde-van-gods-woord"> <strong>Waarde van Gods woord</strong> — Hoe Gods orde het fundament vormt voor het leven.
</a> </li> </ul> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/index.astro";
const $$url = "/kennismaking/professionele-ontwikkeling";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
