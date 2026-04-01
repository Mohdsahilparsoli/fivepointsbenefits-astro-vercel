import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$IndividualsFamiliesPlans = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `

query GetPage {
  page(id: "individuals-families", idType: URI) {
    title
    
    content
    slug
    uri
 seo {
      title
      fullHead
    }
    familyPlans {
      fivePointLetter
      familyPlan {
        title
        backgroundColor
        fieldGroupName
        sobPlan
 sbcPlan
      
      }

      sixtyFortyPlan {
        title
        backgroundColor
        sbcPlan
        sobPlan

      }

      eightyTwentyPlan {
        title
        backgroundColor
        sbcPlan
        sobPlan

    
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
  let plan = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": plan.page.seo.title, "fullHead": plan.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="employermain-sec section-padding"> <div class="container"> <div class="employer-holderss"> <div class="imageempoyergroups"> <img${addAttribute(plan.page.featuredImage.node.sourceUrl, "src")}${addAttribute(plan.page.title, "alt")}${addAttribute(plan.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(plan.page.featuredImage.node.mediaDetails.height, "height")}> </div> <h1 class="fs-40">${plan.page.title}</h1> </div> </div> </section> <section class="shoupourplans-sec section-padding"> <div class="container"> <div class="plans-holderss"> <div class="shopaboutgriops">${unescapeHTML(plan.page.content)}</div> <div class="plans-gridholders"> <div class="row palnsrows justify-content-center"> ${plan.page.familyPlans.familyPlan.map((plan2) => renderTemplate`<div class="col-md-6 col-lg-4"> <div class="holders-planssss"> <h4 class="fs-20">${plan2.title}</h4> <div class="image-holderssplanss"> <div class="allchild-holders"${addAttribute(`background: ${plan2.backgroundColor}`, "style")}> <div class="image-dtaaplans"> <img src="/assets/img/logoplans.png" width="350" height="160" loading="lazy"> </div> <div class="allplans-detailsss"> <p>
Individual and Family Plan <br> U.S. ONLY
</p> </div> </div> </div> <div class="button-plansss"> <div class="grid-butttonsplans"> <div class="universal-newbutton"> <a${addAttribute(plan2.sobPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SOB
</a> </div> <div class="universal-newbutton"> <a${addAttribute(plan2.sbcPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SBC
</a> </div> </div> </div> </div> </div>`)} </div> <div class="row palnsrows justify-content-center"> <div class="col-12"> <div class="textplans-mainsss"> <h4 class="fs-40">60/40 PLANS</h4> </div> </div> ${plan.page.familyPlans.eightyTwentyPlan.map((plan2) => renderTemplate`<div class="col-md-6 col-lg-4"> <div class="holders-planssss"> <h4 class="fs-20">${plan2.title}</h4> <div class="image-holderssplanss"> <div class="allchild-holders"${addAttribute(`background: ${plan2.backgroundColor}`, "style")}> <div class="image-dtaaplans"> <img src="/assets/img/logoplans.png" width="350" height="160" loading="lazy"> </div> <div class="allplans-detailsss"> <p>Individual and Family Plan</p> </div> </div> </div> <div class="button-plansss"> <div class="grid-butttonsplans"> <div class="universal-newbutton"> <a${addAttribute(plan2.sobPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SOB
</a> </div> <div class="universal-newbutton"> <a${addAttribute(plan2.sbcPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SBC
</a> </div> </div> </div> </div> </div>`)} </div> <div class="row palnsrows justify-content-center"> <div class="col-12"> <div class="textplans-mainsss"> <h4 class="fs-40">80/20 PLANS</h4> </div> </div> ${plan.page.familyPlans.eightyTwentyPlan.map((plan2) => renderTemplate`<div class="col-md-6 col-lg-4"> <div class="holders-planssss"> <h4 class="fs-20">${plan2.title}</h4> <div class="image-holderssplanss"> <div class="allchild-holders"${addAttribute(`background: ${plan2.backgroundColor}`, "style")}> <div class="image-dtaaplans"> <img src="/assets/img/logoplans.png" width="350" height="160" loading="lazy"> </div> <div class="allplans-detailsss"> <p>Individual and Family Plan</p> </div> </div> </div> <div class="button-plansss"> <div class="grid-butttonsplans"> <div class="universal-newbutton"> <a${addAttribute(plan2.sobPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SOB
</a> </div> <div class="universal-newbutton"> <a${addAttribute(plan2.sbcPlan, "href")} target="_blank" class="newbutton-universal">
COMPREHENSIVE Plan SBC
</a> </div> </div> </div> </div> </div>`)} </div> <div class="reconixe-holders">${unescapeHTML(plan.page.familyPlans.fivePointLetter)}</div> </div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/individuals-families-plans.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/individuals-families-plans.astro";
const $$url = "/individuals-families-plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndividualsFamiliesPlans,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
