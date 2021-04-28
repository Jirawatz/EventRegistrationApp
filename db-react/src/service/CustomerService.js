import http from "../http-common";

class CustomerService {

  getAll() {
    return http.get("/customer/api/all");
  }

  get(id) {
    return http.get(`/customer/api/find/${id}`);
  }

  create(customer) {
    return http.post("/customer/api/create/", customer);
  }

  update(id, customer) {
    return http.put(`/customer/api/update/${id}`, customer);
  }

  delete(id) {
    return http.delete(`/customer/api/delete/${id}`);
  }

  findByName(name) {
    return http.get(`/customer/api/name/${name}`);
  }

  findEventByCustomer(id) {
    return http.get(`/customer/api/event/register/${id}`)
  }

  findCustomerByEvent(id) {
    return http.get(`/customer/api/event/${id}`)
  }

}

export default new CustomerService();