import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, b8 as unescapeHTML, a3 as addAttribute } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$Members = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "member", idType: URI) {
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
          
          height
          width
        }
      }
    }
    memberPortal {
      memberPortalInfo
      findeCarePortal
      optumrx {
        link
        subTitle
        title
        optumrxProfile {
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
      formFinderPortal
    }
  }
}`;
  let member = await fetchAPI(Homequery);
  const items = member.page.memberPortal.optumrx;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": member.page.seo.title, "fullHead": member.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="member-sec"> <div class="container"> <div class="row gy-4 align-items-center"> <div class="col-lg-7">${unescapeHTML(member.page.content)}</div> <div class="col-lg-5"> <div class="image-members"> <img${addAttribute(member.page.featuredImage.node.sourceUrl, "src")}${addAttribute(member.page.title, "alt")}${addAttribute(member.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(member.page.featuredImage.node.mediaDetails.height, "height")}> </div> </div> </div> </div> </section> <section class="memberportal-secc">${unescapeHTML(member.page.memberPortal.memberPortalInfo)}</section> <section class="finalcare-sec">${unescapeHTML(member.page.memberPortal.findeCarePortal)}</section> <section class="pharmacy"> <div class="container"> <div class="headings-flow"> <h2 class="fs-40">
Get the Most from Your Pharmacy Coverage Through OptumRx
</h2> </div> <div class="grid-sytem"> ${items.map((item) => renderTemplate`<div class="grid-ph"> <div class="ph-icons"> <img${addAttribute(item.optumrxProfile.node.sourceUrl, "src")}${addAttribute(item.title, "alt")}> </div> <div class="ph-content"> <h3>${item.title}</h3> <p>${item.subTitle}</p> <div class="univesral-button"> <a${addAttribute(item.link, "href")} target="_blank" class="c-btn"> <span>OptumRx</span> </a> </div> </div> </div>`)} </div> </div> </section> <section class="finalcare-sec"> <div class="container"> <div class="row gy-4 align-items-center">${unescapeHTML(member.page.memberPortal.formFinderPortal)}</div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/members.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/members.astro";
const $$url = "/members";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Members,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
