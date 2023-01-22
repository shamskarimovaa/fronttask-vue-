<template>
  <div class="mainDiv">
    <p>{{ questions.title }}</p>

    <div v-for="answer in answers" :key="answer.id">
      <input
        name="answers"
        type="radio"
        v-model="selectedAnswer"
        :value="answer.id"
      />
      <span>{{ answer.title }} </span>
    </div>

    <button @click="postQuestions">Növbəti sual</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedAnswer: null,
    };
  },
  computed: {
    ...mapGetters({
      questions: "interview/questions",
      hasQuestions: "interview/hasQuestions",
    }),
    answers() {
      return this.questions.answers;
    },
  },
  created() {
    this.getQuestions();
  },
  methods: {
    async getQuestions() {
      await this.$store.dispatch("interview/getQuestions");
      if (this.hasQuestions) {
        this.$router.push("/results");
      }
    },
    async postQuestions() {
      await this.$store.dispatch("interview/postQuestions", {
        choice: this.selectedAnswer,
      });
      this.getQuestions();
    },
  },
};
</script>
<style></style>
