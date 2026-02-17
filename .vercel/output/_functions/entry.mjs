import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BddbBH7e.mjs';
import { manifest } from './manifest_Cv_pJmSr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/download/_token_.astro.mjs');
const _page2 = () => import('./pages/auteursrecht.astro.mjs');
const _page3 = () => import('./pages/bedankt-god-thanks/bedankt-een-reis/een-reis-door-de-bijbel.astro.mjs');
const _page4 = () => import('./pages/bedankt-god-thanks/korting-beide-boeken/beide-boeken-samen.astro.mjs');
const _page5 = () => import('./pages/bedankt-god-thanks/test0.astro.mjs');
const _page6 = () => import('./pages/bedankt-god-thanks/test1.astro.mjs');
const _page7 = () => import('./pages/boeken/een-reis-door-de-bijbel.astro.mjs');
const _page8 = () => import('./pages/boeken/het-handboek-voor-leven.astro.mjs');
const _page9 = () => import('./pages/boeken.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/downloads.astro.mjs');
const _page12 = () => import('./pages/kennismaking/god-zijn-woord-en-zijn-orde/god.astro.mjs');
const _page13 = () => import('./pages/kennismaking/god-zijn-woord-en-zijn-orde/god-en-leven.astro.mjs');
const _page14 = () => import('./pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde.astro.mjs');
const _page15 = () => import('./pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord.astro.mjs');
const _page16 = () => import('./pages/kennismaking/god-zijn-woord-en-zijn-orde.astro.mjs');
const _page17 = () => import('./pages/kennismaking/persoonlijke-zoektocht/een-relatie-met-god.astro.mjs');
const _page18 = () => import('./pages/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang.astro.mjs');
const _page19 = () => import('./pages/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening.astro.mjs');
const _page20 = () => import('./pages/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip.astro.mjs');
const _page21 = () => import('./pages/kennismaking/persoonlijke-zoektocht.astro.mjs');
const _page22 = () => import('./pages/kennismaking/professionele-ontwikkeling/begeleiding-en-advies.astro.mjs');
const _page23 = () => import('./pages/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking.astro.mjs');
const _page24 = () => import('./pages/kennismaking/professionele-ontwikkeling/scholing-en-werk.astro.mjs');
const _page25 = () => import('./pages/kennismaking/professionele-ontwikkeling/waarde-van-gods-woord.astro.mjs');
const _page26 = () => import('./pages/kennismaking/professionele-ontwikkeling.astro.mjs');
const _page27 = () => import('./pages/kennismaking.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/download/[token].ts", _page1],
    ["src/pages/auteursrecht.astro", _page2],
    ["src/pages/bedankt-god-thanks/bedankt-een-reis/een-reis-door-de-bijbel.astro", _page3],
    ["src/pages/bedankt-god-thanks/korting-beide-boeken/beide-boeken-samen.astro", _page4],
    ["src/pages/bedankt-god-thanks/test0.astro", _page5],
    ["src/pages/bedankt-god-thanks/test1.astro", _page6],
    ["src/pages/boeken/een-reis-door-de-bijbel/index.astro", _page7],
    ["src/pages/boeken/het-handboek-voor-leven/index.astro", _page8],
    ["src/pages/boeken/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/downloads/index.astro", _page11],
    ["src/pages/kennismaking/god-zijn-woord-en-zijn-orde/god/index.astro", _page12],
    ["src/pages/kennismaking/god-zijn-woord-en-zijn-orde/god-en-leven/index.astro", _page13],
    ["src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-orde/index.astro", _page14],
    ["src/pages/kennismaking/god-zijn-woord-en-zijn-orde/gods-woord/index.astro", _page15],
    ["src/pages/kennismaking/god-zijn-woord-en-zijn-orde/index.astro", _page16],
    ["src/pages/kennismaking/persoonlijke-zoektocht/een-relatie-met-god/index.astro", _page17],
    ["src/pages/kennismaking/persoonlijke-zoektocht/ervaren-van-samenhang/index.astro", _page18],
    ["src/pages/kennismaking/persoonlijke-zoektocht/ontdekken-van-ordening/index.astro", _page19],
    ["src/pages/kennismaking/persoonlijke-zoektocht/verlangen-naar-begrip/index.astro", _page20],
    ["src/pages/kennismaking/persoonlijke-zoektocht/index.astro", _page21],
    ["src/pages/kennismaking/professionele-ontwikkeling/begeleiding-en-advies/index.astro", _page22],
    ["src/pages/kennismaking/professionele-ontwikkeling/ontdekking-van-informatieverwerking/index.astro", _page23],
    ["src/pages/kennismaking/professionele-ontwikkeling/scholing-en-werk/index.astro", _page24],
    ["src/pages/kennismaking/professionele-ontwikkeling/waarde-van-gods-woord/index.astro", _page25],
    ["src/pages/kennismaking/professionele-ontwikkeling/index.astro", _page26],
    ["src/pages/kennismaking/index.astro", _page27],
    ["src/pages/index.astro", _page28]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "18255e4a-fbca-4a29-81dd-1a73f284a358",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
