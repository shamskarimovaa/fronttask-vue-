<template>
  <div class="mainDiv">
    <div>
      <label for="name">Ad</label>
      <input
        class="inputs"
        type="text"
        name="name"
        id="name"
        v-model="interviewModel.name"
      />
    </div>
    <div>
      <label for="country">Vətandaşı olduğu ölkə</label>
      <select
        class="inputs"
        name="country"
        id="country"
        v-model="interviewModel.country_from"
      >
        <option
          class="inputs"
          v-for="option in countries"
          :value="option.short_code"
          :key="option.short_code"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="currentCountry">Yaşayış ölkəsi</label>

      <select
        name="country"
        class="inputs"
        id="country"
        v-model="interviewModel.resident_of"
      >
        <option
          class="inputs"
          v-for="option in countries"
          :value="option.short_code"
          :key="option.short_code"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
    <div>
      <button @click="startInterview()">Start Interview</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedCountry: null,
      selectedCurrentCountry: null,
      name: null,
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      countriesModel: "country/countries",
      interviewModel: "interview/information",
      visaTypesModel: "country/visaTypes",
    }),
    countries() {
      return this.countriesModel;
    },
    visaTypes() {
      return this.visaTypesModel;
    },
  },
  methods: {
    async startInterview() {
      await this.$store.dispatch("interview/startInterview");
      this.$router.push("/questions");
    },
  },
};
</script>
<style></style>
