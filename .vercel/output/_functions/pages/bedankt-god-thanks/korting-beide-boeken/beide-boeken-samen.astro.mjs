import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$BeideBoekenSamen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bedankt \u2014 Benaja Logos", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width:720px; margin:0 auto; padding:24px 0;"> <h1 style="margin-top:25px;">Bedankt voor je aankoop</h1> <p style="margin-top:16px; opacity:0.9;">
Je downloads staat hieronder klaar.
</p> <div style="margin-top:48px;
        display:flex;
        flex-direction:column;
        gap:38px;
        max-width:420px;"> <!-- Knop 1 --> <a href="/downloads/thanks-god-bedankt/volledige-inhoud-reis.pdf" style="padding:12px 18px; background:var(--accent); color:#fff; border-radius:8px; text-decoration:none; text-align:center; font-weight:600;">
Download "Een reis door de Bijbel"
</a> <!-- Knop 2 --> <a href="/downloads/thanks-god-bedankt/volledige-inhoud-handboek.pdf" style="padding:12px 18px; background:var(--accent); color:#fff; border-radius:8px; text-decoration:none; text-align:center; font-weight:600;">
Download "Het handboek voor leven"
</a> </div> <p style="margin-top:65px; font-size:0.95rem; opacity:0.85;"> <strong>Tip: sla het boek op in je persoonlijke omgeving!</strong> </p> <p style="margin-top:45px; font-size:0.95rem; opacity:0.85;"> <strong>Problemen met downloaden? Stuur een mail naar</strong> <a href="mailto:info@benajalogos.nl?subject=Bericht%20via%20website%20Benaja%20Logos"><strong>info@benajalogos.nl</strong></a> </p> </div> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/bedankt-god-thanks/korting-beide-boeken/beide-boeken-samen.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/bedankt-god-thanks/korting-beide-boeken/beide-boeken-samen.astro";
const $$url = "/bedankt-god-thanks/korting-beide-boeken/beide-boeken-samen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BeideBoekenSamen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
