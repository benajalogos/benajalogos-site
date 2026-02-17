import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ontdekking van informatieverwerking \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/professionele-ontwikkeling">← Terug naar Professionele ontwikkeling</a> </p> <h1>Ontdekking van informatieverwerking</h1> <p>
Tijdens mijn scholing en werk ontdekte ik het belang van informatieverwerking.
</p> <p>
Ik merkte dat gedrag niet alleen wordt gevormd door omstandigheden, maar in grote mate door de
    manier waarop een mens informatie verwerkt.
</p> <p>
Toen ik inzag dat verstoring in informatieverwerking leidt tot misverstanden,
    verkeerde verwachtingen en verlies van welzijn, ontstond een omslag in mijn denken.
</p> <p>
Niet langer stond gedrag centraal. Ik begon me te richten op het proces van verwerking van
    informatie en zag dat het proces aan de basis ligt van het menselijk functioneren.
</p> <p> <strong style="color: var(--accent);">
Deze ontdekking in samenhang groeide uit tot een bewuste specialisatie.
       Dit resulteerde uiteindelijk in een boek dat ik samen met een hogeschool uitbracht.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking/index.astro";
const $$url = "/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
