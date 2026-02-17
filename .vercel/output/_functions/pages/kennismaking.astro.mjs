import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Kennismaking \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/">← Terug naar Home</a> </p> <h1>Kennismaking</h1> <p>
Benaja Logos is ontstaan vanuit een persoonlijke zoektocht naar betekenis, richting en samenhang die zich in de loop van de tijd heeft verdiept tot zowel een innerlijke ontwikkeling als een professionele expertise.
</p> <p>
Wat al deze lijnen nu verbindt, is de liefde voor God en de overtuiging dat Zijn orde richtinggevend is voor een gezond, rechtvaardig en duurzaam leven.
</p> <h2 class="section-title">De drie pijlers van Benaja Logos</h2> <ul class="feature-list"> <li> <a href="/kennismaking/god-zijn-woord-en-zijn-orde">
God, Zijn woord en Zijn orde
</a> </li> <li> <a href="/kennismaking/persoonlijke-zoektocht">
Persoonlijke zoektocht
</a> </li> <li> <a href="/kennismaking/professionele-ontwikkeling">
Professionele ontwikkeling
</a> </li> </ul> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/index.astro";
const $$url = "/kennismaking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
