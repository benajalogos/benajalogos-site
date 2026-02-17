import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Boeken \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/">← Terug naar Home</a> </p> <h1>Boeken</h1> <p>
Deze boeken geven inzicht in het leefproces en laten zien hoe een gezond, rechtvaardig en duurzaam leven kan ontstaan vanuit betekenis, richting en samenhang.
</p> <div class="grid grid-2" style="margin-top:48px;"> <div class="card"> <h3>Een reis door de Bijbel</h3> <p>Een verhaal dat meeneemt naar inzicht in kracht en wijsheid.</p> <a class="btn" href="/boeken/een-reis-door-de-bijbel">Bekijk boek</a> </div> <div class="card"> <h3>Het handboek voor leven</h3> <p>Handvatten voor een gezond, rechtvaardig en duurzaam leven.</p> <a class="btn" href="/boeken/het-handboek-voor-leven">Bekijk boek</a> </div> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/boeken/index.astro";
const $$url = "/boeken";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
