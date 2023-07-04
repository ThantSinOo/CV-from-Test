import axios from "axios";

const registerModule = {
  namespaced: true,
  state() {
    return {
      employees: "",
      showModal: false,
      errorMessage: null,
    };
  },
  gettters: {},
  mutations: {
    getEmployees(state, data) {
      state.employees = data;
    },
    addnewEmployee(state, data) {
      state.employees.unshift(data);
    },
    // Response Data
    setresponseData(state, data) {
      state.showModal = data;
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
    async getEmployees(content) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get("employees");
        if (res) {
          content.commit("getEmployees", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
    // Add New DOE
    async storeEmployees(content, data) {
      try {
        content.commit("clearErrorMessage");
        let res = await axios.post("employees", data);
        if (res.data.stauscode == 200) {
          content.commit("addnewEmployee", res.data);
          content.commit("setresponseData", true);
          console.log(res.data.stauscode);
        }
      } catch (error) {
        // content.commit("setErrorMessage", error.response.data);
        console.log("error");
      }
      // console.log("does");
    },
  },
};

export default registerModule;
