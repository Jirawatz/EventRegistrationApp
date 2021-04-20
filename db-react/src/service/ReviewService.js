import http from "../http-common";

class ReviewService {

  getAllByEventId(id) {
    return http.get(`/review/api/event/${id}`);
  }

  get(id) {
    return http.get(`/review/api/find/${id}`);
  }

  create(organizer) {
    return http.post("/review/api/create/", organizer);
  }

  update(id, organizer) {
    return http.put(`/review/api/update/${id}`, organizer);
  }

  delete(id) {
    return http.delete(`/review/api/delete/${id}`);
  }


}

export default new ReviewService;