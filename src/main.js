import { createApp } from "vue";
import "./assets/scss/style.scss";

// importo il router
import { router } from "./router";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
