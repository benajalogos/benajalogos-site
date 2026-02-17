import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ervaren van samenhang \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/persoonlijke-zoektocht">← Terug naar Persoonlijke zoektocht</a> </p> <h1>Ervaren van samenhang</h1> <p>
Het zoeken bleef niet langer bij vragen. Ik begon te analyseren wat ik ervaarde.
</p> <p>
Stap voor stap kreeg ik inzicht in de samenhang tussen gedrag en de omstandigheden van het moment.
    Daardoor werden situaties meer voorspelbaar.
</p> <p>
Ondanks het herkennen van deze samenhang en de patronen daarin, bleven reacties negatief
    zolang ik reageerde vanuit gevoel in plaats van vanuit aanpassing.
</p> <p>
Hierdoor werd ik steeds eenzamer en nam mijn zelfvertrouwen verder af.
    Het zoeken naar controle nam toe, wat mijn omgeving zag als dominant of autistisch gedrag.
</p> <p> <strong style="color: var(--accent);">
Die toename in controle bracht wel structuur, maar geen verbinding — en precies daar
      begon ik te beseffen dat inzicht in patronen alleen niet voldoende was.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang/index.astro";
const $$url = "/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
