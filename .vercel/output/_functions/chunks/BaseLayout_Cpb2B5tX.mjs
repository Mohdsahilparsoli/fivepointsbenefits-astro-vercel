import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, bc as renderSlot, b9 as renderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './Footer_iMmTwaqW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, fullHead } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">', "</head> <body> ", " <main> ", " </main> ", ' <!-- Global Scripts --> <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"><\/script> <script>\n      $(document).ready(function () {\n        $(".menu-icon").on("click", function () {\n          $(".all-here").slideToggle();\n        });\n\n        if ($(window).innerWidth() <= 1200) {\n          $(".sub-menu").hide();\n\n          $(".menu-item-has-children").on("click", function (e) {\n            e.stopPropagation();\n            $(this).children(".sub-menu").slideToggle();\n          });\n\n          $(".sub-menu").on("click", function (e) {\n            e.preventDefault();\n            e.stopPropagation();\n          });\n        }\n      });\n    <\/script> ', " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "fullHeaddata": fullHead }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderSlot($$result, $$slots["scripts"]));
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
