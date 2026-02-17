import { e as createComponent, m as maybeRenderHead, r as renderTemplate, p as renderHead, k as renderComponent, q as renderSlot, h as createAstro } from './astro/server_BklRGyrT.mjs';
import 'piccolore';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="container header-inner"> <nav> <a href="/" class="mobile-logo"> <img src="/boom.svg" alt="Benaja Logos"> </a> <a href="/">Home |</a> <a href="/kennismaking">Kennismaking |</a> <a href="/boeken">Boeken |</a> <a href="/downloads">Downloads |</a> <a href="/auteursrecht">Auteursrecht |</a> <a href="/contact">Contact |</a> </nav> </div> </header>`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-inner"> <b class="footer-text">
© 2026 Benaja Logos. Alle rechten voorbehouden.
</b> </div> </footer>`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Benaja Logos" } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><!-- SEO --><meta name="description" content="Benaja Logos — Inzicht in een gezond, rechtvaardig en duurzaam leven."><!-- Open Graph --><meta property="og:title" content="Benaja Logos"><meta property="og:description" content="Inzicht in een gezond, rechtvaardig en duurzaam leven."><meta property="og:image" content="/images/logo.png"><meta property="og:type" content="website"><meta property="og:url" content="https://benajalogos.nl"><meta property="og:site_name" content="Benaja Logos"><!-- Styles --><link rel="stylesheet" href="/styles/global.css"><!-- Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><link rel="mask-icon" href="/boom.svg" color="#1f3a5f">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <div class="container main-layout"> <div class="content"> ${renderSlot($$result, $$slots["default"])} </div> <div class="logo-side" aria-hidden="true"> <img src="/images/logo.png" alt="Benaja Logos" class="site-logo" loading="eager"> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
