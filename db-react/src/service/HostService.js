import http from "../http-common";

class HostService {

    getAll() {
        return http.get("/host/api/all");
    }

    get(id) {
        return http.get(`/host/api/find/${id}`);
    }

    create(host) {
        return http.post("/host/api/create", host);
    }

    update(id, host) {
        return http.put(`/host/api/update/${id}`, host);
    }

    delete(id) {
        return http.delete(`/host/api/delete/${id}`);
    }

    findByName(name) {
        return http.get(`/host/api/name/${name}`);
    }


}

export default new HostService();