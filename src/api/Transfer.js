import Api from "@/api/Api";

export default {
  fetchAll() {
    return Api().get(`/transfer`);
  },
  fetch(id) {
    return Api().get(`/transfer/${id}`);
  },
  put(id) {
    return Api().put(`/transfer/${id}`);
  },
};
