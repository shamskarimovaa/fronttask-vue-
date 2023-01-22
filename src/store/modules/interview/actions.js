import axios from "axios";
export default {
  async startInterview(context) {
    const response = await axios.post(
      "https://visachance.pickvisa.com/api/v1/start",
      context.state.information
    );
    console.log(response);
    context.commit("setInterviewId", response.data.data.inid);
  },

  async getQuestions(context) {
    const response = await axios.get(
      "https://visachance.pickvisa.com/api/v1/question?inid=" +
        context.state.interviewId
    );
    console.log(response);
    if (response.data.data) {
      context.commit("setQuestions", response.data.data);
    } else if (response.data.message) {
      context.commit("hasQuestions", response.data.message)
    }
  },

  async getResults(context) {
    const response = await axios.get(
      "https://visachance.pickvisa.com/api/v1/results?inid=" +
        context.state.interviewId
    );
    console.log(response);
    context.commit("setResults", response.data.data);
  },

  async postQuestions(context,data) {
     await axios.post(
      "https://visachance.pickvisa.com/api/v1/question?inid=" +
        context.state.interviewId, data
    );
 },
};
