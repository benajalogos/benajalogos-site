import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/">← Terug naar Home</a> </p> <h1>Contact</h1> <p>
Heb je een vraag over de boeken, de inhoud van deze website, opmerkingen, samenwerkingen of andere verzoeken?
</p> <p>
Stuur een e-mail naar: <a href="mailto:info@benajalogos.nl?subject=Bericht%20via%20website%20Benaja%20Logos">info@benajalogos.nl</a> </p> <p>
Benaja Logos probeert berichten zo zorgvuldig en persoonlijk mogelijk te beantwoorden.
</p> <p>
We zijn je graag van dienst en kijken uit naar je bericht.
</p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/contact.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
