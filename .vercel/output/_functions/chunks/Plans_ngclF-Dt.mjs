import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { C as maybeRenderHead, a3 as addAttribute, Q as renderTemplate, b8 as unescapeHTML } from './sequence_CT4mZjQy.mjs';
import 'clsx';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

const $$Homeslider = createComponent(async ($$result, $$props, $$slots) => {
  const homeslider = `query GetAllPlans {
homeSliders{
  nodes{
    content
    title
    homeSliderImage {
      fieldGroupName
      homeSliderImg {
        sliderImg {
          node {
            sourceUrl
                mediaDetails{
              width
              height
            }
          }
        }
      }
    }
  }
}
}`;
  const Slider = await fetchAPI(homeslider);
  return renderTemplate`${Slider.homeSliders.nodes.map((curent) => {
    return renderTemplate`${maybeRenderHead()}<div class="slider-js"><div class="swiper mySwiperthree"><div class="swiper-wrapper">${curent.homeSliderImage.homeSliderImg.map((curentval) => {
      return renderTemplate`<div class="swiper-slide"><div class="main-slider-img"><img${addAttribute(curentval.sliderImg.node.sourceUrl, "src")}${addAttribute(curent.title, "alt")}${addAttribute(curentval.sliderImg.node.mediaDetails.width, "width")}${addAttribute(curentval.sliderImg.node.mediaDetails.height, "height")}></div></div>`;
    })}</div></div><div class="top-section-data"><div style="background-color: transparent;">${unescapeHTML(curent.content)}</div></div>
top-section-data
</div>`;
  })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/components/Homeslider.astro", void 0);

const $$Plans = createComponent(async ($$result, $$props, $$slots) => {
  const plans = `query GetAllPlans {
  ourPlans {
    nodes {
      title
      slug
      excerpt
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
  const res = await fetchAPI(plans);
  const plansData = res.ourPlans.nodes || [];
  return renderTemplate`${maybeRenderHead()}<div class="plans-grid"> <div class="swiper mySwipercardsliders"> <div class="swiper-wrapper"> ${plansData.map((plan) => renderTemplate`<div class="swiper-slide"> <div class="plan-card"> <div class="plan-img"> <a${addAttribute(`/${plan.slug}`, "href")}> <img${addAttribute(plan.featuredImage?.node?.sourceUrl, "src")}${addAttribute(plan.title, "alt")}${addAttribute(plan.featuredImage?.node?.mediaDetails?.width, "width")}${addAttribute(plan.featuredImage?.node?.mediaDetails?.height, "height")}> </a> </div> <div class="plan-data" style="min-height: 350px;"> <div> <h3 class="fs-25"> <a${addAttribute(`/${plan.slug}`, "href")}>${plan.title}</a> </h3> <div>${unescapeHTML(plan.excerpt)}</div> </div> <div class="button-card"> <a${addAttribute(`/${plan.slug}`, "href")} class="c-btn">
Explore Plans
</a> </div> </div> </div> </div>`)} </div> <div class="custom-page"> <div class="swiper-pagination"></div> </div> </div> </div>`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/components/Plans.astro", void 0);

export { $$Plans as $, $$Homeslider as a };
