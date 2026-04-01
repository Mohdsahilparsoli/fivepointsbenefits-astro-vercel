import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, b8 as unescapeHTML, a3 as addAttribute } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$OptumRx = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "optumrx", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
        optumrx {
      pharmacyRxInfo
      aboutOptumrx
      optumrxFeatures
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
  let optumrx = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": optumrx.page.seo.title, "fullHead": optumrx.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="member-sec"> <div class="container"> <div class="row gy-4 align-items-center"> <div class="col-lg-7"> <div class="allabout-memberss flow">${unescapeHTML(optumrx.page.content)}</div> </div> <div class="col-lg-5"> <div class="image-members"> <a href="https://www.optumrx.com/" target="_blank"> <img${addAttribute(optumrx.page.featuredImage.node.sourceUrl, "src")}${addAttribute(optumrx.page.title, "alt")}${addAttribute(optumrx.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(optumrx.page.featuredImage.node.mediaDetails.height, "height")}></a> </div> </div> </div> </div> </section> <section class="memberportal-secc"> <div class="container">${unescapeHTML(optumrx.page.optumrx.pharmacyRxInfo)}</div> </section> <section class="optum-rx-welcome"> <div class="container">${unescapeHTML(optumrx.page.optumrx.aboutOptumrx)}</div> </section> <section class="optumax-fe"> <div class="container">${unescapeHTML(optumrx.page.optumrx.optumrxFeatures)}</div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/optum-rx.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/optum-rx.astro";
const $$url = "/optum-rx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OptumRx,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
