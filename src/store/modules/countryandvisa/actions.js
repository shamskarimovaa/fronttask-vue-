import axios from 'axios'
export default {
  async getCountries(context) {
    const response = await axios.get(
      "https://visachance.pickvisa.com/api/v1/countries"
    );
    console.log(response);
    context.commit("setCountries", response.data.data);
  },
  async getVisaTypes(context) {
    const response = await axios.get(
      "https://visachance.pickvisa.com/api/v1/visatypes"
    );
    console.log(response);
    context.commit("setVisaTypes", response.data);
  },
};
