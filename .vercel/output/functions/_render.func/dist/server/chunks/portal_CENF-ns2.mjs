import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

const $$Portal = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `query GetPage {
  page(id: "portal", idType: URI) {
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
  let portal = await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": portal.page.seo.title, "fullHead": portal.page.seo.fullHead }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="portal-login" style="background-image: url(assets/img/aigen.png)"> <div class="container"> <div class="login-form"> <div class="main-logo"> <img src="assets/img/logo.png" alt=""> </div> <div class="top-login-content"> <h1>Sign In</h1> <p>Sign In to Access Your Account</p> <span>Choose Account Type</span> <div class="login-type"> <label for="Member"> <div class="types"> <img src="assets/img/memmber.PNG" alt=""> <span>Member</span> <input type="radio" name="type" id="Member" style="opacity: 0"> </div></label> <label for="Provider"><div class="types"> <img src="assets/img/provider.PNG" alt=""> <span>Provider</span> <input type="radio" name="type" id="Provider" style="opacity: 0"> </div></label> </div> <div class="bottom-links"> <p>Staff Sign In? <a href="#">Click Here</a></p> </div> <form action="#"> <div class="login-from"> <div class="input-f"> <label for="">Username</label> <input type="text" placeholder="Enter your Username"> </div> <div class="input-f"> <label for="">Password</label> <input type="password" placeholder="Enter your password"> </div> <a href="#" class="forgat">Forgot Your Password?</a> <div class="savebtn"> <input type="submit" value="sign in"> </div> <div class="bottom-tiles"> <p>Fist Time User? <a href="#">Setup Your Account.</a></p> </div> </div> </form> </div> </div> </div> </section> <section class="login-section"> <div class="top-titles"> <span>Five Points Benefit Plans Portal</span> </div> <div class="container"> <div class="login-from"> <div class="login-flow"> <div class="content"> <h3>Setup Your Account</h3> <p>
Enter Your Email Address to Begin Setup.
<br>
A Verification Code will be Sent to Your Email. <br>
Please Check Your Inbox or Spam Folder.
</p> </div> <form action=""> <div class="input-f"> <label for="">Email</label> <input type="email" placeholder="Enter your email"> </div> <div class="save"> <input type="submit" value="Send Verification Code"> </div> </form> </div> <div class="login-flow"> <div class="content"> <h3>Forgot Password</h3> <p>Enter Your Registered Email Address to Reset Your Password.</p> </div> <form action=""> <div class="input-f"> <label for="">Email</label> <input type="email" placeholder="Enter your email"> </div> <div class="save"> <input type="submit" value="Send OTP"> </div> </form> </div> </div> <div class="otheritles"> <h2>Log in to Manage Your Health Plan</h2> <p>
Creating a member account gives you access to your plan information
          and resources.
</p> </div> <div class="main-grild-portal"> <div class="grid-data"> <span>Track Claims</span> <img src="assets/img/g1.png" alt=""> </div> <div class="grid-data"> <span>Get Your Digital ID Cards</span> <img src="assets/img/g2.webp" alt=""> </div> <div class="grid-data"> <span>Check Your Benefits & Coverage</span> <img src="assets/img/g3.png" alt=""> </div> <div class="grid-data"> <span>Find Providers In Your Network</span> <img src="assets/img/g4.png" alt=""> </div> <div class="grid-data"> <span>Pay Your Premium (if applicable)</span> <img src="assets/img/g5.png" alt=""> </div> </div> <div class="m-img"> <img src="assets/img/m-img.png" alt=""> </div> <div class="main-img-flow"> <div class="account-secuirty"> <h3 class="fs-35">Account Security</h3> <p>
Your privacy is important and we follow state and federal
            regulations
</p> <ul> <li>
Each member account requires a unique email address to protect
              personal health information
</li> <li>
Policy holders have access to family totals, their claims and
              those of minors under 12
</li> <li>
Children 12 and older and spouses are required to have their own
              online account to see claim detail
</li> </ul> <div class="login"> <a href="#" class="c-btn">Log in</a> </div> </div> </div> </div> </section> ` })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/portal.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/portal.astro";
const $$url = "/portal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
