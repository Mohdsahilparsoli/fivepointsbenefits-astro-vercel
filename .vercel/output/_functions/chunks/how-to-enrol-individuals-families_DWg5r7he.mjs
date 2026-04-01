import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$HowToEnrolIndividualsFamilies = createComponent(async ($$result, $$props, $$slots) => {
  const Howtoenrol = `
query GetPage {
  page(id: "how-to-enrol-individuals-and-families", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
       familiesImage { 
      familyImg {
        # Inside the repeater, check if your image needs a 'node'
        familyImage {
          node {
            sourceUrl
            altText
          }
        }
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
}
`;
  let familyenrol = await fetchAPI(Howtoenrol);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": familyenrol.page.seo.title, "fullHead": familyenrol.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="employermain-sec section-padding pb-0"> <div class="container"> <div class="employer-holderss"> <div class="imageempoyergroups"> <img${addAttribute(familyenrol.page.featuredImage.node.sourceUrl, "src")}${addAttribute(familyenrol.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(familyenrol.page.featuredImage.node.mediaDetails.height, "height")}${addAttribute(familyenrol.page.title, "alt")}> </div> <div>${unescapeHTML(familyenrol.page.content)}</div> </div> <div class="employer-holderss"> <div class="logos"> ${familyenrol.page.familiesImage.familyImg.map((item) => renderTemplate`<div class="main-img"> <img${addAttribute(item.familyImage.node.sourceUrl, "src")}${addAttribute(item.familyImage.node.altText || "family image", "alt")}> </div>`)} </div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/how-to-enrol-individuals-families.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/how-to-enrol-individuals-families.astro";
const $$url = "/how-to-enrol-individuals-families";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowToEnrolIndividualsFamilies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
