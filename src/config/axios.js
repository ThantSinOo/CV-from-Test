import axios from "axios";
import store from "@/store"; // Import the Vuex store instance

let usertoken = store.state.auth.token;
axios.defaults.baseURL = "https://kookpyit.com/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${usertoken}`;

// Now you can use axios for making API requests
