import http from "../http-common";

class OrganizerService {

  getAll() {
    return http.get("/organizer/api/all");
  }

  get(id) {
    return http.get(`/organizer/api/find/${id}`);
  }

  create(organizer) {
    return http.post("/organizer/api/create/", organizer);
  }

  update(id, organizer) {
    return http.put(`/organizer/api/update/${id}`, organizer);
  }

  delete(id) {
    return http.delete(`/organizer/api/delete/${id}`);
  }

  findByName(name) {
    return http.get(`/organizer/api/name/${name}`);
  }

}

export default new OrganizerService;