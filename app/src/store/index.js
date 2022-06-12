import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";
import auth from "./auth";
import messages from "./messages";
import breadcrumb from "./breadcrumb";

const store = createStore({
    modules: {
      url: url,
      auth: auth,
      messages: messages,
      breadcrumb: breadcrumb,
      nav: nav,
    },
  });

export default store;
