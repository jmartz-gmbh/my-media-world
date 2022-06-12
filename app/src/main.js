import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";

import plausible from "./plugins/plausible";

const plausibleOptions = {
  domain: "www.my-media.world",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faBars,
  faUser,
  faTimes,
  faEdit,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faBars, faUser, faTimes,faEdit,faInfo);

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component("fa", FontAwesomeIcon);
app.use(routes);
app.use(store);
app.mount("#app");
