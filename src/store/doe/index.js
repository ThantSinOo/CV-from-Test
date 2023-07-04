import axios from "axios";

const doeModule = {
  namespaced: true,
  state() {
    return {
      errorMessage: null,
      does: "",
      doe: "",
    };
  },
  getters: {
    does(state) {
      return state.does;
    },
    doe(state) {
      return state.doe;
    },
  },
  mutations: {
    // Get All DOE Mutation
    getDoes(state, data) {
      state.does = data;
    },
    // Add New DOE Mutation
    addnewDoe(state, data) {
      state.does.unshift(data);
    },

    // Error
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  actions: {
    // get All DOE Data
    async getDoes(content) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get("does");
        if (res) {
          content.commit("getDoes", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
    // Add New DOE
    async storeDoes(content, data) {
      try {
        content.commit("clearErrorMessage");
        let res = await axios.post("does", data);
        if (res) {
          content.commit("addnewDoe", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
  },
};

export default doeModule;
