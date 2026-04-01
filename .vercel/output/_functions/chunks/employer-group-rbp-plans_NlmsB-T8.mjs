import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead, a3 as addAttribute, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';

const $$EmployerGroupRbpPlans = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "employer-group-rbp", idType: URI) {
    title
    content
    slug
    uri
     seo {
      title
      fullHead
    }
    employerGroupRbp {
      employerRbpPlan {
        backgroundColor
        enrollmentApplication
        groupRegistrationForm
        platinumRbpPlanSob
        title
      }
      fivePointLetter
      rbpPricing
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
}`;
  let employergrouprbp = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": employergrouprbp.page.seo.title, "fullHead": employergrouprbp.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="employermain-sec section-padding"> <div class="container"> <div class="employer-holderss"> <div class="imageempoyergroups w-100"> <span>REFERENCE-BASED PRICING</span> <img${addAttribute(employergrouprbp.page.featuredImage.node.sourceUrl, "src")}${addAttribute(employergrouprbp.page.title, "alt")}${addAttribute(employergrouprbp.page.featuredImage.node.mediaDetails.width, "width")}${addAttribute(employergrouprbp.page.featuredImage.node.mediaDetails.height, "height")}> </div> <div class="allaboutgroups w-100">${unescapeHTML(employergrouprbp.page.content)}</div> </div> </div> </section> <section class="shoupourplans-sec section-padding pt-0"> <div class="container"> <div class="plans-holderss"> <div>${unescapeHTML(employergrouprbp.page.employerGroupRbp.rbpPricing)}</div> <div class="plans-gridholders"> <div class="row palnsrows justify-content-center"> <div class="col-12"> <div class="textplans-mainsss"> <h4 class="fs-40 italic">Our RBP Plan</h4> </div> </div> ${employergrouprbp.page.employerGroupRbp.employerRbpPlan.map((item) => {
    return renderTemplate`<div class="col-md-6  col-lg-4"> <div class="holders-planssss"> <h4 class="fs-20 " style="color: #FF7701;">EMPLOYER GROUP</h4> <h4 class="fs-20 pb-2">REFERENCE-BASED  PRICING</h4> <span></span> <div class="image-holderssplanss"> <div class="allchild-holders"${addAttribute(`background: ${item.backgroundColor};`, "style")}> <div class="image-dtaaplans"> <img src="assets/img/logoplans.png" width="350" height="160" loading="lazy"> </div> <div class="allplans-detailsss"> <p>${item.title}</p> </div> </div> </div> <div class="button-plansss plan"> <div class="grid-butttonsplans"> <div class="universal-newbutton"> <a${addAttribute(`${item.platinumRbpPlanSob}`, "href")} target="_blank" class="newbutton-universal" title="PLATINUM RBP Plan SOB">PLATINUM
                                              RBP Plan SOB</a> </div> <div class="universal-newbutton"> <a${addAttribute(`${item.groupRegistrationForm}`, "href")} target="_blank" class="newbutton-universal" title="GROUP REGISTRATION FORM">GROUP REGISTRATION FORM</a> </div> <div class="universal-newbutton"> <a${addAttribute(`${item.enrollmentApplication}`, "href")} target="_blank" class="newbutton-universal" title="ENROLLMENT APPLICATION">ENROLLMENT APPLICATION</a> </div> </div> </div> </div> </div>`;
  })} </div> <div class="reconixe-holders">${unescapeHTML(employergrouprbp.page.employerGroupRbp.fivePointLetter)}</div> </div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/employer-group-rbp-plans.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/employer-group-rbp-plans.astro";
const $$url = "/employer-group-rbp-plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmployerGroupRbpPlans,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
