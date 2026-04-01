import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$Teladoc = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "teladoc", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
    teladoc {
      appDownloadSection
      teladocInfo {
        teladocProfile {
          node {
            sourceUrl
          }
        }
        teladocDescription
        teladocTitle
      }
    }
    featuredImage {
      node {
        sourceUrl
        mediaDetails {
          file
          filePath
          height
          width
        }
      }
    }
  }
}`;
  let teladoc = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": teladoc.page.seo.title, "fullHead": teladoc.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="teladoc"> <div class="container"> <div class="main-logo-teladoc"> <a href="https://www.teladochealth.com/" target="_blank"> <img${addAttribute(teladoc.page.featuredImage.node.sourceUrl, "src")}${addAttribute(teladoc.page.title, "alt")}${addAttribute(teladoc.page.featuredImage.node.mediaDetails.height, "height")}${addAttribute(teladoc.page.featuredImage.node.mediaDetails.width, "width")}></a> </div> <div class="tedoc-titles">${unescapeHTML(teladoc.page.content)}</div> <div class="main-grid-flow"> ${teladoc.page.teladoc.teladocInfo.map((curent) => {
    console.log();
    return renderTemplate`<div class="grid-one"> <div class="icons"> <img${addAttribute(curent.teladocProfile.node.sourceUrl, "src")}${addAttribute(curent.teladocTitle, "alt")} height="100" width="108"> </div> <div class="content"> <h3>${curent.teladocTitle}</h3> <p>${curent.teladocDescription}</p> </div> </div>`;
  })} </div> <div class="main-center-content">${unescapeHTML(teladoc.page.teladoc.appDownloadSection)}</div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/teladoc.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/teladoc.astro";
const $$url = "/teladoc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teladoc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
