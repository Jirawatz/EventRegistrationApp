import http from "../http-common";

class RegisterService {

  getAll() {
    return http.get("/register/api/all");
  }

  get(id) {
    return http.get(`/register/api/${id}`);
  }

  create(register) {
    return http.post("/register/api/create/", register);
  }

  update(id, register) {
    return http.put(`/register/api/update/${id}`, register);
  }

  delete(id) {
    return http.delete(`/register/api/delete/${id}`);
  }


}

export default new RegisterService;