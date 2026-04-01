import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // ✅ API routes ko bilkul touch mat karo
  if (url.pathname.startsWith("/api")) {
    return next();
  }

  // static files skip
  if (url.pathname.includes(".")) {
    return next();
  }

  // trailing slash logic
  if (!url.pathname.endsWith("/")) {
    url.pathname += "/";
    return Response.redirect(url, 301);
  }

  return next();
});