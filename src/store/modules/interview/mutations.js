export default {
    setInterviewId(state,payload){
        state.interviewId = payload
    },
    setQuestions(state,payload){
        state.questions = payload
    },
    hasQuestions(state, payload){
        state.hasQuestions = payload
    },
    setResults(state,payload){
        state.results = payload
    }
}