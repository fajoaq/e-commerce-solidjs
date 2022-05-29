import { createClient } from "contentful";

function getClient() {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
    host: "preview.contentful.com",
  });

  return client;
}

export { getClient };
