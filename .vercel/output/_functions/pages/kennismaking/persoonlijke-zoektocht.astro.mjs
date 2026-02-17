import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BklRGyrT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_XhKhd4mL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Persoonlijke zoektocht \u2014 Benaja Logos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="back-link"> <a href="/kennismaking">← Terug naar Kennismaking</a> </p> <h1>Persoonlijke zoektocht</h1> <p>
Deze tweede van drie pijlers beschrijft de weg waarin zoeken naar betekenis, richting en
   samenhang zich ontwikkelde tot inzicht in hoe het leven werkelijk functioneert.
</p> <p>
Binnen Benaja Logos is die persoonlijke zoektocht geen los verhaal, maar de
    ervaringslaag waarin dat inzicht is doorleefd, getoetst en verdiept.
</p> <p style="margin-top:55px;"> <strong style="color: var(--accent);">
Deze ontwikkeling is verder uitgewerkt in:
</strong> </p> <ul class="feature-list"> <li> <a href="/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip"> <strong>Verlangen naar begrip</strong> — Hoe onbegrip leidt tot aanpassing.
</a> </li> <li> <a href="/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang"> <strong>Ervaren van samenhang</strong> — Hoe inzicht in patronen niet direct leidt tot verbinding.
</a> </li> <li> <a href="/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening"> <strong>Ontdekken van ordening</strong> — Hoe informatieverwerking het welzijn beïnvloedt.
</a> </li> <li> <a href="/kennismaking/persoonlijke-zoektocht/een-relatie-met-god"> <strong>Een relatie met God</strong> — Hoe Gods orde leidt tot innerlijke rust en stabiliteit.
</a> </li> </ul> <p style="margin-top: 60px;"> <span style="color: var(--accent);">
Hulp nodig bij je persoonlijke ontwikkeling?
</span>
→ <a href="/boeken"><em>lees "Het handboek voor leven"</em></a> </p> ` })}`;
}, "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/index.astro", void 0);

const $$file = "/Users/Benkuijpers1/Sites/benajalogos-site/src/pages/kennismaking/persoonlijke-zoektocht/index.astro";
const $$url = "/kennismaking/persoonlijke-zoektocht";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
