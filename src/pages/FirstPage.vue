<template>
  <div class="mainDiv">
    <div>
      <label for="country">Səyahət ölkəsi</label>
      <select
        class="inputs"
        name="country"
        id="country"
        v-model="interviewModel.country_to"
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
      <label for="visaType">Viza növü</label>
      <select
        class="inputs"
        name="visaType"
        id="visaType"
        v-model="interviewModel.visa_type"
      >
        <option
          class="inputs"
          v-for="option in visaTypes"
          :key="option.id"
          :value="option.id"
        >
          {{ option.title }}
        </option>
      </select>
    </div>
    <div>
      <button @click="$router.push('/secondpage')">Növbəti</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("country/getCountries");
    this.$store.dispatch("country/getVisaTypes");
  },
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
};
</script>
<style></style>
