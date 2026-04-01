const prerender = false;

// ✅ SAME GLOBAL STORE
globalThis.otpStore = globalThis.otpStore || new Map();

async function POST({ request }) {
  const { email, otp } = await request.json();

  const savedOtp = globalThis.otpStore.get(email);

  console.log("SAVED OTP:", savedOtp);
  console.log("ENTERED OTP:", otp);

  if (!savedOtp) {
    return new Response(JSON.stringify({ error: "OTP expired" }), { status: 400 });
  }

  if (savedOtp !== otp) {
    return new Response(JSON.stringify({ error: "Invalid OTP" }), { status: 400 });
  }

  globalThis.otpStore.delete(email);

  return new Response(JSON.stringify({ success: true, message: "OTP verified" }));
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
