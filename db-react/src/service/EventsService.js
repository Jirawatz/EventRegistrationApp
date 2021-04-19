import http from "../http-common";

class EventsService {

  getAll() {
    return http.get("/event/api/all");
  }

  get(id) {
    return http.get(`/event/api/find/${id}`);
  }

  create(event) {
    return http.post("/event/api/create", event);
  }

  update(id, event) {
    return http.put(`/event/api/update/${id}`, event);
  }

  delete(id) {
    return http.delete(`/event/api/delete/${id}`);
  }

  findByName(name) {
    return http.get(`/event/api/name/${name}`);
  }


}

export default new EventsService();