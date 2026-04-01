import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, b8 as unescapeHTML, a3 as addAttribute } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$FindProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `
query GetPage {
  page(id: "find-provider", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
    findProvider {
      memberId
      network
      searchInstructions
      shortInfo
      shortInfoMember
       memberIdProfile {
        memberProfilePicture {
          node {
            id
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
  let provider = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": provider.page.seo.title, "fullHead": provider.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="member-sec provider data-flow flow-data"> <div class="container"> <div class="row gy-4 align-items-center"> <div class="col-lg-7"> <div class="allabout-memberss fin-provide">${unescapeHTML(provider.page.content)}</div> </div> <div class="col-lg-5"> <div class="image-members"> <img${addAttribute(provider.page.featuredImage.node.sourceUrl, "src")}${addAttribute(provider.page.title, "alt")} width="615" height="348"> </div> </div> </div> </div> </section> <section class="memberportal-secc bg-white"> <div class="container"> <div class="holderebg-here"> <div class="center-data">${unescapeHTML(provider.page.findProvider.network)}</div> </div> </div> <div class="imgaebg content"> <div class="container"> <div class="main-imageheree">${unescapeHTML(provider.page.findProvider.shortInfo)}</div> </div> </div> <div class="container"> <div class="full-content-data">${unescapeHTML(provider.page.findProvider.searchInstructions)}</div> </div> <div class="pdf-flow"></div> <div class="container"> <div class="find-card">${unescapeHTML(provider.page.findProvider.memberId)}</div> <div class="logos"> ${provider.page.findProvider.memberIdProfile.map((curent) => {
    return renderTemplate`<div class="main-img"> <img${addAttribute(curent.memberProfilePicture.node.sourceUrl, "src")} alt="YOUR MEMBER ID CARD"> </div>`;
  })} </div> <p class="flow-center"> ${provider.page.findProvider.shortInfoMember} </p> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/find-provider.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/find-provider.astro";
const $$url = "/find-provider";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FindProvider,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
