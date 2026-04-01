import { a7 as defineMiddleware, ag as sequence } from './chunks/sequence_CT4mZjQy.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
