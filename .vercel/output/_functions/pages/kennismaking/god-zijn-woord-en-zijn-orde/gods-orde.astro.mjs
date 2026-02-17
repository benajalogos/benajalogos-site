import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gods orde \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/god-zijn-woord-en-zijn-orde">← Terug naar God, Zijn woord en Zijn orde</a> </p> <h1>Gods orde</h1> <p>
Gods orde is de manier waarop zichtbaar wordt hoe leven bedoeld is te functioneren.
</p> <p>
Niet als opgelegd systeem, maar als een dragende werkelijkheid die laat zien wat standhoudt,
  wat leven geeft en wat tot bloei brengt.
</p> <p>
Waar Gods woord richtlijnen geeft voor betekenis en keuzes,
  laat Gods orde zien hoe die keuzes in de praktijk functioneren.
</p> <p class="list-intro">
Gods orde is daarmee geen ideaalbeeld, maar een toetsingskader. Het laat zien:
</p> <ul class="feature-list" style="margin-top:8px;"> <li>Wat leven laat bloeien en wat het uitput</li> <li>Wat samenhang versterkt en wat haar ondermijnt</li> </ul> <p>
Wanneer een mens afstemt op Gods orde, ontstaat een leven dat past bij wie je bent en wat je nodig hebt.
</p> <p> <strong style="color: var(--accent);">Geloof in Gods orde is de overtuiging dat een leven, gebouwd
    vanuit Gods woord, leidt tot balans, samenhang en groei.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde/index.astro";
const $$url = "/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
