import { createRouter, createWebHistory } from "vue-router";

import FirstPage from "./pages/FirstPage.vue";
import SecondPage from "./pages/SecondPage.vue";
import QuestionsAnswers from "./pages/QuestionsAnswers.vue";
import FinalResult from "./pages/FinalResult.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/firstpage" },

    { path: "/firstpage", component: FirstPage },

    { path: "/secondpage", component: SecondPage },

    { path: "/questions", component: QuestionsAnswers },

    { path: "/results", component: FinalResult },
  ],
});

export default router;
