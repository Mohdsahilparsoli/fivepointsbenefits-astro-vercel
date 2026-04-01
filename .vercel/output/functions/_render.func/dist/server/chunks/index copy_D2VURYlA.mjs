import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, a3 as addAttribute, b9 as renderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { f as fetchAPI, $ as $$Footer, a as $$Header, b as $$BaseHead } from './Footer_RYeysqip.mjs';
import { $ as $$Plans, a as $$Homeslider } from './Plans_CEFksb-_.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_BUCA18RE.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$IndexCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetHomePage {
  page(id: "home", idType: URI) {
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
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">', "</head> <body> ", ' <main> <section class="hero-section"> <div class="three-slider"> ', ' </div> </section> <section class="health-plans" aria-labelledby="health-plans-heading"> <div class="container"> <div class="section-header"> <span class="section-tag">', '</span> <h2 class="fs-37">', "</h2> <p>", "</p> </div> ", ' </div> </section> <section class="request-apointment"> <div class="container"> <div class="bottom-data"> <div class="bottom-img"> <img', "", "", "", '> </div> <div class="bottom-content"> <span class="section-tag">', '</span> <div class="datagridsss"> ', " </div> </div> </div> </div> </section> </main> ", ' <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"><\/script> <script>\n        $(document).ready(function () {\n          // Menu toggle\n          $(".menu-icon").on("click", function () {\n            $(".all-here").slideToggle();\n          });\n\n          // Mobile menu\n          if ($(window).innerWidth() <= 1200) {\n            $(".sub-menu").hide();\n\n            $(".menu-item-has-children").on("click", function (e) {\n              e.stopPropagation();\n              $(this).children(".sub-menu").slideToggle();\n            });\n\n            // prevent default inside submenu\n            $(".sub-menu").on("click", function (e) {\n              e.preventDefault();\n              e.stopPropagation();\n            });\n          }\n        });\n      <\/script> <script>\n      new Swiper(".mySwipercardsliders", {\n        slidesPerView: 3,\n        spaceBetween: 30,\n        speed: 1000,\n        autoplay: {\n          delay: 5000,\n          disableOnInteraction: false,\n        },\n        pagination: {\n          el: ".swiper-pagination",\n          clickable: true,\n        },\n        breakpoints: {\n          0: { slidesPerView: 1, spaceBetween: 10 },\n          576: { slidesPerView: 2, spaceBetween: 20 },\n          992: { slidesPerView: 3, spaceBetween: 30 },\n        },\n      });\n\n   \n    <\/script> <script>\ndocument.addEventListener("DOMContentLoaded", function () {\n\n  // sab slider containers select karo\n  const sliderContainers = document.querySelectorAll(".slider-js");\n\n  sliderContainers.forEach((container) => {\n\n    // swiper element select\n    const swiperEl = container.querySelector(".mySwiperthree");\n\n    // swiper initialize\n    const swiper = new Swiper(swiperEl, {\n      speed: 1500,\n      loop: true,\n      autoplay: {\n        delay: 1000,\n        disableOnInteraction: false,\n      },\n    });\n\n    // initially autoplay stop\n    swiper.autoplay.stop();\n\n    // mouse enter = autoplay start\n    container.addEventListener("mouseenter", () => {\n      swiper.autoplay.start();\n    });\n\n    // mouse leave = autoplay stop\n    container.addEventListener("mouseleave", () => {\n      swiper.autoplay.stop();\n    });\n\n  });\n\n});\n\n\n<\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Homeslider", $$Homeslider, {}), Homepageres.page.homePage.mainTitle, Homepageres.page.homePage.subTitle, Homepageres.page.homePage.short, renderComponent($$result, "Plans", $$Plans, {}), addAttribute(Homepageres.page.homePage.provideImage.node.sourceUrl, "src"), addAttribute(Homepageres.page.homePage.mainTitleProvider, "alt"), addAttribute(Homepageres.page.homePage.provideImage.node.mediaDetails.width, "width"), addAttribute(Homepageres.page.homePage.provideImage.node.mediaDetails.height, "height"), Homepageres.page.homePage.mainTitleProvider, Homepageres.page.homePage.providerFields.map((current) => renderTemplate`<div class="main-dataa"> <h3 class="fs-30">${current.title}</h3> <p>${current.provideContent}</p> <a${addAttribute(current.link, "href")} class="c-btn"> <span>${current.cta}</span> </a> </div>`), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/index copy.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/index copy.astro";
const $$url = "/index copy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexCopy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
