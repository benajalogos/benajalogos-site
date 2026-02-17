import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gods woord \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking/god-zijn-woord-en-zijn-orde">← Terug naar God, Zijn woord en Zijn orde</a> </p> <h1>Gods woord</h1> <p>
Gods woord is een samenhangend geheel van teksten dat inzicht geeft in Gods orde.
</p> <p>
De Bijbel bestaat uit een verzameling van deze teksten en heeft de functie van spiegel en richtinggever.
</p> <p>
Het opent inzicht in de binnenwereld van een mens, maakt zichtbaar hoe keuzes ontstaan en laat zien hoe die keuzes doorwerken in het dagelijks leven.
</p> <p>
Het verhaal van Genesis tot en met Openbaring vormt, samen met de boeken Psalmen en Spreuken, dus geen theorie.
</p> <p>
Ze maken zichtbaar hoe God het leven van een mens heeft bedoeld en geven handvatten om Zijn denkbeeld toe te passen.
</p> <p> <strong style="color: var(--accent);">Geloof in Gods woord is het vertrouwen dat het duidelijke richtlijnen biedt
    voor het bouwen op het fundament van Gods liefde, verlossing en ondersteuning.
</strong> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord/index.astro";
const $$url = "/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
