import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const GetPage = `
query GetPage {
  page(id: "about-us", idType: URI) {
    title
    content
    slug
    date
    seo {
      title
      fullHead
    }
    featuredImage{
      node{
        sourceUrl
        altText
        mediaDetails{
          width
          height
        }
      }
    }
  }
}
`;
  const postquery = `query GetAllPost {
  members {
    nodes {
      title
      slug
      excerpt
      memberCategories{
        nodes{
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
}`;
  const data = await fetchAPI(GetPage);
  const post = await fetchAPI(postquery);
  const Executive = post.members.nodes.filter((current) => {
    return current.memberCategories.nodes[0]?.slug === "executive";
  });
  const Administration = post.members.nodes.filter((current) => {
    return current.memberCategories.nodes[0]?.slug === "administration";
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.page.seo.title, "fullHead": data.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="in-banner"> <div class="container"> <div class="main-titles"> <h1 class="fs-60">${data.page.title}</h1> </div> <div class="main-about"> <img${addAttribute(data.page.featuredImage.node.sourceUrl, "src")}${addAttribute(data.page.title, "alt")}${addAttribute(data.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(data.page.featuredImage.node.mediaDetails.height, "height")}> </div> <div class="top-header"> <div class="top-title"> <h2 class="fs-80"> <span>M</span>eet <span>O</span>ur <span>T</span>eam
</h2> </div> <h3 class="fs-30">Executive team</h3> </div> <div class="main-grid-list"> ${Executive.map((member) => renderTemplate`<a${addAttribute(`/about-us/${member.slug}`, "href")}> <div class="grid-card"> <div class="main-team-img"> <img${addAttribute(member.featuredImage.node.sourceUrl, "src")}${addAttribute(member.title, "alt")}${addAttribute(member.featuredImage.node.mediaDetails.width, "width")}${addAttribute(member.featuredImage.node.mediaDetails.height, "height")}> </div> <div class="title"> <h3>${member.title}</h3> <p>${unescapeHTML(member.excerpt)}</p> </div> </div> </a>`)} <div class="full-titles"> <h3 class="fs-30">Administration</h3> </div> ${Administration.map((member) => renderTemplate`<a${addAttribute(`/about-us/${member.slug}`, "href")}> <div class="grid-card"> <div class="main-team-img"> <img${addAttribute(member.featuredImage.node.sourceUrl, "src")}${addAttribute(member.title, "alt")}${addAttribute(member.featuredImage.node.mediaDetails.width, "width")}${addAttribute(member.featuredImage.node.mediaDetails.height, "height")}> </div> <div class="title"> <h3>${member.title}</h3> <p>${unescapeHTML(member.excerpt)}</p> </div> </div> </a>`)} </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/about-us/index.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/about-us/index.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
