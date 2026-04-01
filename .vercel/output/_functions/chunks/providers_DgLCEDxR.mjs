import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, F as Fragment, C as maybeRenderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_nPpmAH3L.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Cpb2B5tX.mjs';
import { f as fetchAPI } from './Footer_iMmTwaqW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Providers = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "providers", idType: URI) {
    title
    content
    slug
    uri
    seo {
      title
      fullHead
    }
  }
}`;
  let providers = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": providers.page.seo.title, "fullHead": providers.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="member-sec provider pt"> <div class="container"> <div class="nav-bar-top"> <ul> <li> <a href="#" style="background-color: #005587"><i class="fa-solid fa-house"></i></a> </li> <li> <a href="#" title="Network Participation">Network Participation </a> </li> <li> <a href="#" title="Claims and Eligibility">Claims and Eligibility</a> </li> </ul> </div> <div class="row gy-4 align-items-center"> <div class="col-lg-7"> <div class="allabout-memberss"> <h1 class="fs-60">Welcome Providers</h1> <p>
We're hers to support you in caring for your patients, our
              members.
</p> </div> </div> <div class="col-lg-5"> <div class="image-members"> <img src="assets/img/providerimg.png" alt="" width="615" height="348"> </div> </div> </div> </div> </section> <section class="memberportal-secc"> <div class="container"> <div class="holderebg-here"> <div class="center-data"> <h2 class="fs-40 text-blue">Your Member Portal</h2> </div> </div> </div> <div class="imgaebg"> <div class="container"> <div class="main-imageheree"> <img src="assets/img/wwww.jpeg" alt="" width="599" height="498" loading="lazy"> </div> </div> </div> <div class="container"> <div class="bootm-childdata"> <div class="grid-btnssss"> <div class="databutton"> <a href="portal.html" class="c-btn"><span>Login To Your Provider Portal</span></a> </div> <div class="databutton"> <a href="portal.html" class="c-btn"><span> First Time Login / Reset Password</span></a> </div> </div> <p>
If you are a new user, please click on the
<strong>"First Time Login/Reset Password"</strong> button and the Five |
          Points Benefit Plans care team will send you an automated email with your
          account activation and | login information.
</p> <p>
If you are a returning user, please click on the
<strong>"Login"</strong> button.
</p> </div> </div> </section> <section class="provider-login"> <div class="container"> <div class="main-titles-provider"> <h2 class="fs-30">Secure Provider Portal Login</h2> <p>
Five Points Benefit Plans is committed to providing our participating
          providers with the best tools possible to support their administrative
          needs. We encourage our participating providers to take advantage of
          our easy-to-use secure provider portal for fast resolution of routine
          needs.
</p> <p>
Our secure provider portal allows you to verify member eligibility,
          view member benefit information, claims, and Explanation of Benefits
          (EOBs) quickly and easily online.
</p> <p>The provider portal can be used to:</p> <ul> <li>Verify member eligibility</li> <li>View claims and claim status</li> <li>View detailed patient lists</li> <li>Update provider demographic information</li> </ul> <p>
For more information please review the
<a href="#" title="Secure Provider Portal Booklet (PDF)*">Secure Provider Portal Booklet (PDF)*</a> </p> <div class="center-titles"> <span class="fs-20">Portal User Registration</span> <h3 class="fs-40">Account Lookup</h3> <p>
We need to look up your information before you begin. Enter your Tax
            ID number, and the registration code send to the primary contact on
            your account, then click Next to continue.
</p> <div class="form"> <form action=""> <div class="inputfeilds"> <div class="input"> <label for="">Tax ID Number</label> <input type="text"> </div> <div class="input"> <label for="">Registration Code</label> <input type="text"> </div> </div> <div class="save-btn"> <button type="submit">NEXT</button> </div> </form> </div> </div> </div> </div> </section> <section class="participation-participation"> <div class="container"> <div class="main-titles-participation"> <h2 class="fs-40">Network Participation</h2> <div class="main-tabs-flow"> <div class="list"> <ul> <li class="active" data-tab="tab1">
Join Our Nationwide Network
</li> <li data-tab="tab2">Provider Directory</li> </ul> </div> <div class="main-tabs"> <div class="tab active" id="tab1"> <h3>Join Our Nationwide Network</h3> <p>
When you become part of the Aetna/First Health Network, you'll
                be a partner in our commitment to delivering access to quality,
                cost-effective care for our members.
</p> <a href="#" class="c-btn">How to apply</a> </div> <div class="tab" id="tab2"> <h3>Join Our Nationwide Network 2</h3> <p>
When you become part of the Aetna/First Health Network, you'll
                be a partner in our commitment to delivering access to quality,
                cost-effective care for our members.
</p> <a href="#" class="c-btn">How to apply</a> </div> </div> </div> </div> </div> </section> <section class="enroll"> <div class="container"> <div class="enroll-flex"> <div class="enroll-img"> <img src="assets/img/doctor.png" alt=""> </div> <div class="enroll-content"> <span>Once You Are Enrolled</span> <h2 class="fs-60">Claims, Eligibility, and Pre- Authorizations</h2> <p>
Login to our provider portal to help you view patient eligibility
            and coverag: and manage claims.
</p> <a href="#" class="c-btn">Claims and Eligibility</a> </div> </div> </div> </section>   `, "scripts": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "scripts" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([" <script>\n     $(document).ready(function(){\n\n  $('.main-tabs-flow .list li').click(function(){\n\n    // remove active from all li\n    $('.main-tabs-flow .list li').removeClass('active');\n\n    // add active to clicked li\n    $(this).addClass('active');\n\n    // get data-tab value\n    var tabID = $(this).attr('data-tab');\n\n    // remove active from all tabs\n    $('.main-tabs-flow .main-tabs .tab').removeClass('active');\n\n    // add active to matching tab\n    $('#' + tabID).addClass('active');\n\n  });\n\n});\n    <\/script> "]))) })}` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/providers.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/providers.astro";
const $$url = "/providers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Providers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
