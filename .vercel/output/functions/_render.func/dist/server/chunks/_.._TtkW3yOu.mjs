import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_BUCA18RE.mjs';

async function getStaticPaths() {
  return [
    { params: { slug: "isaac-belbel" } },
    { params: { slug: "norman-rhodes-ii-2" } },
    { params: { slug: "margaret-belbel" } },
    { params: { slug: "alexias-johnson" } },
    { params: { slug: "catalina-casillas" } },
    { params: { slug: "ernestina-de-albino" } },
    { params: { slug: "alejandra-avalos" } },
    { params: { slug: "iris-perez" } }
  ];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const singleQuery = `query GetMember {
  member(id: "${slug}", idType: SLUG) {
    title
    excerpt
    slug
    memberInfo{
      profileImage {
        node {
          id
          sourceUrl
        }
      }
     contactInfo
    }
    
    content
    memberCategories {
      nodes {
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
}`;
  const data = await fetchAPI(singleQuery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="single-team-mamber"> <div class="container"> <div class="main-conent"> <div class="team-img"> <div class="img"> <img${addAttribute(data.member.memberInfo.profileImage.node.sourceUrl, "src")} alt="founder"> </div> <div class="contact-info-flow"> <div>${unescapeHTML(data.member.memberInfo.contactInfo)}</div> </div> </div> <div class="team-content"> <div>${unescapeHTML(data.member.content)}</div> <a${addAttribute(`${Astro2.url.origin}/management-team`, "href")}>Back to Management Team</a> </div> </div> </div> </div> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/about-us/[...slug].astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/about-us/[...slug].astro";
const $$url = "/about-us/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
