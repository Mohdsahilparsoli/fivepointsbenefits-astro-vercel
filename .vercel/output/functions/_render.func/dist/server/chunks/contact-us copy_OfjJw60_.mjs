import { c as createComponent } from './astro-component_CfmhlCAz.mjs';
import 'piccolore';
import { Q as renderTemplate, C as maybeRenderHead } from './sequence_CT4mZjQy.mjs';
import { r as renderComponent } from './entrypoint_B6iWqBc_.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BgKiJFJB.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_BUCA18RE.mjs';
import { f as fetchAPI } from './Footer_RYeysqip.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactUsCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Homequery = `
query GetPage {
  page(id: "mission-statement", idType: URI) {
    title
    content
    slug
    uri
  }
}
`;
  await fetchAPI(Homequery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="contact-section"> <div class="container"> <div class="contain-info"> <h1 class="fs-50">Your Questions Are Important To Us</h1> <p class="subtitle">
Questions about your health plan? Need help understanding a document?
          We're here to help.
</p> <div class="contact-form"> <h2 class="fs-30">Contact us</h2> <p class="note">
To contact us, fill in all fields unless marked optional.
</p> <form id="contactForm"> <!-- ✅ CF7 Hidden Fields (IMPORTANT FIX) --> <input type="hidden" name="_wpcf7" value="572"> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f572-o1"> <input type="hidden" name="_wpcf7_version" value="5.8"> <label>First name</label> <input type="text" name="first-name" required value="sdasas"> <label>Last name</label> <input type="text" name="last-name" required value="sxss"> <label>Member ID</label> <input type="text" name="member-id" value="sdasdas"> <label>Date of birth</label> <input type="date" name="dob" value="2000-01-01"> <label>Phone number</label> <input type="tel" name="phone" placeholder="Enter 10 digit phone number" required value="9818186876"> <label>Email address</label> <input type="email" name="email" placeholder="example@sample.com" required value="mohdsahilparsoli@gmail.com"> <p class="checkbox-title">
What is your question or comment about?
</p> <div class="checkbox-group"> <label><input type="checkbox" name="subject[]" value="ID card"> ID card</label> <label><input type="checkbox" name="subject[]" value="Enrollment"> Enrollment</label> <label><input type="checkbox" name="subject[]" value="Referral requirements"> Referral requirements</label> <label><input type="checkbox" name="subject[]" value="Prescription"> Prescription drug info</label> <label><input type="checkbox" name="subject[]" value="Coverage"> Coverage and benefits</label> <label><input type="checkbox" name="subject[]" value="Claims"> Filing claims</label> <label><input type="checkbox" name="subject[]" value="Other"> Other</label> </div> <label>Tell us how we can help you (optional)</label> <textarea name="message" rows="4">hello sahil</textarea> <button type="submit">Send</button> <p id="formMessage" style="margin-top:10px;"></p> </form> </div> </div> </div> </section>  <script>
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // ✅ DEBUG (optional)
    for (let [key, value] of formData.entries()) {
      console.log(key, ":", value);
    }

    try {
      const res = await fetch(
        "https://web.ogrelogicsolutions.com/fivepointsbenefits-astro/wp-json/contact-form-7/v1/contact-forms/572/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Response:", data);

      if (data.status === "mail_sent") {
        msg.innerText = "✅ Message sent successfully!";
        form.reset();
      } else {
        msg.innerText = "❌ Failed to send message.";
      }
    } catch (error) {
      console.error(error);
      msg.innerText = "⚠️ Something went wrong!";
    }
  });
<\/script> `])), maybeRenderHead()) })}`;
}, "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/contact-us copy.astro", void 0);

const $$file = "D:/Ogrelogic/2026/March/fivepointsbenefits-astro-vercel/src/pages/contact-us copy.astro";
const $$url = "/contact-us copy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUsCopy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
