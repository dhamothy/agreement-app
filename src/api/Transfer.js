import Api from "@/api/Api";

export default {
  fetch() {
    return Api().get(`/`);
  }
};
