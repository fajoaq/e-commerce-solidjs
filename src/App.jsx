import { createResource, For } from "solid-js";
import { createClient } from "contentful";

import styles from "./App.module.css";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

const [productData] = createResource(async () => {
  let data = [];
  try {
    data = await client.getEntries({
      content_type: "product",
    });
  } catch (error) {
    console.log("Unable to get data", error);
  }
  return data.items;
});

function App() {
  return (
    <div class={styles.App}>
      <ul>
        <For each={productData()}>{(item) => <li>{item.fields.title}</li>}</For>
      </ul>
    </div>
  );
}

export default App;
