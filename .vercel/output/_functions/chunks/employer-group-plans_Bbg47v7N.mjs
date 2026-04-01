import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$EmployerGroupPlans = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `
query GetPage {
  page(id: "employer-group", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
    employerPlan {
      employerPlan {
        backgroundColor
        sbcPlan
        sobPlan
        subTitle
        title
      }
      fivePointLetter
      employerGalarry {
        gallaryProfile {
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
  }
}
`;
  let plan = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": plan.page.seo.title, "fullHead": plan.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="employermain-sec section-padding shoupourplans-sec"> <!-- GALLERY --> <div class="imageempoyergroups"> ${plan?.page?.employerPlan?.employerGalarry?.map((item, index) => {
    const img = item?.gallaryProfile?.node;
    return renderTemplate`<img${addAttribute(index, "key")}${addAttribute(img?.sourceUrl, "src")}${addAttribute(`gallery-${index}`, "alt")}>`;
  })} </div> <div class="container"> <!-- PAGE CONTENT --> <div>${unescapeHTML(plan.page.content)}</div> <!-- PLANS --> <div class="plans-gridholders"> <div class="row palnsrows justify-content-center"> ${plan?.page?.employerPlan?.employerPlan?.map((item) => renderTemplate`<div class="col-md-6 col-lg-4"> <div class="holders-planssss"> <h4 class="fs-20">COMPLETE CARE PLAN</h4> <div class="image-holderssplanss"> <div class="allchild-holders"${addAttribute({ background: item.backgroundColor }, "style")}> <div class="image-dtaaplans"> <img src="/assets/img/logoplans.png"${addAttribute(item.title, "alt")} loading="lazy"> </div> <div class="allplans-detailsss"> <h5 class="plansnamee">${item.title}</h5> <p>${item.subTitle}</p> </div> </div> </div> <!-- BUTTONS --> <div class="button-plansss"> <div class="grid-butttonsplans"> <div class="universal-newbutton"> <a${addAttribute(item.sobPlan, "href")} target="_blank" class="newbutton-universal"${addAttribute(`${item.title} SOB`, "title")}>
COMPLETE CARE Plan SOB
</a> </div> <div class="universal-newbutton"> <a${addAttribute(item.sbcPlan, "href")} target="_blank" class="newbutton-universal"${addAttribute(`${item.title} SBC`, "title")}>
COMPLETE CARE Plan SBC
</a> </div> </div> </div> </div> </div>`)} </div> <!-- EXTRA CONTENT --> <div>${unescapeHTML(plan?.page?.employerPlan?.fivePointLetter)}</div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/employer-group-plans.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/employer-group-plans.astro";
const $$url = "/employer-group-plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmployerGroupPlans,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
