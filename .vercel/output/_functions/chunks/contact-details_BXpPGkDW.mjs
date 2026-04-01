import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$ContactDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Contactinfo = `
query GetPage {
  page(id: "contact-details", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
    contactInfo {
      contactDetails {
        contactDetail
      }
    }
    featuredImage {
      node {
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
    }
  }
}
`;
  let contactinfo = await fetchAPI(Contactinfo);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": contactinfo.page.seo.title, "fullHead": contactinfo.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact-us-flow"> <div class="container"> <!-- IMAGE --> <div class="main-img"> <img${addAttribute(contactinfo.page.featuredImage.node.sourceUrl, "src")}${addAttribute(contactinfo.page.title, "alt")}> </div> <!-- CONTENT --> <div class="main-titles-con">${unescapeHTML(contactinfo.page.content)}</div> <!-- CONTACT OPTIONS --> <div class="contact-info-flows"> <h3 class="fs-30">Contact Options</h3> <div class="row-flow-contact"> ${contactinfo.page.contactInfo.contactDetails.map((item) => renderTemplate`<div>${unescapeHTML(item.contactDetail)}</div>`)} </div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/contact-details.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/contact-details.astro";
const $$url = "/contact-details";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
