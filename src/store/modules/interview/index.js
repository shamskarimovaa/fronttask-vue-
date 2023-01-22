import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      information: {
        country_from: null,
        country_to: null,
        resident_of: null,
        visa_type: null,
        source: "visachance.com",
        name: null,
      },
      interviewId: null,
      questions: {},
      hasQuestions: null,
      results: {},
    };
  },
  getters,
  mutations,
  actions,
};
