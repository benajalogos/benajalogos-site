import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ontdekken van ordening \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/persoonlijke-zoektocht">← Terug naar Persoonlijke zoektocht</a> </p> <h1>Ontdekken van ordening</h1> <p>
Het besef dat inzicht alleen niet voldoende was, bracht een nieuwe verschuiving.
</p> <p>
Ik begon me te richten op waarom dingen gebeurden. Dat proces werd versneld door de
    bijzondere manier van functioneren van mijn dochter Annette.
</p> <p>
Zij was doof en blind, en het werd onze taak als ouders haar in deze andere manier van
    functioneren te begeleiden, zodat maximaal welzijn voor haar mogelijk werd.
</p> <p>
Deze periode gaf vele inzichten die ook mijn wereld verrijkten. De grootste omslag
    kwam toen ik inzag dat elke vorm van bijzonder gedrag dezelfde oorsprong heeft.
</p> <p>
Ik zag dat als het proces van informatieverwerking bij een mens verstoord raakt,
    dit altijd leidt tot een gebrek aan inzicht in wat je van een ander verwacht.
</p> <p>
Hierdoor werden ineens al mijn levensvragen beantwoord.<br> <br> <strong style="color: var(--accent);">
Het proces van informatieverwerking blijkt de onderliggende ordening te zijn die bepaalt
      hoe gedrag ontstaat en daarmee in grote mate het welzijn beïnvloedt.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening/index.astro";
const $$url = "/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
