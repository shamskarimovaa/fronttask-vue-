import { createStore } from "vuex";
import interview from "./modules/interview";
import country from "./modules/countryandvisa";

const store = createStore({
  modules: {
    interview: interview,
    country: country,
  },
});

export default store;
