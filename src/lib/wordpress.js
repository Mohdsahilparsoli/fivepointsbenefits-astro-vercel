const API_URL = "https://web.ogrelogicsolutions.com/fivepointsbenefits-astro/graphql";


export async function fetchAPI(query) {


    const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    },
    cache: "no-store",
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
