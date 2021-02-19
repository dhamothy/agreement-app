import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`
  });
};
