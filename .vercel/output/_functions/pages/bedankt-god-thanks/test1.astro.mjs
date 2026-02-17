import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Test1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bedankt \u2014 Benaja Logos", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Bedankt voor je aankoop</h1> <p>Hier kun je het boek downloaden:</p> <a href="/downloads/thanks-god-bedankt/het-handboek-voor-leven/volledige-inhoud-handboek.pdf" style="padding:12px 20px; background:var(--accent); color:#fff; border-radius:6px; text-decoration:none;">
Download "Het handboek voor leven"
</a> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/bedankt-god-thanks/test1.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/bedankt-god-thanks/test1.astro";
const $$url = "/bedankt-god-thanks/test1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
