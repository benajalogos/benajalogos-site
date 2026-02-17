import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Downloads \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/boeken">← Terug naar Boeken</a> </p> <h1>Downloads</h1> <p>
Hier vind je gratis onderdelen van de boeken om meer inzicht te krijgen in de inhoud.
</p> <p>
Daarnaast zijn de volledige uitgaven hier tegen betaling beschikbaar.
</p>  <div class="downloads-grid" style="margin-top:48px;"> <div class="card"> <h3>Een reis door de Bijbel</h3> <ul class="downloads-list"> <li> <span>Voorwoord</span> <a href="/downloads/een-reis-door-de-bijbel/voorwoord.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Nawoord</span> <a href="/downloads/een-reis-door-de-bijbel/nawoord.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Inleidingen</span> <a href="/downloads/een-reis-door-de-bijbel/inleidingen.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Volledige inhoud</span> <a href="https://buy.stripe.com/6oU4grdKOfBi8DW0kqenS02" target="_blank"> <span class="badge paid">Koop nu</span> </a> </li> </ul> </div> <div class="card"> <h3>Het handboek voor leven</h3> <ul class="downloads-list"> <li> <span>Voorwoord</span> <a href="/downloads/het-handboek-voor-leven/voorwoord.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Nawoord</span> <a href="/downloads/het-handboek-voor-leven/nawoord.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Inleidingen</span> <a href="/downloads/het-handboek-voor-leven/inleidingen.pdf"> <span class="badge free">Gratis</span> </a> </li> <li> <span>Volledige inhoud</span> <a href="https://buy.stripe.com/4gM00bcGKfBif2kaZ4enS03" target="_blank"> <span class="badge paid">Koop nu</span> </a> </li> </ul> </div> </div>  <div class="downloads-discount" style="margin-top:48px;"> <a href="https://buy.stripe.com/28E9AL4ae1KsaM40kqenS04" target="_blank" class="card" style="text-align:center; display:flex; align-items:center; justify-content:center; text-decoration:none;"> <h3 style="margin:0;">Korting bij aanschaf van beide boeken</h3> </a> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/downloads/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/downloads/index.astro";
const $$url = "/downloads";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
