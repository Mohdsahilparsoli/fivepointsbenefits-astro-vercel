import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, b8 as unescapeHTML, a3 as addAttribute } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$FormFinder = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "form-finder", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
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
    formFinder {
      formFinderInfo
    }
  }
}`;
  let formfinder = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": formfinder.page.seo.title, "fullHead": formfinder.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="member-sec provider data-flow data-text"> <div class="container"> <div class="row gy-4 align-items-center"> <div class="col-lg-7">${unescapeHTML(formfinder.page.content)}</div> <div class="col-lg-5"> <div class="image-members"> <img${addAttribute(formfinder.page.featuredImage.node.sourceUrl, "src")}${addAttribute(formfinder.page.title, "alt")}${addAttribute(formfinder.page.featuredImage.node.width, "width")}${addAttribute(formfinder.page.featuredImage.node.height, "height")}> </div> </div> </div> </div> </section> <section class="memberportal-secc bg-white flow"> <div>${unescapeHTML(formfinder.page.formFinder.formFinderInfo)}</div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/form-finder.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/form-finder.astro";
const $$url = "/form-finder";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormFinder,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
