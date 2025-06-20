import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "./style.css";
import { createHead, useHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

router.afterEach((to) => {
  useHead({
    title: to.meta.title,
    meta: [
      {
        name: "description",
        content:
          "Bufin Del Norte - Consultores de Comercio Exterior  Soluciones integrales y personalizadas. Expertos en comercio exterior. Asesoría experta en comercio exterior. Bufin Del Norte, tu aliado estratégico."
      },
      {
        name: "keywords",
        content: "Bufin Del Norte, Comercio Exterior, Consultores"
      },
      { name: "robots", content: "index, follow" },
      { name: "copyright", content: "Bufin Del Norte" },
      { name: "language", content: "es" },
      { name: "theme-color", content: "#004080" },
      { name: "author", content: "Bufin Del Norte" },
      { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
      { name: "format-detection", content: "telephone=no" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bufin Del Norte - Consultores de Comercio Exterior"
      },
      {
        name: "twitter:description",
        content:
          "Expertos en comercio exterior. Soluciones integrales y personalizadas."
      },
      { name: "twitter:image", content: "/Bufin-del-Norte.ico" },

      // Open Graph
      {
        property: "og:title",
        content: "Bufin Del Norte - Consultores de Comercio Exterior"
      },
      {
        property: "og:description",
        content:
          "Asesoría experta en comercio exterior. Bufin Del Norte, tu aliado estratégico."
      },
      { property: "og:image", content: "/Bufin-del-Norte.ico" },
      { property: "og:url", content: "https://bufinorte.com" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" }
    ]
  });
});

app.use(router);
app.use(head);
app.mount("#app");
