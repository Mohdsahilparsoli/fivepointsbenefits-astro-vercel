import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$MissionStatement = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "mission-statement", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
  }
}`;
  let missionstatement = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": missionstatement.page.seo.title, "fullHead": missionstatement.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mission-statement"> <div class="container"> <div class="statement"> <div class="main-titles"> <h1 class="fs-60">${missionstatement.page.title}</h1> </div> <div class="main-titles-pera">${unescapeHTML(missionstatement.page.content)}</div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/mission-statement.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/mission-statement.astro";
const $$url = "/mission-statement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MissionStatement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
