import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$HowToEnrollEmployerGroups = createComponent(async ($$result, $$props, $$slots) => {
  const Howtoenrol = `
query GetPage {
  page(id: "how-to-enroll-employer-groups", idType: URI) {
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
  }
}
`;
  let employerenroll = await fetchAPI(Howtoenrol);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": employerenroll.page.seo.title, "fullHead": employerenroll.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact-us-flow how-to-enrol"> <div class="container"> <div class="main-img"> <img${addAttribute(employerenroll.page.featuredImage.node.sourceUrl, "src")}${addAttribute(employerenroll.page.title, "alt")}${addAttribute(employerenroll.page.featuredImage.node.mediaDetails.height, "height")}${addAttribute(employerenroll.page.featuredImage.node.mediaDetails.width, "width")}> </div> <div>${unescapeHTML(employerenroll.page.content)}</div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/how-to-enroll-employer-groups.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/how-to-enroll-employer-groups.astro";
const $$url = "/how-to-enroll-employer-groups";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowToEnrollEmployerGroups,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
