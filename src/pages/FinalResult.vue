<template>
  <div class="mainDiv">Nəticə: {{ results.visa_status }}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("interview/getResults");
  },
  computed: {
    ...mapGetters({
      results: "interview/results",
    }),
  },
};
</script>
<style></style>
