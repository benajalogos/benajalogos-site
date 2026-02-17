import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Begeleiding en advies \u2014 Hoe vaste patronen zorgen voor afname van problemen" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/professionele-ontwikkeling">← Terug naar Professionele ontwikkeling</a> </p> <h1>Begeleiding en advies</h1> <p>
Door het uitbrengen van het boek kreeg ik erkenning voor mijn specialisatie.
</p> <p>
Hierdoor verschoven mijn functies van communicatieadvies naar pedagogisch advies.
    Ik werd gevraagd te werken met kinderen en jongeren met gedragsproblemen.
</p> <p>
Vanuit die positie begeleidde ik kinderen, jongeren en hun omgeving
    vanuit het inzicht dat gedrag voortkomt uit onderliggende verwerkingsprocessen.
</p> <p>
Niet het corrigeren van gedrag stond centraal, maar het herstellen van inzicht,
    verwachtingen en afstemming — processen die ik zelf had doorleefd.
</p> <p>
Gaandeweg raakte ik gespecialiseerd in crisisinterventie, waarin het snel herkennen
    van patronen en het herstellen van rust en overzicht essentieel zijn.
</p> <p> <strong style="color: var(--accent);">
Steeds opnieuw zag ik dat wanneer vaste patronen zichtbaar en begrepen worden,
       problemen afnemen en er ruimte ontstaat voor positieve ontwikkeling.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/begeleiding-en-advies/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/professionele-ontwikkeling/begeleiding-en-advies/index.astro";
const $$url = "/kennismaking/professionele-ontwikkeling/begeleiding-en-advies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
