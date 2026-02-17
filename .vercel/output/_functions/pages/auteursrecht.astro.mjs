import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../renderers.mjs';

const $$Auteursrecht = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Auteursrecht \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/">← Terug naar Home</a> </p> <h1>Auteursrecht & intentie</h1> <p>
Alle inhoud op deze website is met zorg samengesteld en voortgekomen uit jaren van studie,
    reflectie en ontwikkeling binnen Benaja Logos.
</p> <p>
Het voorwoord, nawoord en inleidingen van de boeken zijn vrij beschikbaar en mogen worden
<a href="/downloads">gedownload en gedeeld</a>.
</p> <p>
De overige inhoud, structuur en formulering van de boeken zijn auteursrechtelijk beschermd.
    Het is niet toegestaan deze inhoud te kopiëren, verspreiden of op andere wijze te gebruiken
    zonder voorafgaande schriftelijke toestemming van Benaja Logos.
</p> <p>
Het doel van Benaja Logos is om inzicht te delen en mensen te ondersteunen in een gezond,
    rechtvaardig en duurzaam leven. Respectvol omgaan met deze inhoud draagt bij aan dat doel.
</p> <p style="font-size: 0.85rem;">
© 2026 Benaja Logos. Alle rechten voorbehouden.
</p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/auteursrecht.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/auteursrecht.astro";
const $$url = "/auteursrecht";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Auteursrecht,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
