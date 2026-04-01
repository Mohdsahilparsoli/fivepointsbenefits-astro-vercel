import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, F as Fragment, C as maybeRenderHead, a3 as addAttribute } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { a as $$Homeslider, $ as $$Plans } from './Plans_ngclF-Dt.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetHomePage {
  page(id: "home", idType: URI) {
   seo {
      title
      fullHead
    }
    homePage {
      mainTitle
      subTitle
      
      short
      provideImage{
        node{
          sourceUrl
          mediaDetails{
            width
            height
          }
        }
      }
      mainTitleProvider
      providerFields{
        link
        provideContent
        title
        cta
      }
    }
  }
}`;
  let Homepageres = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": Homepageres.page.seo.title, "fullHead": Homepageres.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-section"> <div class="three-slider"> ${renderComponent($$result2, "Homeslider", $$Homeslider, {})} </div> </section>  <section class="health-plans"> <div class="container"> <div class="section-header"> <span class="section-tag"> ${Homepageres.page.homePage.mainTitle} </span> <h2 class="fs-37"> ${Homepageres.page.homePage.subTitle} </h2> <p>${Homepageres.page.homePage.short}</p> </div> ${renderComponent($$result2, "Plans", $$Plans, {})} </div> </section>  <section class="request-apointment"> <div class="container"> <div class="bottom-data"> <div class="bottom-img"> <img${addAttribute(Homepageres.page.homePage.provideImage.node.sourceUrl, "src")}${addAttribute(Homepageres.page.homePage.mainTitleProvider, "alt")}> </div> <div class="bottom-content"> <span class="section-tag"> ${Homepageres.page.homePage.mainTitleProvider} </span> <div class="datagridsss"> ${Homepageres.page.homePage.providerFields.map((item) => renderTemplate`<div class="main-dataa"> <h3 class="fs-30">${item.title}</h3> <p>${item.provideContent}</p> <a${addAttribute(item.link, "href")} class="c-btn"> <span>${item.cta}</span> </a> </div>`)} </div> </div> </div> </div> </section>   `, "scripts": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "scripts" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script>\n      new Swiper(".mySwipercardsliders", {\n        slidesPerView: 3,\n        spaceBetween: 30,\n        speed: 1000,\n        autoplay: {\n          delay: 5000,\n          disableOnInteraction: false,\n        },\n        pagination: {\n          el: ".swiper-pagination",\n          clickable: true,\n        },\n        breakpoints: {\n          0: { slidesPerView: 1 },\n          576: { slidesPerView: 2 },\n          992: { slidesPerView: 3 },\n        },\n      });\n    <\/script> <script>\n      document.addEventListener("DOMContentLoaded", function () {\n        const sliders = document.querySelectorAll(".slider-js");\n\n        sliders.forEach((container) => {\n          const swiperEl = container.querySelector(".mySwiperthree");\n\n          const swiper = new Swiper(swiperEl, {\n            speed: 1500,\n            loop: true,\n            autoplay: {\n              delay: 1000,\n              disableOnInteraction: false,\n            },\n          });\n\n          swiper.autoplay.stop();\n\n          container.addEventListener("mouseenter", () => {\n            swiper.autoplay.start();\n          });\n\n          container.addEventListener("mouseleave", () => {\n            swiper.autoplay.stop();\n          });\n        });\n      });\n    <\/script> ']))) })}` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/index.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
