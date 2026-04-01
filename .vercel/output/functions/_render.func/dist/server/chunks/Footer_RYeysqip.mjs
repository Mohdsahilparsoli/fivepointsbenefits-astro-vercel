import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { a3 as addAttribute, F as Fragment, Q as renderTemplate, b8 as unescapeHTML, C as maybeRenderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { a as SITE_TITLE } from './consts_BUCA18RE.mjs';
import 'clsx';

const API_URL = "https://web.ogrelogicsolutions.com/fivepointsbenefits-astro/graphql";


async function fetchAPI(query) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query
    }),
  });

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Non-JSON response:", text);
    throw new Error("API did not return JSON. Check GraphQL endpoint.");
  }

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL errors occurred.");
  }

  return json.data;
}

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, fullHeaddata, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- ✅ BASIC META --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- ✅ TITLE --><title>${title}</title><!-- ✅ CANONICAL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- ✅ YOAST SEO HEAD (MAIN POWER) -->${fullHeaddata && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(fullHeaddata)}` })}`}<!-- ✅ FAVICON --><link rel="icon" href="/favicon.jpg"><!-- ✅ RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><!-- ✅ GOOGLE FONTS --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><!-- ✅ FONT AWESOME --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const GET_FULL_MENU = `
query GetFullMenu {
  menu(id: "mainmenu", idType: SLUG) {
    menuItems(first: 200) {
      nodes {
        id
        label
        uri
        parentId
      }
    }
  }
  siteLogo {
    sourceUrl
    altText
  }
}
`;
  const data = await fetchAPI(GET_FULL_MENU);
  const allMenuItems = data?.menu?.menuItems?.nodes || [];
  function buildMenuTree(items, parentId = null) {
    return items.filter((item) => item.parentId === parentId).map((item) => ({
      id: item.id,
      label: item.label,
      uri: item.uri,
      parentId: item.parentId,
      children: buildMenuTree(items, item.id)
    }));
  }
  const menuTree = buildMenuTree(allMenuItems);
  const siteLogo = data?.siteLogo || null;
  return renderTemplate`${maybeRenderHead()}<header class="custom-header"> <div class="sticky"> <div class="container"> <div class="right-value"> <ul> <li class="lang"> <select id="languageSelect"> <option value="">Choose Your Language</option> <!-- Global Languages --> <option value="en">English</option> <option value="es">Spanish</option> <option value="zh">Chinese</option> <option value="ko">Korean</option> <!-- Indian Languages --> <option value="hi">Hindi</option> <option value="mr">Marathi</option> <option value="ta">Tamil</option> <option value="te">Telugu</option> <option value="bn">Bengali</option> </select> </li> </ul> </div> <div class="right-value"> <ul> <li><a href="/portal" title="Member Login">Member Login</a></li> <li><a href="/portal" title="Provider Login">Provider Login</a></li> </ul> </div> </div> </div> <div class="bottom-header"> <div class="container"> <div class="grid-bottom"> <div class="mobile-grid"> <div class="main-logo"> <a href="/"><img${addAttribute(siteLogo.sourceUrl, "src")} alt="HarcoSemco" width="195" height="88"></a> </div> <div class="main-menu-data"> <div class="menu-icon"> <i class="fa-solid fa-bars"></i> </div> </div> </div> <div class="all-here"> <ul class="bottom-navlists zindex"> ${menuTree.map((item) => renderTemplate`<li${addAttribute(
    item.children.length > 0 ? "menu-item-has-children" : "",
    "class"
  )}> <a${addAttribute(item.uri, "href")}${addAttribute(item.label, "title")}> ${item.label} </a>  ${item.children.length > 0 && renderTemplate`<ul class="sub-menu"> ${item.children.map((child) => renderTemplate`<li${addAttribute(
    child.children.length > 0 ? "menu-item-has-children" : "",
    "class"
  )}> <a${addAttribute(child.uri, "href")}${addAttribute(child.label, "title")}> ${child.label} </a>  ${child.children.length > 0 && renderTemplate`<ul class="sub-menu"> ${child.children.map((grandChild) => renderTemplate`<li${addAttribute(
    grandChild.children.length > 0 ? "menu-item-has-children" : "",
    "class"
  )}> <a${addAttribute(grandChild.uri, "href")}${addAttribute(grandChild.label, "title")}> ${grandChild.label} </a>  ${grandChild.children.length > 0 && renderTemplate`<ul class="sub-menu"> ${grandChild.children.map(
    (greatGrandChild) => renderTemplate`<li> <a${addAttribute(greatGrandChild.uri, "href")}${addAttribute(greatGrandChild.label, "title")}> ${greatGrandChild.label} </a> </li>`
  )} </ul>`} </li>`)} </ul>`} </li>`)} </ul>`} </li>`)} </ul> </div> </div> </div> </div> </header> <div class="mt"></div>`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const GET_MENU = `
query GetFullMenu {
  menu(id: "mainmenu", idType: SLUG) {
    menuItems(first: 200) {
      nodes {
        id
        label
        uri
        parentId
      }
    }
  }
}
`;
  const data = await fetchAPI(GET_MENU);
  const items = data.menu.menuItems.nodes;
  const footer = await fetchAPI(`query GetAllWidgets {
  mainSidebar
}
`);
  const getChildren = (parentId) => items.filter((item) => item.parentId === parentId);
  const getItem = (name) => items.find((i) => i.label.toLowerCase() === name.toLowerCase());
  function renderMenu(parentId) {
    const children = getChildren(parentId);
    let html = "";
    children.forEach((item) => {
      html += `<li>
      <a href="${item.uri}">${item.label}</a>`;
      const sub = getChildren(item.id);
      if (sub.length > 0) {
        html += `<ul class="sub-menu">`;
        html += renderMenu(item.id);
        html += `</ul>`;
      }
      html += `</li>`;
    });
    return html;
  }
  const home = getItem("Home");
  const members = getItem("Members");
  const employers = getItem("Employers");
  const college = getItem("College Students");
  const family = getItem("Individuals & Families");
  const provider = getItem("Find a Provider");
  const pharmacy = getItem("Pharmacy and Rx");
  const tele = getItem("Telemedicine");
  return renderTemplate(_a || (_a = __template(["", '<footer class="custom-footer"> <div class="container"> <div class="menu-list-all"> <!-- ABOUT --> <div class="menu-list"> <h3>About Us</h3> <ul class="sub-menu">', '</ul> </div> <!-- MEMBERS --> <div class="menu-list"> <h3>Members</h3> <ul class="sub-menu">', '</ul> </div> <!-- EMPLOYERS --> <div class="menu-list"> <h3>Employers</h3> <ul class="sub-menu">', '</ul> </div> <!-- COLLEGE + FAMILY --> <div class="menu-list"> <h3>College Students</h3> <ul class="sub-menu">', '</ul> <h3>Individuals & Families</h3> <ul class="sub-menu">', '</ul> </div> <!-- PROVIDERS --> <div class="menu-list supoortline"> <h3>Find A Provider</h3> <ul class="sub-menu">', '</ul> <h3>Pharmacy And Rx</h3> <ul class="sub-menu">', '</ul> <h3>Telemedicine</h3> <ul class="sub-menu">', "</ul> </div> </div> </div> <div>", '</div> </footer> <div id="google_translate_element" style="display:none;"></div> <script>\n  function googleTranslateElementInit() {\n    new google.translate.TranslateElement(\n      {\n        pageLanguage: "en",\n        includedLanguages: "en,es,zh,ko,hi,mr,ta,te,bn",\n      },\n      "google_translate_element"\n    );\n  }\n<\/script> <script>\n   const langSelect = document.getElementById("languageSelect");\n\n  langSelect.addEventListener("change", function () {\n    const lang = this.value;\n\n    const googleDropdown = document.querySelector(".goog-te-combo");\n\n    if (googleDropdown) {\n      googleDropdown.value = lang;\n      googleDropdown.dispatchEvent(new Event("change"));\n    }\n  });\n  langSelect.addEventListener("change", function () {\n  localStorage.setItem("lang", this.value);\n});\n\nwindow.addEventListener("load", () => {\n  const savedLang = localStorage.getItem("lang");\n  if (savedLang) {\n    const googleDropdown = document.querySelector(".goog-te-combo");\n    if (googleDropdown) {\n      googleDropdown.value = savedLang;\n      googleDropdown.dispatchEvent(new Event("change"));\n    }\n  }\n});\n\n$(document).ready(function () {\n  // Menu toggle\n  $(".menu-icon").on("click", function () {\n      $(".all-here").slideToggle();\n  });\n\n  // Mobile menu\n  if ($(window).innerWidth() <= 1200) {\n\n      $(".sub-menu").hide();\n\n      $(".menu-item-has-children").on("click", function (e) {\n          e.stopPropagation();\n          $(this).children(".sub-menu").slideToggle();\n      });\n\n      // prevent default inside submenu\n      $(".sub-menu").on("click", function (e) {\n          e.preventDefault();\n          e.stopPropagation();\n      });\n  }\n});\n<\/script> <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"><\/script>'])), maybeRenderHead(), unescapeHTML(renderMenu(home?.id)), unescapeHTML(renderMenu(members?.id)), unescapeHTML(renderMenu(employers?.id)), unescapeHTML(renderMenu(college?.id)), unescapeHTML(renderMenu(family?.id)), unescapeHTML(renderMenu(provider?.id)), unescapeHTML(renderMenu(pharmacy?.id)), unescapeHTML(renderMenu(tele?.id)), unescapeHTML(footer.mainSidebar));
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Header as a, $$BaseHead as b, fetchAPI as f };
